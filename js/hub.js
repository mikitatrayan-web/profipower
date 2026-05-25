'use strict';

const HUB_TRANSLATIONS = {
  ua: {
    logo_sub:      'Ваш партнер у Польщі',
    nav_edu:       'Навчання',
    nav_empl:      'Працевлаштування',
    nav_prod:      'Виробництво',
    nav_about:     'Про нас',
    nav_cta:       "Зв'язатися",

    hero_eyebrow:  'Корпорація Профі · з 1991 року',
    hero_title:    'PROFIPOWER',
    hero_sub:      'Ваш партнер у навчанні, працевлаштуванні та виробництві в Польщі',
    hero_dir1:     'Навчання',
    hero_dir2:     'Працевлаштування',
    hero_dir3:     'Виробництво',

    dir_label:     'Наші напрямки',
    dir_title:     'ТРИ НАПРЯМКИ — ОДНА КОМПАНІЯ',
    dir1_title:    'Навчання',
    dir1_desc:     'Курси зварювання, малярства, читання креслень та польської мови. Навчаємо з нуля.',
    dir1_cta:      'Дізнатися більше',
    dir2_title:    'Працевлаштування',
    dir2_desc:     'Офіційна робота в Польщі. 5 000+ працевлаштованих. 15+ заводів-партнерів.',
    dir2_cta:      'Вакансії',
    dir3_title:    'Виробництво',
    dir3_desc:     'Металоконструкції, лазерна різка, ЧПУ-фрезерування. Повний цикл виробництва.',
    dir3_cta:      'Послуги',

    school_label:  'Напрямок 1',
    school_title:  'ШКОЛА ЗВАРЮВАЛЬНИКІВ',
    school_sub:    'Міжнародна сертифікація TÜV Rheinland · ISO 9606 · Методи 135, 136, 138 (MIG/MAG)',
    school_stat1:  'випускників',
    school_stat2:  'тижні навчання',
    school_stat3:  'акредитація',
    school_cta:    'До школи зварювальників →',

    edu_label:     'Навчання',
    edu_title:     'ПРОГРАМИ НАВЧАННЯ',
    edu_sub:       'Практичні курси для роботи на виробництві в Польщі',
    edu1_title:    'Школа зварювальників',
    edu1_desc:     'MIG/MAG зварювання методами 135, 136, 138. Сертифікація ISO 9606 від TÜV Rheinland.',
    edu1_tag:      'MIG/MAG · ISO 9606',
    edu2_title:    'Курс для малярів',
    edu2_desc:     'Підготовка маляра по металу: підготовка поверхонь, нанесення покриттів, фарбування деталей.',
    edu2_tag:      'Підготовчий курс',
    edu3_title:    'Читання технічних креслень',
    edu3_desc:     'Курс для монтерів, механіків, електромонтерів та слюсарів. Від символів до просторового мислення.',
    edu3_tag:      'Технічна підготовка',
    edu4_title:    'Підготовка до вхідного контролю',
    edu4_desc:     'Інтенсивний курс для проходження заводського іспиту. Позиція PF, практичні тести.',
    edu4_tag:      '2 дні',
    edu5_title:    'Польські розмовні курси',
    edu5_desc:     'Базовий польський для роботи на виробництві: команди, документи, спілкування з колегами.',
    edu5_tag:      'Мова',
    edu_cta:       'Записатися',

    empl_label:    'Напрямок 2',
    empl_title:    'ПРАЦЕВЛАШТУВАННЯ В ПОЛЬЩІ',
    empl_sub:      'Офіційна робота на заводах Польщі. Повний супровід від заявки до першого дня роботи.',
    empl_s1:       'працевлаштованих',
    empl_s2:       'років на ринку',
    empl_s3:       'заводів-партнерів',
    empl_s4:       'офіси в Польщі',
    empl_proc_title: 'Як почати працювати?',
    empl_p1:       'Подайте заявку',
    empl_p1d:      'Заповніть форму або зателефонуйте нам',
    empl_p2:       'Переїзд та оселення',
    empl_p2d:      'Допомагаємо з документами, проживанням',
    empl_p3:       'Медогляд та вхідний контроль',
    empl_p3d:      'Супровід до першого дня на заводі',
    empl_p4:       'Починайте працювати',
    empl_p4d:      'Офіційний договір, вчасна оплата',
    empl_jobs_title: 'Відкриті вакансії',
    empl_ben_title: 'Що ми гарантуємо',
    empl_b1:       'Офіційне працевлаштування',
    empl_b2:       'Сплата всіх податків (ЗУС, ПІТ 11)',
    empl_b3:       'Виплата до 10-го числа без затримок',
    empl_b4:       'Інструмент та спецодяг від фірми',
    empl_b5:       'Повний супровід на заводі',
    empl_b6:       'Житло за необхідності',
    empl_cta:      'Детальніше про школу →',

    prod_label:    'Напрямок 3',
    prod_title:    'ВИРОБНИЦТВО МЕТАЛОКОНСТРУКЦІЙ',
    prod_sub:      'Повний цикл виробництва в Бидгощі. Лазерна різка, ЧПУ-фрезерування, зварювання, фарбування.',
    prod_s1:       'точність різки',
    prod_s2:       'термін виконання',
    prod_s3:       'матеріалів',
    prod_s4:       'рік заснування',
    prod_s2v:      '1–10 днів',
    prod_s3v:      '6+',
    prod_srv_title: 'Послуги',
    prod_srv1:     'Лазерна різка',
    prod_srv1d:    'Точність до 0,02 мм. Складні форми, серійне та одиничне виробництво.',
    prod_srv2:     'ЧПУ-фрезерування',
    prod_srv2d:    'Складні деталі, внутрішні порожнини, прототипи та серійне виробництво.',
    prod_srv3:     'Повний цикл',
    prod_srv3d:    'Різка → гнуття → зварювання → мехобробка → фарбування → збірка.',
    prod_srv4:     'Інженерна підтримка',
    prod_srv4d:    'Доопрацювання креслень, 3D-моделювання, розробка технічних рішень.',
    prod_mat_title: 'Матеріали',
    prod_m1:       'Сталь',
    prod_m2:       'Нержавіюча сталь',
    prod_m3:       'Алюміній',
    prod_m4:       'Титан',
    prod_m5:       'Латунь',
    prod_m6:       'Мідь',
    prod_proj_title: 'Реалізовані проекти',
    prod_pr1:      'Мости в Новому Сончі',
    prod_pr2:      'Трубопровідні системи Siemens',
    prod_pr3:      'Складські металоконструкції в Бидгощі',
    prod_pr4:      'Трубопроводи в Кракові',
    prod_cta:      'Запросити розрахунок →',

    rev_label:     'Відгуки',
    rev_title:     'ЩО ГОВОРЯТЬ НАШІ ПРАЦІВНИКИ',
    rev1_text:     'Тут цінують кожну людину. Заробітна плата досить конкурентна порівняно з іншими компаніями.',
    rev1_name:     'Богдан Г.',
    rev2_text:     'Чудова робоча атмосфера та злагоджена команда. Рекомендую всім, хто шукає роботу в Польщі.',
    rev2_name:     'Денис С.',
    rev3_text:     'Працюю вже 5 років разом із членами сім\'ї. Стабільна виплата, офіційне оформлення.',
    rev3_name:     'Андрій К.',
    rev4_text:     'Не жалкую про свій вибір вже 2 роки. Хороші умови, нормальні керівники, вчасна оплата.',
    rev4_name:     'Віталій Б.',
    rev5_text:     'Приїхав 2 роки тому і повністю задоволений. Компанія виконує всі обіцянки.',
    rev5_name:     'Дмитро Г.',

    corp_label:    'Про нас',
    corp_title:    'КОРПОРАЦІЯ ПРОФІ',
    corp_sub:      'З чого ми починали і де ми сьогодні',
    corp_text:     'З 1991 року компанія спеціалізувалась на виробництві зварних металоконструкцій. Протягом десятиліть ми розширили напрямки: у 2015 році запустили підрозділ працевлаштування, а пізніше — школу зварювальників та курси підготовки виробничого персоналу.',
    corp_link:     'Офіційний сайт корпорації →',

    contact_label: 'Зв\'язатися',
    contact_title: 'ЗВ\'ЯЖІТЬСЯ З НАМИ',
    contact_sub:   'Оберіть напрямок — розкажемо детальніше',
    form_name:     'Ваше ім\'я',
    form_phone:    'Телефон / WhatsApp',
    form_topic:    'Оберіть напрямок',
    form_t1:       'Навчання',
    form_t2:       'Працевлаштування',
    form_t3:       'Виробництво',
    form_t4:       'Інше',
    form_submit:   'Надіслати',
    form_sent:     'Надіслано ✓',

    footer_tagline: '"Розуміємо відповідальність, діємо професійно."',
    footer_copy:   '© 2024 Profi Power (Profi Corporation). Всі права захищено.',
  },

  en: {
    logo_sub:      'Your partner in Poland',
    nav_edu:       'Training',
    nav_empl:      'Employment',
    nav_prod:      'Production',
    nav_about:     'About',
    nav_cta:       'Contact',

    hero_eyebrow:  'Profi Corporation · since 1991',
    hero_title:    'PROFIPOWER',
    hero_sub:      'Your partner in training, employment and production in Poland',
    hero_dir1:     'Training',
    hero_dir2:     'Employment',
    hero_dir3:     'Production',

    dir_label:     'Our directions',
    dir_title:     'THREE DIRECTIONS — ONE COMPANY',
    dir1_title:    'Training',
    dir1_desc:     'Welding, painting, technical drawing and Polish language courses. We train from scratch.',
    dir1_cta:      'Learn more',
    dir2_title:    'Employment',
    dir2_desc:     'Official employment in Poland. 5,000+ employed. 15+ partner factories.',
    dir2_cta:      'Vacancies',
    dir3_title:    'Production',
    dir3_desc:     'Metal structures, laser cutting, CNC milling. Full production cycle.',
    dir3_cta:      'Services',

    school_label:  'Direction 1',
    school_title:  'WELDING SCHOOL',
    school_sub:    'International certification TÜV Rheinland · ISO 9606 · Methods 135, 136, 138 (MIG/MAG)',
    school_stat1:  'graduates',
    school_stat2:  'weeks of training',
    school_stat3:  'accreditation',
    school_cta:    'Go to welding school →',

    edu_label:     'Training',
    edu_title:     'TRAINING PROGRAMS',
    edu_sub:       'Practical courses for working in Polish manufacturing',
    edu1_title:    'Welding school',
    edu1_desc:     'MIG/MAG welding with methods 135, 136, 138. ISO 9606 certification from TÜV Rheinland.',
    edu1_tag:      'MIG/MAG · ISO 9606',
    edu2_title:    'Painting course',
    edu2_desc:     'Metal painter training: surface preparation, coating application, part painting.',
    edu2_tag:      'Preparation course',
    edu3_title:    'Technical drawing reading',
    edu3_desc:     'Course for fitters, mechanics, electricians and locksmiths. From symbols to 3D thinking.',
    edu3_tag:      'Technical preparation',
    edu4_title:    'Entry control preparation',
    edu4_desc:     'Intensive course for factory entry exam. PF position, practical tests.',
    edu4_tag:      '2 days',
    edu5_title:    'Polish conversational courses',
    edu5_desc:     'Basic Polish for manufacturing: commands, documents, communication with colleagues.',
    edu5_tag:      'Language',
    edu_cta:       'Sign up',

    empl_label:    'Direction 2',
    empl_title:    'EMPLOYMENT IN POLAND',
    empl_sub:      'Official work at Polish factories. Full support from application to first day.',
    empl_s1:       'employed workers',
    empl_s2:       'years on the market',
    empl_s3:       'partner factories',
    empl_s4:       'offices in Poland',
    empl_proc_title: 'How to start working?',
    empl_p1:       'Submit application',
    empl_p1d:      'Fill out a form or call us',
    empl_p2:       'Relocation & accommodation',
    empl_p2d:      'We help with documents and housing',
    empl_p3:       'Medical & entry control',
    empl_p3d:      'Support until your first factory day',
    empl_p4:       'Start working',
    empl_p4d:      'Official contract, on-time payment',
    empl_jobs_title: 'Open positions',
    empl_ben_title: 'What we guarantee',
    empl_b1:       'Official employment contract',
    empl_b2:       'All taxes paid (ZUS, PIT 11)',
    empl_b3:       'Payment by 10th of every month',
    empl_b4:       'Tools and workwear provided',
    empl_b5:       'Full factory support',
    empl_b6:       'Housing if needed',
    empl_cta:      'Learn more about the school →',

    prod_label:    'Direction 3',
    prod_title:    'METAL STRUCTURE PRODUCTION',
    prod_sub:      'Full production cycle in Bydgoszcz. Laser cutting, CNC milling, welding, painting.',
    prod_s1:       'cutting precision',
    prod_s2:       'lead time',
    prod_s3:       'materials',
    prod_s4:       'founded',
    prod_s2v:      '1–10 days',
    prod_s3v:      '6+',
    prod_srv_title: 'Services',
    prod_srv1:     'Laser cutting',
    prod_srv1d:    'Precision to 0.02 mm. Complex shapes, series and single-unit production.',
    prod_srv2:     'CNC milling',
    prod_srv2d:    'Complex parts, internal cavities, prototypes and series production.',
    prod_srv3:     'Full cycle',
    prod_srv3d:    'Cutting → bending → welding → machining → painting → assembly.',
    prod_srv4:     'Engineering support',
    prod_srv4d:    'Drawing refinement, 3D modeling, technical solutions development.',
    prod_mat_title: 'Materials',
    prod_m1:       'Steel',
    prod_m2:       'Stainless steel',
    prod_m3:       'Aluminum',
    prod_m4:       'Titanium',
    prod_m5:       'Brass',
    prod_m6:       'Copper',
    prod_proj_title: 'Completed projects',
    prod_pr1:      'Bridges in Nowy Sącz',
    prod_pr2:      'Siemens pipe systems',
    prod_pr3:      'Warehouse structures in Bydgoszcz',
    prod_pr4:      'Pipelines in Kraków',
    prod_cta:      'Request a quote →',

    rev_label:     'Reviews',
    rev_title:     'WHAT OUR WORKERS SAY',
    rev1_text:     'They value every person here. The salary is quite competitive compared to other companies.',
    rev1_name:     'Bogdan G.',
    rev2_text:     'Great work atmosphere and team. I recommend it to everyone looking for work in Poland.',
    rev2_name:     'Denis S.',
    rev3_text:     'I\'ve been working for 5 years with family members. Stable payment, official employment.',
    rev3_name:     'Andrii K.',
    rev4_text:     'No regrets in 2 years. Good conditions, normal management, on-time payment.',
    rev4_name:     'Vitaliy B.',
    rev5_text:     'Arrived 2 years ago and completely satisfied. The company keeps all its promises.',
    rev5_name:     'Dmytro H.',

    corp_label:    'About us',
    corp_title:    'PROFI CORPORATION',
    corp_sub:      'Where we started and where we are today',
    corp_text:     'Since 1991 the company specialized in manufacturing welded metal structures. Over the decades we expanded: in 2015 we launched the employment division, and later the welding school and industrial training courses.',
    corp_link:     'Official corporation website →',

    contact_label: 'Contact',
    contact_title: 'GET IN TOUCH',
    contact_sub:   'Choose a direction — we\'ll tell you more',
    form_name:     'Your name',
    form_phone:    'Phone / WhatsApp',
    form_topic:    'Choose a direction',
    form_t1:       'Training',
    form_t2:       'Employment',
    form_t3:       'Production',
    form_t4:       'Other',
    form_submit:   'Send',
    form_sent:     'Sent ✓',

    footer_tagline: '"We understand responsibility, we act professionally."',
    footer_copy:   '© 2024 Profi Power (Profi Corporation). All rights reserved.',
  },

  pl: {
    logo_sub:      'Twój partner w Polsce',
    nav_edu:       'Szkolenie',
    nav_empl:      'Zatrudnienie',
    nav_prod:      'Produkcja',
    nav_about:     'O nas',
    nav_cta:       'Kontakt',

    hero_eyebrow:  'Profi Corporation · od 1991 roku',
    hero_title:    'PROFIPOWER',
    hero_sub:      'Twój partner w szkoleniu, zatrudnieniu i produkcji w Polsce',
    hero_dir1:     'Szkolenie',
    hero_dir2:     'Zatrudnienie',
    hero_dir3:     'Produkcja',

    dir_label:     'Nasze kierunki',
    dir_title:     'TRZY KIERUNKI — JEDNA FIRMA',
    dir1_title:    'Szkolenie',
    dir1_desc:     'Kursy spawania, malarstwa, czytania rysunków i języka polskiego. Uczymy od zera.',
    dir1_cta:      'Dowiedz się więcej',
    dir2_title:    'Zatrudnienie',
    dir2_desc:     'Oficjalna praca w Polsce. 5 000+ zatrudnionych. 15+ fabryk partnerskich.',
    dir2_cta:      'Oferty pracy',
    dir3_title:    'Produkcja',
    dir3_desc:     'Konstrukcje metalowe, cięcie laserowe, frezowanie CNC. Pełny cykl produkcji.',
    dir3_cta:      'Usługi',

    school_label:  'Kierunek 1',
    school_title:  'SZKOŁA SPAWALNICZA',
    school_sub:    'Certyfikacja międzynarodowa TÜV Rheinland · ISO 9606 · Metody 135, 136, 138 (MIG/MAG)',
    school_stat1:  'absolwentów',
    school_stat2:  'tygodnie szkolenia',
    school_stat3:  'akredytacja',
    school_cta:    'Przejdź do szkoły spawalniczej →',

    edu_label:     'Szkolenie',
    edu_title:     'PROGRAMY SZKOLENIOWE',
    edu_sub:       'Praktyczne kursy do pracy w polskim przemyśle',
    edu1_title:    'Szkoła spawalnicza',
    edu1_desc:     'Spawanie MIG/MAG metodami 135, 136, 138. Certyfikacja ISO 9606 od TÜV Rheinland.',
    edu1_tag:      'MIG/MAG · ISO 9606',
    edu2_title:    'Kurs malarski',
    edu2_desc:     'Szkolenie malarza metalu: przygotowanie powierzchni, nakładanie powłok, malowanie.',
    edu2_tag:      'Kurs przygotowawczy',
    edu3_title:    'Czytanie rysunków technicznych',
    edu3_desc:     'Kurs dla monterów, mechaników, elektryków i ślusarzy. Od symboli do myślenia przestrzennego.',
    edu3_tag:      'Przygotowanie techniczne',
    edu4_title:    'Przygotowanie do kontroli wstępnej',
    edu4_desc:     'Intensywny kurs do egzaminu wstępnego zakładu. Pozycja PF, testy praktyczne.',
    edu4_tag:      '2 dni',
    edu5_title:    'Polskie kursy konwersacyjne',
    edu5_desc:     'Podstawowy polski do pracy w produkcji: polecenia, dokumenty, komunikacja z kolegami.',
    edu5_tag:      'Język',
    edu_cta:       'Zapisz się',

    empl_label:    'Kierunek 2',
    empl_title:    'ZATRUDNIENIE W POLSCE',
    empl_sub:      'Oficjalna praca w polskich zakładach. Pełna obsługa od wniosku do pierwszego dnia.',
    empl_s1:       'zatrudnionych',
    empl_s2:       'lat na rynku',
    empl_s3:       'fabryk partnerskich',
    empl_s4:       'biura w Polsce',
    empl_proc_title: 'Jak zacząć pracować?',
    empl_p1:       'Złóż wniosek',
    empl_p1d:      'Wypełnij formularz lub zadzwoń do nas',
    empl_p2:       'Przeprowadzka i zakwaterowanie',
    empl_p2d:      'Pomagamy z dokumentami i mieszkaniem',
    empl_p3:       'Badania i kontrola wstępna',
    empl_p3d:      'Wsparcie do pierwszego dnia w zakładzie',
    empl_p4:       'Zacznij pracować',
    empl_p4d:      'Oficjalna umowa, terminowa wypłata',
    empl_jobs_title: 'Otwarte oferty pracy',
    empl_ben_title: 'Co gwarantujemy',
    empl_b1:       'Oficjalne zatrudnienie',
    empl_b2:       'Opłacanie wszystkich podatków (ZUS, PIT 11)',
    empl_b3:       'Wypłata do 10-go każdego miesiąca',
    empl_b4:       'Narzędzia i odzież robocza od firmy',
    empl_b5:       'Pełna obsługa w zakładzie',
    empl_b6:       'Zakwaterowanie w razie potrzeby',
    empl_cta:      'Więcej o szkole →',

    prod_label:    'Kierunek 3',
    prod_title:    'PRODUKCJA KONSTRUKCJI METALOWYCH',
    prod_sub:      'Pełny cykl produkcji w Bydgoszczy. Cięcie laserowe, frezowanie CNC, spawanie, malowanie.',
    prod_s1:       'dokładność cięcia',
    prod_s2:       'czas realizacji',
    prod_s3:       'materiałów',
    prod_s4:       'rok założenia',
    prod_s2v:      '1–10 dni',
    prod_s3v:      '6+',
    prod_srv_title: 'Usługi',
    prod_srv1:     'Cięcie laserowe',
    prod_srv1d:    'Dokładność do 0,02 mm. Złożone kształty, produkcja seryjna i jednostkowa.',
    prod_srv2:     'Frezowanie CNC',
    prod_srv2d:    'Złożone części, wewnętrzne wnęki, prototypy i produkcja seryjna.',
    prod_srv3:     'Pełny cykl',
    prod_srv3d:    'Cięcie → gięcie → spawanie → obróbka → malowanie → montaż.',
    prod_srv4:     'Wsparcie inżynieryjne',
    prod_srv4d:    'Opracowanie rysunków, modelowanie 3D, rozwiązania techniczne.',
    prod_mat_title: 'Materiały',
    prod_m1:       'Stal',
    prod_m2:       'Stal nierdzewna',
    prod_m3:       'Aluminium',
    prod_m4:       'Tytan',
    prod_m5:       'Mosiądz',
    prod_m6:       'Miedź',
    prod_proj_title: 'Zrealizowane projekty',
    prod_pr1:      'Mosty w Nowym Sączu',
    prod_pr2:      'Systemy rurowe Siemens',
    prod_pr3:      'Konstrukcje magazynowe w Bydgoszczy',
    prod_pr4:      'Rurociągi w Krakowie',
    prod_cta:      'Zapytaj o wycenę →',

    rev_label:     'Opinie',
    rev_title:     'CO MÓWIĄ NASI PRACOWNICY',
    rev1_text:     'Tutaj cenią każdą osobę. Wynagrodzenie jest dość konkurencyjne w porównaniu z innymi firmami.',
    rev1_name:     'Bogdan G.',
    rev2_text:     'Świetna atmosfera pracy i zgrany zespół. Polecam wszystkim szukającym pracy w Polsce.',
    rev2_name:     'Denis S.',
    rev3_text:     'Pracuję już 5 lat razem z członkami rodziny. Stabilna wypłata, oficjalne zatrudnienie.',
    rev3_name:     'Andrzej K.',
    rev4_text:     'Nie żałuję swojego wyboru od 2 lat. Dobre warunki, normalni przełożeni, terminowa płatność.',
    rev4_name:     'Vitaliy B.',
    rev5_text:     'Przyjechałem 2 lata temu i jestem w pełni zadowolony. Firma dotrzymuje wszystkich obietnic.',
    rev5_name:     'Dmytro H.',

    corp_label:    'O nas',
    corp_title:    'PROFI CORPORATION',
    corp_sub:      'Od czego zaczęliśmy i gdzie jesteśmy dzisiaj',
    corp_text:     'Od 1991 roku firma specjalizuje się w produkcji spawanych konstrukcji metalowych. Przez dziesięciolecia rozszerzyliśmy działalność: w 2015 roku uruchomiliśmy oddział zatrudnienia, a następnie szkołę spawalniczą i kursy przygotowawcze dla personelu produkcyjnego.',
    corp_link:     'Oficjalna strona korporacji →',

    contact_label: 'Kontakt',
    contact_title: 'SKONTAKTUJ SIĘ Z NAMI',
    contact_sub:   'Wybierz kierunek — powiemy Ci więcej',
    form_name:     'Twoje imię',
    form_phone:    'Telefon / WhatsApp',
    form_topic:    'Wybierz kierunek',
    form_t1:       'Szkolenie',
    form_t2:       'Zatrudnienie',
    form_t3:       'Produkcja',
    form_t4:       'Inne',
    form_submit:   'Wyślij',
    form_sent:     'Wysłano ✓',

    footer_tagline: '"Rozumiemy odpowiedzialność, działamy profesjonalnie."',
    footer_copy:   '© 2024 Profi Power (Profi Corporation). Wszelkie prawa zastrzeżone.',
  },
};

let currentLang = localStorage.getItem('profi-lang') || 'ua';

function setLang(lang) {
  if (!HUB_TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('profi-lang', lang);
  const htmlMap = { ua: 'uk', en: 'en', pl: 'pl' };
  document.documentElement.lang = htmlMap[lang];
  const t = HUB_TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (t[k] !== undefined) el.placeholder = t[k];
  });
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const k = opt.getAttribute('data-i18n');
    if (t[k] !== undefined) opt.textContent = t[k];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  // Mobile menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.classList.remove('open');
      });
    });
  }

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Contact form
  const form = document.getElementById('hub-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const t = HUB_TRANSLATIONS[currentLang];
      btn.textContent = t.form_sent;
      btn.disabled = true;
      setTimeout(() => { btn.textContent = t.form_submit; btn.disabled = false; form.reset(); }, 3000);
    });
  }
});
