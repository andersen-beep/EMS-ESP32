import type { BaseTranslation } from '../i18n-types';

const pl: BaseTranslation = {
  LANGUAGE: 'Język',
  RETRY: 'Ponów',
  LOADING: 'Ładowanie',
  IS_REQUIRED: 'Pole {0} nie może być puste!',
  SIGN_IN: 'Zaloguj się',
  SIGN_OUT: 'Wyloguj się',
  USERNAME: '{{Użytkownik|Nazwa użytkownika|}}',
  PASSWORD: 'Hasło',
  SU_PASSWORD: 'Hasło "su"',
  SETTINGS_OF: 'Ustawienia {0}',
  HELP: 'Pomoc',
  LOGGED_IN: 'Zalogowano użytkownika {name}.',
  PLEASE_SIGNIN: 'Zaloguj się aby kontynuować.',
  UPLOAD_SUCCESSFUL: 'Wysyłanie zakończone.',
  DOWNLOAD_SUCCESSFUL: 'Pobieranie zakończone.',
  INVALID_LOGIN: 'Nieprawidłowy użytkownik lub hasło!',
  NETWORK: '{{Sieć|sieci|}}',
  SECURITY: '{{B|b|}}ezpieczeństw{{o|a|}}',
  ONOFF_CAP: 'wł./wył.',
  ONOFF: 'włączono/wyłączono',
  TYPE: '{{T|t|}}yp{{|u|}}',
  DESCRIPTION: 'Opis',
  ENTITIES: 'encj{{i|a|e|e|i}}',
  REFRESH: 'Odśwież',
  EXPORT: 'Eksportuj',
  FAVORITES: "Ulubione",
  DEVICE_DETAILS: 'Szczegóły urządzenia',
  ID_OF: 'ID {0}',
  DEVICE: 'urządzenia',
  PRODUCT: 'produktu',
  BRAND: 'Marka',
  VERSION: 'Wersja',
  ENTITY_NAME: '{{N|n|}}azwa encji',
  VALUE: '{{W|w|w}}artość',
  DEVICES: 'Urządzenia',
  SENSORS: 'Czujniki',
  RUN_COMMAND: 'Wykonaj komendę',
  CHANGE_VALUE: 'Zmiana wartości',
  CANCEL: 'Anuluj',
  RESET: 'Reset{{uj|owanie|}}',
  APPLY_CHANGES: 'Zapisz zmiany ({0})',
  UPDATE: 'Zmień',
  EXECUTE: 'Wykonaj',
  REMOVE: 'Usuń',
  PROBLEM_UPDATING: 'Problem z uaktualnieniem!',
  PROBLEM_LOADING: 'Problem z załadowaniem!',
  ANALOG_SENSOR: '{{u|u||ustawienia u|ustawień u}}rządzeni{{a podłączonego do EMS-ESP|e||a podłączonego do EMS-ESP|a podłączonego do EMS-ESP}}',
  ANALOG_SENSORS: 'Urządzenia podłączone do EMS-ESP',
  SETTINGS: '{{U|u|}}stawienia',
  UPDATED_OF: 'Zaktualizowano {0}.',
  UPDATE_OF: 'Aktualizacja {0}',
  REMOVED_OF: 'Usunięto ustawienia {0}.',
  DELETION_OF: 'Kasowanie {0}',
  OFFSET: 'Korekta ±',
  FACTOR: 'Mnożnik',
  FREQ: 'Częstotliwość',
  DUTY_CYCLE: 'Wypełnienie',
  UNIT: 'J.m.',
  STARTVALUE: 'Wartość początkowa',
  WARN_GPIO: 'Uwaga! Zachowaj ostrożność przypisując GPIO do urządzenia!',
  EDIT: 'Edycja',
  SENSOR: '{{c|ustawienia c||ustawień c|}}zujnika',
  TEMP_SENSOR: 'czujnika temperatury',
  TEMP_SENSORS: 'Czujniki temperatury 1-Wire®',
  WRITE_CMD_SENT: 'Komenda zapisu została wysłana.',
  EMS_BUS_WARNING: 'Brak połączenia z magistralą EMS. Jeśli ten błąd występuje dłużej niż kilka sekund, sprawdź ustawienia oraz profil płytki interfejsu.',
  EMS_BUS_SCANNING: 'Trwa skanowanie urządzeń na magistrali EMS...',
  CONNECTED: '{{połączono|połączenie|}}',
  TX_ISSUES: 'problem z zapisem na magistralę EMS, spróbuj wybrać inny "Tryb transmisji (Tx)"',
  DISCONNECTED: 'brak połączenia',
  EMS_SCAN: 'Czy na pewno wykonać pełne skanowanie magistrali EMS?',
  DATA_TRAFFIC: 'Data Traffic', // TODO translate
  EMS_DEVICE: 'Urządzenie EMS',
  SUCCESS: 'Udane',
  FAIL: 'Nieudane',
  QUALITY: 'Jakość',
  SCAN: 'Skanuj',
  STATUS_NAMES: [
    'EMS, telegramy odebrane (Rx)',
    'EMS, wysłane telegramy "odczyt" (Tx)',
    'EMS, wysłane telegramy "zapis" (Tx)',
    'Odczyty czujników temperatury 1-Wire®',
    'Odczyty czujników analogowych i cyfrowych',
    'Publikacje MQTT',
    'Wywołania API',
    'Wpisy w SysLog'
  ],
  NUM_DAYS: '{num} d{{ni|zień|ni|ni|ni}}',
  NUM_SECONDS: '{num} sekun{{d|da|dy|dy|d}}',
  NUM_HOURS: '{num} godzi{{n|na|ny|ny|n}}',
  NUM_MINUTES: '{num} minu{{t|ta|ty|ty|t}}',
  APPLICATION: 'Aplikacji',
  CUSTOMIZATIONS: 'Personalizacja',
  APPLICATION_RESTARTING: 'Trwa ponowne uruchamianie',
  BOARD_PROFILE: 'Profil płytki',
  CUSTOM: 'własny',
  GPIO_OF: 'GPIO {0}',
  BUTTON: 'przycisku',
  TEMPERATURE: '1-Wire®',
  PHY_TYPE: 'Typ układu ethernetowego (PHY)',
  DISABLED: '{{wyłączono|brak|}}',
  TX_MODE: 'EMS Tryb transmisji (Tx)',
  EMS_BUS: '{{magistrali EMS|na magistrali|}}',
  HARDWARE: 'sprzętowy',
  GENERAL_OPTIONS: 'Opcje podstawowe',
  LANGUAGE_ENTITIES: 'Język encji',
  HIDE_LED: 'Wyłącz LED',
  ENABLE_TELNET: 'Aktywuj dostęp dla konsoli Telnet',
  ENABLE_ANALOG: 'Aktywuj urządzenia GPIO (czujniki analogowe i cyfrowe oraz wyjścia cyfrowe)',
  CONVERT_FAHRENHEIT: 'Konwertuj temperatury do skali Fahrenheita',
  BYPASS_TOKEN: 'Pomiń autoryzację tokenem w wywołaniach API',
  READONLY: 'Tryb pracy "tylko do odczytu" (blokuje wszystkie komendy zapisu na magistralę EMS)',
  UNDERCLOCK_CPU: 'Obniż taktowanie CPU',
  REMOTE_TIMEOUT: 'Remote timeout',
  REMOTE_TIMEOUT_EN: 'Disable remote control on missing room temperature', // TODO translate
  HEATINGOFF: 'Uruchom kocioł z wymuszonym wyłączonym grzaniem',
  MIN_DURATION: 'Wait time',
  ENABLE_SHOWER_TIMER: 'Aktywuj minutnik prysznica',
  ENABLE_SHOWER_ALERT: 'Aktywuj alarm prysznica',
  TRIGGER_TIME: 'Wyzwalaj po czasie',
  COLD_SHOT_DURATION: 'Czas trwania tryśnięcia zimnej wody',
  FORMATTING_OPTIONS: 'Opcje formatowania',
  BOOLEAN_FORMAT_DASHBOARD: 'Wartości dwustanowe na pulpicie',
  BOOLEAN_FORMAT_API: 'Wartości dwustanowe w API/MQTT',
  ENUM_FORMAT: 'Wartości z listy w API/MQTT',
  INDEX: 'indeks',
  ENABLE_PARASITE: 'Aktywuj zasilanie 1-wire pasożytnicze',
  LOGGING: 'Logowanie',
  LOG_HEX: 'Loguj telegramy EMS w systemie szesnastkowym (hex)',
  ENABLE_SYSLOG: 'Aktywuj SysLog',
  LOG_LEVEL: 'Poziom logowania',
  MARK_INTERVAL: 'Znaczniki interwałów (0=brak)',
  SECONDS: 'sekund',
  MINUTES: 'minut',
  HOURS: 'godzin',
  RESTART: 'Restart',
  RESTART_TEXT: 'Aby zastosować wprowadzone zmiany, interfejs EMS-ESP {{musi zostać|zostanie|}} uruchomiony ponowni{{e.|e|}}',
  RESTART_CONFIRM: 'Na pewno chcesz zrestartować interfejs EMS-ESP?',
  COMMAND: '{{Komenda|KOMENDA|}}',
  CUSTOMIZATIONS_RESTART: 'Wszystkie personalizacje zostały usunięte. Restartuję...',
  CUSTOMIZATIONS_FULL: 'Wybrano za dużo obiektów. Wprowadzaj zmiany w mniejszych partiach.',
  CUSTOMIZATIONS_SAVED: 'Personalizacje zostały zapisane.',
  CUSTOMIZATIONS_HELP_1: 'Wybierz urządzenie EMS, a następnie dostosuj opcje lub kliknij na nazwie encji by tę nazwę zmienić',
  CUSTOMIZATIONS_HELP_2: 'oznacz jako ulubioną',
  CUSTOMIZATIONS_HELP_3: 'zablokuj akcje zapisu',
  CUSTOMIZATIONS_HELP_4: 'wyklucz z MQTT i API',
  CUSTOMIZATIONS_HELP_5: 'ukryć przed urządzeniami',
  CUSTOMIZATIONS_HELP_6: 'usuń z pamięci',
  SELECT_DEVICE: 'wybierz urządzenie',
  SET_ALL: 'Ustaw wszystko jako',
  OPTIONS: 'Opcje',
  NAME: '{{Nazwa|nazwa|}}',
  CUSTOMIZATIONS_RESET: 'Na pewno chcesz usunąć wszystkie personalizacje łącznie z ustawieniami dla czujników temperatury 1-Wire® i urządzeń podłączonych do EMS-ESP?',
  SUPPORT_INFORMATION: '{{I|i|}}nformacj{{e|i|}} o systemie',
  HELP_INFORMATION_1: 'Skorzystaj z wiki w internecie aby uzyskać instrukcje dotyczące konfiguracji EMS-ESP',
  HELP_INFORMATION_2: 'Dołącz do naszego serwera Discord by komunikować się na żywo ze społecznością',
  HELP_INFORMATION_3: 'Zaproponuj nową funkcjonalność lub zgłoś problem',
  HELP_INFORMATION_4: 'Zgłaszając problem, nie zapomnij pobrać i dołączyć informacji o swoim systemie!',
  HELP_INFORMATION_5: 'For help and questions please contact your installer', // TODO translate
  UPLOAD: 'Wysyłanie',
  DOWNLOAD: '{{P|p||P}}obier{{anie|z||z}}',
  INSTALL: 'Zainstalować {0}',
  ABORTED: 'zostało przerwane!',
  FAILED: 'nie powiodł{{o|a|}} się!',
  SUCCESSFUL: 'powiodło się.',
  SYSTEM: '{{S|s||s}}yste{{m|mu||mowy}}',
  LOG_OF: 'Log {0}',
  STATUS_OF: 'Status {0}',
  DOWNLOAD_UPLOAD: 'Plików przesyłanie',
  CLOSE: 'Zamknij',
  USE: 'Aby zaktualizować firmware skorzystaj z funkcji',
  FACTORY_RESET: 'Ustawienia fabryczne',
  SYSTEM_FACTORY_TEXT: 'Interfejs EMS-ESP został przywrócony do ustawień fabrycznych i zostanie teraz ponownie uruchomiony.',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Na pewno chcesz przywrócić ustawienia fabryczne interfejsu EMS-ESP?',
  STABLE: 'Stable', // TODO translate
  DEVELOPMENT: 'Testowe',
  EMS_ESP_VER: 'Wersja Firmware',
  UPTIME: 'Czas działania systemu',
  FREE_MEMORY: 'Wolne Memory',
  PSRAM: 'PSRAM (rozmiar / wolne)',
  FLASH: 'FLASH (rozmiar , taktowanie)',
  APPSIZE: 'Aplikacja (partycja: wykorzystane / wolne)',
  FILESYSTEM: 'System plików (wykorzystane / wolne)',
  BUFFER_SIZE: 'Maksymalna pojemność bufora (ilość wpisów)',
  COMPACT: 'Kompaktowy',
  DOWNLOAD_SETTINGS_TEXT: 'Create a backup of your configuration and settings', // TODO translate
  UPLOAD_TEXT: 'Upload a new firmware (.bin) file or a backup file (.json)', // TODO translate
  UPLOAD_DROP_TEXT: 'Przeciągnij tutaj plik lub kliknij',
  ERROR: 'Nieoczekiwany błąd, spróbuj ponownie!',
  TIME_SET: 'Zegar został ustawiony.',
  MANAGE_USERS: 'Zarządzanie użytkownikami',
  IS_ADMIN: '{{Administrator|Uprawnienia administratora|}}',
  USER_WARNING: 'Przynajmniej jeden użytkownik musi mieć uprawnienia administratora!',
  ADD: 'Doda{{j|wanie|}}',
  ACCESS_TOKEN_FOR: 'Token dostępu dla użytkownika',
  ACCESS_TOKEN_TEXT: 'Token jest używany w wywołaniach REST API wymagających autoryzacji. Można go przekazywać bezpośrednio lub przez URL.',
  GENERATING_TOKEN: 'Generowanie tokenu',
  USER: '{{Użytkownik|użytkownika|}}',
  MODIFY: 'Edycja',
  SU_TEXT: 'Hasło "su" (super-użytkownika) służy do podpisywania tokenów autoryzujących oraz włączania uprawnień administratora w konsoli.',
  NOT_ENABLED: 'nie aktywowano',
  ERRORS_OF: 'Błędy {0}',
  DISCONNECT_REASON: 'Przyczyna braku połączenia',
  ENABLE_MQTT: 'Aktywuj MQTT',
  BROKER: 'brokera',
  CLIENT: 'klienta',
  BASE_TOPIC: 'Prefiks bazowy (unikalny!)',
  OPTIONAL: 'opcjonalny',
  FORMATTING: 'Formatowanie',
  MQTT_FORMAT: 'Sposób publikowania danych',
  MQTT_NEST_1: 'zagnieżdżone w jednym temacie',
  MQTT_NEST_2: 'jako oddzielne tematy',
  MQTT_RESPONSE: 'Rezultat wykonania komendy publikuj w temacie "response"',
  MQTT_PUBLISH_TEXT_1: 'Tematy z pojedynczą wartością publikuj po jej zmianie',
  MQTT_PUBLISH_TEXT_2: 'Publikuj w tematach "command" (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Włącz opcję "MQTT discovery"',
  MQTT_PUBLISH_TEXT_4: 'Prefiks dla "MQTT discovery"',
  MQTT_PUBLISH_TEXT_5: 'Typ "MQTT discovery"',
  MQTT_PUBLISH_INTERVALS: 'Interwały publikowania',
  MQTT_INT_BOILER: 'Kotły i pompy ciepła',
  MQTT_INT_THERMOSTATS: 'Termostaty',
  MQTT_INT_SOLAR: 'Panele solarne',
  MQTT_INT_MIXER: 'Mieszacze',
  MQTT_INT_WATER: 'Woda',
  MQTT_QUEUE: 'Kolejka MQTT',
  DEFAULT: '{{Pozostałe|Domyślna|}}',
  MQTT_ENTITY_FORMAT: 'Format "Entity ID"',
  MQTT_ENTITY_FORMAT_0: 'długa nazwa (jak w v3.4)',
  MQTT_ENTITY_FORMAT_1: 'krótka nazwa',
  MQTT_ENTITY_FORMAT_2: 'prefiks bazowy + krótka nazwa',
  MQTT_CLEAN_SESSION: 'Ustawiaj flagę "Clean session"',
  MQTT_RETAIN_FLAG: 'Ustawiaj flagę "Retain"',
  INACTIVE: 'nieaktywn{{y|a|}}',
  ACTIVE: 'aktywny',
  UNKNOWN: 'nieznany',
  SET_TIME: '{{Ustaw zegar|Ustawianie zegara|}}',
  SET_TIME_TEXT: 'Wprowadź aktualną datę i godzinę',
  LOCAL_TIME: '{{Czas|czasu|}} lokaln{{y|ego|}}',
  UTC_TIME: 'Czas UTC',
  ENABLE_NTP: 'Aktywuj NTP (data i godzina będą automatycznie synchronizowane z poniższym serwerem czasu)',
  NTP_SERVER: 'Serwer NTP',
  TIME_ZONE: 'Strefa czasowa',
  ACCESS_POINT: '{{Punkt|punktu|}} {{dostępowy|dostępowego|}}',
  AP_PROVIDE: 'Punkt dostępowy',
  AP_PROVIDE_TEXT_1: 'zawsze aktywny',
  AP_PROVIDE_TEXT_2: 'aktywny jeśli brak połączenia z siecią',
  AP_PROVIDE_TEXT_3: 'nieaktywny',
  AP_PREFERRED_CHANNEL: 'Preferowany kanał',
  AP_HIDE_SSID: 'Ukryj SSID',
  AP_CLIENTS: 'Liczba klientów',
  AP_MAX_CLIENTS: 'Maksymalna liczba klientów',
  AP_LOCAL_IP: 'Lokalny adres IP',
  NETWORK_SCAN: 'Skanowanie sieci WiFi',
  IDLE: 'bezczynna',
  LOST: 'zostało utracone.',
  SCANNING: 'Skanuję',
  SCAN_AGAIN: 'Skanuj ponownie',
  NETWORK_SCANNER: 'Skaner sieci WiFi',
  NETWORK_NO_WIFI: 'Brak sieci WiFi w zasięgu',
  NETWORK_BLANK_SSID: 'pozostaw puste aby wyłączyć WiFi i włączyć ETH',
  NETWORK_BLANK_BSSID: 'pozostaw puste aby używać tylko SSID',
  TX_POWER: 'Moc nadawania',
  HOSTNAME: 'Nazwa w sieci',
  NETWORK_DISABLE_SLEEP: 'Wyłącz tryb uśpienia WiFi',
  NETWORK_LOW_BAND: 'Używaj mniejszej szerokości pasma WiFi (20MHz)',
  NETWORK_USE_DNS: 'Włącz wsparcie dla mDNS',
  NETWORK_ENABLE_CORS: 'Włącz wsparcie dla CORS',
  NETWORK_CORS_ORIGIN: 'CORS Origin',
  NETWORK_FIXED_IP: 'Użyj stałego adresu IP',
  NETWORK_GATEWAY: 'Brama',
  NETWORK_SUBNET: 'Maska podsieci',
  NETWORK_DNS: 'Serwery DNS',
  ADDRESS_OF: 'Adres {0}',
  ADMINISTRATOR: 'administratora',
  GUEST: 'gościa',
  NEW: 'nowe{{go|j|}}',
  NEW_NAME_OF: 'Nowa nazwa {0}',
  ENTITY: 'encji',
  MIN: 'Min.',
  MAX: 'Maks.',
  BLOCK_NAVIGATE_1: 'Niezapisane zmiany!',
  BLOCK_NAVIGATE_2: 'Jeśli przejdziesz do innej strony, wprowadzone zmiany w ustawieniach zostaną utracone. Na pewno chcesz opuścić tę stronę?',
  STAY: 'Pozostań',
  LEAVE: 'Opuść',
  SCHEDULER: 'Harmonogram',
  SCHEDULER_HELP_1: 'Zautomatyzuj wykonywanie komend, dodając poniżej harmonogram zdarzeń. Nadaj mu unikalną nazwę, aby móc go aktywować/dezaktywować przez API/MQTT',
  SCHEDULER_HELP_2: 'Wpisz 00:00 aby wykonywać jednorazowo przy starcie.',
  SCHEDULE: '{{H|h|}}armonogram{{|u|}}',
  TIME: '{{Czas|Godzina|}}',
  TIMER: '{{m|M|}}inutnik',
  ONCHANGE: 'O zmianie',
  CONDITION: 'Stan',
  IMMEDIATE: 'Natychmiastowy',
  SCHEDULE_UPDATED: 'Harmonogram został uaktualniony.',
  SCHEDULE_TIMER_1: 'przy starcie',
  SCHEDULE_TIMER_2: 'co minutę',
  SCHEDULE_TIMER_3: 'co godzinę',
  CUSTOM_ENTITIES: '{{N|n|}}iestandardowe{{|j|}} encj{{e|i|}}',
  ENTITIES_HELP_1: 'Zdefiniuj niestandardowe encje dla magistrali EMS',
  ENTITIES_UPDATED: 'Niestandardowe encje zostały uaktualnione.',
  WRITEABLE: 'Zapisywalna',
  SHOWING: 'Wyświetlane',
  SEARCH: 'Szukaj',
  CERT: 'Certyfikat główny TLS (pozostaw puste dla TLS-insecure)',
  ENABLE_TLS: 'Włącz wsparcie dla TLS',
  ON: 'włączony',
  OFF: 'wyłączony',
  POLARITY: 'Typ przekaźnika',
  ACTIVEHIGH: 'Wyzwalany stanem wysokim',
  ACTIVELOW: 'Wyzwalany stanem niskim',
  UNCHANGED: 'Zachowaj stan',
  ALWAYS: 'Zawsze',
  ACTIVITY: 'Aktywność',
  CONFIGURE: 'Konfiguracja {0}',
  SYSTEM_MEMORY: 'Pamięć systemowa',
  APPLICATION_SETTINGS_1: 'Modyfikacja ustawień aplikacji EMS-ESP',
  SECURITY_1: 'Dodawanie i usuwanie użytkowników',
  DOWNLOAD_UPLOAD_1: 'Pobieranie/wysyłanie ustawień i firmware',
  MODULES: 'Module', // TODO translate
  MODULES_1: 'Aktywuj lub dezaktywuj moduły zewnętrzne',
  MODULES_UPDATED: 'Modules updated', // TODO translate
  MODULES_DESCRIPTION: 'Click on the Module to activate or de-activate EMS-ESP library modules', // TODO translate
  MODULES_NONE: 'No external modules detected', // TODO translate
  RENAME: 'Rename', // TODO translate 
  ENABLE_MODBUS: 'Aktywuj Modbus',
  VIEW_LOG: 'View log to diagnose issues', // TODO translate
  UPLOAD_DRAG: 'drag and drop a file here or click to select one', // TODO translate
  SERVICES: 'Services', // TODO translate
  ALLVALUES: 'All Values', // TODO translate
  SPECIAL_FUNCTIONS: 'Special Functions', // TODO translate
  WAIT_FIRMWARE: 'Firmware is uploading and installing', // TODO translate
  INSTALL_VERSION: 'This will install version {0}. Are you sure?', // TODO translate
  SWITCH_DEV: 'switch to the development version', // TODO translate
  UPGRADE_AVAILABLE: 'There is a firmware upgrade available!', // TODO translate
  LATEST_VERSION: 'You are using the latest firmware version.', // TODO translate
  PLEASE_WAIT: 'Please wait', // TODO translate
  RESTARTING_PRE: 'Initializing', // TODO translate
  RESTARTING_POST: 'Preparing', // TODO translate
  AUTO_SCROLL: 'Auto Scroll', // TODO translate
  DASHBOARD: 'Dashboard', // TODO translate
  NO_DATA: 'No data available', // TODO translate
  DASHBOARD_1: 'Customize your dashboard by marking EMS entities as Favorite using the Customizations module', // TODO translate
  DEVELOPER_MODE: 'Developer Mode' // TODO translate
};

export default pl;