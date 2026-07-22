<div align="center">

  <!-- Animated Wave Header - Matching Extension Colors (Dark Blue/Purple) -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a3e,50:2d2d5a,100:1a1a3e&height=160&section=header&text=NOTHING&fontSize=55&fontColor=ffffff&animation=fadeIn&fontAlignY=38" alt="Header">

  <!-- Language Switcher -->
  <p>
    <a href="#"><img src="https://img.shields.io/badge/🇷🇺_Русский-Active-2ea44f?style=flat-square&logo=googletranslate&logoColor=white" alt="Russian"></a>
    <a href="#"><img src="https://img.shields.io/badge/🇬🇧_English-Available-6e7681?style=flat-square&logo=googletranslate&logoColor=white" alt="English"></a>
  </p>

  <!-- Browser Badges - Plastic Rounded -->
  <p>
    <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome&logoColor=white&style=plastic" alt="Chrome">
    <img src="https://img.shields.io/badge/Edge-Extension-0078D7?logo=microsoftedge&logoColor=white&style=plastic" alt="Edge">
    <img src="https://img.shields.io/badge/Brave-Extension-FB542B?logo=brave&logoColor=white&style=plastic" alt="Brave">
    <img src="https://img.shields.io/badge/Version-1.0.0-667eea?style=plastic" alt="Version">
  </p>

  <!-- Description -->
  <p><b>Advanced Browser Privacy & Digital Fingerprint Management</b></p>
  <p><i>Продвинутая защита приватности и управление цифровым отпечатком браузера</i></p>

  <!-- Quick Stats - Rounded -->
  <p>
    <img src="https://img.shields.io/badge/⭐_Stars-0-ffd700?style=plastic" alt="Stars">
    <img src="https://img.shields.io/badge/🍴_Forks-0-ff6b6b?style=plastic" alt="Forks">
    <img src="https://img.shields.io/badge/📥_Downloads-0-4ecdc4?style=plastic" alt="Downloads">
  </p>

  <!-- Quick Navigation -->
  <p>
    <a href="#-features--возможности">✨ Features</a> •
    <a href="#-installation--установка">🚀 Install</a> •
    <a href="#-project-structure--структура-проекта">📁 Structure</a> •
    <a href="#-settings--настройки">⚙️ Settings</a> •
    <a href="#-security-notes--примечания-по-безопасности">🛡️ Security</a>
  </p>

</div>

---

## ⚠️ Disclaimer / Предупреждение

> [!WARNING]
> **EN:** This extension is built **exclusively** for privacy protection, digital fingerprint management, and network traffic analysis. **Always use official builds from this repository.**
>
> **RU:** Расширение создано **исключительно** для защиты конфиденциальности, управления цифровыми отпечатками и анализа сетевого трафика. **Используйте только официальные сборки из этого репозитория.**

---

## 🔒 Full Control & Customization / Полный контроль

> [!IMPORTANT]
> **EN:** You decide how protection works: **one-click toggle** to disable, **per-site exceptions** for trusted domains, and **granular spoofing** of OS, timezone, and WebRTC.
>
> **RU:** Вы сами решаете, как работает защита: **полное отключение в один клик**, **исключения для сайтов** и **точечная подмена** ОС, таймзоны и WebRTC.

---

## ✨ Features / Возможности

| # | 🏷️ Feature (EN) | 🏷️ Возможность (RU) | 📋 Description |
|---|------------------|----------------------|---------------|
| 1 | **Master Toggle** | **Главный выключатель** | Instantly enable/disable the entire extension. / Мгновенное включение или отключение расширения. |
| 2 | **Site Exceptions** | **Исключения для сайтов** | Disable for specific pages or domains. / Отключение для конкретных страниц или доменов. |
| 3 | **Traffic Monitor** | **Мониторинг трафика** | Real-time stats: domains, requests, packet loss, data volume, blocked trackers. / Статистика по доменам, запросам, потерям пакетов, объёму данных и трекерам. |
| 4 | **System Spoofing** | **Подмена системы** | OS profiles (Windows, Linux, macOS) + browser signatures. / Профили ОС и связки с браузерами для маскировки устройства. |
| 5 | **Fingerprint Protection** | **Защита от фингерпринтинга** | Canvas & Audio noise, adaptive aggression, WebGL spoofing, anti-fraud blockers. / Шум Canvas/Audio, адаптивная агрессия, подмена WebGL, блокировка трекеров. |
| 6 | **WebRTC Control** | **Управление WebRTC** | IP-leak prevention with per-site whitelist. / Защита от утечки IP с белым списком доменов. |
| 7 | **Timezone Spoofing** | **Подмена часового пояса** | Spoof timezone to any location, or disable entirely. / Подмена таймзоны под любую локацию или полное отключение. |
| 8 | **Lightweight** | **Оптимизация** | Zero bloat. Built for speed and stability. / Лёгкая архитектура без нагрузки на браузер. |

---

## 🚀 Installation / Установка

| Step | 📝 Action (EN) | 📝 Действие (RU) |
|------|---------------|------------------|
| **1** | Click **Code** → **Download ZIP** | Нажмите **Code** → **Download ZIP** |
| **2** | Extract ZIP to a dedicated folder | Распакуйте архив в отдельную папку |
| **3** | Open browser → `chrome://extensions/` | Откройте браузер → `chrome://extensions/` |
| **4** | Enable **Developer mode** (top-right toggle) | Включите **Режим разработчика** (переключатель справа вверху) |
| **5** | Click **Load unpacked** → select project folder | Нажмите **Загрузить распакованное** → выберите папку проекта |

> 💡 **EN:** Pin the extension icon to your toolbar for instant access.  
> 💡 **RU:** Закрепите иконку расширения на панели инструментов для быстрого доступа.

---

## 📁 Project Structure / Структура проекта

```text
📁 nothing/
├── 📁 assets/            # UI styles / Стили интерфейса
├── 📁 icons/             # Extension icons / Иконки расширения
├── 📄 background.js      # Background service worker / Фоновый скрипт
├── 📄 content-loader.js  # Script injection loader / Загрузчик скриптов
├── 📄 inject.js          # Injected content script / Инжектируемый скрипт
├── 📄 manifest.json      # Extension manifest / Манифест расширения
├── 📄 popup.html         # Popup UI markup / Интерфейс меню
└── 📄 popup.js           # Popup logic / Логика меню
