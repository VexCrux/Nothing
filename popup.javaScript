const DEFAULTS = {
  enabled: true,
  uaPreset: "windows-chrome",
  canvasNoise: true,
  canvasAdaptive: true,
  webglSpoof: true,
  timezoneSpoof: false,
  timezone: "Europe/London",
  webrtcProtection: true,
  webrtcWhitelist: [],
  hardwareSpoof: true,
  screenSpoof: false,
  fingerprintSeed: "default-seed",
  siteExceptions: [],
  blockTrackers: true,
};

const settingIds = [
  "enabled", "uaPreset", "canvasNoise", "canvasAdaptive", "webglSpoof",
  "timezoneSpoof", "timezone", "webrtcProtection", "hardwareSpoof",
  "screenSpoof", "blockTrackers",
];
const els = {};
settingIds.forEach((id) => (els[id] = document.getElementById(id)));

// ---------- i18n ----------
const I18N = {
  ru: {
    tabTraffic: "Трафик", tabCompat: "Совместимость",
    trafficTitle: "Трафик вкладки",
    lblDomain: "Домен", lblRequests: "Запросы", lblLoss: "Потери",
    lblTraffic: "Трафик", lblBlocked: "Заблокировано трекеров",
    detailsShow: "Показать детали заблокированного", detailsHide: "Скрыть детали",
    detailsEmpty: "Пока ничего не заблокировано на этой вкладке",
    compatTitle: "Другие расширения приватности",
    compatLoading: "Проверяем установленные расширения…",
    compatDesc: "Nothing не может видеть, что именно делает другое расширение на странице — браузер не даёт такого доступа. Но если рядом активны похожие инструменты, Nothing аккуратнее относится к куки и CDN-подменам на этой странице, чтобы не спорить с ними и не сломать сайт.",
    compatNone: "Других расширений приватности не найдено — Nothing работает в полную силу.",
    compatAdapted: "Nothing смягчил агрессию Canvas-шума, чтобы не спорить с этими расширениями за одни и те же векторы. Можно вернуть вручную в разделе Fingerprint-защита.",
    lblEnabled: "Включено",
    siteRowPrefix: "Отключить для",
    siteRowSystemText: "Служебная страница браузера — здесь расширения отключены системой, настройки Nothing тут не действуют",
    sectionIdentity: "Идентификация браузера",
    lblSystem: "Система",
    hintSystem: "Подменяет User-Agent, платформу и WebGL-рендерер одновременно",
    lblHardware: "Аппаратные параметры",
    lblScreen: "Разрешение экрана",
    hintScreen: "Меняет только screen.width/height (для фингерпринта) — не трогает размер окна, поэтому вёрстка сайта не ломается",
    sectionFp: "защита",
    lblCanvas: "Canvas / Audio шум",
    lblAdaptive: "Адаптивная агрессия шума",
    lblWebgl: "Подмена WebGL (в реальном времени)",
    lblBlockTrackers: "Блокировка антифрод/geo-трекеров",
    lblWebrtc: "Блокировка WebRTC IP-leak",
    lblWebrtcAllow: "Разрешить на сайте",
    webrtcEmpty: "список пуст",
    sectionTimezone: "Часовой пояс",
    lblTzSpoof: "Подмена часового пояса",
    lblTzValue: "Значение",
    autoTzBtn: "Автонастройка по реальному IP",
    autoTzBtnBusy: "Определяем…",
    autoTzHint: "Определит часовой пояс вашего текущего IP и выставит его сюда — так рассинхрон станет невозможен в принципе.",
    footerNote: "Подмена часового пояса должна совпадать с реальным IP (или VPN, настроенным отдельно в системе) — иначе рассинхрон сам по себе выдаёт анонимизацию сильнее, чем если бы подмены не было вообще. Полная невидимость по железу не гарантируется никаким браузерным расширением.",
    footerBy: "By",
    reloadTabBtn: "Обновить эту вкладку",
    reloadTabDone: "Готово",
    statusSaved: "Сохранено. Перезагрузите открытые вкладки, чтобы применить.",
    statusSiteOff: (h) => `Отключено для ${h}. Перезагрузите вкладку.`,
    statusSiteOn: (h) => `Включено обратно для ${h}. Перезагрузите вкладку.`,
    statusWhitelistAdded: (v) => `${v} добавлен в белый список WebRTC.`,
    statusWhitelistRemoved: (v) => `${v} убран из белого списка WebRTC.`,
    statusTzFound: (tz, city) => `Определено: ${tz}${city ? " (" + city + ")" : ""}. Перезагрузите вкладки.`,
    statusTzSame: (tz) => `Ваш IP и системный часовой пояс уже совпадают (${tz}) — подмена не даст защиты, пока IP не изменится через VPN/прокси. Значение сохранено на будущее.`,
    statusTzFail: "Не удалось определить часовой пояс — попробуйте ещё раз.",
    statusTzOffline: "Автонастройка недоступна — нет соединения с сервисом определения IP.",
    thisTab: "этой вкладки",
    tzMatchYes: "✓ Подходит вашему текущему IP",
    tzMatchNo: "⚠ Не совпадает с вашим текущим IP",
    tzMatchUnknown: "Нажмите «Автонастройка», чтобы проверить совпадение с IP",
  },
  en: {
    tabTraffic: "Traffic", tabCompat: "Compatibility",
    trafficTitle: "Tab traffic",
    lblDomain: "Domain", lblRequests: "Requests", lblLoss: "Loss",
    lblTraffic: "Traffic", lblBlocked: "Trackers blocked",
    detailsShow: "Show blocked details", detailsHide: "Hide details",
    detailsEmpty: "Nothing blocked on this tab yet",
    compatTitle: "Other privacy extensions",
    compatLoading: "Checking installed extensions…",
    compatDesc: "Nothing can't see what another extension actually does on a page — the browser doesn't expose that. But if similar tools are active alongside it, Nothing is more conservative with cookies and CDN swaps on this page, to avoid conflicts and keep the site working.",
    compatNone: "No other privacy extensions found — Nothing runs at full strength.",
    compatAdapted: "Nothing softened Canvas-noise aggression to avoid fighting these extensions over the same vectors. You can turn it back on manually under Fingerprint protection.",
    lblEnabled: "Enabled",
    siteRowPrefix: "Disable for",
    siteRowSystemText: "Browser system page — extensions are disabled here by the browser, Nothing's settings don't apply",
    sectionIdentity: "Browser identity",
    lblSystem: "System",
    hintSystem: "Spoofs User-Agent, platform, and WebGL renderer together",
    lblHardware: "Hardware parameters",
    lblScreen: "Screen resolution",
    hintScreen: "Only changes screen.width/height (for fingerprinting) — doesn't touch window size, so site layout stays intact",
    sectionFp: "protection",
    lblCanvas: "Canvas / Audio noise",
    lblAdaptive: "Adaptive noise aggressiveness",
    lblWebgl: "WebGL spoofing (real-time)",
    lblBlockTrackers: "Block antifraud/geo trackers",
    lblWebrtc: "Block WebRTC IP leak",
    lblWebrtcAllow: "Allow on site",
    webrtcEmpty: "list is empty",
    sectionTimezone: "Timezone",
    lblTzSpoof: "Spoof timezone",
    lblTzValue: "Value",
    autoTzBtn: "Auto-detect from real IP",
    autoTzBtnBusy: "Detecting…",
    autoTzHint: "Detects the timezone of your current IP and sets it here — making a mismatch impossible in principle.",
    footerNote: "The spoofed timezone should match your real IP (or a VPN configured separately at the system level) — otherwise the mismatch itself signals anonymization use more than no spoofing at all would. No browser extension can guarantee full hardware invisibility.",
    footerBy: "By",
    reloadTabBtn: "Reload this tab",
    reloadTabDone: "Done",
    statusSaved: "Saved. Reload open tabs to apply.",
    statusSiteOff: (h) => `Disabled for ${h}. Reload the tab.`,
    statusSiteOn: (h) => `Re-enabled for ${h}. Reload the tab.`,
    statusWhitelistAdded: (v) => `${v} added to WebRTC whitelist.`,
    statusWhitelistRemoved: (v) => `${v} removed from WebRTC whitelist.`,
    statusTzFound: (tz, city) => `Detected: ${tz}${city ? " (" + city + ")" : ""}. Reload tabs.`,
    statusTzSame: (tz) => `Your IP and system timezone already match (${tz}) — spoofing won't add protection until your IP changes via VPN/proxy. Value saved for later.`,
    statusTzFail: "Couldn't detect timezone — try again.",
    statusTzOffline: "Auto-detect unavailable — no connection to the IP lookup service.",
    thisTab: "this tab",
    tzMatchYes: "✓ Matches your current IP",
    tzMatchNo: "⚠ Doesn't match your current IP",
    tzMatchUnknown: "Click \"Auto-detect\" to check against your IP",
  },
};

