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

// Дополнительный словарь полного интерфейса FA Nexus 0.5.3.
for (const [key, value] of Object.entries({
  "Asset Placement Options": "Параметры размещения объектов",
  "Path Editor v2 Options": "Параметры редактора путей v2",
  "Texture Painter Options": "Параметры рисования текстурами",
  "Building Editor Options": "Параметры редактора построек",
  "Building Tool Options": "Параметры строительства",
  "Token Placement Options": "Параметры размещения токенов",
  "Single": "Одиночное",
  "Scatter": "Рассеивание",
  "Scatter Eraser": "Ластик рассеивания",
  "Transform": "Трансформация",
  "Color": "Цвет",
  "Hue": "Оттенок",
  "Saturation": "Насыщенность",
  "Brightness": "Яркость",
  "Contrast": "Контраст",
  "Enabled": "Включено",
  "Spread": "Расширение",
  "Undo": "Отменить",
  "Redo": "Повторить",
  "Commit": "Применить",
  "Curve": "Кривая",
  "Draw": "Рисование",
  "Edit Shapes": "Редактировать формы",
  "Close Loop": "Замкнуть контур",
  "Foundry Walls": "Стены Foundry",
  "Merge on Commit": "Объединить при применении",
  "Snap to": "Шаг привязки",
  "Off": "Выкл.",
  "On": "Вкл.",
  "No tool is currently active.": "Сейчас ни один инструмент не активен.",
  "Opacity Feather": "Плавность прозрачности",
  "Unsaved session": "Несохранённый сеанс",
  "Update Save": "Обновить сохранение",
  "Elevation": "Высота",
  "\"Snap To\" Grid Density": "Плотность сетки «Привязка»",
  "Actions Menu": "Меню действий",
  "Add": "Добавить",
  "Add Door": "Добавить дверь",
  "Add Gap": "Добавить проём",
  "Add Segment": "Добавить сегмент",
  "Add Vertex": "Добавить вершину",
  "Add Window": "Добавить окно",
  "All World Actors": "Все актёры мира",
  "Already linked": "Уже связано",
  "Ambiguous": "Неоднозначно",
  "Animated Window": "Анимированное окно",
  "Animation": "Анимация",
  "Appearance": "Внешний вид",
  "Apply": "Применить",
  "Apply Defaults to Selected": "Применить настройки по умолчанию к выбранному",
  "Arc Segment": "Сегмент-дуга",
  "Asset": "Объект",
  "Asset Folders": "Папки объектов",
  "Asset Placement": "Размещение объектов",
  "Asset Placement Preview": "Предпросмотр размещения объектов",
  "Auth required": "Требуется авторизация",
  "Auto / Unset": "Авто / не задано",
  "Black Fuzziness": "Допуск чёрного",
  "Blend Mode": "Режим смешивания",
  "Brush / Geometry": "Кисть / геометрия",
  "Building Editor": "Редактор построек",
  "Building Fill Preview": "Предпросмотр заливки постройки",
  "Building Preview": "Предпросмотр постройки",
  "Change Elevation": "Изменить высоту",
  "Clear Mask": "Очистить маску",
  "Clear Selection": "Снять выделение",
  "Create new basic actor": "Создать нового базового актёра",
  "Custom API Key": "Пользовательский API-ключ",
  "Custom value or range": "Своё значение или диапазон",
  "Deconstruct": "Разобрать",
  "Delete Point": "Удалить точку",
  "Disconnect": "Отключить",
  "Door Frame": "Дверная рама",
  "Door Texture": "Текстура двери",
  "Double": "Двойное",
  "Double Door": "Двойная дверь",
  "Elevation Groups": "Группы высот",
  "Elevation Keys": "Клавиши высоты",
  "Elevation Wheel": "Высота колёсиком",
  "FA Cloud Assets": "Облачные объекты FA",
  "FA Cloud Tokens": "Облачные токены FA",
  "Failed": "Ошибка",
  "Fill Transform": "Трансформация заливки",
  "Finish Open Wall": "Завершить открытую стену",
  "Finish Path": "Завершить путь",
  "Flatten": "Свести",
  "Flatten & Selection": "Сведение и выделение",
  "Flip H": "Отразить по горизонтали",
  "Flip Hinge": "Перевернуть петлю",
  "Flip Horizontal": "Отразить по горизонтали",
  "Flip V": "Отразить по вертикали",
  "Flip Vertical": "Отразить по вертикали",
  "Folders": "Папки",
  "Foreground": "Передний план",
  "Freeze Preview": "Зафиксировать предпросмотр",
  "Grid Density": "Плотность сетки",
  "Grid Snap": "Привязка к сетке",
  "Height Map": "Карта высот",
  "Help": "Справка",
  "High (4096) - recommended": "Высокое (4096) — рекомендуется",
  "Insert Point": "Вставить точку",
  "Invert Eraser": "Инвертировать ластик",
  "Keep Editing": "Продолжить редактирование",
  "Keep Placing": "Продолжить размещение",
  "Layer Rows": "Строки слоёв",
  "Lift": "Подъём",
  "Loading Cloud Assets...": "Загрузка облачных объектов...",
  "Loading cloud tokens…": "Загрузка облачных токенов…",
  "Local file": "Локальный файл",
  "Low (1024) - best performance": "Низкое (1024) — лучшая производительность",
  "Mask": "Маска",
  "Medium (2048)": "Среднее (2048)",
  "Min": "Мин.",
  "Missing local output": "Локальный файл отсутствует",
  "Mode": "Режим",
  "Multi-select": "Множественный выбор",
  "Multiply": "Умножение",
  "My Assets Library": "Моя библиотека объектов",
  "New Actor Type": "Тип нового актёра",
  "Nexus Edit": "Редактировать в Nexus",
  "No cloud match": "Нет совпадения в облаке",
  "Normal": "Обычный",
  "Offset X": "Смещение X",
  "Offset Y": "Смещение Y",
  "Open Direction": "Направление открытия",
  "Overlay": "Наложение",
  "Overwrite": "Перезаписать",
  "Paint": "Рисовать",
  "Path Editor": "Редактор путей",
  "Path Editor v2": "Редактор путей v2",
  "Path Folders": "Папки путей",
  "Path Preview": "Предпросмотр пути",
  "Place Portal": "Разместить портал",
  "Portals / Selection": "Порталы / выделение",
  "Preparing fill texture...": "Подготовка текстуры заливки...",
  "Preparing path texture...": "Подготовка текстуры пути...",
  "Preparing texture...": "Подготовка текстуры...",
  "Preparing wall path...": "Подготовка текстуры стены...",
  "Range Select": "Выбор диапазона",
  "Remove Vertex": "Удалить вершину",
  "Rename": "Переименовать",
  "Rename Group": "Переименовать группу",
  "Rename Layer": "Переименовать слой",
  "Reorder": "Изменить порядок",
  "Roll HP formula": "Бросить формулу хитов",
  "Rotate": "Повернуть",
  "Scatter Brush Settings": "Настройки кисти рассеивания",
  "Scatter Preview": "Предпросмотр рассеивания",
  "Screen": "Экран",
  "Search & Filters": "Поиск и фильтры",
  "Select Segment": "Выбрать сегмент",
  "Selected Path": "Выбранный путь",
  "Session": "Сеанс",
  "Show Width Tangents": "Показывать маркеры ширины",
  "Size": "Размер",
  "Soft Light": "Мягкий свет",
  "Split Path": "Разделить путь",
  "Stamp %": "Размер отпечатка %",
  "Starting/Ending": "Начало / конец",
  "Suggested Matches": "Предлагаемые совпадения",
  "Temp Eraser": "Временный ластик",
  "Tension": "Натяжение",
  "Texture": "Текстура",
  "Texture Folders": "Папки текстур",
  "Texture Opacity": "Непрозрачность текстуры",
  "Texture Painter": "Рисование текстурами",
  "Texture Painting": "Рисование текстурами",
  "Texture Preview": "Предпросмотр текстуры",
  "Tile Sheet": "Карточка тайла",
  "Toggle Eraser": "Переключить ластик",
  "Token Folders": "Папки токенов",
  "Token Placement": "Размещение токенов",
  "Tool Opacity": "Непрозрачность инструмента",
  "Tool options": "Параметры инструмента",
  "Ultra (8192)": "Ультра (8192)",
  "Use Selected as Defaults": "Использовать выбранное по умолчанию",
  "Use actor preset": "Использовать шаблон актёра",
  "Wall Opacity": "Непрозрачность стены",
  "Wall Scale": "Масштаб стены",
  "Wall Tension": "Натяжение стены",
  "Wall Texture Offset": "Смещение текстуры стены",
  "Wall Transform": "Трансформация стены",
  "Wall/Building": "Стена / постройка",
  "Window Frame": "Рама окна",
  "Window Sill": "Подоконник",
  "Window Texture": "Текстура окна",
  "bottomRight": "снизу справа",
  "center": "по центру",
  "topLeft": "сверху слева",
  "Animate both panes": "Анимировать обе створки",
  "Apply the current door defaults to the selected door": "Применить текущие настройки двери к выбранной двери",
  "Apply the current window defaults to the selected window": "Применить текущие настройки окна к выбранному окну",
  "Asset Sources Config": "Настройка источников объектов",
  "Bookmark": "Закладка",
  "Cancel Scatter Session": "Отменить сеанс рассеивания",
  "Clear current portal selection": "Снять текущее выделение портала",
  "Deconstruct Flattened Tile": "Разобрать сведённый тайл",
  "Disconnect Patreon": "Отключить Patreon",
  "Door Options": "Параметры двери",
  "Filter Actor Compendiums": "Фильтр сборников актёров",
  "Flatten Tiles": "Свести тайлы",
  "Folder Selection": "Выбор папок",
  "Folders Filter": "Фильтр папок",
  "Layer Manager Help": "Справка менеджера слоёв",
  "Mirror the selected door texture across the wall thickness": "Отразить выбранную текстуру двери поперёк толщины стены",
  "Mirror the selected door texture along the portal width": "Отразить выбранную текстуру двери вдоль ширины портала",
  "Mirror window glass texture across the wall thickness": "Отразить текстуру стекла поперёк толщины стены",
  "Mirror window glass texture along the portal width": "Отразить текстуру стекла вдоль ширины портала",
  "Overwrite Existing Export Files?": "Перезаписать существующие экспортированные файлы?",
  "Overwrite Existing Flatten Files?": "Перезаписать существующие файлы сведения?",
  "Select Folder": "Выбрать папку",
  "Select Output Folder": "Выбрать папку вывода",
  "Spawn a paired door leaf": "Создать парную створку двери",
  "Swap door endpoints (hinge flip)": "Поменять концы двери местами (перевернуть петлю)",
  "Swap window endpoints (hinge flip)": "Поменять концы окна местами (перевернуть петлю)",
  "Token Sources Config": "Настройка источников токенов",
  "Tool Help": "Справка по инструменту",
  "Update Actor Token": "Обновить токен актёра",
  "Use Foundry animated window instead of static texture": "Использовать анимированное окно Foundry вместо статической текстуры",
  "Use the selected door as the default for new placements": "Использовать выбранную дверь по умолчанию для новых размещений",
  "Use the selected window as the default for new placements": "Использовать выбранное окно по умолчанию для новых размещений",
  "Window Options": "Параметры окна",
  "Adjust wall HSBC settings.": "Настроить параметры оттенка, насыщенности, яркости и контраста стены.",
  "Bias the scatter toward the edge or the center. 0% favors the edge, 50% is balanced, and 100% favors the center.": "Смещает рассеивание к краю или центру. 0% — к краю, 50% — равномерно, 100% — к центру.",
  "Darken or brighten the current texture.": "Сделать текущую текстуру темнее или светлее.",
  "Diameter of the scatter brush in scene pixels.": "Диаметр кисти рассеивания в пикселях сцены.",
  "Display width adjustment handles.": "Показывать маркеры регулировки ширины.",
  "Distance between repeated scatter stamps as a percent of the brush diameter.": "Расстояние между повторными отпечатками в процентах от диаметра кисти.",
  "Hide the placed asset art while keeping its FA Nexus shadow visible.": "Скрыть изображение размещённого объекта, оставив видимой его тень FA Nexus.",
  "How many assets each scatter stamp places.": "Количество объектов в каждом отпечатке рассеивания.",
  "Increase or reduce color intensity.": "Увеличить или уменьшить насыщенность цвета.",
  "Insert animated Foundry doors": "Вставлять анимированные двери Foundry",
  "Insert gaps in walls": "Вставлять проёмы в стенах",
  "Insert windows with sill, glass, and frame": "Вставлять окна с подоконником, стеклом и рамой",
  "Legacy FA Nexus path tiles must be migrated to v2 before editing in Foundry v14.": "Старые тайлы путей FA Nexus необходимо перенести в формат v2 перед редактированием в Foundry v14.",
  "Mirror asset left/right.": "Отразить объект слева направо.",
  "Mirror asset top/bottom.": "Отразить объект сверху вниз.",
  "Mirror token left/right.": "Отразить токен слева направо.",
  "Mirror token up/down.": "Отразить токен сверху вниз.",
  "Paint to scatter multiple assets per stamp.": "Рисовать, размещая несколько объектов каждым отпечатком.",
  "Place one asset at a time.": "Размещать по одному объекту.",
  "Preview tile elevation in Foundry scene units.": "Высота предпросмотра тайла в единицах сцены Foundry.",
  "Push darks and lights apart or flatten them.": "Усилить различие между тёмными и светлыми участками или сгладить его.",
  "Redo the last undone scatter stroke.": "Повторить последний отменённый штрих рассеивания.",
  "Remove scattered assets with the brush during merge sessions.": "Удалять рассеянные объекты кистью во время сеансов объединения.",
  "Rotate the source colors around the hue wheel.": "Сместить исходные цвета по цветовому кругу.",
  "Toggle drop shadows for asset placements.": "Включить или отключить тени размещаемых объектов.",
  "Toggle fade at the end of the path.": "Включить или отключить плавное исчезновение в конце пути.",
  "Toggle fade at the start of the path.": "Включить или отключить плавное появление в начале пути.",
  "Toggle shrink at the end of the path.": "Включить или отключить сужение в конце пути.",
  "Toggle shrink at the start of the path.": "Включить или отключить сужение в начале пути.",
  "Undo the last scatter stroke.": "Отменить последний штрих рассеивания.",
  "Adjust hue, saturation, brightness, and contrast for placed assets and scatter previews.": "Настроить оттенок, насыщенность, яркость и контраст размещённых объектов и предпросмотра рассеивания.",
  "Adjust hue, saturation, brightness, and contrast for the current artwork.": "Настроить оттенок, насыщенность, яркость и контраст текущего изображения.",
  "Automatically select which Forge storage bucket FA Nexus uses for local scans and downloads.": "Автоматически выбирать хранилище Forge, которое FA Nexus использует для локального сканирования и загрузок.",
  "Expands the shadow mask before blurring (world pixels).": "Расширяет маску тени перед размытием (в пикселях мира).",
  "If enabled, FA Nexus will log detailed debug information to the browser console to help troubleshoot issues.": "Если включено, FA Nexus будет записывать подробную отладочную информацию в консоль браузера.",
  "Manual elevation entry for the current placement preview.": "Ручной ввод высоты для текущего предпросмотра размещения.",
  "Size sets the brush diameter. Density is assets per stamp. Deviation shifts scatter toward the edge or center. Spacing sets the distance between stamp groups.": "Размер задаёт диаметр кисти. Плотность — число объектов на отпечаток. Отклонение смещает рассеивание к краю или центру. Интервал задаёт расстояние между группами отпечатков.",
  "Snap to: Full, 1/2, 1/3, 1/4, 1/5": "Привязка: целая клетка, 1/2, 1/3, 1/4, 1/5",
  "Softens the shadow edges using a post-process blur.": "Смягчает края тени постобработкой размытия.",
  "Transparency of the rendered shadow.": "Прозрачность отрисованной тени.",
  "When enabled, the Nexus launcher button floats freely and can be dragged anywhere on screen instead of being docked above the players list.": "Если включено, кнопка запуска Nexus свободно перемещается по экрану вместо закрепления над списком игроков.",
  "Asset placement elevation": "Высота размещения объекта",
  "Black pixel fuzziness": "Допуск чёрных пикселей",
  "Brush size": "Размер кисти",
  "Brush spacing": "Интервал кисти",
  "Draw simplification": "Упрощение рисования",
  "Height map contrast": "Контраст карты высот",
  "Height map lift": "Подъём карты высот",
  "Height threshold maximum": "Максимальный порог высоты",
  "Height threshold minimum": "Минимальный порог высоты",
  "Opacity feather fade in length": "Длина плавного появления прозрачности",
  "Opacity feather fade out length": "Длина плавного исчезновения прозрачности",
  "Particle density": "Плотность частиц",
  "Particle size": "Размер частиц",
  "Path elevation": "Высота пути",
  "Path feather end length": "Длина сужения конца пути",
  "Path feather start length": "Длина сужения начала пути",
  "Path opacity": "Непрозрачность пути",
  "Path scale": "Масштаб пути",
  "Path shadow offset": "Смещение тени пути",
  "Path tension": "Натяжение пути",
  "Scatter density": "Плотность рассеивания",
  "Scatter deviation": "Отклонение рассеивания",
  "Scatter size": "Размер рассеивания",
  "Scatter spacing": "Интервал рассеивания",
  "Spray deviation": "Отклонение распыления",
  "Texture elevation": "Высота текстуры",
  "Texture fill opacity": "Непрозрачность заливки текстуры",
  "Texture offset X": "Смещение текстуры X",
  "Texture offset Y": "Смещение текстуры Y",
  "Texture opacity": "Непрозрачность текстуры",
  "Wall opacity": "Непрозрачность стены",
  "Wall path scale": "Масштаб пути стены",
  "Wall tension": "Натяжение стены",
  "Access the Forgotten Adventures cloud assets library.": "Открыть облачную библиотеку объектов Forgotten Adventures.",
  "Access the Forgotten Adventures cloud tokens library.": "Открыть облачную библиотеку токенов Forgotten Adventures.",
  "Add a vertex on a segment while editing shapes.": "Добавить вершину на сегмент при редактировании формы.",
  "Add or remove a layer from the current selection.": "Добавить слой к текущему выделению или убрать его из выделения.",
  "Adjust brush size.": "Изменить размер кисти.",
  "Adjust elevation by 0.01; add Shift for 0.1 or Ctrl/Cmd for 0.001.": "Изменять высоту на 0,01; с Shift — на 0,1, с Ctrl/Cmd — на 0,001.",
  "Adjust the current layer-manager selection without relying on the mouse wheel.": "Изменять высоту текущего выделения в менеджере слоёв без колёсика мыши.",
  "Adjust the repeating texture scale.": "Изменить масштаб повторяющейся текстуры.",
  "Adjust tile elevation by 0.01; add Shift for 0.1 or Ctrl/Cmd for 0.001.": "Изменять высоту тайла на 0,01; с Shift — на 0,1, с Ctrl/Cmd — на 0,001.",
  "Adjust wall elevation by 0.01; add Shift for 0.1 or Ctrl/Cmd for 0.001.": "Изменять высоту стены на 0,01; с Shift — на 0,1, с Ctrl/Cmd — на 0,001.",
  "Cancel asset placement.": "Отменить размещение объекта.",
  "Cancel the current session.": "Отменить текущий сеанс.",
  "Cancel token placement.": "Отменить размещение токена.",
  "Commit the current session.": "Применить изменения текущего сеанса.",
  "Convert the latest or hovered segment into an arc.": "Преобразовать последний или наведённый сегмент в дугу.",
  "Delete the closest point.": "Удалить ближайшую точку.",
  "Drag layers onto rows or group headers to reorder or change elevation.": "Перетаскивайте слои на строки или заголовки групп, чтобы менять порядок или высоту.",
  "Finish an inner-wall polyline without closing it.": "Завершить ломаную внутренней стены, не замыкая её.",
  "Finish the current path.": "Завершить текущий путь.",
  "Flatten the selected tiles into a WebP image while preserving FA Nexus metadata for future restoration.": "Свести выбранные тайлы в изображение WebP, сохранив метаданные FA Nexus для последующего восстановления.",
  "Hold while scrolling to adjust subgrid density without toggling snap.": "Удерживайте клавишу при прокрутке, чтобы менять плотность подсетки, не отключая привязку.",
  "In Edit Shapes, add or toggle a wall segment in the current segment selection.": "В режиме редактирования форм добавить сегмент стены к текущему выделению или переключить его выделение.",
  "In Edit Shapes, select a wall segment for per-segment wall overrides.": "В режиме редактирования форм выбрать сегмент стены для индивидуальных настроек.",
  "In Edit Shapes, split the hovered open path at the hovered non-endpoint.": "В режиме редактирования форм разделить открытый путь в наведённой внутренней точке.",
  "Insert a point along the current path.": "Вставить точку на текущем пути.",
  "Keep placement active after a successful drop.": "Оставлять режим размещения активным после успешного размещения.",
  "Nudge elevation with the same step modifiers as Alt+Wheel.": "Точно изменять высоту с теми же шагами, что и Alt+колесо.",
  "Nudge selected layers or scene markers by 0.01; Shift uses 0.1 and Ctrl/Cmd uses 0.001.": "Изменять высоту выбранных слоёв или маркеров сцены на 0,01; Shift — 0,1, Ctrl/Cmd — 0,001.",
  "Nudge tile elevation with the same step modifiers as Alt+Wheel.": "Точно изменять высоту тайла с теми же шагами, что и Alt+колесо.",
  "Nudge wall elevation with the same step modifiers as Alt+Wheel.": "Точно изменять высоту стены с теми же шагами, что и Alt+колесо.",
  "Open contextual actions for a layer or group.": "Открыть контекстные действия для слоя или группы.",
  "Open contextual tool help.": "Открыть контекстную справку по инструменту.",
  "Open layer manager help from the header.": "Открыть справку менеджера слоёв из заголовка.",
  "Open the standard Foundry tile sheet for a layer row.": "Открыть стандартную карточку тайла Foundry для строки слоя.",
  "Paint or apply fills, depending on the active mode.": "Рисовать кистью или применять заливку в зависимости от активного режима.",
  "Place the configured door or window on the hovered wall.": "Разместить настроенную дверь или окно на наведённой стене.",
  "Redo the last undone change.": "Повторить последнее отменённое изменение.",
  "Remove a vertex while editing shapes.": "Удалить вершину при редактировании формы.",
  "Rename an elevation group from its header.": "Переименовать группу высот из её заголовка.",
  "Rename the currently selected layer.": "Переименовать выбранный слой.",
  "Rotate the preview; add Shift for 1° steps.": "Поворачивать предпросмотр; с Shift — шаг 1°.",
  "Rotate the token preview; add Shift for finer steps.": "Поворачивать предпросмотр токена; с Shift — более мелкий шаг.",
  "Scale the preview before placement.": "Изменять масштаб предпросмотра перед размещением.",
  "Select a contiguous range of visible layers.": "Выбрать непрерывный диапазон видимых слоёв.",
  "Tap to toggle grid snapping.": "Нажмите, чтобы включить или отключить привязку к сетке.",
  "Temporarily activate the erase mode while held.": "Временно включать режим ластика, пока клавиша удерживается.",
  "Temporarily invert scatter erase mode while held.": "Временно инвертировать режим ластика рассеивания, пока клавиша удерживается.",
  "Toggle scatter erase mode.": "Включить или отключить режим ластика рассеивания.",
  "Toggle the erase mode.": "Включить или отключить режим ластика.",
  "Toggle whether the preview follows your cursor.": "Включить или отключить следование предпросмотра за курсором.",
  "Undo the last change.": "Отменить последнее изменение.",
  "Block out outer walls, inner walls, and portals, then refine shapes, stacking, and appearance in-place.": "Создавайте внешние и внутренние стены и порталы, затем на месте уточняйте форму, порядок слоёв и внешний вид.",
  "Draw, reshape, and re-edit path tiles with live previews, draw/curve modes, and path, placement, feathering, and shadow controls.": "Рисуйте и редактируйте тайлы путей с живым предпросмотром, режимами рисования и кривых, настройками пути, размещения, плавных краёв и теней.",
  "Paint or erase masked tiling directly on a tile, including shape selections and height-aware masking.": "Рисуйте или стирайте маскированную текстуру прямо на тайле, включая выделение форм и маскирование по карте высот.",
  "Place single assets or paint scatter sessions with shared snap, rotation, elevation, and placement controls.": "Размещайте отдельные объекты или рисуйте рассеиванием с общими настройками привязки, поворота, высоты и размещения.",
  "Place tokens onto the canvas or actor sidebar targets with shared rotation, mirroring, grid snap, and place-as controls.": "Размещайте токены на холсте или в целях боковой панели актёров с общими настройками поворота, отражения, привязки и режима размещения.",
  "Search, filter, rename, regroup, reorder, and batch-edit scene layers by elevation without leaving the sidebar.": "Ищите, фильтруйте, переименовывайте, группируйте, меняйте порядок и пакетно редактируйте слои сцены по высоте, не покидая боковую панель.",
  "Single placement drops one asset at a time, while scatter brush mode paints repeated stamps until you commit or cancel the session.": "Одиночный режим размещает по одному объекту, а кисть рассеивания наносит повторяющиеся отпечатки до применения или отмены сеанса.",
  "Scatter edit sessions let you add new stamps, erase existing stamps, and merge the result back into the tile.": "Сеанс редактирования рассеивания позволяет добавлять новые отпечатки, стирать существующие и объединять результат обратно в тайл.",
  "Panel controls drive randomization, shading, mirroring, and transform ranges before placement.": "Параметры панели управляют случайностью, цветокоррекцией, отражением и диапазонами трансформации до размещения.",
  "Placement can target either the canvas or an actor row in the sidebar.": "Размещение может быть направлено на холст или строку актёра в боковой панели.",
  "Place As controls decide how new actors, links, names, and HP are derived for each drop.": "Параметры «Размещать как» определяют создание актёров, связи, имена и хиты для каждого размещения.",
  "Brush, fill, and selection tools all write into the current tile mask until you commit the session.": "Кисть, заливка и инструменты выделения изменяют текущую маску тайла до применения сеанса.",
  "Height Map turns the texture into a smart paint mask, so you can paint only the parts of the texture that read as raised or recessed instead of painting the whole image evenly.": "Карта высот превращает текстуру в умную маску, позволяя рисовать только по выпуклым или углублённым участкам вместо равномерного покрытия всего изображения.",
  "Curve mode adds controlled points, while Draw mode sketches freehand segments.": "Режим «Кривая» добавляет управляемые точки, а «Рисование» создаёт сегменты от руки.",
  "Edit Shapes reopens existing paths so you can move points, retune textures, and change stacking.": "«Редактировать формы» открывает существующие пути для перемещения точек, настройки текстур и изменения порядка.",
  "In Edit Shapes, press X while hovering a non-endpoint to split the hovered open path at that point.": "В режиме «Редактировать формы» нажмите X над внутренней точкой, чтобы разделить открытый путь в этом месте.",
  "Path, placement, feathering, and shadow panels all update the live preview before you commit.": "Панели пути, размещения, плавных краёв и теней обновляют живой предпросмотр до применения.",
  "Outer walls create closed geometry, while inner walls stay open and use the polygon lasso workflow.": "Внешние стены создают замкнутую геометрию, а внутренние остаются открытыми и используют режим многоугольного лассо.",
  "Edit Shapes lets you retune vertices, arcs, fill elevation, and stacking without starting over.": "«Редактировать формы» позволяет изменять вершины, дуги, высоту заливки и порядок без создания заново.",
  "In Edit Shapes, right-click a wall segment to target it for per-segment texture, offset, opacity, HSBC, and shadow overrides. Ctrl/Cmd+right-click adds more segments to the selection.": "В режиме «Редактировать формы» щёлкните ПКМ по сегменту стены для индивидуальной текстуры, смещения, непрозрачности, HSBC и тени. Ctrl/Cmd+ПКМ добавляет сегменты к выделению.",
  "Use the Portals tab after the wall geometry exists to add doors, windows, and gaps.": "После создания геометрии стен используйте вкладку «Порталы», чтобы добавлять двери, окна и проёмы."
})) {
  RU.set(key, value);
}

