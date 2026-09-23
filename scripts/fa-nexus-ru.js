const MODULE_ID = "fa-nexus-ru";

/**
 * FA Nexus — Русификатор
 * Для FA Nexus 0.5.3+ / Foundry VTT v14.
 *
 * В FA Nexus большая часть текста пока прописана прямо в шаблонах/JS,
 * поэтому перевод выполняется безопасно поверх интерфейса, без изменения
 * файлов оригинального модуля. Обновления FA Nexus не затирают этот модуль.
 */

const RU = new Map(Object.entries({
  // Главная панель
  "Tokens": "Токены",
  "Assets": "Объекты",
  "Textures": "Текстуры",
  "Paths": "Пути",
  "Building Tool": "Строительство",
  "Search...": "Поиск...",
  "Clear folder filters": "Сбросить фильтры папок",
  "Clear": "Очистить",
  "Thumbnail size": "Размер миниатюр",
  "Sorting by newest. Click for category.": "Сортировка по новым. Нажмите для сортировки по категории.",
  "Save bookmark": "Сохранить закладку",
  "Toggle folder browser": "Показать/скрыть дерево папок",
  "More bookmarks": "Ещё закладки",
  "Virtualized Grid": "Сетка содержимого",
  "Tool Options": "Параметры инструмента",
  "Reopen Tool Options": "Снова открыть параметры инструмента",
  "Color variants on Right Click": "Варианты цвета по ПКМ",
  "Random Color on Placement": "Случайный цвет при размещении",
  "Randomly select a color variant for each placement": "Случайно выбирать вариант цвета при каждом размещении",
  "Hide locked": "Скрыть заблокированное",
  "Texture Painting, Paths, and Building Tool are premium features requiring the Adventurer ($7) tier. Connect Patreon to unlock them.": "Рисование текстурами, Пути и Строительство — премиум-функции уровня Adventurer ($7). Подключите Patreon, чтобы разблокировать их.",

  // Общие кнопки/состояния
  "Action": "Действие",
  "Add Folder": "Добавить папку",
  "All scene levels": "Все уровни сцены",
  "Angle": "Угол",
  "Backfill Scene Assets": "Локализовать объекты сцены",
  "Background": "Фон",
  "Backup": "Резервная копия",
  "Backup first": "Сначала создать резервную копию",
  "Blocked": "Заблокировано",
  "Blur": "Размытие",
  "Browse": "Обзор",
  "Cancel": "Отмена",
  "Canvas not ready": "Холст ещё не готов",
  "Clear All": "Очистить всё",
  "Close": "Закрыть",
  "Cloud": "Облако",
  "Cloud Asset": "Облачный объект",
  "Current level": "Текущий уровень",
  "Delete": "Удалить",
  "Delete selected layers": "Удалить выбранные слои",
  "Distance": "Расстояние",
  "Document": "Документ",
  "Edit": "Изменить",
  "End": "Конец",
  "Error": "Ошибка",
  "Exclude All": "Исключить всё",
  "Export images": "Экспортировать изображения",
  "Filtered": "Отфильтровано",
  "Hidden": "Скрыто",
  "Include All": "Включить всё",
  "Length": "Длина",
  "Local Path": "Локальный путь",
  "Local files": "Локальные файлы",
  "Locked": "Заблокировано",
  "Marked": "Помечено",
  "Max": "Макс.",
  "Middle Elevations": "Средние высоты",
  "Missing": "Отсутствует",
  "None": "Нет",
  "Not downloaded": "Не загружено",
  "Notes": "Примечания",
  "Off (natural padding)": "Выкл. (естественные поля)",
  "Open": "Открыть",
  "Origin": "Начало координат",
  "Pending": "Ожидание",
  "Ready": "Готово",
  "Reason": "Причина",
  "Reference": "Ссылка",
  "References": "Ссылки",
  "Remove": "Удалить",
  "Repairable": "Можно исправить",
  "Repaired": "Исправлено",
  "Reset": "Сбросить",
  "Save": "Сохранить",
  "Scan": "Сканировать",
  "Scene": "Сцена",
  "Scenes": "Сцены",
  "Scope": "Область",
  "Selected Wall": "Выбранная стена",
  "Selection": "Выбор",
  "Selection Options": "Параметры выбора",
  "Session Actions": "Действия сеанса",
  "Shortcuts": "Горячие клавиши",
  "Size:": "Размер:",
  "Skip:": "Пропустить:",
  "Skipped": "Пропущено",
  "Stage": "Этап",
  "Start": "Начало",
  "Status": "Состояние",
  "Strength": "Сила",
  "Subtool Options": "Параметры подинструмента",
  "Subtools": "Подинструменты",
  "Usage": "Использование",
  "Value / Range": "Значение / диапазон",
  "X": "X",
  "Y": "Y",
  "min": "мин.",
  "max": "макс.",

  // Закладки / поиск / папки
  "Bookmark Title": "Название закладки",
  "Enter bookmark name...": "Введите название закладки...",
  "No search or folder filters active": "Поиск и фильтры папок не используются",
  "Reset all filters": "Сбросить все фильтры",
  "Search actors…": "Поиск актёров…",
  "Search compendiums or folders...": "Поиск сборников или папок...",
  "Search layers...": "Поиск слоёв...",
  "Search portal textures...": "Поиск текстур порталов...",
  "Select one or more root folders that contain your local assets.": "Выберите одну или несколько корневых папок с локальными объектами.",
  "Select one or more root folders that contain your local tokens.": "Выберите одну или несколько корневых папок с локальными токенами.",
  "Click “Add Folder” to select a local token folder.": "Нажмите «Добавить папку», чтобы выбрать локальную папку токенов.",
  "Click “Add Folder” to select an local assets folder.": "Нажмите «Добавить папку», чтобы выбрать локальную папку объектов.",
  "No folders added yet.": "Папки ещё не добавлены.",

  // Patreon
  "Patreon Authentication": "Авторизация Patreon",
  "Ready to authenticate": "Готово к авторизации",
  "Secure via Patreon OAuth.": "Безопасная авторизация через Patreon OAuth.",
  "We’ll open your browser to authenticate with Patreon.": "Откроется браузер для авторизации через Patreon.",
  "🔐 Start Authentication": "🔐 Начать авторизацию",
  "Join on Patreon": "Подписаться на Patreon",
  "Support Forgotten Adventures at Adventurer ($7) tier or higher.": "Поддержите Forgotten Adventures на уровне Adventurer ($7) или выше.",
  "Connecting to Patreon enables premium cloud tokens and assets.": "Подключение Patreon открывает премиум-токены и объекты из облака.",

  // Токены
  "Current Token": "Текущий токен",
  "New Token": "Новый токен",
  "Token:": "Токен:",
  "Place Tokens As": "Размещать токены как",
  "Update Token": "Обновить токен",
  "Also update actor portrait image": "Также обновить портрет актёра",
  "Keep creature size (don't resize token)": "Сохранить размер существа (не менять размер токена)",
  "Leave the actor's size and prototype token dimensions unchanged.": "Не изменять размер актёра и размеры его прототипа токена.",
  "Use wildcard token (random color variant)": "Использовать случайный токен (случайный вариант цвета)",
  "Hit Points": "Хиты",
  "Include all compendiums": "Включить все сборники",
  "Exclude all compendiums": "Исключить все сборники",
  "Select which actor compendiums to include when searching for actors to place tokens as.": "Выберите сборники актёров, в которых искать актёров при размещении токенов.",

  // Объекты / размещение
  "Placement": "Размещение",
  "Drop Shadow": "Отбрасываемая тень",
  "Shadow Settings": "Настройки тени",
  "Shadow only": "Только тень",
  "Edit Shadow": "Настроить тень",
  "Reset Shadow": "Сбросить тень",
  "Reset shadow settings to defaults": "Сбросить настройки тени",
  "Shadow offset control": "Смещение тени",
  "Maximum shadow offset distance in pixels": "Максимальное смещение тени в пикселях",
  "Dilation": "Расширение",
  "Opacity": "Непрозрачность",
  "Offset": "Смещение",
  "Rotation": "Поворот",
  "Scale": "Масштаб",
  "Flip / Mirror": "Отразить / зеркально",
  "Random rotation strength": "Сила случайного поворота",
  "Random scale strength": "Сила случайного масштаба",
  "Snap to Grid": "Привязка к сетке",
  "Snap new placements to the active scene grid.": "Привязывать новые объекты к сетке активной сцены.",
  "Grid snap density": "Плотность привязки к сетке",
  "FA assets default to 200 px per square.": "Объекты FA по умолчанию рассчитаны на 200 пикселей на клетку.",

  // Текстуры / кисти
  "Brush": "Кисть",
  "Brush Size": "Размер кисти",
  "Particle Size": "Размер частиц",
  "Density": "Плотность",
  "Deviation": "Разброс",
  "Spacing": "Интервал",
  "Fill": "Заливка",
  "Eraser": "Ластик",
  "Spray": "Распыление",
  "Texture Offset": "Смещение текстуры",
  "Texture Offset X": "Смещение текстуры X",
  "Texture Offset Y": "Смещение текстуры Y",

  // Пути
  "Path": "Путь",
  "Path Appearance": "Внешний вид пути",
  "Path Opacity": "Непрозрачность пути",
  "Path Scale": "Масштаб пути",
  "Path Shadow": "Тень пути",
  "Path Tension": "Натяжение пути",
  "Draw Simplification": "Упрощение рисования",
  "Fade In": "Плавное появление",
  "Fade Out": "Плавное исчезновение",
  "Shrink Start": "Сузить начало",
  "Shrink End": "Сузить конец",
  "Shrink Start & End": "Сузить начало и конец",

  // Строительство / стены / двери
  "Walls": "Стены",
  "Wall": "Стена",
  "Floor": "Пол",
  "Floors": "Полы",
  "Roof": "Крыша",
  "Roofs": "Крыши",
  "Door": "Дверь",
  "Doors": "Двери",
  "Window": "Окно",
  "Windows": "Окна",
  "Height": "Высота",
  "Width": "Ширина",
  "Thickness": "Толщина",
  "Portal Texture Grid": "Сетка текстур порталов",
  "Panel Areas": "Области панелей",
  "Top boundary": "Верхняя граница",
  "Bottom boundary": "Нижняя граница",

  // Менеджер слоёв
  "FA Nexus - Layer Manager": "FA Nexus — Менеджер слоёв",
  "Open Layer Manager Help": "Открыть справку менеджера слоёв",
  "Elevation range": "Диапазон высот",
  "All layers in this elevation group are locked": "Все слои этой группы высот заблокированы",
  "Edit elevation group value": "Изменить значение группы высот",
  "Rename elevation group": "Переименовать группу высот",
  "Rename tile": "Переименовать тайл",
  "Right-click to edit elevation group": "ПКМ — изменить группу высот",
  "Double-click to rename elevation group, Right-click to edit elevation": "Двойной щелчок — переименовать группу высот, ПКМ — изменить высоту",
  "Push to Bottom": "Переместить в самый низ",
  "Push to Top": "Переместить в самый верх",
  "Expand Collapse": "Развернуть / свернуть",
  "Filtered": "Отфильтровано",

  // Сведение/экспорт
  "Flatten into tiles": "Свести в тайлы",
  "Merge into background": "Объединить с фоном",
  "Merge into foreground": "Объединить с передним планом",
  "Separate middle layer": "Отдельный средний слой",
  "Split background / middle / foreground": "Разделить фон / середину / передний план",
  "Tiles between the background and foreground bands can be separate or merged into one band output.": "Тайлы между фоном и передним планом можно оставить отдельными или объединить в один слой.",
  "Output Density (px per grid square)": "Плотность вывода (пикселей на клетку)",
  "Output Folder": "Папка вывода",
  "Output Name": "Имя результата",
  "Output Snap": "Привязка результата",
  "Padding Adjust (grid squares)": "Коррекция полей (в клетках)",
  "Positive adds padding; negative trims (may crop).": "Положительное значение добавляет поля, отрицательное обрезает (может обрезать изображение).",
  "Round to full squares": "Округлять до целых клеток",
  "Round to half squares": "Округлять до половины клетки",
  "Rounds output tile bounds to grid increments for clean snapping.": "Округляет границы итоговых тайлов по сетке для точной привязки.",
  "WebP Quality (0-1)": "Качество WebP (0–1)",
  "Higher quality increases file size.": "Более высокое качество увеличивает размер файла.",
  "Saved as WebP. Scene splits and chunks append suffixes automatically.": "Сохраняется в WebP. Для частей сцены и фрагментов суффиксы добавляются автоматически.",
  "Choose where the generated image files are uploaded.": "Выберите папку для созданных изображений.",
  "Enable auto chunking": "Автоматически разбивать на фрагменты",

  // Очистка созданных файлов
  "Generated File Cleanup": "Очистка созданных файлов",
  "Scan Roots": "Проверяемые папки",
  "Scanned Files": "Проверено файлов",
  "Roots Scanned": "Проверено папок",
  "Unique Live Files": "Уникальных используемых файлов",
  "Total refs": "Всего ссылок",
  "Missing References": "Отсутствующие ссылки",
  "Missing Refs": "Отсутствующие ссылки",
  "Direct Live Refs": "Прямые используемые ссылки",
  "Deconstruct Refs": "Разобранные ссылки",
  "Copy Unused Paths": "Копировать пути неиспользуемых файлов",
  "Mark Unused": "Пометить неиспользуемые",
  "Mark Skipped": "Пометить пропущенные",
  "Skipped Items": "Пропущенные элементы",
  "No skipped items.": "Пропущенных элементов нет.",
  "No cached index": "Кэшированный индекс отсутствует",
  "No cached indexes.": "Кэшированные индексы отсутствуют.",
  "Clear cached index": "Очистить кэшированный индекс",
  "Clear Local Cached Indexes": "Очистить локальные кэшированные индексы",
  "Clear cloud index": "Очистить облачный индекс",
  "Rebuild cloud index": "Перестроить облачный индекс",
  "Download & Repair": "Загрузить и исправить",
  "Scan the current scene before downloading missing files.": "Перед загрузкой отсутствующих файлов просканируйте текущую сцену.",
  "Run a scan to inspect generated masks and flattened outputs.": "Запустите сканирование созданных масок и сведённых изображений.",
  "No matching mask files found for this scan scope.": "Подходящие файлы масок не найдены.",
  "No matching flattened outputs found for this scan scope.": "Подходящие сведённые файлы не найдены.",
  "No missing generated-file references found.": "Отсутствующие ссылки на созданные файлы не найдены.",
  "No missing or blocked FA asset references were found in the current scene.": "В текущей сцене нет отсутствующих или заблокированных ссылок на объекты FA.",
  "Marking overwrites unused `.webp` and `.png` files with an opaque red placeholder. Delete and rename are not performed by this tool.": "Пометка заменяет неиспользуемые `.webp` и `.png` непрозрачной красной заглушкой. Этот инструмент не удаляет и не переименовывает файлы.",
  "Scan FA Nexus generated masks and flattened outputs for the current world, then optionally overwrite unused files with a visible red marker for manual deletion.": "Проверяет созданные FA Nexus маски и сведённые файлы текущего мира и при необходимости помечает неиспользуемые файлы красной заглушкой для ручного удаления.",
  "Find FA cloud assets and Nexus mask files referenced by the current scene, download missing cloud files to your Nexus asset folder, and relink scene references to local copies.": "Находит облачные объекты FA и маски Nexus, используемые текущей сценой, загружает отсутствующие файлы в папку Nexus и заменяет ссылки сцены на локальные копии.",

  // Настройки FA Nexus
  "FA Nexus Settings": "Настройки FA Nexus",
  "Token Sources": "Источники токенов",
  "Asset Sources": "Источники объектов",
  "Configure": "Настроить",
  "Generated Cleanup": "Очистка созданных файлов",
  "Cloud Download Folder (Tokens)": "Папка загрузки из облака (токены)",
  "Cloud Download Folder (Assets)": "Папка загрузки из облака (объекты)",
  "Use Direct URLs for Free Cloud Content": "Использовать прямые ссылки для бесплатного облачного контента",
  "When enabled, free cloud tokens and assets will be loaded directly from the public CDN instead of being downloaded and cached locally. This saves disk space but requires an internet connection during gameplay.": "Если включено, бесплатные облачные токены и объекты загружаются напрямую из CDN без локального кэша. Это экономит место на диске, но во время игры требуется интернет.",
  "Asset Drop Shadow": "Тень объектов",
  "Enable drop shadows for assets placed via FA Nexus. Individual placements can still toggle shadows while this is enabled.": "Включает тени для объектов, размещённых через FA Nexus. Для каждого объекта тень всё равно можно отключить отдельно.",
  "Shadow Quality": "Качество теней",
  "Controls the maximum resolution of shadow render textures. Lower values reduce VRAM usage significantly on large scenes; High is the recommended default.": "Определяет максимальное разрешение текстур теней. Низкие значения заметно уменьшают расход видеопамяти на больших сценах; рекомендуется «Высокое».",
  "Keep near-ground tiles under tokens": "Оставлять тайлы у поверхности под токенами",
  "Keeps tiles within the first 1 unit of elevation under tokens without changing the token elevation. Example: on a level that starts at 10, tiles placed from 10.000 to 10.999 stay under tokens at 10": "Оставляет тайлы в пределах первой единицы высоты под токенами, не меняя высоту токена. Например, на уровне 10 тайлы с высотой 10.000–10.999 остаются под токенами на высоте 10.",
  "Overwrite Token Eye Level": "Переопределить уровень глаз токена",
  "When enabled, Eye Level Height will use 0.5 units below the top of the token's cube for vision and visibility tests instead of Foundry's default mid-height.": "Если включено, для зрения и видимости уровень глаз будет на 0,5 единицы ниже верхней грани куба токена вместо стандартной средней высоты Foundry.",
  "Pixel-Perfect Tile Selection": "Точное выделение тайлов по пикселям",
  "Use pixel alpha sampling so tile interactions only trigger on visible pixels. Disable if you prefer the default Foundry hit areas or encounter compatibility issues.": "Использует альфа-канал пикселей, чтобы тайл реагировал только по видимой части. Отключите для стандартной области выбора Foundry или при проблемах совместимости.",
  "Actor Creation Folder": "Папка для создаваемых актёров",
  "Group layer elevations into nested upward buckets in the Layer Manager so fractional elevations can be organized as subgroups.": "Группировать высоты слоёв во вложенные группы в менеджере слоёв, чтобы дробные высоты отображались как подгруппы.",
  "Select your local sources for the Tokens Tab and activate/deactivate FA Cloud Tokens.": "Выберите локальные источники для вкладки «Токены» и включите/отключите облачные токены FA.",
  "Select your local sources for the Assets/Textures/Paths Tabs and activate/deactivate FA Cloud Assets.": "Выберите локальные источники для вкладок «Объекты/Текстуры/Пути» и включите/отключите облачные объекты FA.",
  "Scan generated masks and flattened outputs, report unused and missing files, and optionally overwrite unused files with a visible marker.": "Проверяет созданные маски и сведённые файлы, показывает неиспользуемые и отсутствующие файлы и при необходимости помечает неиспользуемые видимой заглушкой."
}));