function detectLang() {
  const lang = (navigator.language || "en").toLowerCase();
  return lang.startsWith("ru") ? "ru" : "en";
}
const LANG = detectLang();
const T = I18N[LANG];
document.documentElement.lang = LANG;

function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (T[key] && typeof T[key] === "string") el.textContent = T[key];
  });
  const wl = document.getElementById("webrtcWhitelistInput");
  if (wl) wl.placeholder = "meet.google.com";
}
applyI18n();

// Полный список IANA-поясов вместо куцых 8 штук — Intl.supportedValuesOf
// поддерживается в современных Chromium/Brave "из коробки", без интернета.
function populateTimezoneList() {
  const sel = els.timezone;
  let zones = null;
  try {
    if (typeof Intl.supportedValuesOf === "function") zones = Intl.supportedValuesOf("timeZone");
  } catch (e) { /* старый движок — останется куцый fallback-список из HTML */ }
  if (!zones || !zones.length) return;
  const current = sel.value;
  sel.innerHTML = "";
  zones.forEach((z) => {
    const opt = document.createElement("option");
    opt.value = z;
    opt.textContent = z.replace(/_/g, " ");
    sel.appendChild(opt);
  });
  if (zones.includes(current)) sel.value = current;
}
function ensureTimezoneOption(tz) {
  const sel = els.timezone;
  if (![...sel.options].some((o) => o.value === tz)) {
    const opt = document.createElement("option");
    opt.value = tz; opt.textContent = tz.replace(/_/g, " ");
    sel.appendChild(opt);
  }
}
populateTimezoneList();

