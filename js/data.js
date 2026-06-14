// Yakka Dee - All 6 seasons vocabulary data
// Each word includes: word, chinese, season, emoji, phonetic, color, example

const ALL_WORDS = [
  // Season 1 (20 episodes)
  {word: "banana", chinese: "香蕉", season: 1, emoji: "🍌", phonetic: "/bəˈnænə/", color: "from-yellow-100 to-yellow-200", example: "Banana! Yellow banana!"},
  {word: "dog", chinese: "狗", season: 1, emoji: "🐕", phonetic: "/dɒɡ/", color: "from-amber-100 to-amber-200", example: "Dog! Woof woof! Big dog!"},
  {word: "book", chinese: "书", season: 1, emoji: "📚", phonetic: "/bʊk/", color: "from-blue-100 to-blue-200", example: "Book! Look at the book!"},
  {word: "boots", chinese: "靴子", season: 1, emoji: "👢", phonetic: "/buːts/", color: "from-orange-100 to-orange-200", example: "Boots! Splash in the boots!"},
  {word: "bike", chinese: "自行车", season: 1, emoji: "🚲", phonetic: "/baɪk/", color: "from-green-100 to-green-200", example: "Bike! Ride the bike!"},
  {word: "duck", chinese: "鸭子", season: 1, emoji: "🦆", phonetic: "/dʌk/", color: "from-yellow-100 to-yellow-200", example: "Duck! Quack quack! Little duck!"},
  {word: "cup", chinese: "杯子", season: 1, emoji: "☕", phonetic: "/kʌp/", color: "from-pink-100 to-pink-200", example: "Cup! Drink from the cup!"},
  {word: "bus", chinese: "公交车", season: 1, emoji: "🚌", phonetic: "/bʌs/", color: "from-red-100 to-red-200", example: "Bus! Beep beep! The bus is here!"},
  {word: "peas", chinese: "豌豆", season: 1, emoji: "🫛", phonetic: "/piːz/", color: "from-green-100 to-green-200", example: "Peas! Green peas! Pop the peas!"},
  {word: "hat", chinese: "帽子", season: 1, emoji: "🎩", phonetic: "/hæt/", color: "from-purple-100 to-purple-200", example: "Hat! Put on your hat!"},
  {word: "worm", chinese: "虫子", season: 1, emoji: "🐛", phonetic: "/wɜːm/", color: "from-lime-100 to-lime-200", example: "Worm! Wiggly worm!"},
  {word: "boat", chinese: "小船", season: 1, emoji: "⛵", phonetic: "/bəʊt/", color: "from-cyan-100 to-cyan-200", example: "Boat! Float the boat!"},
  {word: "house", chinese: "房子", season: 1, emoji: "🏠", phonetic: "/haʊs/", color: "from-orange-100 to-orange-200", example: "House! In the house!"},
  {word: "lion", chinese: "狮子", season: 1, emoji: "🦁", phonetic: "/ˈlaɪən/", color: "from-amber-100 to-amber-200", example: "Lion! Roar! Big lion!"},
  {word: "apple", chinese: "苹果", season: 1, emoji: "🍎", phonetic: "/ˈæpl/", color: "from-red-100 to-red-200", example: "Apple! Crunch! Red apple!"},
  {word: "ball", chinese: "球", season: 1, emoji: "⚽", phonetic: "/bɔːl/", color: "from-sky-100 to-sky-200", example: "Ball! Bounce the ball!"},
  {word: "mouse", chinese: "老鼠", season: 1, emoji: "🐭", phonetic: "/maʊs/", color: "from-gray-100 to-gray-200", example: "Mouse! Squeak! Little mouse!"},
  {word: "beans", chinese: "豆子", season: 1, emoji: "🫘", phonetic: "/biːnz/", color: "from-stone-100 to-stone-200", example: "Beans! Jumping beans!"},
  {word: "car", chinese: "小汽车", season: 1, emoji: "🚗", phonetic: "/kɑː/", color: "from-rose-100 to-rose-200", example: "Car! Vroom vroom! Fast car!"},
  {word: "bed", chinese: "床", season: 1, emoji: "🛏️", phonetic: "/bed/", color: "from-indigo-100 to-indigo-200", example: "Bed! Sleepy time! Big bed!"},
  
  // Season 2 (20 episodes)
  {word: "hair", chinese: "头发", season: 2, emoji: "💇", phonetic: "/heə/", color: "from-yellow-100 to-yellow-200", example: "Hair! Long hair! Brush your hair!"},
  {word: "bowl", chinese: "碗", season: 2, emoji: "🥣", phonetic: "/bəʊl/", color: "from-teal-100 to-teal-200", example: "Bowl! Breakfast bowl!"},
  {word: "whale", chinese: "鲸鱼", season: 2, emoji: "🐋", phonetic: "/weɪl/", color: "from-blue-100 to-blue-200", example: "Whale! Big whale! Blue whale!"},
  {word: "bee", chinese: "蜜蜂", season: 2, emoji: "🐝", phonetic: "/biː/", color: "from-yellow-100 to-yellow-200", example: "Bee! Buzz buzz! Busy bee!"},
  {word: "moon", chinese: "月亮", season: 2, emoji: "🌙", phonetic: "/muːn/", color: "from-slate-100 to-slate-200", example: "Moon! Night moon! Big moon!"},
  {word: "nose", chinese: "鼻子", season: 2, emoji: "👃", phonetic: "/nəʊz/", color: "from-orange-100 to-orange-200", example: "Nose! Touch your nose!"},
  {word: "bird", chinese: "小鸟", season: 2, emoji: "🐦", phonetic: "/bɜːd/", color: "from-sky-100 to-sky-200", example: "Bird! Tweet tweet! Little bird!"},
  {word: "bath", chinese: "洗澡", season: 2, emoji: "🛁", phonetic: "/bɑːθ/", color: "from-cyan-100 to-cyan-200", example: "Bath! Splash splash! Time for bath!"},
  {word: "monkey", chinese: "猴子", season: 2, emoji: "🐵", phonetic: "/ˈmʌŋki/", color: "from-amber-100 to-amber-200", example: "Monkey! Cheeky monkey!"},
  {word: "cake", chinese: "蛋糕", season: 2, emoji: "🎂", phonetic: "/keɪk/", color: "from-pink-100 to-pink-200", example: "Cake! Yummy cake! Birthday cake!"},
  {word: "frog", chinese: "青蛙", season: 2, emoji: "🐸", phonetic: "/frɒɡ/", color: "from-green-100 to-green-200", example: "Frog! Ribbit! Jumping frog!"},
  {word: "cat", chinese: "猫咪", season: 2, emoji: "🐱", phonetic: "/kæt/", color: "from-orange-100 to-orange-200", example: "Cat! Meow! Sleeping cat!"},
  {word: "goat", chinese: "山羊", season: 2, emoji: "🐐", phonetic: "/ɡəʊt/", color: "from-stone-100 to-stone-200", example: "Goat! Baa! Billy goat!"},
  {word: "fox", chinese: "狐狸", season: 2, emoji: "🦊", phonetic: "/fɒks/", color: "from-orange-100 to-orange-200", example: "Fox! Quick fox! Red fox!"},
  {word: "fish", chinese: "鱼", season: 2, emoji: "🐟", phonetic: "/fɪʃ/", color: "from-blue-100 to-blue-200", example: "Fish! Swimming fish!"},
  {word: "grass", chinese: "小草", season: 2, emoji: "🌿", phonetic: "/ɡrɑːs/", color: "from-green-100 to-green-200", example: "Grass! Green grass!"},
  {word: "ice", chinese: "冰", season: 2, emoji: "🧊", phonetic: "/aɪs/", color: "from-cyan-100 to-cyan-200", example: "Ice! Cold ice! Slippery ice!"},
  {word: "kite", chinese: "风筝", season: 2, emoji: "🪁", phonetic: "/kaɪt/", color: "from-sky-100 to-sky-200", example: "Kite! Flying kite! High kite!"},
  
  // Season 3 (20 episodes)
  {word: "top", chinese: "陀螺", season: 3, emoji: "🌀", phonetic: "/tɒp/", color: "from-purple-100 to-purple-200", example: "Top! Spinning top!"},
  {word: "teddy", chinese: "泰迪熊", season: 3, emoji: "🧸", phonetic: "/ˈtedi/", color: "from-amber-100 to-amber-200", example: "Teddy! Cuddly teddy! My teddy!"},
  {word: "rocket", chinese: "火箭", season: 3, emoji: "🚀", phonetic: "/ˈrɒkɪt/", color: "from-red-100 to-red-200", example: "Rocket! Zoom! Rocket to the moon!"},
  {word: "coat", chinese: "外套", season: 3, emoji: "🧥", phonetic: "/kəʊt/", color: "from-indigo-100 to-indigo-200", example: "Coat! Warm coat! Button your coat!"},
  {word: "yo-yo", chinese: "悠悠球", season: 3, emoji: "🪀", phonetic: "/ˈjəʊjəʊ/", color: "from-green-100 to-green-200", example: "Yo-yo! Up and down! Play with yo-yo!"},
  {word: "mango", chinese: "芒果", season: 3, emoji: "🥭", phonetic: "/ˈmæŋɡəʊ/", color: "from-yellow-100 to-yellow-200", example: "Mango! Juicy mango!"},
  {word: "donkey", chinese: "驴子", season: 3, emoji: "🐴", phonetic: "/ˈdɒŋki/", color: "from-stone-100 to-stone-200", example: "Donkey! Hee-haw! Silly donkey!"},
  {word: "train", chinese: "火车", season: 3, emoji: "🚂", phonetic: "/treɪn/", color: "from-red-100 to-red-200", example: "Train! Choo choo! The train is coming!"},
  {word: "leaf", chinese: "树叶", season: 3, emoji: "🍃", phonetic: "/liːf/", color: "from-green-100 to-green-200", example: "Leaf! Falling leaf! Green leaf!"},
  {word: "sock", chinese: "袜子", season: 3, emoji: "🧦", phonetic: "/sɒk/", color: "from-pink-100 to-pink-200", example: "Sock! Pull up your sock!"},
  {word: "song", chinese: "歌曲", season: 3, emoji: "🎵", phonetic: "/sɒŋ/", color: "from-purple-100 to-purple-200", example: "Song! Sing a song! Happy song!"},
  {word: "swing", chinese: "秋千", season: 3, emoji: "🎪", phonetic: "/swɪŋ/", color: "from-rose-100 to-rose-200", example: "Swing! Swing high! Push the swing!"},
  {word: "milk", chinese: "牛奶", season: 3, emoji: "🥛", phonetic: "/mɪlk/", color: "from-slate-100 to-slate-200", example: "Milk! Drink your milk! White milk!"},
  {word: "sun", chinese: "太阳", season: 3, emoji: "☀️", phonetic: "/sʌn/", color: "from-yellow-100 to-yellow-200", example: "Sun! Sunny sun! Yellow sun!"},
  {word: "drum", chinese: "鼓", season: 3, emoji: "🥁", phonetic: "/drʌm/", color: "from-red-100 to-red-200", example: "Drum! Bang bang! Play the drum!"},
  {word: "tree", chinese: "大树", season: 3, emoji: "🌳", phonetic: "/triː/", color: "from-green-100 to-green-200", example: "Tree! Climb the tree! Tall tree!"},
  {word: "star", chinese: "星星", season: 3, emoji: "⭐", phonetic: "/stɑː/", color: "from-amber-100 to-amber-200", example: "Star! Twinkle star! Little star!"},
  
  // Season 4 (20 episodes - animal theme)
  {word: "octopus", chinese: "章鱼", season: 4, emoji: "🐙", phonetic: "/ˈɒktəpəs/", color: "from-pink-100 to-pink-200", example: "Octopus! Eight legs! Wiggly octopus!"},
  {word: "gloves", chinese: "手套", season: 4, emoji: "🧤", phonetic: "/ɡlʌvz/", color: "from-orange-100 to-orange-200", example: "Gloves! Warm gloves! Put on gloves!"},
  {word: "scooter", chinese: "滑板车", season: 4, emoji: "🛴", phonetic: "/ˈskuːtə/", color: "from-sky-100 to-sky-200", example: "Scooter! Ride the scooter! Zoom!"},
  {word: "pizza", chinese: "披萨", season: 4, emoji: "🍕", phonetic: "/ˈpiːtsə/", color: "from-yellow-100 to-yellow-200", example: "Pizza! Yummy pizza! Slice of pizza!"},
  {word: "chicken", chinese: "小鸡", season: 4, emoji: "🐔", phonetic: "/ˈtʃɪkɪn/", color: "from-amber-100 to-amber-200", example: "Chicken! Cluck cluck! Little chicken!"},
  {word: "glasses", chinese: "眼镜", season: 4, emoji: "👓", phonetic: "/ˈɡlɑːsɪz/", color: "from-blue-100 to-blue-200", example: "Glasses! Put on glasses! Clever glasses!"},
  {word: "sheep", chinese: "绵羊", season: 4, emoji: "🐑", phonetic: "/ʃiːp/", color: "from-stone-100 to-stone-200", example: "Sheep! Baa baa! Fluffy sheep!"},
  {word: "cheese", chinese: "奶酪", season: 4, emoji: "🧀", phonetic: "/tʃiːz/", color: "from-yellow-100 to-yellow-200", example: "Cheese! Say cheese! Yellow cheese!"},
  {word: "zebra", chinese: "斑马", season: 4, emoji: "🦓", phonetic: "/ˈzebrə/", color: "from-slate-100 to-slate-200", example: "Zebra! Stripy zebra! Black and white!"},
  {word: "jellyfish", chinese: "水母", season: 4, emoji: "🪼", phonetic: "/ˈdʒelifɪʃ/", color: "from-purple-100 to-purple-200", example: "Jellyfish! Wobbly jellyfish!"},
  {word: "tiger", chinese: "老虎", season: 4, emoji: "🐯", phonetic: "/ˈtaɪɡə/", color: "from-orange-100 to-orange-200", example: "Tiger! Roar! Stripy tiger!"},
  {word: "bear", chinese: "熊", season: 4, emoji: "🐻", phonetic: "/beə/", color: "from-amber-100 to-amber-200", example: "Bear! Big bear! Fuzzy bear!"},
  {word: "panda", chinese: "熊猫", season: 4, emoji: "🐼", phonetic: "/ˈpændə/", color: "from-slate-100 to-slate-200", example: "Panda! Bamboo panda! Cute panda!"},
  {word: "snake", chinese: "蛇", season: 4, emoji: "🐍", phonetic: "/sneɪk/", color: "from-green-100 to-green-200", example: "Snake! Sss! Slithery snake!"},
  {word: "lizard", chinese: "蜥蜴", season: 4, emoji: "🦎", phonetic: "/ˈlɪzəd/", color: "from-lime-100 to-lime-200", example: "Lizard! Quick lizard! Green lizard!"},
  {word: "butterfly", chinese: "蝴蝶", season: 4, emoji: "🦋", phonetic: "/ˈbʌtəflaɪ/", color: "from-purple-100 to-purple-200", example: "Butterfly! Flying butterfly! Pretty butterfly!"},
  {word: "ant", chinese: "蚂蚁", season: 4, emoji: "🐜", phonetic: "/ænt/", color: "from-red-100 to-red-200", example: "Ant! Busy ant! Tiny ant!"},
  {word: "fly", chinese: "苍蝇", season: 4, emoji: "🪰", phonetic: "/flaɪ/", color: "from-slate-100 to-slate-200", example: "Fly! Buzzing fly!"},
  
  // Season 5 (20 episodes - food theme)
  {word: "rain", chinese: "下雨", season: 5, emoji: "🌧️", phonetic: "/reɪn/", color: "from-blue-100 to-blue-200", example: "Rain! Pitter patter! Rain is falling!"},
  {word: "toothbrush", chinese: "牙刷", season: 5, emoji: "🪥", phonetic: "/ˈtuːθbrʌʃ/", color: "from-cyan-100 to-cyan-200", example: "Toothbrush! Brush your teeth!"},
  {word: "carrot", chinese: "胡萝卜", season: 5, emoji: "🥕", phonetic: "/ˈkærət/", color: "from-orange-100 to-orange-200", example: "Carrot! Crunchy carrot! Orange carrot!"},
  {word: "snail", chinese: "蜗牛", season: 5, emoji: "🐌", phonetic: "/sneɪl/", color: "from-green-100 to-green-200", example: "Snail! Slow snail! Slimy snail!"},
  {word: "robot", chinese: "机器人", season: 5, emoji: "🤖", phonetic: "/ˈrəʊbɒt/", color: "from-slate-100 to-slate-200", example: "Robot! Beep boop! Metal robot!"},
  {word: "dragon", chinese: "龙", season: 5, emoji: "🐉", phonetic: "/ˈdræɡən/", color: "from-red-100 to-red-200", example: "Dragon! Fire dragon! Big dragon!"},
  {word: "pasta", chinese: "意大利面", season: 5, emoji: "🍝", phonetic: "/ˈpæstə/", color: "from-yellow-100 to-yellow-200", example: "Pasta! Spaghetti! Yummy pasta!"},
  {word: "bread", chinese: "面包", season: 5, emoji: "🍞", phonetic: "/bred/", color: "from-amber-100 to-amber-200", example: "Bread! Fresh bread! Slice of bread!"},
  {word: "unicorn", chinese: "独角兽", season: 5, emoji: "🦄", phonetic: "/ˈjuːnɪkɔːn/", color: "from-pink-100 to-pink-200", example: "Unicorn! Magic unicorn! Sparkly unicorn!"},
  {word: "plate", chinese: "盘子", season: 5, emoji: "🍽️", phonetic: "/pleɪt/", color: "from-slate-100 to-slate-200", example: "Plate! Dinner plate! Clean plate!"},
  {word: "lemon", chinese: "柠檬", season: 5, emoji: "🍋", phonetic: "/ˈlemən/", color: "from-yellow-100 to-yellow-200", example: "Lemon! Sour lemon! Yellow lemon!"},
  {word: "strawberry", chinese: "草莓", season: 5, emoji: "🍓", phonetic: "/ˈstrɔːbəri/", color: "from-red-100 to-red-200", example: "Strawberry! Juicy strawberry! Red strawberry!"},
  {word: "chocolate", chinese: "巧克力", season: 5, emoji: "🍫", phonetic: "/ˈtʃɒklət/", color: "from-amber-100 to-amber-200", example: "Chocolate! Sweet chocolate! Yummy!"},
  {word: "popcorn", chinese: "爆米花", season: 5, emoji: "🍿", phonetic: "/ˈpɒpkɔːn/", color: "from-yellow-100 to-yellow-200", example: "Popcorn! Pop pop! Eating popcorn!"},
  {word: "biscuit", chinese: "饼干", season: 5, emoji: "🍪", phonetic: "/ˈbɪskɪt/", color: "from-amber-100 to-amber-200", example: "Biscuit! Crunchy biscuit! Dunk your biscuit!"},
  {word: "ice cream", chinese: "冰淇淋", season: 5, emoji: "🍦", phonetic: "/aɪs kriːm/", color: "from-cyan-100 to-cyan-200", example: "Ice cream! Cold ice cream! Lick it!"},
  {word: "jelly", chinese: "果冻", season: 5, emoji: "🍮", phonetic: "/ˈdʒeli/", color: "from-purple-100 to-purple-200", example: "Jelly! Wobbly jelly!"},
  
  // Season 6 (20 episodes)
  {word: "umbrella", chinese: "雨伞", season: 6, emoji: "☂️", phonetic: "/ʌmˈbrelə/", color: "from-purple-100 to-purple-200", example: "Umbrella! Rain umbrella! Open your umbrella!"},
  {word: "eyes", chinese: "眼睛", season: 6, emoji: "👀", phonetic: "/aɪz/", color: "from-sky-100 to-sky-200", example: "Eyes! Big eyes! Look with your eyes!"},
  {word: "cucumber", chinese: "黄瓜", season: 6, emoji: "🥒", phonetic: "/ˈkjuːkʌmbə/", color: "from-green-100 to-green-200", example: "Cucumber! Green cucumber! Crunchy!"},
  {word: "ear", chinese: "耳朵", season: 6, emoji: "👂", phonetic: "/ɪə/", color: "from-orange-100 to-orange-200", example: "Ear! Listen with your ear!"},
  {word: "crab", chinese: "螃蟹", season: 6, emoji: "🦀", phonetic: "/kræb/", color: "from-red-100 to-red-200", example: "Crab! Pinchy crab! Sideways crab!"},
  {word: "castle", chinese: "城堡", season: 6, emoji: "🏰", phonetic: "/ˈkɑːsl/", color: "from-indigo-100 to-indigo-200", example: "Castle! Big castle! Fairy tale castle!"},
  {word: "clock", chinese: "钟表", season: 6, emoji: "🕰️", phonetic: "/klɒk/", color: "from-amber-100 to-amber-200", example: "Clock! Tick tock! Big clock!"},
  {word: "orange", chinese: "橙子", season: 6, emoji: "🍊", phonetic: "/ˈɒrɪndʒ/", color: "from-orange-100 to-orange-200", example: "Orange! Juicy orange! Peel the orange!"},
  {word: "elf", chinese: "小精灵", season: 6, emoji: "🧝", phonetic: "/elf/", color: "from-green-100 to-green-200", example: "Elf! Little elf! Magic elf!"},
  {word: "present", chinese: "礼物", season: 6, emoji: "🎁", phonetic: "/ˈpreznt/", color: "from-red-100 to-red-200", example: "Present! Surprise present! Open your present!"},
  {word: "hand", chinese: "手", season: 6, emoji: "✋", phonetic: "/hænd/", color: "from-orange-100 to-orange-200", example: "Hand! Wave your hand! Clap your hands!"},
  {word: "pumpkin", chinese: "南瓜", season: 6, emoji: "🎃", phonetic: "/ˈpʌmpkɪn/", color: "from-orange-100 to-orange-200", example: "Pumpkin! Big pumpkin! Orange pumpkin!"},
  {word: "squirrel", chinese: "松鼠", season: 6, emoji: "🐿️", phonetic: "/ˈskwɪrəl/", color: "from-amber-100 to-amber-200", example: "Squirrel! Nutty squirrel! Furry squirrel!"},
  {word: "chair", chinese: "椅子", season: 6, emoji: "🪑", phonetic: "/tʃeə/", color: "from-stone-100 to-stone-200", example: "Chair! Sit on the chair! Comfy chair!"},
  {word: "alien", chinese: "外星人", season: 6, emoji: "👽", phonetic: "/ˈeɪliən/", color: "from-green-100 to-green-200", example: "Alien! Space alien! Little green alien!"},
  {word: "skin", chinese: "皮肤", season: 6, emoji: "✋", phonetic: "/skɪn/", color: "from-orange-100 to-orange-200", example: "Skin! Soft skin! Touch your skin!"}
];

