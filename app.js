/**
 * Pantheon Desktop Preview — interactive shell
 * Wingpanel + applications-menu (Slingshot) + io.elementary.dock + Files
 * Defaults: elementary OS (blueberry dark, Inter, default dock launchers)
 *
 * Shortcuts (where browsers allow):
 *   Super / Meta — toggle Applications menu (often blocked by OS)
 *   Escape — close menus / popovers / dialogs
 */

/* ---------- Apps (default elementary set + common tools) ---------- */

const CATEGORIES = [
  { id: "accessories", name: "Accessories" },
  { id: "a11y", name: "Universal Access" },
  { id: "development", name: "Programming" },
  { id: "education", name: "Education" },
  { id: "science", name: "Science" },
  { id: "games", name: "Games" },
  { id: "graphics", name: "Graphics" },
  { id: "internet", name: "Internet" },
  { id: "multimedia", name: "Sound & Video" },
  { id: "office", name: "Office" },
  { id: "system", name: "System Tools" },
  { id: "other", name: "Other" },
];

const APPS = [
  { id: "files", name: "Files", icon: "assets/apps/system-file-manager.svg", categories: ["system", "other"] },
  { id: "web", name: "Web", icon: "assets/apps/web-browser.svg", categories: ["internet"] },
  { id: "mail", name: "Mail", icon: "assets/apps/mail.svg", categories: ["internet", "office"] },
  { id: "tasks", name: "Tasks", icon: "assets/apps/tasks.svg", categories: ["office"] },
  { id: "calendar", name: "Calendar", icon: "assets/apps/office-calendar.svg", categories: ["office"] },
  { id: "music", name: "Music", icon: "assets/apps/multimedia-audio-player.svg", categories: ["multimedia"] },
  { id: "videos", name: "Videos", icon: "assets/apps/multimedia-video-player.svg", categories: ["multimedia"] },
  { id: "photos", name: "Photos", icon: "assets/apps/multimedia-photo-viewer.svg", categories: ["graphics", "multimedia"] },
  { id: "appcenter", name: "AppCenter", icon: "assets/apps/system-software-install.svg", categories: ["system"] },
  { id: "terminal", name: "Terminal", icon: "assets/apps/utilities-terminal.svg", categories: ["system"] },
  { id: "settings", name: "System Settings", icon: "assets/menu/preferences-desktop.svg", categories: ["system"] },
  { id: "calculator", name: "Calculator", icon: "assets/apps/accessories-calculator.svg", categories: ["accessories"] },
  { id: "editor", name: "Text Editor", icon: "assets/apps/accessories-text-editor.svg", categories: ["accessories"] },
  { id: "screenshot", name: "Screenshot", icon: "assets/apps/accessories-screenshot-tool.svg", categories: ["accessories", "graphics"] },
  { id: "monitor", name: "System Monitor", icon: "assets/apps/utilities-system-monitor.svg", categories: ["system"] },
  { id: "users", name: "User Accounts", icon: "assets/apps/system-users.svg", categories: ["system"] },
  { id: "updates", name: "Software Updates", icon: "assets/apps/system-software-update.svg", categories: ["system"] },
  { id: "help", name: "Help", icon: "assets/menu/system-help.svg", categories: ["other"] },
];

/* ---------- Files places (sidebar: Bookmarks / Storage / Network) ---------- */