// Некоторые подписи у Nexus создаются динамически. Здесь только безопасные шаблоны.
const PATTERNS = [
  [/^Adventurer supporter\s*(.*)$/i, (_m, rest) => `Подписка Adventurer${rest ? ` ${rest}` : ""}`],
  [/^Update the prototype token for\s+(.+)$/i, (_m, name) => `Обновить прототип токена для ${name}`],
  [/^(\d+)\s+items?$/i, (_m, n) => `${n} элем.`],
  [/^Selected:\s*(\d+)$/i, (_m, n) => `Выбрано: ${n}`],
  [/^Source:\s*(.+)$/i, (_m, v) => `Источник: ${v}`],
  [/^Filter preset:\s*(.+)$/i, (_m, v) => `Набор фильтров: ${v}`],
  [/^Snap to\s+(.+)$/i, (_m, v) => `Привязка: ${v}`]
];

function translateString(value) {
  if (typeof value !== "string") return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const core = value.trim();
  if (!core) return value;

  if (RU.has(core)) return `${leading}${RU.get(core)}${trailing}`;
  const decoded = core.replaceAll("&amp;", "&").replaceAll("&ndash;", "–");
  if (RU.has(decoded)) return `${leading}${RU.get(decoded)}${trailing}`;

  for (const [regex, repl] of PATTERNS) {
    if (regex.test(core)) {
      regex.lastIndex = 0;
      return `${leading}${core.replace(regex, repl)}${trailing}`;
    }
  }
  return value;
}