for (const [key, value] of Object.entries({
  "Context Menu": "Контекстное меню",
  "HSBC": "HSBC",
  "Alt+Click": "Alt+щелчок",
  "Ctrl+Click": "Ctrl+щелчок",
  "Right-Click": "ПКМ",
  "Click": "Щелчок",
  "Debug Colors": "Отладочные цвета",
  "Elev": "Выс.",
  "Cached folders not listed above:": "Кэшированные папки, не перечисленные выше:",
  "Source:": "Источник:",
  "Filter preset:": "Набор фильтров:",
  "Version: —": "Версия: —",
  "Update the prototype token for": "Обновить прототип токена для",
  "e.g. 40 or 20-85": "например, 40 или 20–85",
  "to exclude": "чтобы исключить",
  "to expand/collapse": "чтобы развернуть/свернуть",
  "to multi-select •": "для множественного выбора •",
  "to select •": "для выбора •",
  "enabled / total": "включено / всего",
  "included / total": "включено / всего",
  "item(s)": "элем.",
  "cached item(s)": "кэшированных элементов",
  "— item(s)": "— элем.",
  "— items": "— элементов"
})) {
  RU.set(key, value);
}

for (const [key, value] of Object.entries({
  "Show Main Color Only": "Показывать только основной цвет",
  "Layer Manager Nested Elevation Groups": "Вложенные группы высот менеджера слоёв"
})) {
  RU.set(key, value);
}