const FS = {
  home: {
    label: "Home",
    icon: "assets/places/user-home.svg",
    items: [
      { name: "Desktop", icon: "assets/places/folder.svg", type: "folder", place: "desktop", size: "—", modified: "Today" },
      { name: "Documents", icon: "assets/places/folder-documents.svg", type: "folder", place: "documents", size: "—", modified: "Yesterday" },
      { name: "Downloads", icon: "assets/places/folder-download.svg", type: "folder", place: "downloads", size: "—", modified: "Today" },
      { name: "Music", icon: "assets/places/folder-music.svg", type: "folder", place: "music", size: "—", modified: "12 Jul 2026" },
      { name: "Pictures", icon: "assets/places/folder-pictures.svg", type: "folder", place: "pictures", size: "—", modified: "10 Jul 2026" },
      { name: "Videos", icon: "assets/places/folder-videos.svg", type: "folder", place: "videos", size: "—", modified: "5 Jul 2026" },
      { name: "Public", icon: "assets/places/folder-publicshare.svg", type: "folder", place: "public", size: "—", modified: "1 Jul 2026" },
      { name: "Templates", icon: "assets/places/folder-templates.svg", type: "folder", place: "templates", size: "—", modified: "1 Jul 2026" },
    ],
  },
  recent: {
    label: "Recent",
    icon: "assets/places/folder-recent.svg",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "Yesterday" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.svg", type: "file", size: "340 kB", modified: "Yesterday" },
    ],
  },
  trash: {
    label: "Trash",
    icon: "assets/places/user-trash.svg",
    items: [],
  },
  desktop: {
    label: "Desktop",
    icon: "assets/places/folder.svg",
    items: [],
  },
  documents: {
    label: "Documents",
    icon: "assets/places/folder-documents.svg",
    items: [
      { name: "notes.txt", icon: "assets/mimetypes/text-x-generic.svg", type: "file", size: "2.1 kB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.svg", type: "file", size: "340 kB", modified: "8 Jul 2026" },
    ],
  },
  downloads: {
    label: "Downloads",
    icon: "assets/places/folder-download.svg",
    items: [
      { name: "elementaryos.iso", icon: "assets/places/drive-harddisk.svg", type: "file", size: "3.2 GB", modified: "Today" },
      { name: "readme.pdf", icon: "assets/mimetypes/application-pdf.svg", type: "file", size: "340 kB", modified: "Yesterday" },
    ],
  },
  music: {
    label: "Music",
    icon: "assets/places/folder-music.svg",
    items: [{ name: "Playlist", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "1 Jun 2026" }],
  },
  pictures: {
    label: "Pictures",
    icon: "assets/places/folder-pictures.svg",
    items: [
      { name: "Vacation", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "20 Jun 2026" },
      { name: "photo.jpg", icon: "assets/thumbnails/photo.jpg", type: "file", size: "3.4 MB", modified: "10 Jul 2026" },
    ],
  },
  videos: {
    label: "Videos",
    icon: "assets/places/folder-videos.svg",
    items: [],
  },
  public: {
    label: "Public",
    icon: "assets/places/folder-publicshare.svg",
    items: [],
  },
  templates: {
    label: "Templates",
    icon: "assets/places/folder-templates.svg",
    items: [],
  },
  root: {
    label: "File System",
    icon: "assets/places/drive-harddisk-solidstate.svg",
    items: [
      { name: "bin", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
      { name: "etc", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
      { name: "home", icon: "assets/places/folder.svg", type: "folder", place: "home", size: "—", modified: "—" },
      { name: "usr", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
      { name: "var", icon: "assets/places/folder.svg", type: "folder", size: "—", modified: "—" },
    ],
  },
};

/** Sidebar mirrors elementary Files: Bookmarks / Storage / Network */
const SIDEBAR = [
  {
    label: "Bookmarks",
    items: [
      { id: "home", label: "Home", icon: "assets/places/user-home.svg" },
      { id: "recent", label: "Recent", icon: "assets/places/folder-recent.svg" },
      { id: "trash", label: "Trash", icon: "assets/places/user-trash.svg" },
    ],
  },
  {
    label: "Storage",
    items: [{ id: "root", label: "File System", icon: "assets/places/drive-harddisk-solidstate.svg" }],
  },
  {
    label: "Network",
    items: [],
  },
];

/* ---------- DOM ---------- */

const applicationsBtn = document.getElementById("applications-btn");
const applicationsMenu = document.getElementById("applications-menu");
const appSearch = document.getElementById("app-search");
const appGrid = document.getElementById("app-grid");
const appEmpty = document.getElementById("app-empty");
const appCategories = document.getElementById("app-categories");
const viewGridBtn = document.getElementById("view-grid-btn");
const viewCategoryBtn = document.getElementById("view-category-btn");

const datetimeBtn = document.getElementById("datetime-btn");
const datetimeText = document.getElementById("datetime-text");
const datetimePopover = document.getElementById("datetime-popover");
const calTime = document.getElementById("cal-time");
const calDate = document.getElementById("cal-date");
const calGrid = document.getElementById("cal-grid");
const calMonth = document.getElementById("cal-month");
const calPrev = document.getElementById("cal-prev");
const calNext = document.getElementById("cal-next");

const netBtn = document.getElementById("net-btn");
const netPopover = document.getElementById("net-popover");
const btBtn = document.getElementById("bt-btn");
const btPopover = document.getElementById("bt-popover");
const soundBtn = document.getElementById("sound-btn");
const soundPopover = document.getElementById("sound-popover");
const soundIcon = document.getElementById("sound-icon");
const soundPopoverIcon = document.getElementById("sound-popover-icon");
const volumeSlider = document.getElementById("volume-slider");
const volumePct = document.getElementById("volume-pct");
const notifBtn = document.getElementById("notif-btn");
const notifPopover = document.getElementById("notif-popover");
const sessionBtn = document.getElementById("session-btn");
const sessionPopover = document.getElementById("session-popover");

const sessionDialog = document.getElementById("session-dialog");
const sessionDialogTitle = document.getElementById("session-dialog-title");
const sessionDialogMsg = document.getElementById("session-dialog-msg");
const sessionDialogIcon = document.getElementById("session-dialog-icon");
const sessionDialogCancel = document.getElementById("session-dialog-cancel");
const sessionDialogConfirm = document.getElementById("session-dialog-confirm");

const fmWindow = document.getElementById("fm-window");
const fmClose = document.getElementById("fm-close");
const fmMax = document.getElementById("fm-max");
const fmPathLabel = document.getElementById("fm-path-label");
const fmPathIcon = document.getElementById("fm-path-icon");
const fmContent = document.getElementById("fm-content");
const fmSidebar = document.getElementById("fm-sidebar");
const fmStatus = document.getElementById("fm-status");
const fmViewIcons = document.getElementById("fm-view-icons");
const fmViewList = document.getElementById("fm-view-list");
const fmViewColumns = document.getElementById("fm-view-columns");
const fmBack = document.getElementById("fm-back");
const fmForward = document.getElementById("fm-forward");
const dockFiles = document.getElementById("dock-files");

const termWindow = document.getElementById("term-window");
const termClose = document.getElementById("term-close");
const termMax = document.getElementById("term-max");
const dockTerminal = document.getElementById("dock-terminal");

let menuMode = "grid"; // grid | category
let selectedCategory = "accessories";
let viewYear;
let viewMonth;
let fmPlace = "home";
let fmHistory = ["home"];
let fmHistIndex = 0;
let fmViewMode = "icons"; // icons | list | columns
/** Miller-columns path of place ids (root → tip). Only used in columns view. */
let fmColumnPath = ["home"];
/** Selected item key per column index: place id or "file:name" */
let fmColumnSelection = [];
let pendingSessionAction = null;

/* ---------- Clock ---------- */

function formatPanelClock(date) {
  const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
  const time = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${weekday} ${time}`;
}

function tickClock() {
  const now = new Date();
  datetimeText.textContent = formatPanelClock(now);
  calTime.textContent = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  calDate.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

tickClock();
setInterval(tickClock, 15_000);

/* ---------- Calendar ---------- */

function setViewToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth();
}

function buildCalendar() {
  const now = new Date();
  const todayY = now.getFullYear();
  const todayM = now.getMonth();
  const todayD = now.getDate();

  const labelDate = new Date(viewYear, viewMonth, 1);
  calMonth.textContent = labelDate.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

  calGrid.innerHTML = "";
  for (let i = 0; i < 42; i++) {
    const dayOffset = i - firstDow;
    const el = document.createElement("div");

    if (dayOffset < 0) {
      el.className = "cal-day muted";
      el.textContent = String(daysInPrev + dayOffset + 1);
    } else if (dayOffset < daysInMonth) {
      const d = dayOffset + 1;
      const isToday = d === todayD && viewMonth === todayM && viewYear === todayY;
      el.className = "cal-day" + (isToday ? " today" : "");
      el.textContent = String(d);
    } else {
      el.className = "cal-day muted";
      el.textContent = String(dayOffset - daysInMonth + 1);
    }
    calGrid.appendChild(el);
  }
}

setViewToToday();
buildCalendar();

calPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth -= 1;
  if (viewMonth < 0) {
    viewMonth = 11;
    viewYear -= 1;
  }
  buildCalendar();
});

calNext.addEventListener("click", (e) => {
  e.stopPropagation();
  viewMonth += 1;
  if (viewMonth > 11) {
    viewMonth = 0;
    viewYear += 1;
  }
  buildCalendar();
});

/* ---------- Applications menu ---------- */

function setExpanded(btn, open) {
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
}

function appsForFilter(filter, categoryId) {
  const q = (filter || "").trim().toLowerCase();
  let list = APPS.slice();

  if (menuMode === "category" && categoryId) {
    list = list.filter((a) => a.categories.includes(categoryId));
  }

  if (q) {
    list = APPS.filter((a) => a.name.toLowerCase().includes(q));
  }

  list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function renderCategories() {
  appCategories.innerHTML = "";
  const present = CATEGORIES.filter((c) => APPS.some((a) => a.categories.includes(c.id)));
  if (!present.find((c) => c.id === selectedCategory) && present.length) {
    selectedCategory = present[0].id;
  }
  for (const cat of present) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "app-cat" + (cat.id === selectedCategory ? " selected" : "");
    btn.dataset.category = cat.id;
    btn.textContent = cat.name;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedCategory = cat.id;
      renderCategories();
      renderAppGrid();
    });
    appCategories.appendChild(btn);
  }
}

function renderAppGrid(filter) {
  const q = filter !== undefined ? filter : appSearch.value;
  const list = appsForFilter(q, selectedCategory);

  appGrid.innerHTML = "";
  appGrid.classList.toggle("category-mode", menuMode === "category" && !q.trim());
  appEmpty.hidden = list.length > 0;

  for (const app of list) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "app-item";
    btn.setAttribute("role", "listitem");
    btn.title = app.name;
    btn.innerHTML = `
      <img src="${app.icon}" alt="" draggable="false" />
      <span class="app-item-name">${app.name}</span>
    `;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      launchApp(app.id);
    });
    appGrid.appendChild(btn);
  }
}

function setMenuMode(mode) {
  menuMode = mode === "category" ? "category" : "grid";
  viewGridBtn.classList.toggle("active", menuMode === "grid");
  viewCategoryBtn.classList.toggle("active", menuMode === "category");
  viewGridBtn.setAttribute("aria-pressed", menuMode === "grid" ? "true" : "false");
  viewCategoryBtn.setAttribute("aria-pressed", menuMode === "category" ? "true" : "false");
  appCategories.hidden = menuMode !== "category";
  if (menuMode === "category") renderCategories();
  renderAppGrid();
}

function openAppMenu() {
  closeTrayPopovers();
  closeSessionPopover();
  applicationsMenu.hidden = false;
  setExpanded(applicationsBtn, true);
  setMenuMode(menuMode);
  requestAnimationFrame(() => appSearch.focus());
}

function closeAppMenu() {
  applicationsMenu.hidden = true;
  setExpanded(applicationsBtn, false);
  appSearch.value = "";
}

function toggleAppMenu() {
  if (applicationsMenu.hidden) openAppMenu();
  else closeAppMenu();
}

function markDockRunning(id, running) {
  const btn = document.querySelector(`.dock-btn[data-app="${id}"]`);
  if (btn) btn.classList.toggle("running", running);
}

function setDockActive(id, active) {
  document.querySelectorAll(".dock-btn").forEach((b) => {
    if (b.dataset.app === id) b.classList.toggle("active", active);
  });
}

function launchApp(id) {
  closeAppMenu();
  if (id === "files") {
    openFm("home");
    return;
  }
  if (id === "terminal") {
    openTerminal();
    return;
  }
  // Pantheon does not show launch toasts/labels when opening apps
  markDockRunning(id, true);
  setTimeout(() => markDockRunning(id, false), 800);
}

/* ---------- File manager ---------- */

function renderSidebar() {
  fmSidebar.innerHTML = "";
  for (const section of SIDEBAR) {
    const wrap = document.createElement("div");
    wrap.className = "fm-side-section";
    if (section.label) {
      const lab = document.createElement("div");
      lab.className = "fm-side-label";
      lab.textContent = section.label;
      wrap.appendChild(lab);
    }
    for (const item of section.items) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "fm-side-item" + (item.id === fmPlace ? " selected" : "");
      btn.dataset.place = item.id;
      btn.innerHTML = `<img src="${item.icon}" alt="" draggable="false" /><span>${item.label}</span>`;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        navigateFm(item.id, true);
      });
      wrap.appendChild(btn);
    }
    // Network stays empty when no mounts (no invented hosts)
    fmSidebar.appendChild(wrap);
  }

  const footer = document.createElement("div");
  footer.className = "fm-side-footer";
  footer.innerHTML = `
    <button type="button" class="fm-connect" id="fm-connect-server">
      <img src="assets/places/network-workgroup.svg" alt="" draggable="false" />
      <span>Connect Server…</span>
    </button>
  `;
  fmSidebar.appendChild(footer);
  footer.querySelector("#fm-connect-server").addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

function ensureListHeader() {
  let header = fmContent.querySelector(".fm-list-header");
  if (!header) {
    header = document.createElement("div");
    header.className = "fm-list-header";
    header.setAttribute("aria-hidden", "true");
    header.innerHTML = "<span></span><span>Name</span><span>Size</span><span>Modified</span>";
  }
  return header;
}

function renderFmContent() {
  if (fmViewMode === "columns") {
    renderColumnView();
    return;
  }

  const place = FS[fmPlace] || FS.home;
  const items = place.items || [];
  const header = ensureListHeader();
  fmContent.innerHTML = "";
  fmContent.appendChild(header);

  for (const item of items) {
    fmContent.appendChild(makeFmItem(item));
  }

  const n = items.length;
  fmStatus.textContent = n === 1 ? "1 item" : `${n} items`;
}

/** Miller columns: each path entry is a column; selecting a folder opens the next. */
function renderColumnView() {
  if (!fmColumnPath.length) fmColumnPath = [fmPlace || "home"];
  fmPlace = fmColumnPath[fmColumnPath.length - 1];

  fmContent.innerHTML = "";
  fmContent.classList.add("view-columns");

  fmColumnPath.forEach((placeId, colIndex) => {
    const place = FS[placeId] || FS.home;
    const items = place.items || [];
    const col = document.createElement("div");
    col.className = "fm-column";
    col.dataset.place = placeId;
    col.setAttribute("role", "list");
    col.setAttribute("aria-label", place.label);

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "fm-column-empty";
      empty.textContent = "Folder is empty";
      col.appendChild(empty);
    } else {
      const selectedKey = fmColumnSelection[colIndex];
      for (const item of items) {
        const key =
          item.type === "folder" && item.place
            ? `folder:${item.place}`
            : `file:${item.name}`;
        const isSelected = selectedKey === key;
        col.appendChild(makeColumnItem(item, colIndex, isSelected));
      }
    }
    fmContent.appendChild(col);
  });

  // Scroll so the rightmost column is visible
  requestAnimationFrame(() => {
    fmContent.scrollLeft = fmContent.scrollWidth;
  });

  const tip = FS[fmPlace] || FS.home;
  const n = (tip.items || []).length;
  fmStatus.textContent = n === 1 ? "1 item" : `${n} items`;
  updateFmChrome();
}

function makeColumnItem(item, colIndex, isSelected) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "fm-item fm-column-item" + (isSelected ? " selected" : "");
  el.setAttribute("role", "listitem");
  el.title = item.name;

  const isFolder = item.type === "folder" && item.place && FS[item.place];
  el.innerHTML = `
    <img src="${item.icon}" alt="" draggable="false" />
    <span class="fm-item-name">${item.name}</span>
    ${isFolder ? '<span class="fm-column-chevron" aria-hidden="true"></span>' : '<span class="fm-column-chevron-spacer" aria-hidden="true"></span>'}
  `;

  el.addEventListener("click", (e) => {
    e.stopPropagation();
    selectColumnItem(item, colIndex);
  });

  el.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    if (isFolder) {
      // Open folder as navigation root (same as expanding, already done on single click)
      selectColumnItem(item, colIndex);
    }
  });

  return el;
}

function selectColumnItem(item, colIndex) {
  const isFolder = item.type === "folder" && item.place && FS[item.place];

  // Keep columns up to this index; record selection
  fmColumnPath = fmColumnPath.slice(0, colIndex + 1);
  fmColumnSelection = fmColumnSelection.slice(0, colIndex);

  if (isFolder) {
    fmColumnSelection[colIndex] = `folder:${item.place}`;
    fmColumnPath.push(item.place);
    // Clear selection past the new tip column
    fmColumnSelection = fmColumnSelection.slice(0, colIndex + 1);
    fmPlace = item.place;
    // History follows tip folder
    fmHistory = fmHistory.slice(0, fmHistIndex + 1);
    if (fmHistory[fmHistory.length - 1] !== item.place) {
      fmHistory.push(item.place);
      fmHistIndex = fmHistory.length - 1;
    }
  } else {
    fmColumnSelection[colIndex] = `file:${item.name}`;
    fmPlace = fmColumnPath[fmColumnPath.length - 1];
  }

  renderColumnView();
}

function makeFmItem(item) {
  const el = document.createElement("button");
  el.type = "button";
  el.className = "fm-item";
  el.setAttribute("role", "listitem");
  el.title = item.name;
  el.innerHTML = `
    <img src="${item.icon}" alt="" draggable="false" />
    <span class="fm-item-name">${item.name}</span>
    <span class="fm-item-meta">${item.size || "—"}</span>
    <span class="fm-item-meta">${item.modified || "—"}</span>
  `;
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    fmContent.querySelectorAll(".fm-item").forEach((n) => n.classList.remove("selected"));
    el.classList.add("selected");
  });
  el.addEventListener("dblclick", (e) => {
    e.stopPropagation();
    if (item.type === "folder" && item.place && FS[item.place]) {
      navigateFm(item.place, true);
    }
  });
  return el;
}

function updateFmChrome() {
  const place = FS[fmPlace] || FS.home;
  fmPathLabel.textContent = place.label;
  fmPathIcon.src = place.icon;
  fmBack.disabled = fmHistIndex <= 0;
  fmForward.disabled = fmHistIndex >= fmHistory.length - 1;
  fmSidebar.querySelectorAll(".fm-side-item[data-place]").forEach((el) => {
    el.classList.toggle("selected", el.dataset.place === fmPlace);
  });
}

function navigateFm(placeId, pushHistory) {
  if (!FS[placeId]) return;
  fmPlace = placeId;
  if (pushHistory) {
    fmHistory = fmHistory.slice(0, fmHistIndex + 1);
    fmHistory.push(placeId);
    fmHistIndex = fmHistory.length - 1;
  }
  // Reset miller path to the navigated place as a single column
  fmColumnPath = [placeId];
  fmColumnSelection = [];
  updateFmChrome();
  renderFmContent();
}

function openFm(placeId) {
  closeAppMenu();
  closeTrayPopovers();
  if (placeId) {
    fmPlace = placeId;
    fmHistory = [placeId];
    fmHistIndex = 0;
    fmColumnPath = [placeId];
    fmColumnSelection = [];
  }
  fmWindow.hidden = false;
  markDockRunning("files", true);
  setDockActive("files", true);
  renderSidebar();
  updateFmChrome();
  renderFmContent();
}

function closeFm() {
  fmWindow.hidden = true;
  fmWindow.classList.remove("maximized");
  markDockRunning("files", false);
  setDockActive("files", false);
}

function setFmView(mode) {
  if (mode === "list") fmViewMode = "list";
  else if (mode === "columns") fmViewMode = "columns";
  else fmViewMode = "icons";

  if (fmViewMode === "columns") {
    // Start miller path at current location
    fmColumnPath = [fmPlace];
    fmColumnSelection = [];
  }

  fmContent.classList.toggle("view-icons", fmViewMode === "icons");
  fmContent.classList.toggle("view-list", fmViewMode === "list");
  fmContent.classList.toggle("view-columns", fmViewMode === "columns");

  fmViewIcons.classList.toggle("active", fmViewMode === "icons");
  fmViewList.classList.toggle("active", fmViewMode === "list");
  fmViewColumns.classList.toggle("active", fmViewMode === "columns");
  fmViewIcons.setAttribute("aria-pressed", fmViewMode === "icons" ? "true" : "false");
  fmViewList.setAttribute("aria-pressed", fmViewMode === "list" ? "true" : "false");
  fmViewColumns.setAttribute("aria-pressed", fmViewMode === "columns" ? "true" : "false");

  renderFmContent();
}

/* ---------- Terminal ---------- */

function openTerminal() {
  closeAppMenu();
  closeTrayPopovers();
  termWindow.hidden = false;
  markDockRunning("terminal", true);
  setDockActive("terminal", true);
}

function closeTerminal() {
  termWindow.hidden = true;
  termWindow.classList.remove("maximized");
  markDockRunning("terminal", false);
  setDockActive("terminal", false);
}

/* ---------- Popovers ---------- */

function closeTrayPopovers() {
  datetimePopover.hidden = true;
  netPopover.hidden = true;
  btPopover.hidden = true;
  soundPopover.hidden = true;
  notifPopover.hidden = true;
  setExpanded(datetimeBtn, false);
  setExpanded(netBtn, false);
  setExpanded(btBtn, false);
  setExpanded(soundBtn, false);
  setExpanded(notifBtn, false);
}

function closeSessionPopover() {
  sessionPopover.hidden = true;
  setExpanded(sessionBtn, false);
}

function closeSessionDialog() {
  sessionDialog.hidden = true;
  pendingSessionAction = null;
}

function closeAllOverlays() {
  closeAppMenu();
  closeTrayPopovers();
  closeSessionPopover();
  closeSessionDialog();
}

function togglePopover(popover, btn) {
  const opening = popover.hidden;
  closeTrayPopovers();
  closeSessionPopover();
  closeAppMenu();
  if (opening) {
    popover.hidden = false;
    setExpanded(btn, true);
  }
}

function volumeIconFor(v) {
  if (v <= 0) return "assets/status/audio-volume-muted-symbolic.svg";
  if (v < 33) return "assets/status/audio-volume-low-symbolic.svg";
  if (v < 66) return "assets/status/audio-volume-medium-symbolic.svg";
  return "assets/status/audio-volume-high-symbolic.svg";
}

function updateVolumeUi() {
  const v = Number(volumeSlider.value);
  volumePct.textContent = `${v}%`;
  const src = volumeIconFor(v);
  soundIcon.src = src;
  soundPopoverIcon.src = src;
}

const SESSION_COPY = {
  logout: {
    title: "Log Out",
    msg: "Are you sure you want to log out?",
    confirm: "Log Out",
    icon: "assets/status/system-log-out-symbolic.svg",
  },
  reboot: {
    title: "Restart",
    msg: "Are you sure you want to restart this system?",
    confirm: "Restart",
    icon: "assets/status/system-reboot-symbolic.svg",
  },
  shutdown: {
    title: "Shut Down",
    msg: "Are you sure you want to shut down this system?",
    confirm: "Shut Down",
    icon: "assets/status/system-shutdown-symbolic.svg",
  },
};

function openSessionConfirm(action) {
  const copy = SESSION_COPY[action];
  if (!copy) return;
  pendingSessionAction = action;
  sessionDialogTitle.textContent = copy.title;
  sessionDialogMsg.textContent = copy.msg;
  sessionDialogIcon.src = copy.icon;
  document.getElementById("session-dialog-confirm").textContent = copy.confirm;
  closeSessionPopover();
  sessionDialog.hidden = false;
}

/* ---------- Events ---------- */

applicationsBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (applicationsMenu.hidden) {
    closeTrayPopovers();
    closeSessionPopover();
    openAppMenu();
  } else {
    closeAppMenu();
  }
});

appSearch.addEventListener("input", () => renderAppGrid(appSearch.value));
appSearch.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAppMenu();
});

viewGridBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  setMenuMode("grid");
});

viewCategoryBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  setMenuMode("category");
});

datetimeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(datetimePopover, datetimeBtn);
});

netBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(netPopover, netBtn);
});

btBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(btPopover, btBtn);
});

soundBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(soundPopover, soundBtn);
});

notifBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  togglePopover(notifPopover, notifBtn);
});

sessionBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const opening = sessionPopover.hidden;
  closeTrayPopovers();
  closeAppMenu();
  if (opening) {
    sessionPopover.hidden = false;
    setExpanded(sessionBtn, true);
  } else {
    closeSessionPopover();
  }
});

volumeSlider.addEventListener("input", updateVolumeUi);
updateVolumeUi();

sessionPopover.querySelectorAll(".session-item").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const action = btn.dataset.action;
    if (action === "settings") {
      closeSessionPopover();
      launchApp("settings");
      return;
    }
    if (action === "lock" || action === "suspend") {
      closeSessionPopover();
      return;
    }
    if (SESSION_COPY[action]) openSessionConfirm(action);
  });
});

sessionDialogCancel.addEventListener("click", (e) => {
  e.stopPropagation();
  closeSessionDialog();
});

sessionDialogConfirm.addEventListener("click", (e) => {
  e.stopPropagation();
  closeSessionDialog();
});

sessionDialog.addEventListener("click", (e) => {
  if (e.target === sessionDialog) closeSessionDialog();
});

// Dock
document.querySelectorAll(".dock-btn[data-app]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const id = btn.dataset.app;
    if (id === "files") {
      if (fmWindow.hidden) openFm("home");
      else closeFm();
      return;
    }
    if (id === "terminal") {
      if (termWindow.hidden) openTerminal();
      else closeTerminal();
      return;
    }
    launchApp(id);
  });
});

// Files chrome
fmClose.addEventListener("click", (e) => {
  e.stopPropagation();
  closeFm();
});

fmMax.addEventListener("click", (e) => {
  e.stopPropagation();
  fmWindow.classList.toggle("maximized");
});

fmBack.addEventListener("click", (e) => {
  e.stopPropagation();
  if (fmHistIndex > 0) {
    fmHistIndex -= 1;
    fmPlace = fmHistory[fmHistIndex];
    fmColumnPath = [fmPlace];
    fmColumnSelection = [];
    updateFmChrome();
    renderFmContent();
  }
});

fmForward.addEventListener("click", (e) => {
  e.stopPropagation();
  if (fmHistIndex < fmHistory.length - 1) {
    fmHistIndex += 1;
    fmPlace = fmHistory[fmHistIndex];
    fmColumnPath = [fmPlace];
    fmColumnSelection = [];
    updateFmChrome();
    renderFmContent();
  }
});

fmViewIcons.addEventListener("click", (e) => {
  e.stopPropagation();
  setFmView("icons");
});

fmViewList.addEventListener("click", (e) => {
  e.stopPropagation();
  setFmView("list");
});

fmViewColumns.addEventListener("click", (e) => {
  e.stopPropagation();
  setFmView("columns");
});

// Terminal chrome
termClose.addEventListener("click", (e) => {
  e.stopPropagation();
  closeTerminal();
});

termMax.addEventListener("click", (e) => {
  e.stopPropagation();
  termWindow.classList.toggle("maximized");
});

// Simple window drag for Files & Terminal
function enableDrag(win, handle) {
  let dragging = false;
  let ox = 0;
  let oy = 0;

  handle.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    if (e.target.closest("button, input, .pathbar, .view-switcher, .nav-group")) return;
    if (win.classList.contains("maximized")) return;
    dragging = true;
    const rect = win.getBoundingClientRect();
    // Switch from centered transform layout to left/top
    win.style.left = `${rect.left}px`;
    win.style.top = `${rect.top}px`;
    win.style.transform = "none";
    ox = e.clientX - rect.left;
    oy = e.clientY - rect.top;
    handle.setPointerCapture(e.pointerId);
  });

  handle.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const x = Math.max(0, Math.min(window.innerWidth - 80, e.clientX - ox));
    const y = Math.max(varPanelHeight(), Math.min(window.innerHeight - 80, e.clientY - oy));
    win.style.left = `${x}px`;
    win.style.top = `${y}px`;
  });

  handle.addEventListener("pointerup", () => {
    dragging = false;
  });
}

function varPanelHeight() {
  return 30;
}

enableDrag(fmWindow, document.getElementById("fm-titlebar"));
enableDrag(termWindow, document.getElementById("term-titlebar"));

// Global dismiss
document.addEventListener("click", (e) => {
  if (!applicationsMenu.hidden && !applicationsMenu.contains(e.target) && e.target !== applicationsBtn) {
    closeAppMenu();
  }
  const popovers = [
    [datetimePopover, datetimeBtn],
    [netPopover, netBtn],
    [btPopover, btBtn],
    [soundPopover, soundBtn],
    [notifPopover, notifBtn],
    [sessionPopover, sessionBtn],
  ];
  for (const [pop, btn] of popovers) {
    if (!pop.hidden && !pop.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
      pop.hidden = true;
      setExpanded(btn, false);
    }
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!sessionDialog.hidden) {
      closeSessionDialog();
      return;
    }
    if (!applicationsMenu.hidden) {
      closeAppMenu();
      return;
    }
    closeTrayPopovers();
    closeSessionPopover();
    return;
  }
  // Super often blocked by the browser / OS; handle when delivered
  if (e.key === "Meta" || e.key === "OS" || (e.key === "Super" /* rare */)) {
    // keydown Super alone is awkward; also accept Ctrl+Space as fallback demo
  }
  if (e.ctrlKey && e.code === "Space") {
    e.preventDefault();
    toggleAppMenu();
  }
});

// Initial state: clean desktop (no app windows)
setMenuMode("grid");