function isElement(value) {
  return value && value.nodeType === Node.ELEMENT_NODE;
}

const NEXUS_SELECTOR = [
  ".fa-nexus-app",
  "[class^='fa-nexus-']",
  "[class*=' fa-nexus-']",
  "[id^='fa-nexus-']",
  "[id*='fa-nexus-']"
].join(",");

const NEXUS_WINDOW_TITLES = [
  "FA Nexus",
  "Tool Options",
  "Generated File Cleanup",
  "Generated Cleanup",
  "Patreon Authentication",
  "Layer Manager",
  "Place Tokens As",
  "Portal Texture Grid"
];

function isNexusScope(el) {
  if (!isElement(el)) return false;
  if (el.matches?.(NEXUS_SELECTOR) || el.closest?.(NEXUS_SELECTOR)) return true;

  const win = el.closest?.(".application, .app, .window-app, .dialog");
  if (!win) return false;
  const title = win.querySelector?.(".window-title, .window-header h4, header h4")?.textContent?.trim() ?? "";
  return NEXUS_WINDOW_TITLES.some(t => title.includes(t));
}

function translateAttributes(el) {
  if (!isElement(el) || !isNexusScope(el)) return;
  for (const attr of ["title", "placeholder", "aria-label"]) {
    if (!el.hasAttribute(attr)) continue;
    const oldValue = el.getAttribute(attr);
    const newValue = translateString(oldValue);
    if (newValue !== oldValue) el.setAttribute(attr, newValue);
  }

  if ((el.tagName === "INPUT" || el.tagName === "BUTTON") && ["button", "submit", "reset"].includes(el.type)) {
    if (el.value) {
      const next = translateString(el.value);
      if (next !== el.value) el.value = next;
    }
  }
}