const tzMatchNoteEl = document.getElementById("tzMatchNote");
function updateTzMatchNote() {
  chrome.storage.local.get({ lastDetectedIpTimezone: null }, (s) => {
    tzMatchNoteEl.classList.remove("yes", "no", "unknown");
    if (!s.lastDetectedIpTimezone) {
      tzMatchNoteEl.textContent = T.tzMatchUnknown;
      tzMatchNoteEl.classList.add("unknown");
      return;
    }
    const matches = els.timezone.value === s.lastDetectedIpTimezone;
    tzMatchNoteEl.textContent = matches ? T.tzMatchYes : T.tzMatchNo;
    tzMatchNoteEl.classList.add(matches ? "yes" : "no");
  });
}
els.timezone.addEventListener("change", updateTzMatchNote);

const versionEl = document.getElementById("versionLabel");
if (versionEl) versionEl.textContent = "Version " + chrome.runtime.getManifest().version;

const statusEl = document.getElementById("status");
const siteHostEl = document.getElementById("siteHost");
const siteDisabledEl = document.getElementById("siteDisabled");
const siteRowEl = document.getElementById("siteRow");
const siteRowSystemEl = document.getElementById("siteRowSystem");
const webrtcWhitelistInput = document.getElementById("webrtcWhitelistInput");
const webrtcWhitelistList = document.getElementById("webrtcWhitelistList");
let statusTimer = null;
let currentHostname = null;
let currentTabId = null;

// Служебные страницы браузера — расширения там в принципе не запускаются,
// поэтому переключатель "отключить для сайта" там бессмысленен и вводит
// в заблуждение (можно щёлкнуть его, но эффекта не будет никакого).
const INTERNAL_SCHEMES = ["chrome:", "brave:", "edge:", "about:", "chrome-extension:", "moz-extension:", "devtools:"];

function getCurrentTab(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => callback(tabs && tabs[0]));
}

