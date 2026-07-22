  <!-- Animated Wave Header - Blue/Purple Gradient -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0138b7,50:3d53d7,100:5372e0&height=180&section=header&text=NOTHING&fontSize=60&fontColor=b8ceff&animation=fadeIn&fontAlignY=35" alt="Header">

  <!-- Language Switcher - Rounded -->
  <p>
    <img src="https://img.shields.io/badge/🇷🇺_Русский-Active-2ea44f?style=plastic&logo=googletranslate&logoColor=white" alt="Russian">
    <img src="https://img.shields.io/badge/🇬🇧_English-Available-6e7681?style=plastic&logo=googletranslate&logoColor=white" alt="English">
  </p>

  <!-- Browser Badges - Plastic Rounded -->
  <p>
    <img src="https://img.shields.io/badge/Chrome-Extension-4285F4?logo=googlechrome&logoColor=white&style=plastic" alt="Chrome">
    <img src="https://img.shields.io/badge/Edge-Extension-0078D7?logo=microsoftedge&logoColor=white&style=plastic" alt="Edge">
    <img src="https://img.shields.io/badge/Brave-Extension-FB542B?logo=brave&logoColor=white&style=plastic" alt="Brave">
    <img src="https://img.shields.io/badge/Version-0.0.0-3d53d7?style=plastic" alt="Version">
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
```

---

## 🖼️ Interface Preview / Скриншоты интерфейса

<details>
<summary><b>📸 Click to expand / Нажмите, чтобы развернуть</b></summary>

<br>

**Main Panel — Traffic monitoring & quick toggles / Главная панель — мониторинг трафика и переключатели:**

![Main Panel](assets/screenshot-main.png)

**Privacy Settings — System spoofing, fingerprint protection, WebRTC / Настройки приватности — подмена системы, защита, WebRTC:**

![Privacy Settings](assets/screenshot-settings.png)

</details>

---

## ⚙️ Settings / Настройки

| 🔧 Section / Раздел | 🔧 Option / Опция | 📋 Description / Описание |
|---------------------|-------------------|---------------------------|
| **Browser Identity** / **Идентификация браузера** | Profile (UA / WebGL) / Профиль (UA / WebGL) | Select spoofed profile: `Windows / Chrome`, `macOS / Safari`, `Linux / Firefox`. / Выбор профиля: `Windows / Chrome`, `macOS / Safari`, `Linux / Firefox`. |
| | Hardware Parameters / Аппаратные параметры | Toggle hardware feature spoofing. / Включение/отключение подмены характеристик устройства. |
| **Fingerprint Protection** / **Fingerprint-защита** | Canvas / Audio Noise / Шум Canvas / Audio | Inject random noise into Canvas and Audio contexts. / Добавление шума к Canvas и Audio контекстам. |
| | Adaptive Noise Aggression / Адаптивная агрессия шума | Auto-adjust noise intensity per site. / Автоматическая регулировка интенсивности шума. |
| | Real-time WebGL Spoofing / Подмена WebGL (в реальном времени) | Mask WebGL parameters to prevent GPU tracking. / Маскировка параметров WebGL для защиты от идентификации по GPU. |
| | Anti-Fraud / Geo-Tracker Block / Блокировка антифрод/гео-трекеров | Block anti-fraud and geo-tracking scripts. / Блокировка скриптов антифрод-систем и геотрекинга. |
| **WebRTC** | Block WebRTC IP Leak / Блокировка WebRTC IP-leak | Prevent real IP exposure via WebRTC. / Защита от утечки реального IP через WebRTC. |
| | Allow on Site / Разрешить на сайте | Whitelist specific domains (e.g., `meet.google.com`). / Белый список доменов (например, `meet.google.com`). |
| **Timezone** / **Часовой пояс** | Enable Timezone Spoofing / Подмена часового пояса | Activate timezone masking. / Активация подмены таймзоны. |
| | Value / Значение | Choose timezone: `Europe/London`, `America/New_York`, `Asia/Tokyo`. / Выбор таймзоны: `Europe/London`, `America/New_York`, `Asia/Tokyo`. |

> 📝 **EN:** Timezone spoofing should match your real IP (or VPN location). A mismatch can make you *more* identifiable than no spoofing at all. No browser extension guarantees complete hardware-level anonymity.  
> 📝 **RU:** Подмена часового пояса должна совпадать с реальным IP (или VPN). Рассинхрон сам по себе выдаёт анонимизацию сильнее, чем если бы подмены не было. Полная невидимость по железу не гарантируется никаким расширением.

---

## 🛡️ Security Notes / Примечания по безопасности

| 🔒 Feature / Функция | 🎯 Why It Matters / Зачем это нужно |
|----------------------|--------------------------------------|
| Canvas & Audio Noise | Adds subtle randomization to prevent fingerprinting without breaking sites. / Добавляет рандомизацию для защиты от фингерпринтинга без поломки сайтов. |
| WebRTC Blocking | Essential for VPN users — stops real IP leaks during P2P connections. / Критично для VPN-пользователей — блокирует утечку IP в P2P-соединениях. |
| Adaptive Aggression | Scales protection based on how aggressively a site tries to fingerprint you. / Масштабирует защиту в зависимости от агрессивности сайта. |
| Per-Site Settings | Granular control without global breakage. / Точечный контроль без глобальных поломок. |

---

<div align="center">

  <!-- Animated Wave Footer - Blue/Purple Gradient with Creator -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:5372e0,50:3d53d7,100:0138b7&height=180&section=footer&text=VexCrux&fontSize=50&fontColor=b8ceff&animation=fadeIn&fontAlignY=65&desc=Creator%20of%20Nothing&descSize=16&descAlignY=85&descColor=a1b9f6" alt="Footer">

  <p><b>Built with privacy in mind. / Создано с заботой о приватности.</b></p>
  <p><b>Made for those who value control. / Для тех, кто ценит контроль.</b></p>
  <p>
    <sub>⭐ Star this repo if Nothing helps you stay private! / Поставьте ⭐, если Nothing помогает вам оставаться приватным!</sub>
  </p>

</div>
"""

with open('/mnt/agents/output/README.md', 'w', encoding='utf-8') as f:
    f.write(readme)