function translateTextNode(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  const parent = node.parentElement;
  if (!parent || !isNexusScope(parent)) return;
  if (["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return;
  const oldValue = node.nodeValue;
  const newValue = translateString(oldValue);
  if (newValue !== oldValue) node.nodeValue = newValue;
}

function translateTree(root) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root);
    return;
  }
  if (!isElement(root)) return;

  translateAttributes(root);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let current = walker.currentNode;
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) translateTextNode(current);
    else translateAttributes(current);
    current = walker.nextNode();
  }
}

function translateFaNexusSettingsRegistry() {
  try {
    for (const [key, setting] of game.settings.settings ?? []) {
      if (!key.startsWith("fa-nexus.")) continue;
      if (typeof setting.name === "string") setting.name = translateString(setting.name).trim();
      if (typeof setting.hint === "string") setting.hint = translateString(setting.hint).trim();
      if (setting.choices && typeof setting.choices === "object") {
        for (const choiceKey of Object.keys(setting.choices)) {
          if (typeof setting.choices[choiceKey] === "string") {
            setting.choices[choiceKey] = translateString(setting.choices[choiceKey]).trim();
          }
        }
      }
    }

    for (const [key, menu] of game.settings.menus ?? []) {
      if (!key.startsWith("fa-nexus.")) continue;
      if (typeof menu.name === "string") menu.name = translateString(menu.name).trim();
      if (typeof menu.label === "string") menu.label = translateString(menu.label).trim();
      if (typeof menu.hint === "string") menu.hint = translateString(menu.hint).trim();
    }
  } catch (err) {
    console.warn(`${MODULE_ID} | Не удалось перевести реестр настроек FA Nexus`, err);
  }
}