function load() {
  chrome.storage.local.get(DEFAULTS, (settings) => {
    settingIds.forEach((id) => {
      const el = els[id];
      if (!el) return;
      if (el.type === "checkbox") el.checked = settings[id];
      else el.value = settings[id];
    });
    renderWebrtcWhitelist(settings.webrtcWhitelist || []);

    getCurrentTab((tab) => {
      currentTabId = tab && tab.id != null ? tab.id : null;
      const url = tab && tab.url;
      let hostname = null;
      let isInternal = false;
      try {
        if (url) {
          const u = new URL(url);
          isInternal = INTERNAL_SCHEMES.some((s) => u.protocol === s || url.startsWith(s));
          hostname = u.hostname || null;
        }
      } catch (e) { /* не-http(s) URL без валидного хоста */ }

      if (isInternal || !hostname) {
        siteRowEl.style.display = "none";
        siteRowSystemEl.style.display = url && isInternal ? "flex" : "none";
        currentHostname = null;
      } else {
        siteRowEl.style.display = "flex";
        siteRowSystemEl.style.display = "none";
        currentHostname = hostname;
        siteHostEl.textContent = hostname;
        siteDisabledEl.checked = (settings.siteExceptions || []).includes(hostname);
        siteDisabledEl.disabled = false;
      }
    });
  });
}

function renderWebrtcWhitelist(list) {
  if (!list.length) {
    webrtcWhitelistList.innerHTML = `<span class="chip-empty">${escapeHtml(T.webrtcEmpty)}</span>`;
    return;
  }
  webrtcWhitelistList.innerHTML = list
    .map((host) => `<span class="chip" data-host="${escapeHtml(host)}">${escapeHtml(host)}<button class="chip-remove" type="button" aria-label="remove">×</button></span>`)
    .join("");
}

function removeWebrtcWhitelist(host) {
  const chip = webrtcWhitelistList.querySelector(`.chip[data-host="${CSS.escape(host)}"]`);
  const finish = () => {
    chrome.storage.local.get({ webrtcWhitelist: [] }, (settings) => {
      const list = (settings.webrtcWhitelist || []).filter((h) => h !== host);
      chrome.storage.local.set({ webrtcWhitelist: list }, () => {
        renderWebrtcWhitelist(list);
        showStatus(T.statusWhitelistRemoved(host), true);
      });
    });
  };
  if (chip) {
    chip.classList.add("removing");
    chip.addEventListener("animationend", finish, { once: true });
  } else {
    finish();
  }
}

webrtcWhitelistList.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip-remove");
  if (!btn) return;
  const chip = btn.closest(".chip");
  if (chip) removeWebrtcWhitelist(chip.dataset.host);
});

function save() {
  const values = {};
  settingIds.forEach((id) => {
    const el = els[id];
    if (!el) return;
    values[id] = el.type === "checkbox" ? el.checked : el.value;
  });
  chrome.storage.local.set(values, () => {
    showStatus(T.statusSaved, true);
  });
}

function saveSiteException() {
  if (!currentHostname) return;
  chrome.storage.local.get({ siteExceptions: [] }, (settings) => {
    let exceptions = settings.siteExceptions || [];
    if (siteDisabledEl.checked) {
      if (!exceptions.includes(currentHostname)) exceptions.push(currentHostname);
    } else {
      exceptions = exceptions.filter((h) => h !== currentHostname);
    }
    chrome.storage.local.set({ siteExceptions: exceptions }, () => {
      showStatus(siteDisabledEl.checked ? T.statusSiteOff(currentHostname) : T.statusSiteOn(currentHostname), true);
    });
  });
}

function addWebrtcWhitelist() {
  const value = webrtcWhitelistInput.value.trim().toLowerCase();
  if (!value) return;
  chrome.storage.local.get({ webrtcWhitelist: [] }, (settings) => {
    const list = settings.webrtcWhitelist || [];
    if (!list.includes(value)) list.push(value);
    chrome.storage.local.set({ webrtcWhitelist: list }, () => {
      renderWebrtcWhitelist(list);
      webrtcWhitelistInput.value = "";
      showStatus(T.statusWhitelistAdded(value), true);
    });
  });
}

const reloadTabBtn = document.getElementById("reloadTabBtn");
const reloadTabBtnLabel = reloadTabBtn.querySelector("span");

function showStatus(text, needsReload) {
  statusEl.textContent = text;
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => (statusEl.textContent = ""), 4000);

  if (needsReload && currentTabId != null) {
    reloadTabBtn.style.display = "flex";
    reloadTabBtn.classList.remove("spinning");
    reloadTabBtnLabel.textContent = T.reloadTabBtn;
    reloadTabBtn.disabled = false;
  } else if (!needsReload) {
    reloadTabBtn.style.display = "none";
  }
}