// Deduplicate by keeping first occurrence
const UNIQUE_WORDS = [];
const seen = new Set();
for (const w of ALL_WORDS) {
  if (!seen.has(w.word)) {
    seen.add(w.word);
    UNIQUE_WORDS.push(w);
  }
}

// Achievement definitions
const ACHIEVEMENTS = [
  { id: "first_word", name: "初次探索", icon: "🌟", desc: "学习第一个单词", condition: (s) => Object.keys(s.learned).length >= 1 },
  { id: "ten_words", name: "小有所成", icon: "📚", desc: "累计掌握10个单词", condition: (s) => Object.keys(s.learned).length >= 10 },
  { id: "half_words", name: "词汇达人", icon: "🏆", desc: "累计掌握50个单词", condition: (s) => Object.keys(s.learned).length >= 50 },
  { id: "all_words", name: "全部通关", icon: "👑", desc: "掌握全部单词", condition: (s) => Object.keys(s.learned).length >= UNIQUE_WORDS.length * 0.9 },
  { id: "three_days", name: "坚持不懈", icon: "🔥", desc: "连续学习3天", condition: (s) => s.streak >= 3 },
  { id: "seven_days", name: "学习之星", icon: "⭐", desc: "连续学习7天", condition: (s) => s.streak >= 7 },
  { id: "thirty_days", name: "习惯养成", icon: "💎", desc: "连续学习30天", condition: (s) => s.streak >= 30 },
  { id: "first_review", name: "温故知新", icon: "🔄", desc: "完成第一次复习", condition: (s) => s.totalReviewed >= 1 },
  { id: "perfect_day", name: "完美一天", icon: "✨", desc: "一天完成所有新词和复习", condition: (s) => s.perfectDays >= 1 },
  { id: "speed_learner", name: "快速学习", icon: "⚡", desc: "连续标记10个单词为已掌握", condition: (s) => s.maxStreak >= 10 }
];