function translateSettingsDom(root = document) {
  try {
    const inputs = root.querySelectorAll?.("[name^='fa-nexus.'], [data-setting-id^='fa-nexus.'], [data-key^='fa-nexus.']") ?? [];
    for (const input of inputs) {
      const group = input.closest?.(".form-group, .form-fields, li, section") ?? input.parentElement;
      if (!group) continue;
      // Временно помечаем как область Nexus, чтобы использовать общий переводчик.
      group.dataset.faNexusRuSettings = "true";
      for (const node of group.childNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          const next = translateString(node.nodeValue);
          if (next !== node.nodeValue) node.nodeValue = next;
        }
      }
      for (const el of group.querySelectorAll("label, p, span, button, option")) {
        for (const node of el.childNodes) {
          if (node.nodeType !== Node.TEXT_NODE) continue;
          const next = translateString(node.nodeValue);
          if (next !== node.nodeValue) node.nodeValue = next;
        }
        for (const attr of ["title", "placeholder", "aria-label"]) {
          if (!el.hasAttribute(attr)) continue;
          el.setAttribute(attr, translateString(el.getAttribute(attr)));
        }
      }
    }
  } catch (_) { /* интерфейс настроек может быть закрыт */ }
}

function installObserver() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        translateTextNode(mutation.target);
        continue;
      }
      for (const node of mutation.addedNodes) translateTree(node);
    }
    translateSettingsDom(document);
  });
  observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  globalThis.__faNexusRuObserver = observer;
}

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Инициализация русского перевода FA Nexus`);
});

Hooks.once("ready", () => {
  const nexus = game.modules.get("fa-nexus");
  if (!nexus?.active) {
    ui.notifications?.warn("FA Nexus — Русификатор: сначала включите модуль FA Nexus.");
    return;
  }

  translateFaNexusSettingsRegistry();
  translateTree(document.body);
  translateSettingsDom(document);
  installObserver();

  // Повтор после отрисовки приложений Foundry/Nexus.
  setTimeout(() => {
    translateTree(document.body);
    translateSettingsDom(document);
  }, 500);

  console.log(`${MODULE_ID} | Русский перевод FA Nexus включён`);
});