reloadTabBtn.addEventListener("click", () => {
  if (currentTabId == null) return;
  reloadTabBtn.classList.add("spinning");
  reloadTabBtn.disabled = true;
  // Перезагружаем только ту вкладку, в которой открыт попап — остальные
  // открытые вкладки не трогаем, чтобы не сбрасывать чужой ввод/состояние.
  chrome.tabs.reload(currentTabId, {}, () => {
    reloadTabBtnLabel.textContent = T.reloadTabDone;
    setTimeout(() => { reloadTabBtn.style.display = "none"; }, 900);
  });
});

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function updateTraffic() {
  chrome.runtime.sendMessage({ type: "GET_TRAFFIC_STATS" }, (stats) => {
    if (!stats) return;
    document.getElementById("domainLabel").textContent = stats.hostname || "—";
    document.getElementById("reqVal").textContent = String(stats.success + stats.failed);
    document.getElementById("lossVal").textContent = stats.lossPct + "%";
    document.getElementById("bytesVal").textContent = formatBytes(stats.bytes);
    document.getElementById("blockedVal").textContent = String(stats.blockedCount || 0);
    renderBlockedDetails(stats.blocked || []);
  });
}

function renderBlockedDetails(blocked) {
  const listEl = document.getElementById("detailsList");
  if (!blocked.length) {
    listEl.innerHTML = `<div class="details-empty">${escapeHtml(T.detailsEmpty)}</div>`;
    return;
  }
  const locale = LANG === "ru" ? "ru-RU" : "en-US";
  listEl.innerHTML = blocked
    .map((b) => {
      const time = new Date(b.time).toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      return `<div class="details-item"><span class="host">${escapeHtml(b.url)}</span><span>${time}</span></div>`;
    })
    .join("");
}

function escapeHtml(s) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

document.getElementById("detailsToggle").addEventListener("click", (e) => {
  const listEl = document.getElementById("detailsList");
  const open = listEl.classList.toggle("open");
  e.target.textContent = open ? T.detailsHide : T.detailsShow;
});

// ---------- Переключатель вкладок Трафик / Совместимость ----------
const tabTraffic = document.getElementById("tabTraffic");
const tabCompat = document.getElementById("tabCompat");
const panelTraffic = document.getElementById("panelTraffic");
const panelCompat = document.getElementById("panelCompat");
let compatLoaded = false;

function switchTab(name) {
  const toTraffic = name === "traffic";
  tabTraffic.classList.toggle("active", toTraffic);
  tabCompat.classList.toggle("active", !toTraffic);
  panelTraffic.classList.toggle("active", toTraffic);
  panelCompat.classList.toggle("active", !toTraffic);
  if (!toTraffic && !compatLoaded) {
    compatLoaded = true;
    loadCompatList();
  }
}
tabTraffic.addEventListener("click", () => switchTab("traffic"));
tabCompat.addEventListener("click", () => switchTab("compat"));

// Известные имена (подстроки, регистронезависимо) популярных расширений
// приватности/блокировщиков — сверяем со списком установленных расширений
// через chrome.management. Это НЕ показывает, что именно они делают на
// странице (у браузера нет такого API ни для одного расширения), только
// сам факт, что они есть и включены — честная замена невозможной задачи.
const KNOWN_PRIVACY_EXT_NAMES = [
  "privacy badger", "decentraleyes", "ublock", "adblock", "ghostery",
  "disconnect", "privacy possum", "canvasblocker", "duckduckgo",
  "https everywhere", "no script", "noscript", "clearurls", "cookie autodelete",
];