for (const [key, value] of Object.entries({
  "Walls": "Стены",
  "Portals": "Порталы",
  "Outer Walls": "Внешние стены",
  "Inner Walls": "Внутренние стены",
  "Wall Texture": "Текстура стены",
  "Fill Texture": "Текстура заливки",
  "Foundry Regions": "Области Foundry",
  "Create Foundry Walls": "Создавать стены Foundry",
  "Create Foundry Regions": "Создавать области Foundry"
})) {
  RU.set(key, value);
}

const RU_LOWER = new Map(Array.from(RU.entries(), ([key, value]) => [String(key).toLocaleLowerCase("en-US"), value]));


// Некоторые подписи у Nexus создаются динамически. Здесь только безопасные шаблоны.
const PATTERNS = [
  [/^Adventurer supporter\s*(.*)$/i, (_m, rest) => `Подписка Adventurer${rest ? ` ${rest}` : ""}`],
  [/^Update the prototype token for\s+(.+)$/i, (_m, name) => `Обновить прототип токена для ${name}`],
  [/^(\d+)\s+items?$/i, (_m, n) => `${n} элем.`],
  [/^(\d+)\s+assets?$/i, (_m, n) => `${n} объектов`],
  [/^(\d+)\s+tiles?$/i, (_m, n) => `${n} тайлов`],
  [/^Selected:\s*(\d+)$/i, (_m, n) => `Выбрано: ${n}`],
  [/^Source:\s*(.+)$/i, (_m, v) => `Источник: ${v}`],
  [/^Filter preset:\s*(.+)$/i, (_m, v) => `Набор фильтров: ${v}`],
  [/^Snap to\s+(.+)$/i, (_m, v) => `Привязка: ${v}`],
  [/^Elevation\s+(.+)$/i, (_m, v) => `Высота ${v}`],
  [/^Selected Wall\s*:?\s*(.*)$/i, (_m, v) => `Выбранная стена${v ? `: ${v}` : ""}`]
];

