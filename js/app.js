// Yakka Dee Learning App - Full Version
// Features: User Auth, Speech Fix, Dark Mode, PWA, Achievements, Import/Export

const APP_VERSION = '2.0';

// ===================== USER SYSTEM =====================
let currentUser = null; // { username, displayName, createdAt }

function getUserKey() {
  return currentUser ? `yakka_data_${currentUser.username}` : 'yakka_data_guest';
}
function getUserSettingsKey() {
  return currentUser ? `yakka_settings_${currentUser.username}` : 'yakka_settings_guest';
}

function getAllUsers() {
  const users = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('yakka_user_')) {
      try { users.push(JSON.parse(localStorage.getItem(key))); } catch(e) {}
    }
  }
  return users.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

function saveUser(user) {
  localStorage.setItem(`yakka_user_${user.username}`, JSON.stringify(user));
}

function loadCurrentUser() {
  const raw = localStorage.getItem('yakka_current_user');
  if (raw) {
    try { currentUser = JSON.parse(raw); } catch(e) {}
  }
}

function setCurrentUser(user) {
  currentUser = user;
  if (user) {
    localStorage.setItem('yakka_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('yakka_current_user');
  }
}

function registerUser(username, password, displayName) {
  username = username.trim().toLowerCase();
  if (!username || !password) return { ok: false, msg: '用户名和密码不能为空' };
  if (username.length < 2 || username.length > 20) return { ok: false, msg: '用户名长度2-20位' };
  if (password.length < 4) return { ok: false, msg: '密码至少4位' };
  
  const existing = localStorage.getItem(`yakka_user_${username}`);
  if (existing) return { ok: false, msg: '用户名已存在' };
  
  const user = { username, password, displayName: displayName || username, createdAt: Date.now() };
  saveUser(user);
  setCurrentUser(user);
  // Init empty data for new user
  saveState();
  return { ok: true, msg: '注册成功' };
}

function loginUser(username, password) {
  username = username.trim().toLowerCase();
  const raw = localStorage.getItem(`yakka_user_${username}`);
  if (!raw) return { ok: false, msg: '用户名不存在' };
  const user = JSON.parse(raw);
  if (user.password !== password) return { ok: false, msg: '密码错误' };
  setCurrentUser(user);
  return { ok: true, msg: '登录成功' };
}

function logoutUser() {
  setCurrentUser(null);
  showAuthScreen();
}

function deleteUser(username) {
  localStorage.removeItem(`yakka_user_${username}`);
  localStorage.removeItem(`yakka_data_${username}`);
  localStorage.removeItem(`yakka_settings_${username}`);
  if (currentUser && currentUser.username === username) {
    setCurrentUser(null);
  }
}

// ===================== STATE =====================
let state = {
  learned: {},
  lastDate: null,
  streak: 0,
  totalDays: 0,
  totalReviewed: 0,
  perfectDays: 0,
  maxStreak: 0,
  currentStreak: 0,
  achievements: {},
  settings: { rate: 1, dailyNew: 5, dailyReview: 5, darkMode: 'auto' }
};
let todayNew = [];
let todayReview = [];
let currentQueue = [];
let currentIndex = 0;
let currentMode = 'new';
let todayLearned = { new: 0, review: 0 };

// ===================== STORAGE =====================
function loadState() {
  const raw = localStorage.getItem(getUserKey());
  if (raw) {
    try { state = { ...state, ...JSON.parse(raw) }; } catch (e) {}
  }
  const rawSettings = localStorage.getItem(getUserSettingsKey());
  if (rawSettings) {
    try { state.settings = { ...state.settings, ...JSON.parse(rawSettings) }; } catch (e) {}
  }
}

function saveState() {
  localStorage.setItem(getUserKey(), JSON.stringify(state));
  localStorage.setItem(getUserSettingsKey(), JSON.stringify(state.settings));
}

// ===================== BROWSER DETECTION =====================
const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// ===================== SPEECH =====================
let speechReady = false;
let speechInitAttempted = false;

function initSpeech() {
  if (!window.speechSynthesis) return false;
  try {
    speechSynthesis.getVoices();
    speechReady = true;
    speechInitAttempted = true;
    return true;
  } catch(e) { return false; }
}

function playWord(word) {
  const w = word || currentQueue[currentIndex]?.word;
  if (!w) return;
  
  // First time - need user interaction to unlock audio
  if (!speechInitAttempted) {
    initSpeech();
  }
  
  if (!window.speechSynthesis) {
    showSpeechToast('您的浏览器不支持语音播放 😢');
    return;
  }
  
  try {
    const utter = new SpeechSynthesisUtterance(w);
    utter.lang = 'en-GB';
    utter.rate = state.settings.rate || 1;
    utter.pitch = 1.1;
    utter.volume = 1;
    
    // Try to select a good English voice
    const voices = speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en-'));
    if (enVoice) utter.voice = enVoice;
    
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  } catch(e) {
    console.error('Speech error:', e);
    showSpeechToast('语音播放失败，请尝试刷新页面');
  }
}

function showSpeechToast(msg) {
  const existing = document.getElementById('speech-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'speech-toast';
  toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full text-sm shadow-lg z-50 fade-in';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===================== DARK MODE =====================
function initDarkMode() {
  const mode = state.settings.darkMode || 'auto';
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (mode === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
  }
}

function toggleDarkMode() {
  const modes = ['auto', 'light', 'dark'];
  const current = state.settings.darkMode || 'auto';
  state.settings.darkMode = modes[(modes.indexOf(current) + 1) % modes.length];
  saveState();
  initDarkMode();
  showScreen('home-screen');
  initDay();
  renderHome();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (state.settings.darkMode === 'auto') initDarkMode();
});

// ===================== PLANNING =====================
function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

function initDay() {
  const today = getTodayStr();
  if (state.lastDate !== today) {
    if (state.lastDate) {
      const last = new Date(state.lastDate);
      const now = new Date(today);
      const diff = Math.round((now - last) / (1000 * 60 * 60 * 24));
      if (diff === 1) state.streak++;
      else if (diff > 1) state.streak = 1;
      if (diff >= 1) state.totalDays++;
    } else {
      state.streak = 1;
      state.totalDays = 1;
    }
    state.lastDate = today;
    todayLearned = { new: 0, review: 0 };
    saveState();
  }

  const learnedWords = Object.keys(state.learned);
  const unlearned = UNIQUE_WORDS.filter(w => !state.learned[w.word]);
  const dn = parseInt(state.settings.dailyNew) || 5;
  const dr = parseInt(state.settings.dailyReview) || 5;

  todayNew = unlearned.slice(0, dn);
  const reviewPool = learnedWords.map(w => ({
    word: w, ...state.learned[w],
    obj: UNIQUE_WORDS.find(x => x.word === w)
  })).filter(x => x.obj).sort((a, b) => (a.reviewAt || 0) - (b.reviewAt || 0));
  todayReview = reviewPool.slice(0, dr).map(x => x.obj);
}

// ===================== RENDERING =====================
function renderHome() {
  const today = getTodayStr();
  document.getElementById('today-date').textContent = today;
  document.getElementById('streak').textContent = `🔥 ${state.streak}`;
  document.getElementById('new-count').textContent = `${todayNew.length}个新单词`;
  document.getElementById('review-count').textContent = `${todayReview.length}个待复习`;

  const learnedCount = Object.keys(state.learned).length;
  document.getElementById('stat-total').textContent = UNIQUE_WORDS.length;
  document.getElementById('stat-learned').textContent = learnedCount;
  document.getElementById('stat-days').textContent = state.totalDays;

  renderPreview('new-words-preview', todayNew, 'btn-start-new');
  renderPreview('review-words-preview', todayReview, 'btn-start-review');

  const done = todayLearned.new + todayLearned.review;
  const total = todayNew.length + todayReview.length;
  const pct = total > 0 ? (done / total) * 100 : 100;
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${done}/${total}`;
  
  if (pct >= 100) {
    document.getElementById('progress-hint').textContent = '✅ 今日任务全部完成！';
    document.getElementById('progress-hint').className = 'text-xs text-green-600 mt-2 text-center font-bold';
  } else {
    document.getElementById('progress-hint').textContent = '完成今日学习，点亮小星星！';
    document.getElementById('progress-hint').className = 'text-xs text-gray-400 mt-2 text-center';
  }

  updateAchievements();
  const earned = Object.values(state.achievements).filter(Boolean).length;
  document.getElementById('achievement-count').textContent = `已获得 ${earned}/${ACHIEVEMENTS.length} 个徽章`;
  
  // Update user display
  const userDisplay = document.getElementById('user-display');
  if (userDisplay) {
    userDisplay.textContent = currentUser ? `👋 ${currentUser.displayName}` : '👋 游客';
  }
}

function renderPreview(id, words, btnId) {
  const el = document.getElementById(id);
  el.innerHTML = '';
  const btn = document.getElementById(btnId);
  if (words.length === 0) {
    el.innerHTML = '<div class="text-xs text-gray-400 py-2">🎉 已学完！</div>';
    btn.disabled = true;
    btn.classList.add('opacity-50');
  } else {
    words.forEach(w => {
      const div = document.createElement('div');
      div.className = 'flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ' + w.color + ' flex items-center justify-center text-2xl shadow-sm';
      div.textContent = w.emoji;
      el.appendChild(div);
    });
    btn.disabled = false;
    btn.classList.remove('opacity-50');
  }
}

// ===================== LEARNING FLOW =====================
function startLearning(mode) {
  currentMode = mode;
  currentQueue = mode === 'new' ? [...todayNew] : [...todayReview];
  currentIndex = 0;
  if (currentQueue.length === 0) return;
  showScreen('learn-screen');
  document.getElementById('learn-mode-text').textContent = mode === 'new' ? '新词学习' : '复习巩固';
  renderCard();
}

function renderCard() {
  const w = currentQueue[currentIndex];
  if (!w) return finishQueue();

  const total = currentQueue.length;
  const pct = ((currentIndex) / total) * 100;
  document.getElementById('learn-progress').style.width = pct + '%';
  document.getElementById('learn-counter').textContent = `${currentIndex + 1}/${total}`;

  document.getElementById('card-tag').textContent = currentMode === 'new' ? '新词' : '复习';
  document.getElementById('card-tag').className = `text-xs font-bold px-2 py-1 rounded-full ${currentMode === 'new' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`;
  document.getElementById('card-emoji').textContent = w.emoji;
  document.getElementById('card-word').textContent = w.word.charAt(0).toUpperCase() + w.word.slice(1);
  document.getElementById('card-phonetic').textContent = w.phonetic;
  document.getElementById('card-chinese').textContent = w.chinese;
  document.getElementById('card-example').textContent = w.example ? `"${w.example}"` : '';

  const card = document.getElementById('current-card');
  card.className = `card bg-gradient-to-br ${w.color} rounded-3xl shadow-xl p-6 h-full flex flex-col items-center justify-between border-4 border-white/50 dark:border-gray-700/50`;
  card.classList.remove('swipe-left', 'swipe-right');
  card.classList.add('fade-in');
  setTimeout(() => card.classList.remove('fade-in'), 400);
  
  // Auto-play after card shows, but with better handling
  setTimeout(() => {
    if (speechInitAttempted) {
      playWord(w.word);
    }
  }, 500);
}

function markWord(known) {
  const w = currentQueue[currentIndex];
  if (!w) return;

  const card = document.getElementById('current-card');
  if (known) {
    card.classList.add('swipe-right');
    state.currentStreak++;
    state.maxStreak = Math.max(state.maxStreak, state.currentStreak);
    if (currentMode === 'new') {
      state.learned[w.word] = { learnedAt: Date.now(), level: 1, reviewAt: Date.now() + 24*60*60*1000 };
      todayLearned.new++;
    } else {
      const prev = state.learned[w.word] || { level: 0 };
      state.learned[w.word] = { ...prev, level: Math.min((prev.level || 0) + 1, 5), reviewAt: Date.now() + (prev.level || 1) * 24*60*60*1000 };
      state.totalReviewed++;
      todayLearned.review++;
    }
    saveState();
  } else {
    card.classList.add('swipe-left');
    state.currentStreak = 0;
    if (currentMode === 'review') {
      state.learned[w.word] = { ...state.learned[w.word], level: 0, reviewAt: Date.now() };
      saveState();
    }
  }

  setTimeout(() => { currentIndex++; renderCard(); }, 300);
}

function prevCard() { if (currentIndex > 0) { currentIndex--; renderCard(); } }
function skipCard() { document.getElementById('current-card').classList.add('swipe-left'); setTimeout(() => { currentIndex++; renderCard(); }, 300); }

function finishQueue() {
  if (currentMode === 'new' && todayReview.length > 0) {
    if (confirm('新词学习完成！是否开始复习？')) { startLearning('review'); return; }
  }
  const done = todayLearned.new + todayLearned.review;
  const total = todayNew.length + todayReview.length;
  if (total > 0 && done >= total) {
    state.perfectDays = (state.perfectDays || 0) + 1;
    saveState();
  }
  showComplete();
}

function showComplete() {
  showScreen('complete-screen');
  document.getElementById('complete-new').textContent = todayLearned.new;
  document.getElementById('complete-review').textContent = todayLearned.review;
  document.getElementById('complete-total').textContent = Object.keys(state.learned).length;

  const stars = document.getElementById('stars-container');
  stars.innerHTML = '';
  const totalStars = Math.min(5, Math.max(1, Math.ceil((todayLearned.new + todayLearned.review) / 2)));
  for (let i = 0; i < totalStars; i++) {
    const s = document.createElement('div');
    s.className = 'text-4xl star-pop';
    s.style.animationDelay = (i * 0.15) + 's';
    s.textContent = '⭐';
    stars.appendChild(s);
  }

  for (let i = 0; i < 30; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = ['#FCD34D', '#F87171', '#60A5FA', '#A78BFA', '#34D399'][Math.floor(Math.random() * 5)];
    c.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

// ===================== WORD LIST =====================
function showWordList() { showScreen('wordlist-screen'); filterSeason(0); }

function filterSeason(season) {
  document.querySelectorAll('.season-filter').forEach((b, i) => {
    b.className = i === season 
      ? 'season-filter px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-500 text-white whitespace-nowrap'
      : 'season-filter px-3 py-1.5 rounded-full text-xs font-bold bg-gray-100 text-gray-600 whitespace-nowrap';
  });

  const grid = document.getElementById('wordlist-grid');
  grid.innerHTML = '';
  const list = season === 0 ? UNIQUE_WORDS : UNIQUE_WORDS.filter(w => w.season === season);
  list.forEach(w => {
    const isLearned = state.learned[w.word];
    const div = document.createElement('div');
    div.className = 'bg-white rounded-2xl p-3 shadow-sm flex flex-col items-center gap-2 btn-press dark:bg-gray-800';
    div.innerHTML = `
      <div class="w-14 h-14 rounded-2xl bg-gradient-to-br ${w.color} flex items-center justify-center text-3xl relative">
        ${w.emoji}
        ${isLearned ? '<div class="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">✓</div>' : ''}
      </div>
      <div class="text-center">
        <div class="font-bold text-gray-800 text-sm leading-tight dark:text-white">${w.word.charAt(0).toUpperCase() + w.word.slice(1)}</div>
        <div class="text-xs text-gray-500">${w.chinese}</div>
      </div>
      <button onclick="playWord('${w.word}')" class="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 text-xs dark:bg-gray-700">🔊</button>
    `;
    grid.appendChild(div);
  });
}

// ===================== ACHIEVEMENTS =====================
function showAchievements() {
  showScreen('achievements-screen');
  updateAchievements();
  const grid = document.getElementById('achievements-grid');
  grid.innerHTML = '';
  ACHIEVEMENTS.forEach(a => {
    const earned = state.achievements[a.id];
    const div = document.createElement('div');
    div.className = `bg-white rounded-2xl p-4 shadow-sm flex flex-col items-center gap-2 achievement-badge ${earned ? '' : 'achievement-locked'} dark:bg-gray-800`;
    div.innerHTML = `
      <div class="text-4xl">${a.icon}</div>
      <div class="text-sm font-bold text-gray-800 dark:text-white">${a.name}</div>
      <div class="text-xs text-gray-400 text-center">${a.desc}</div>
      ${earned ? '<div class="text-xs text-green-500 font-bold">✓ 已获得</div>' : '<div class="text-xs text-gray-400">未获得</div>'}
    `;
    grid.appendChild(div);
  });
}

function updateAchievements() {
  let changed = false;
  ACHIEVEMENTS.forEach(a => {
    if (!state.achievements[a.id] && a.condition(state)) {
      state.achievements[a.id] = true;
      changed = true;
    }
  });
  if (changed) saveState();
}

// ===================== DATA EXPORT/IMPORT =====================
function exportData() {
  const data = { 
    user: currentUser, 
    state: state, 
    exportDate: new Date().toISOString(), 
    version: APP_VERSION 
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `yakka-dee-backup-${currentUser ? currentUser.username : 'guest'}-${getTodayStr()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showSpeechToast('备份已下载！');
}

function importData() {
  document.getElementById('import-file').click();
}

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.state && data.state.learned) {
        if (data.user && data.user.username) {
          // Restore to specific user
          localStorage.setItem(`yakka_data_${data.user.username}`, JSON.stringify(data.state));
          if (data.state.settings) {
            localStorage.setItem(`yakka_settings_${data.user.username}`, JSON.stringify(data.state.settings));
          }
          showSpeechToast(`数据已恢复到用户：${data.user.displayName || data.user.username}`);
        } else {
          // Restore to current user
          state = { ...state, ...data.state };
          saveState();
          initDay();
          renderHome();
          showSpeechToast('进度恢复成功！');
        }
      } else {
        showSpeechToast('无效的备份文件！');
      }
    } catch (err) {
      showSpeechToast('文件解析失败！');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// ===================== NAVIGATION =====================
function showScreen(id) {
  ['auth-screen', 'home-screen', 'learn-screen', 'complete-screen', 'wordlist-screen', 'achievements-screen'].forEach(sid => {
    const el = document.getElementById(sid);
    if (el) el.classList.add('hidden');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('fade-in');
    setTimeout(() => target.classList.remove('fade-in'), 400);
  }
}

function goHome() { showScreen('home-screen'); initDay(); renderHome(); }

// ===================== AUTH SCREEN =====================
function showAuthScreen() {
  showScreen('auth-screen');
  renderAuthScreen();
}

function renderAuthScreen() {
  const users = getAllUsers();
  const existingUsers = document.getElementById('existing-users');
  existingUsers.innerHTML = '';
  
  if (users.length > 0) {
    users.forEach(u => {
      const div = document.createElement('div');
      div.className = 'flex items-center justify-between bg-white rounded-xl p-3 shadow-sm dark:bg-gray-800';
      div.innerHTML = `
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-sm">👤</div>
          <div>
            <div class="text-sm font-bold text-gray-800 dark:text-white">${u.displayName || u.username}</div>
            <div class="text-xs text-gray-400">${u.username}</div>
          </div>
        </div>
        <button onclick="switchToUser('${u.username}')" class="text-xs bg-indigo-500 text-white px-3 py-1 rounded-full font-bold">进入</button>
      `;
      existingUsers.appendChild(div);
    });
  } else {
    existingUsers.innerHTML = '<div class="text-xs text-gray-400 text-center py-2">暂无用户，请先注册</div>';
  }
}

function switchToUser(username) {
  const raw = localStorage.getItem(`yakka_user_${username}`);
  if (!raw) return;
  const user = JSON.parse(raw);
  setCurrentUser(user);
  loadState();
  initDay();
  showScreen('home-screen');
  renderHome();
  showSpeechToast(`欢迎回来，${user.displayName || user.username}！`);
}

function handleRegister() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const displayName = document.getElementById('reg-display').value;
  const result = registerUser(username, password, displayName);
  if (result.ok) {
    loadState();
    initDay();
    showScreen('home-screen');
    renderHome();
    showSpeechToast(result.msg);
  } else {
    document.getElementById('reg-error').textContent = result.msg;
  }
}

function handleLogin() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const result = loginUser(username, password);
  if (result.ok) {
    loadState();
    initDay();
    showScreen('home-screen');
    renderHome();
    showSpeechToast(result.msg);
  } else {
    document.getElementById('login-error').textContent = result.msg;
  }
}

function showGuest() {
  setCurrentUser(null);
  loadState();
  initDay();
  showScreen('home-screen');
  renderHome();
  showSpeechToast('以游客身份进入');
}

function showLoginForm() {
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('auth-tabs').querySelectorAll('button').forEach((b, i) => {
    b.className = i === 0 ? 'flex-1 py-2 text-sm font-bold text-indigo-600 border-b-2 border-indigo-600' : 'flex-1 py-2 text-sm text-gray-400';
  });
}

function showRegisterForm() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('auth-tabs').querySelectorAll('button').forEach((b, i) => {
    b.className = i === 1 ? 'flex-1 py-2 text-sm font-bold text-indigo-600 border-b-2 border-indigo-600' : 'flex-1 py-2 text-sm text-gray-400';
  });
}

// ===================== SETTINGS =====================
function showSettings() {
  document.getElementById('settings-modal').classList.remove('hidden');
  document.getElementById('speech-rate').value = state.settings.rate || 1;
  document.getElementById('daily-new').value = state.settings.dailyNew || 5;
  document.getElementById('daily-review').value = state.settings.dailyReview || 5;
  document.getElementById('dark-mode-btn').textContent = 
    state.settings.darkMode === 'dark' ? '深色' : state.settings.darkMode === 'light' ? '浅色' : '跟随系统';
}

function closeSettings() { document.getElementById('settings-modal').classList.add('hidden'); }

function saveSettings() {
  state.settings.rate = parseFloat(document.getElementById('speech-rate').value);
  state.settings.dailyNew = parseInt(document.getElementById('daily-new').value);
  state.settings.dailyReview = parseInt(document.getElementById('daily-review').value);
  saveState();
  initDay();
  renderHome();
}

function resetProgress() {
  if (!confirm('确定要重置所有学习进度吗？')) return;
  state = { learned: {}, lastDate: null, streak: 0, totalDays: 0, totalReviewed: 0, perfectDays: 0, maxStreak: 0, currentStreak: 0, achievements: {}, settings: state.settings };
  saveState();
  closeSettings();
  initDay();
  renderHome();
  showSpeechToast('进度已重置');
}

// ===================== TOUCH SWIPE =====================
let touchStartX = 0;
let touchEndX = 0;
const cardContainer = document.getElementById('card-container');
if (cardContainer) {
  cardContainer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, {passive: true});
  cardContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) markWord(true);
      else markWord(false);
    }
  }, {passive: true});
}

// ===================== PWA SERVICE WORKER =====================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
}

// ===================== INIT =====================
function initApp() {
  loadCurrentUser();
  initDarkMode();
  
  if (currentUser) {
    loadState();
    initDay();
    showScreen('home-screen');
    renderHome();
  } else {
    showAuthScreen();
  }
  
  // Pre-init speech on first interaction
  document.body.addEventListener('click', () => {
    if (!speechInitAttempted) {
      initSpeech();
    }
  }, { once: true });
  
  // Also init on touch
  document.body.addEventListener('touchstart', () => {
    if (!speechInitAttempted) {
      initSpeech();
    }
  }, { once: true, passive: true });
}

// Wait for DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