function loadCompatList() {
  const listEl = document.getElementById("compatList");
  if (!chrome.management || !chrome.management.getAll) {
    listEl.innerHTML = `<div class="compat-empty">—</div>`;
    return;
  }
  chrome.management.getAll((exts) => {
    if (chrome.runtime.lastError) {
      listEl.innerHTML = `<div class="compat-empty">—</div>`;
      return;
    }
    const selfId = chrome.runtime.id;
    const matches = (exts || []).filter((e) => {
      if (e.id === selfId || !e.enabled) return false;
      const name = (e.name || "").toLowerCase();
      return KNOWN_PRIVACY_EXT_NAMES.some((k) => name.includes(k));
    });
    if (!matches.length) {
      listEl.innerHTML = `<div class="compat-empty">${escapeHtml(T.compatNone)}</div>`;
      chrome.storage.local.set({ conservativeMode: false });
      return;
    }
    listEl.innerHTML = matches
      .map((e) => `<div class="compat-item"><span class="compat-dot"></span><span class="compat-name">${escapeHtml(e.name)}</span></div>`)
      .join("");

    // Автоадаптация: при первом обнаружении похожих инструментов один раз
    // смягчаем агрессию шума (выключаем adaptive-эскалацию), чтобы Nothing
    // не спорил с ними за одни и те же fingerprint-векторы. Дальше решение
    // остаётся за пользователем — повторно не перезаписываем его выбор.
    chrome.storage.local.get({ conservativeModeApplied: false }, (s) => {
      chrome.storage.local.set({ conservativeMode: true });
      if (!s.conservativeModeApplied) {
        chrome.storage.local.set({ canvasAdaptive: false, conservativeModeApplied: true }, () => {
          if (els.canvasAdaptive) els.canvasAdaptive.checked = false;
          const note = document.createElement("div");
          note.className = "compat-adapt-note";
          note.textContent = T.compatAdapted;
          listEl.appendChild(note);
        });
      }
    });
  });
}

// ---------- Автонастройка часового пояса ----------
document.getElementById("autoTimezoneBtn").addEventListener("click", async () => {
  await runAutoTimezoneDetect(true);
});

// Сервис для автоопределения намеренно НЕ входит в TRACKER_DOMAINS в
// background.js — если добавите туда ipwho.is, наша же блокировка
// трекеров молча сломает эту кнопку (см. комментарий там же).
async function runAutoTimezoneDetect(manual) {
  const btn = document.getElementById("autoTimezoneBtn");
  const labelEl = document.getElementById("autoTimezoneBtnLabel");
  const originalLabel = labelEl.textContent;
  if (manual) { labelEl.textContent = T.autoTzBtnBusy; btn.disabled = true; }
  try {
    const res = await fetch("https://ipwho.is/");
    const data = await res.json();
    const tz = data && data.success && data.timezone && data.timezone.id;
    if (tz) {
      ensureTimezoneOption(tz);
      els.timezone.value = tz;
      chrome.storage.local.set({ lastDetectedIpTimezone: tz }, updateTzMatchNote);

      // Если IP уже показывает тот же пояс, что и реальные системные часы
      // (т.е. VPN/прокси нет и вы физически там, где кажется по IP) —
      // включать подмену на ЭТО ЖЕ значение бессмысленно: защиты ноль,
      // просто лишний тумблер. Честно сообщаем это вместо тихого включения.
      const realSystemTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (manual) {
        if (tz === realSystemTz) {
          save();
          showStatus(T.statusTzSame(tz));
        } else {
          els.timezoneSpoof.checked = true;
          save();
          showStatus(T.statusTzFound(tz, data.city), true);
        }
      } else {
        save();
      }
    } else if (manual) {
      showStatus(T.statusTzFail);
    }
  } catch (e) {
    if (manual) showStatus(T.statusTzOffline);
  } finally {
    if (manual) { labelEl.textContent = originalLabel; btn.disabled = false; }
  }
}

settingIds.forEach((id) => {
  const el = els[id];
  if (!el) return;
  el.addEventListener("change", save);
  // У <select> фокус не снимается сразу после выбора опции — из-за этого
  // CSS-стрелка (завязанная на :focus) оставалась в "открытом" положении,
  // пока пользователь не кликал куда-то ещё. Снимаем фокус сразу после
  // выбора, чтобы стрелка визуально закрывалась вместе с выпадающим списком.
  if (el.tagName === "SELECT") {
    el.addEventListener("change", () => el.blur());
  }
});
siteDisabledEl.addEventListener("change", saveSiteException);
webrtcWhitelistInput.addEventListener("keydown", (e) => { if (e.key === "Enter") addWebrtcWhitelist(); });

load();
updateTzMatchNote();
updateTraffic();
chrome.runtime.sendMessage({ type: "FORCE_REAPPLY" });
setInterval(updateTraffic, 3000);
// Панель открыта в конкретном окне, но активная вкладка может смениться —
// обновляем данные и при переключении вкладок в этом окне.
chrome.tabs.onActivated.addListener(() => { load(); updateTraffic(); });