function translateString(value) {
  if (typeof value !== "string") return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const core = value.trim();
  if (!core) return value;

  const decoded = core.replaceAll("&amp;", "&").replaceAll("&ndash;", "–");
  let translated = RU.get(core) ?? RU.get(decoded);
  if (!translated) {
    translated = RU_LOWER.get(core.toLocaleLowerCase("en-US"))
      ?? RU_LOWER.get(decoded.toLocaleLowerCase("en-US"));
  }

  if (translated) {
    const letters = core.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
    const isUpper = letters.length > 1 && letters === letters.toUpperCase();
    if (isUpper) translated = translated.toLocaleUpperCase("ru-RU");
    return `${leading}${translated}${trailing}`;
  }

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
  "Asset Placement Options",
  "Token Placement Options",
  "Texture Painter Options",
  "Path Editor",
  "Path Editor v2 Options",
  "Building Editor Options",
  "Building Tool Options",
  "Generated File Cleanup",
  "Generated Cleanup",
  "Patreon Authentication",
  "Layer Manager",
  "Place Tokens As",
  "Portal Texture Grid"
];

const NEXUS_WINDOW_SELECTOR = ".application, .app, .window-app, .dialog";
const NEXUS_SCOPE_ATTR = "data-fa-nexus-ru-scope";
const NEXUS_SCOPE_SELECTOR = `[${NEXUS_SCOPE_ATTR}="true"]`;
const NEXUS_SETTINGS_SELECTOR = "[name^='fa-nexus.'], [data-setting-id^='fa-nexus.'], [data-key^='fa-nexus.']";

