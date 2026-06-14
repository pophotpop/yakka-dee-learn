# 🌟 Yakka Dee 单词学习

> 基于 CBeebies 热门动画 *Yakka Dee!* 的英语启蒙单词卡片学习应用。专为 2-6 岁儿童设计，让小朋友像看动画一样快乐学英语！

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue)](https://yourname.github.io/yakka-dee-learn/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📱 在线体验

👉 **[点击立即体验](https://yourname.github.io/yakka-dee-learn/)**（请替换为你的 GitHub Pages 地址）

无需安装，打开即用。支持添加到主屏幕，像原生 App 一样使用。

---

## ✨ 功能特点

### 🎯 学习系统
- **6季完整词汇**：收录全部 100+ 核心单词，覆盖食物、动物、日常物品等
- **每日计划**：自动安排新词学习 + 智能复习，科学记忆曲线
- **语音朗读**：内置 Web Speech API，点击即可听到纯正英式发音
- **例句展示**：每个单词配有 Yakka Dee 风格的简单例句

### 🎮 交互体验
- **卡片滑动**：左滑"还要练习"，右滑"已掌握"，像刷卡片一样学习
- **触摸反馈**：所有按钮带按压动画，给孩子即时反馈
- **完成庆祝**：学习完成后有彩纸和星星奖励动画
- **连续打卡**：记录学习天数，培养学习习惯

### 🏆 成就系统
- 10 枚精美徽章，从"初次探索"到"全部通关"
- 连续学习 3/7/30 天解锁专属成就
- 实时进度追踪，看得见的学习成果

### 🌙 深色模式
- 自动跟随系统主题
- 支持手动切换浅色/深色/跟随系统
- 深夜学习不刺眼

### 💾 数据管理
- **导出备份**：一键下载 JSON 备份文件
- **导入恢复**：换设备也能继续学习
- 所有数据本地存储，隐私安全

### 📲 PWA 支持
- 可安装到桌面（iOS/Android/Windows/Mac）
- 离线可用，无网络也能学习
- 原生应用般的流畅体验

---

## 🗂️ 项目结构

```
yakka-dee-learn/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式表
├── js/
│   ├── data.js         # 单词数据（6季词汇 + 成就定义）
│   └── app.js          # 应用逻辑（学习流程、状态管理、PWA）
├── images/             # 图标资源
├── manifest.json       # PWA 配置
├── sw.js               # Service Worker（离线缓存）
└── README.md           # 本文件
```

---

## 🚀 快速部署到 GitHub Pages

### 1. 创建仓库

```bash
# 将项目 push 到 GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/yakka-dee-learn.git
git push -u origin main
```

### 2. 开启 GitHub Pages

1. 进入 GitHub 仓库 → **Settings** → **Pages**
2. **Source** 选择 **Deploy from a branch**
3. **Branch** 选择 **main**，**folder** 选 **/(root)**
4. 点击 **Save**，等待几分钟
5. 访问 `https://你的用户名.github.io/yakka-dee-learn/`

### 3. 自定义域名（可选）

在仓库根目录创建 `CNAME` 文件，写入你的域名：

```
yakkadee.yourdomain.com
```

---

## 📝 数据来源

- **Yakka Dee!** 是 BBC CBeebies 出品的英语启蒙动画
- 本应用为个人学习项目，所有单词选自该动画公开内容
- 版权归属 BBC，本项目仅供教育用途

---

## 🤝 贡献

欢迎提交 Issue 和 PR！

- 发现单词错误？请提交 Issue
- 想添加新功能？欢迎 Fork 后 PR
- 有改进建议？在 Discussions 中交流

---

## 📄 License

[MIT License](LICENSE) - 自由使用，请注明出处。

---

## 🎉 致谢

感谢 BBC CBeebies 制作如此优秀的儿童英语启蒙节目！

> *"Yakka Dee! Yakka Dee! It's time to talk!"* 🎵