function isKnownNexusWindow(win) {
  if (!isElement(win)) return false;
  const title = win.querySelector?.(".window-title, .window-header h4, header h4")?.textContent?.trim() ?? "";
  return NEXUS_WINDOW_TITLES.some(t => title.includes(t));
}

function markNexusScope(el) {
  if (!isElement(el)) return null;

  const existing = el.closest?.(NEXUS_SCOPE_SELECTOR);
  if (existing) return existing;

  const branded = el.matches?.(NEXUS_SELECTOR)
    ? el
    : el.closest?.(NEXUS_SELECTOR);

  if (branded) {
    const win = branded.closest?.(NEXUS_WINDOW_SELECTOR);
    const scope = win || branded;
    scope.setAttribute(NEXUS_SCOPE_ATTR, "true");
    return scope;
  }

  const win = el.matches?.(NEXUS_WINDOW_SELECTOR)
    ? el
    : el.closest?.(NEXUS_WINDOW_SELECTOR);

  if (win && isKnownNexusWindow(win)) {
    win.setAttribute(NEXUS_SCOPE_ATTR, "true");
    return win;
  }

  return null;
}

function isNexusScope(el) {
  return !!(isElement(el) && el.closest?.(NEXUS_SCOPE_SELECTOR));
}

function translateAttributesInScope(el) {
  if (!isElement(el)) return;
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

function translateTextNodeInScope(node) {
  if (!node || node.nodeType !== Node.TEXT_NODE) return;
  const parent = node.parentElement;
  if (!parent || ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)) return;
  const oldValue = node.nodeValue;
  const newValue = translateString(oldValue);
  if (newValue !== oldValue) node.nodeValue = newValue;
}

function translateTreeInScope(root) {
  if (!root) return;

  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNodeInScope(root);
    return;
  }
  if (!isElement(root)) return;

  translateAttributesInScope(root);

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) translateTextNodeInScope(current);
    else translateAttributesInScope(current);
    current = walker.nextNode();
  }
}

function discoverNexusScopes(root) {
  if (!root) return [];

  const scopes = new Set();
  const register = (candidate) => {
    const scope = markNexusScope(candidate);
    if (scope) scopes.add(scope);
  };

  if (root.nodeType === Node.TEXT_NODE) {
    const parent = root.parentElement;
    const existing = parent?.closest?.(NEXUS_SCOPE_SELECTOR);
    if (existing) scopes.add(existing);
    return Array.from(scopes);
  }

  if (!isElement(root)) return [];

  const existing = root.closest?.(NEXUS_SCOPE_SELECTOR);
  if (existing) {
    scopes.add(existing);
    return Array.from(scopes);
  }

  if (root.matches?.(NEXUS_SELECTOR) || root.matches?.(NEXUS_WINDOW_SELECTOR)) {
    register(root);
  }

  // ВАЖНО: поиск выполняется ОДИН раз только внутри нового поддерева.
  // Старый код запускал querySelector по целому окну для КАЖДОГО текста/элемента,
  // что превращало открытие большого листа D&D5e почти в O(n²).
  const candidates = root.querySelectorAll?.(`${NEXUS_SELECTOR}, ${NEXUS_WINDOW_SELECTOR}`) ?? [];
  for (const candidate of candidates) {
    if (candidate.matches?.(NEXUS_SELECTOR) || isKnownNexusWindow(candidate)) {
      register(candidate);
    }
  }

  return Array.from(scopes);
}

function translateTree(root) {
  if (!root) return;

  if (root.nodeType === Node.TEXT_NODE) {
    const scope = root.parentElement?.closest?.(NEXUS_SCOPE_SELECTOR);
    if (scope) translateTextNodeInScope(root);
    return;
  }

  if (!isElement(root)) return;

  const existingScope = root.closest?.(NEXUS_SCOPE_SELECTOR);
  if (existingScope) {
    translateTreeInScope(root);
    return;
  }

  const scopes = discoverNexusScopes(root);
  for (const scope of scopes) translateTreeInScope(scope);
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
    const inputs = root.querySelectorAll?.(NEXUS_SETTINGS_SELECTOR) ?? [];
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

function nodeContainsNexusSettings(node) {
  if (!isElement(node)) return false;
  return node.matches?.(NEXUS_SETTINGS_SELECTOR)
    || !!node.querySelector?.(NEXUS_SETTINGS_SELECTOR);
}

function installObserver() {
  globalThis.__faNexusRuObserver?.disconnect?.();

  const observer = new MutationObserver((mutations) => {
    const settingsRoots = new Set();

    for (const mutation of mutations) {
      if (mutation.type === "characterData") {
        const parent = mutation.target?.parentElement;
        // Для обычного Foundry/D&D5e это одна дешёвая closest-проверка.
        // Никаких querySelector по всему окну.
        if (parent?.closest?.(NEXUS_SCOPE_SELECTOR)) {
          translateTextNodeInScope(mutation.target);
        }
        continue;
      }

      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement;
          if (parent?.closest?.(NEXUS_SCOPE_SELECTOR)) {
            translateTextNodeInScope(node);
          }
          continue;
        }

        if (!isElement(node)) continue;

        const existingScope = node.closest?.(NEXUS_SCOPE_SELECTOR);
        if (existingScope) {
          translateTreeInScope(node);
        } else {
          const scopes = discoverNexusScopes(node);
          for (const scope of scopes) translateTreeInScope(scope);
        }

        if (nodeContainsNexusSettings(node)) {
          const settingsRoot = node.closest?.(NEXUS_WINDOW_SELECTOR) || node;
          settingsRoots.add(settingsRoot);
        }
      }
    }

    // Больше НЕ сканируем весь document после каждой мутации.
    for (const root of settingsRoots) translateSettingsDom(root);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
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

  // На старте ищем только реальные области FA Nexus. Не обходим весь DOM
  // и не вызываем проверку области для каждого узла страницы.
  for (const scope of discoverNexusScopes(document.body)) {
    translateTreeInScope(scope);
  }
  translateSettingsDom(document);
  installObserver();

  // Повтор после отрисовки приложений Foundry/Nexus — только discovery,
  // без полного translateTree(document.body).
  setTimeout(() => {
    for (const scope of discoverNexusScopes(document.body)) {
      translateTreeInScope(scope);
    }
  }, 500);

  console.log(`${MODULE_ID} | Русский перевод FA Nexus включён`);
});
