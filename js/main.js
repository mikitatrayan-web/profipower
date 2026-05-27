'use strict';

/* ══════════════════════════════════════════════════════
   TRANSLATIONS
══════════════════════════════════════════════════════ */
const TRANSLATIONS = {
  ua: {
    logo_sub:         'Школа зварювальників',
    nav_programs:     'Програми',
    nav_why:          'Переваги',
    nav_employment:   'Вакансії',
    nav_faq:          'FAQ',
    nav_contacts:     'Контакти',
    nav_cta:          'Записатися',

    hero_eyebrow:     'Школа зварювальників · Бидгощ, Польща',
    hero_title:       'НАВЧАННЯ ЗВАРЮВАЛЬНИКА',
    hero_sub:         'Міжнародна сертифікація TÜV Rheinland · ISO 9606',
    hero_cta1:        'Записатися на навчання',
    hero_cta2:        'Дізнатися більше',

    cert_label:       'Акредитований центр',
    iso_label:        'Міжнародний стандарт',
    stat_students:    'випускників',
    stat_years:       'років досвіду',
    stat_partners:    'заводів-партнерів',
    htp_cta:          'Безкоштовна консультація →',
    scroll_hint:      'Гортай вниз',

    programs_label:   'Що ми пропонуємо',
    programs_title:   'ПРОГРАМИ НАВЧАННЯ',
    programs_sub:     'Оберіть програму, яка підходить саме вам — від повного курсу до підготовки до іспиту',

    prog1_tag:        'Найпопулярніша',
    prog1_title:      'MIG/MAG зварювання (135, 136, 138)',
    prog1_duration:   '2 тижні',
    prog1_result:     'з нуля + працевлаштування',
    prog1_desc:       'Повний курс зварювання методом 135/136. Від базових навичок до першого робочого місця на заводах Польщі.',
    prog1_li1:        'Базова теорія та безпека',
    prog1_li2:        'Максимум практики',
    prog1_li3:        'Підготовка до сертифікаційного іспиту',
    prog1_li4:        'Допомога з працевлаштуванням',
    prog_cta:         'Записатися',

    prog2_title:      'TIG зварювання (141)',
    prog2_duration:   '2 тижні',
    prog2_result:     'перехід з MIG/MAG',
    prog2_desc:       'Освоєння методу 141 TIG для тих, хто вже має базові навички MIG/MAG зварювання. Відкриває нові можливості на виробництві.',
    prog2_li1:        'Техніка TIG зварювання',
    prog2_li2:        'Зварювання нержавіючої сталі',
    prog2_li3:        'Сертифікація ISO 9606-1 (141)',

    prog3_title:      'Підготовка до вхідного контролю',
    prog3_duration:   '2 дні',
    prog3_result:     'позиція PF',
    prog3_desc:       'Інтенсивна підготовка до заводського вхідного іспиту. Максимум практики за мінімальний час. Для тих, хто вже має досвід.',
    prog3_li1:        'Технічна підготовка до іспиту',
    prog3_li2:        'Відпрацювання позиції PF',
    prog3_li3:        'Розбір типових помилок',

    steps_label:      'Процес навчання',
    steps_title:      'ЯК ЦЕ ПРАЦЮЄ',
    step1_title:      'Подайте заявку',
    step1_desc:       'Заповніть коротку форму або зателефонуйте нам. Разом визначимо потрібну програму.',
    step2_title:      'Навчання',
    step2_desc:       'Практичні заняття з досвідченими інструкторами. Індивідуальний підхід до кожного учня.',
    step3_title:      'Здача іспиту та сертифікація',
    step3_desc:       'Складіть іспит та отримайте сертифікат ISO 9606, акредитований TÜV Rheinland. Дійсний 3 роки по всій Європі.',
    step4_title:      'Починайте працювати',
    step4_desc:       'Ми напряму зв\'яжемо вас із заводами-партнерами. Гарантуємо працевлаштування після навчання.',

    why_label:        'Ваш вибір',
    why_title:        'ЧОМУ ОБИРАЮТЬ НАС',
    why1_title:       'TÜV Rheinland акредитація',
    why1_desc:        'Ми сертифікуємо зварювальників за міжнародним стандартом ISO 9606. Ваш сертифікат визнається по всій Європі та дійсний 3 роки.',
    why2_title:       'Обладнання ESAB',
    why2_desc:        'Навчання на апаратах ESAB — такому ж обладнанні, що встановлено на реальних виробничих підприємствах.',
    why3_title:       'Досвідчені інструктори',
    why3_desc:        'Наші інструктори — практикуючі зварювальники з багаторічним виробничим досвідом. Не теорія, а реальна практика.',
    why4_title:       'Гнучкий графік',
    why4_desc:        'Індивідуальна програма під ваш запит та зручний розклад. Підберемо час, що підходить саме вам.',
    why5_title:       'Пропонуємо працевлаштування',
    why5_desc:        '15+ заводів-партнерів у Польщі. Ми не просто навчаємо — ми безпосередньо допомагаємо з першим місцем роботи.',
    why6_title:       'Підтримка українською',
    why6_desc:        'Говоримо українською, польською та англійською. Допоможемо з документами та адаптацією в Польщі.',

    sban_students:    'випускників пройшли навчання',
    sban_weeks:       'тижні — від нуля до роботи',
    sban_partners:    'заводів-партнерів у Польщі',
    sban_years:       'років на ринку',

    faq_label:        'Відповіді на питання',
    faq_title:        'ЧАСТІ ЗАПИТАННЯ',
    faq1_q:           'Чи потрібен досвід зварювання для вступу?',
    faq1_a:           'Ні. У нас є програми для повних початківців — ми навчаємо з нуля. Головне — бажання навчатися та трудитися.',
    faq2_q:           'Скільки коштує навчання?',
    faq2_a:           'Вартість залежить від обраної програми та індивідуальних умов. Зв\'яжіться з нами напряму — розкажемо про актуальні ціни та можливі знижки.',
    faq3_q:           'Які методи зварювання ви викладаєте?',
    faq3_a:           'Ми навчаємо методам 135 та 136 (MIG/MAG) і 138. Це найзатребуваніші методи на виробничих підприємствах Польщі.',
    faq4_q:           'Як довго дійсний сертифікат ISO 9606?',
    faq4_a:           'Сертифікат ISO 9606, акредитований TÜV Rheinland, дійсний 3 роки. Він визнається роботодавцями по всій Європі.',
    faq5_q:           'Чи допоможете знайти роботу після навчання?',
    faq5_a:           'Так. Ми маємо 15+ заводів-партнерів і безпосередньо допомагаємо з працевлаштуванням після завершення навчання.',
    faq6_q:           'На якому обладнанні проходить навчання?',
    faq6_a:           'Ми навчаємо на апаратах ESAB — одне з найпрофесійніших брендів у зварювальному обладнанні, яке використовується на провідних виробничих підприємствах.',
    faq7_q:           'Чи є підтримка для тих, хто не говорить польською?',
    faq7_a:           'Так. Наш персонал говорить українською, польською та англійською. Ми допомагаємо з документами та адаптацією.',

    contact_label:    'Почати навчання',
    contact_title:    'ЗАПИСАТИСЯ НА НАВЧАННЯ',
    contact_sub:      'Заповніть форму і ми зв\'яжемося з вами протягом 1 робочого дня',

    form_name_label:  'Ваше ім\'я',
    form_name:        'Ваше ім\'я',
    form_phone_label: 'Телефон / WhatsApp',
    form_phone:       'Телефон / WhatsApp',
    form_program_label:'Програма навчання',
    prog_select_default:'Оберіть програму',
    prog_select_1:    'MIG/MAG (135, 136) — 2 тижні',
    prog_select_2:    'TIG (141) — 2 тижні',
    prog_select_3:    'Підготовка до вхідного контролю — 2 дні',
    prog_select_4:    'Інше / не знаю ще',
    form_msg_label:   'Запитання (необов\'язково)',
    form_msg:         'Ваше запитання або коментар...',
    form_submit:      'Надіслати заявку',
    form_sent:        'Заявку надіслано ✓',
    form_note:        'Відповідаємо протягом 1 робочого дня. Говоримо українською, польською та англійською.',

    office1_tag:      'Головний офіс',
    office1_city:     'Бидгощ',
    office1_addr:     'Poznańska 27/1, 85-129 Bydgoszcz, Polska',
    office2_tag:      'Школа зварювання',
    office2_city:     'Бидгощ',
    office2_addr:     'ul. Witebska 1B, 85-759 Bydgoszcz, Polska',
    office3_tag:      'Філіал',
    office3_city:     'Новий Сонч',
    office3_addr:     'Zielona 27, 33-300 Nowy Sącz, Polska',
    whatsapp_label:   'Написати у WhatsApp',

    guar_title:       'Пропонуємо працевлаштування',
    guar_desc:        'Після завершення навчання ми гарантуємо підбір роботи через мережу 15+ заводів-партнерів.',

    footer_tagline:   '"Розуміємо відповідальність, діємо професійно."',
    footer_city:      'Бидгощ, Польща',
    footer_copy:      '© 2024 Profi Power (Profi Corporation). Всі права захищено.',

    empl_label:       'Відкриті вакансії',
    empl_title:       'ПРАЦЕВЛАШТУВАННЯ',
    empl_sub:         'Офіційне працевлаштування на заводах Польщі. Оберіть свою спеціальність — ми допоможемо з усім іншим.',
    job_per_hour:     'zł netto/год',
    job_apply:        'Подати заявку',
    job_top_badge:    'Топ вакансія',

    job1_title:  'Слюсар',
    job1_r1:     'Досвід роботи слюсарем від 1 року',
    job1_r2:     'Вміння читати технічні малюнки',
    job1_r3:     'Досвід монтажу металоконструкцій',
    job1_r4:     'Знання слюсарного інструменту',
    job1_r5:     'Відповідальність та уважність',
    job1_r6:     'Бажання навчатися',

    job2_title:  'Слюсар-зварювальник',
    job2_r1:     'Досвід роботи слюсарем-зварювальником від 1 року',
    job2_r2:     'Вміння читати технічні малюнки',
    job2_r3:     'Навички MIG/MAG або TIG зварювання',
    job2_r4:     'Досвід слюсарних робіт',
    job2_r5:     'Уважність до деталей',
    job2_r6:     'Командна робота',
    job2_r7:     'Готовність до фізичної праці',

    job3_title:  'Зварювальник MIG/MAG 135',
    job3_r1:     'Досвід MIG/MAG зварювання від 2 років',
    job3_r2:     'Посвідчення зварювальника (бажано ISO 9606)',
    job3_r3:     'Вміння читати технічні малюнки',
    job3_r4:     'Якісне виконання швів',
    job3_r5:     'Відповідальність',

    job4_title:  'Простовач термічний (рихтувальник)',
    job4_r1:     'Досвід термічного рихтування металу',
    job4_r2:     'Робота з газовим пальником',
    job4_r3:     'Фізична витривалість',
    job4_r4:     'Уважність та точність',
    job4_r5:     'Дотримання норм безпеки',

    job5_title:  'Оператор зварювального робота',
    job5_r1:     'Досвід роботи з зварювальними роботами',
    job5_r2:     'Базові знання програмування ЧПУ',
    job5_r3:     'Технічна грамотність',
    job5_r4:     'Уважність та відповідальність',

    job6_title:  'Маляр',
    job6_r1:     'Досвід малярних робіт від 1 року',
    job6_r2:     'Робота з фарборозпилювачем',
    job6_r3:     'Підготовка поверхонь до фарбування',
    job6_r4:     'Дотримання норм охорони праці',
    job6_r5:     'Охайність та акуратність',

    job7_title:  'Монтер',
    job7_r1:     'Досвід монтажних робіт',
    job7_r2:     'Читання технічних схем',
    job7_r3:     'Робота з монтажним інструментом',
    job7_r4:     'Відповідальність',
    job7_r5:     'Робота у команді',

    job8_title:  'Електромонтер',
    job8_r1:     'Досвід електромонтажних робіт від 1 року',
    job8_r2:     'Знання електричних схем',
    job8_r3:     'Посвідчення електрика (бажано)',
    job8_r4:     'Дотримання правил електробезпеки',
    job8_r5:     'Уважність та точність',

    job9_title:  'Механік',
    job9_r1:     'Досвід механічних робіт від 1 року',
    job9_r2:     'Читання технічних малюнків',
    job9_r3:     'Знання механічного інструменту',
    job9_r4:     'Технічне мислення',
    job9_r5:     'Відповідальне ставлення до роботи',

    job10_title: 'Дробеструминник (піскоструминник)',
    job10_r1:    'Досвід дробеструминної обробки',
    job10_r2:    'Робота зі спецобладнанням',
    job10_r3:    'Дотримання норм безпеки',
    job10_r4:    'Фізична витривалість',
    job10_r5:    'Відповідальність',

    job11_title: 'Електронік',
    job11_r1:    'Вища або середня технічна освіта (електроніка)',
    job11_r2:    'Досвід обслуговування електронних систем',
    job11_r3:    'Знання схемотехніки',
    job11_r4:    'Вміння користуватися вимірювальними приладами',
    job11_r5:    'Аналітичне мислення',
    job11_r6:    'Уважність до деталей',
    job11_r7:    'Готовність до навчання',

    benefits_title: 'Що ми пропонуємо',
    benefits_intro: 'Офіційне працевлаштування з повним соціальним пакетом на заводах-партнерах у Польщі.',
    ben1:  'Офіційне працевлаштування',
    ben2:  'Сплата всіх податків',
    ben3:  'Виплата до 10-го числа щомісяця без затримок',
    ben4:  'Інструмент та одяг за рахунок фірми',
    ben5:  'Повний супровід на заводі до виходу на роботу',
    ben6:  'Житло за необхідності',
    ben7:  'Безкоштовна перевірка кваліфікації для зварювальників та слюсарів',
    ben8:  'Курс донавчання читання технічних малюнків (монтер, механік, електромонтер, слюсар)',
  },

  en: {
    logo_sub:         'Welding School',
    nav_programs:     'Programs',
    nav_why:          'Advantages',
    nav_employment:   'Jobs',
    nav_faq:          'FAQ',
    nav_contacts:     'Contact',
    nav_cta:          'Apply',

    hero_eyebrow:     'Welding School · Bydgoszcz, Poland',
    hero_title:       'WELDER TRAINING',
    hero_sub:         'International certification TÜV Rheinland · ISO 9606',
    hero_cta1:        'Apply for training',
    hero_cta2:        'Learn more',

    cert_label:       'Accredited center',
    iso_label:        'International standard',
    stat_students:    'graduates',
    stat_years:       'years of experience',
    stat_partners:    'partner factories',
    htp_cta:          'Free consultation →',
    scroll_hint:      'Scroll down',

    programs_label:   'What we offer',
    programs_title:   'TRAINING PROGRAMS',
    programs_sub:     'Choose the program that suits you — from a full course to exam preparation',

    prog1_tag:        'Most popular',
    prog1_title:      'MIG/MAG welding (135, 136, 138)',
    prog1_duration:   '2 weeks',
    prog1_result:     'from zero + employment',
    prog1_desc:       'Full welding course using the 135/136 method. From basic skills to your first job at Polish factories.',
    prog1_li1:        'Basic theory and safety',
    prog1_li2:        'Maximum hands-on practice',
    prog1_li3:        'Preparation for certification exam',
    prog1_li4:        'Employment assistance',
    prog_cta:         'Apply',

    prog2_title:      'TIG welding (141)',
    prog2_duration:   '2 weeks',
    prog2_result:     'transition from MIG/MAG',
    prog2_desc:       'Mastering the TIG 141 method for those with basic MIG/MAG skills. Opens new production opportunities.',
    prog2_li1:        'TIG welding technique',
    prog2_li2:        'Stainless steel welding',
    prog2_li3:        'ISO 9606-1 (141) certification',

    prog3_title:      'Entry exam preparation',
    prog3_duration:   '2 days',
    prog3_result:     'PF position',
    prog3_desc:       'Intensive preparation for the factory entry exam. Maximum practice in minimum time. For those with existing experience.',
    prog3_li1:        'Technical exam preparation',
    prog3_li2:        'PF position practice',
    prog3_li3:        'Analysis of common mistakes',

    steps_label:      'Learning process',
    steps_title:      'HOW IT WORKS',
    step1_title:      'Submit an application',
    step1_desc:       'Fill out a short form or call us. Together we\'ll determine the right program.',
    step2_title:      'Training',
    step2_desc:       'Practical sessions with experienced instructors. Individual approach for each student.',
    step3_title:      'Exam & Certification',
    step3_desc:       'Pass the exam and receive an ISO 9606 certificate accredited by TÜV Rheinland. Valid for 3 years across Europe.',
    step4_title:      'Start working',
    step4_desc:       'We\'ll directly connect you with partner factories. We guarantee employment after training.',

    why_label:        'Your choice',
    why_title:        'WHY CHOOSE US',
    why1_title:       'TÜV Rheinland accreditation',
    why1_desc:        'We certify welders to international standard ISO 9606. Your certificate is recognized across Europe and valid for 3 years.',
    why2_title:       'ESAB equipment',
    why2_desc:        'Training on ESAB machines — the same equipment installed at real production plants.',
    why3_title:       'Experienced instructors',
    why3_desc:        'Our instructors are practicing welders with years of production experience. Real practice, not just theory.',
    why4_title:       'Flexible schedule',
    why4_desc:        'Individual program tailored to your needs and a convenient schedule. We\'ll find the time that works for you.',
    why5_title:       'Employment guarantee',
    why5_desc:        '15+ partner factories in Poland. We don\'t just teach — we directly help you get your first job.',
    why6_title:       'Ukrainian language support',
    why6_desc:        'We speak Ukrainian, Polish and English. We\'ll help with documents and adaptation in Poland.',

    sban_students:    'graduates completed training',
    sban_weeks:       'weeks — from zero to work',
    sban_partners:    'partner factories in Poland',
    sban_years:       'years on the market',

    faq_label:        'Answers to questions',
    faq_title:        'FREQUENTLY ASKED QUESTIONS',
    faq1_q:           'Is welding experience required to enroll?',
    faq1_a:           'No. We have programs for complete beginners — we teach from scratch. All you need is the desire to learn and work hard.',
    faq2_q:           'How much does training cost?',
    faq2_a:           'The cost depends on the chosen program and individual conditions. Contact us directly — we\'ll share current prices and possible discounts.',
    faq3_q:           'What welding methods do you teach?',
    faq3_a:           'We teach methods 135 and 136 (MIG/MAG) and 138. These are the most in-demand methods at Polish production plants.',
    faq4_q:           'How long is the ISO 9606 certificate valid?',
    faq4_a:           'The ISO 9606 certificate accredited by TÜV Rheinland is valid for 3 years. It is recognized by employers throughout Europe.',
    faq5_q:           'Will you help find work after training?',
    faq5_a:           'Yes. We have 15+ partner factories and directly assist with employment after completing training.',
    faq6_q:           'What equipment is used for training?',
    faq6_a:           'We train on ESAB machines — one of the most professional brands in welding equipment, used at leading production enterprises.',
    faq7_q:           'Is there support for those who don\'t speak Polish?',
    faq7_a:           'Yes. Our staff speaks Ukrainian, Polish and English. We help with documents and adaptation.',

    contact_label:    'Start training',
    contact_title:    'APPLY FOR TRAINING',
    contact_sub:      'Fill out the form and we\'ll contact you within 1 business day',

    form_name_label:  'Your name',
    form_name:        'Your name',
    form_phone_label: 'Phone / WhatsApp',
    form_phone:       'Phone / WhatsApp',
    form_program_label:'Training program',
    prog_select_default:'Select a program',
    prog_select_1:    'MIG/MAG (135, 136) — 2 weeks',
    prog_select_2:    'TIG (141) — 2 weeks',
    prog_select_3:    'Entry exam preparation — 2 days',
    prog_select_4:    'Other / not sure yet',
    form_msg_label:   'Question (optional)',
    form_msg:         'Your question or comment...',
    form_submit:      'Submit application',
    form_sent:        'Application sent ✓',
    form_note:        'We respond within 1 business day. We speak Ukrainian, Polish and English.',

    office1_tag:      'Main office',
    office1_city:     'Bydgoszcz',
    office1_addr:     'Poznańska 27/1, 85-129 Bydgoszcz, Polska',
    office2_tag:      'Welding school',
    office2_city:     'Bydgoszcz',
    office2_addr:     'ul. Witebska 1B, 85-759 Bydgoszcz, Polska',
    office3_tag:      'Branch',
    office3_city:     'Nowy Sącz',
    office3_addr:     'Zielona 27, 33-300 Nowy Sącz, Polska',
    whatsapp_label:   'Write on WhatsApp',

    guar_title:       'Employment guarantee',
    guar_desc:        'After completing training, we guarantee job placement through our network of 15+ partner factories.',

    footer_tagline:   '"We understand responsibility, we act professionally."',
    footer_city:      'Bydgoszcz, Poland',
    footer_copy:      '© 2024 Profi Power (Profi Corporation). All rights reserved.',

    empl_label:       'Open positions',
    empl_title:       'EMPLOYMENT',
    empl_sub:         'Official employment at factories in Poland. Choose your specialty — we\'ll help with everything else.',
    job_per_hour:     'PLN net/h',
    job_apply:        'Apply now',
    job_top_badge:    'Top vacancy',

    job1_title:  'Metalworker',
    job1_r1:     'At least 1 year of metalworking experience',
    job1_r2:     'Ability to read technical drawings',
    job1_r3:     'Experience in metal structure assembly',
    job1_r4:     'Knowledge of metalworking tools',
    job1_r5:     'Responsibility and attention to detail',
    job1_r6:     'Willingness to learn',

    job2_title:  'Metalworker-Welder',
    job2_r1:     'At least 1 year of metalworker-welder experience',
    job2_r2:     'Ability to read technical drawings',
    job2_r3:     'MIG/MAG or TIG welding skills',
    job2_r4:     'Metalworking experience',
    job2_r5:     'Attention to detail',
    job2_r6:     'Teamwork',
    job2_r7:     'Readiness for physical labour',

    job3_title:  'MIG/MAG Welder 135',
    job3_r1:     'At least 2 years of MIG/MAG welding experience',
    job3_r2:     'Welder certificate (ISO 9606 preferred)',
    job3_r3:     'Ability to read technical drawings',
    job3_r4:     'Quality weld execution',
    job3_r5:     'Responsibility',

    job4_title:  'Thermal Straightener',
    job4_r1:     'Experience in thermal metal straightening',
    job4_r2:     'Work with gas torch',
    job4_r3:     'Physical endurance',
    job4_r4:     'Attention and precision',
    job4_r5:     'Compliance with safety standards',

    job5_title:  'Welding Robot Operator',
    job5_r1:     'Experience with welding robots',
    job5_r2:     'Basic CNC programming knowledge',
    job5_r3:     'Technical literacy',
    job5_r4:     'Attentiveness and responsibility',

    job6_title:  'Painter',
    job6_r1:     'At least 1 year of painting experience',
    job6_r2:     'Work with spray gun',
    job6_r3:     'Surface preparation for painting',
    job6_r4:     'Compliance with health and safety standards',
    job6_r5:     'Neatness and accuracy',

    job7_title:  'Assembly Technician',
    job7_r1:     'Assembly work experience',
    job7_r2:     'Reading technical diagrams',
    job7_r3:     'Work with assembly tools',
    job7_r4:     'Responsibility',
    job7_r5:     'Teamwork',

    job8_title:  'Electrician',
    job8_r1:     'At least 1 year of electrical installation experience',
    job8_r2:     'Knowledge of electrical diagrams',
    job8_r3:     'Electrician certificate (preferred)',
    job8_r4:     'Compliance with electrical safety rules',
    job8_r5:     'Attention and precision',

    job9_title:  'Mechanic',
    job9_r1:     'At least 1 year of mechanical work experience',
    job9_r2:     'Reading technical drawings',
    job9_r3:     'Knowledge of mechanical tools',
    job9_r4:     'Technical thinking',
    job9_r5:     'Responsible attitude to work',

    job10_title: 'Shot Blaster',
    job10_r1:    'Shot blasting experience',
    job10_r2:    'Work with specialised equipment',
    job10_r3:    'Compliance with safety standards',
    job10_r4:    'Physical endurance',
    job10_r5:    'Responsibility',

    job11_title: 'Electronics Technician',
    job11_r1:    'Higher or secondary technical education (electronics)',
    job11_r2:    'Experience servicing electronic systems',
    job11_r3:    'Knowledge of circuit design',
    job11_r4:    'Ability to use measuring instruments',
    job11_r5:    'Analytical thinking',
    job11_r6:    'Attention to detail',
    job11_r7:    'Willingness to learn',

    benefits_title: 'What we offer',
    benefits_intro: 'Official employment with a full social package at partner factories in Poland.',
    ben1:  'Official employment under a contract',
    ben2:  'All taxes paid (insurance, ZUS, PIT-11)',
    ben3:  'Payment by the 10th of each month without delays',
    ben4:  'Tools and workwear provided by the company',
    ben5:  'Medical examination at the employee\'s expense',
    ben6:  'Full on-site support until the first day of work',
    ben7:  'Legal employment documents for a residence card',
    ben8:  'Accommodation if needed (paid)',
    ben9:  'Family members added to the insurance policy',
    ben10: 'Free skills verification for welders and metalworkers',
    ben11: 'Technical drawing reading course (assembly tech, mechanic, electrician, metalworker)',
  },

  pl: {
    logo_sub:         'Szkoła spawalnicza',
    nav_programs:     'Programy',
    nav_why:          'Zalety',
    nav_employment:   'Oferty pracy',
    nav_faq:          'FAQ',
    nav_contacts:     'Kontakt',
    nav_cta:          'Zapisz się',

    hero_eyebrow:     'Szkoła spawalnicza · Bydgoszcz, Polska',
    hero_title:       'SZKOLENIE SPAWACZA',
    hero_sub:         'Certyfikacja międzynarodowa TÜV Rheinland · ISO 9606',
    hero_cta1:        'Zapisz się na szkolenie',
    hero_cta2:        'Dowiedz się więcej',

    cert_label:       'Centrum akredytowane',
    iso_label:        'Standard międzynarodowy',
    stat_students:    'absolwentów',
    stat_years:       'lat doświadczenia',
    stat_partners:    'fabryk partnerskich',
    htp_cta:          'Bezpłatna konsultacja →',
    scroll_hint:      'Przewiń w dół',

    programs_label:   'Co oferujemy',
    programs_title:   'PROGRAMY SZKOLENIOWE',
    programs_sub:     'Wybierz program odpowiedni dla siebie — od pełnego kursu do przygotowania do egzaminu',

    prog1_tag:        'Najpopularniejszy',
    prog1_title:      'Spawanie MIG/MAG (135, 136, 138)',
    prog1_duration:   '2 tygodnie',
    prog1_result:     'od zera + zatrudnienie',
    prog1_desc:       'Pełny kurs spawania metodą 135/136. Od podstawowych umiejętności do pierwszego miejsca pracy w polskich zakładach.',
    prog1_li1:        'Podstawy teorii i bezpieczeństwo',
    prog1_li2:        'Maksimum praktyki',
    prog1_li3:        'Przygotowanie do egzaminu certyfikacyjnego',
    prog1_li4:        'Pomoc w znalezieniu pracy',
    prog_cta:         'Zapisz się',

    prog2_title:      'Spawanie TIG (141)',
    prog2_duration:   '2 tygodnie',
    prog2_result:     'przejście z MIG/MAG',
    prog2_desc:       'Opanowanie metody 141 TIG dla tych, którzy mają już podstawowe umiejętności spawania MIG/MAG. Otwiera nowe możliwości w produkcji.',
    prog2_li1:        'Technika spawania TIG',
    prog2_li2:        'Spawanie stali nierdzewnej',
    prog2_li3:        'Certyfikacja ISO 9606-1 (141)',

    prog3_title:      'Przygotowanie do kontroli wstępnej',
    prog3_duration:   '2 dni',
    prog3_result:     'pozycja PF',
    prog3_desc:       'Intensywne przygotowanie do egzaminu wstępnego zakładu. Maksimum praktyki w minimalnym czasie. Dla tych, którzy mają już doświadczenie.',
    prog3_li1:        'Techniczne przygotowanie do egzaminu',
    prog3_li2:        'Ćwiczenie pozycji PF',
    prog3_li3:        'Analiza typowych błędów',

    steps_label:      'Proces szkolenia',
    steps_title:      'JAK TO DZIAŁA',
    step1_title:      'Złóż wniosek',
    step1_desc:       'Wypełnij krótki formularz lub zadzwoń do nas. Razem określimy odpowiedni program.',
    step2_title:      'Szkolenie',
    step2_desc:       'Zajęcia praktyczne z doświadczonymi instruktorami. Indywidualne podejście do każdego ucznia.',
    step3_title:      'Egzamin i certyfikacja',
    step3_desc:       'Zdaj egzamin i uzyskaj certyfikat ISO 9606 akredytowany przez TÜV Rheinland. Ważny 3 lata w całej Europie.',
    step4_title:      'Zacznij pracować',
    step4_desc:       'Bezpośrednio połączymy cię z fabrykami partnerskimi. Gwarantujemy zatrudnienie po szkoleniu.',

    why_label:        'Twój wybór',
    why_title:        'DLACZEGO NAS WYBIERAJĄ',
    why1_title:       'Akredytacja TÜV Rheinland',
    why1_desc:        'Certyfikujemy spawaczy według międzynarodowej normy ISO 9606. Twój certyfikat jest uznawany w całej Europie i ważny 3 lata.',
    why2_title:       'Sprzęt ESAB',
    why2_desc:        'Szkolenie na maszynach ESAB — tym samym sprzęcie, który jest zainstalowany w prawdziwych zakładach produkcyjnych.',
    why3_title:       'Doświadczeni instruktorzy',
    why3_desc:        'Nasi instruktorzy to praktykujący spawacze z wieloletnim doświadczeniem produkcyjnym. Nie teoria, ale prawdziwa praktyka.',
    why4_title:       'Elastyczny harmonogram',
    why4_desc:        'Indywidualny program dostosowany do Twoich potrzeb i wygodny harmonogram. Dopasujemy czas, który Ci odpowiada.',
    why5_title:       'Gwarancja zatrudnienia',
    why5_desc:        '15+ fabryk partnerskich w Polsce. Nie tylko uczymy — bezpośrednio pomagamy ze znalezieniem pierwszego miejsca pracy.',
    why6_title:       'Wsparcie w języku ukraińskim',
    why6_desc:        'Mówimy po ukraińsku, polsku i angielsku. Pomożemy z dokumentami i adaptacją w Polsce.',

    sban_students:    'absolwentów odbyło szkolenie',
    sban_weeks:       'tygodnie — od zera do pracy',
    sban_partners:    'fabryk partnerskich w Polsce',
    sban_years:       'lat na rynku',

    faq_label:        'Odpowiedzi na pytania',
    faq_title:        'NAJCZĘŚCIEJ ZADAWANE PYTANIA',
    faq1_q:           'Czy do zapisania się potrzebne jest doświadczenie w spawaniu?',
    faq1_a:           'Nie. Mamy programy dla absolutnych początkujących — uczymy od zera. Najważniejsze jest chęć do nauki i pracy.',
    faq2_q:           'Ile kosztuje szkolenie?',
    faq2_a:           'Koszt zależy od wybranego programu i indywidualnych warunków. Skontaktuj się z nami bezpośrednio — powiemy o aktualnych cenach i możliwych zniżkach.',
    faq3_q:           'Jakich metod spawania uczycie?',
    faq3_a:           'Uczymy metod 135 i 136 (MIG/MAG) oraz 138. To najpopularniejsze metody w polskich zakładach produkcyjnych.',
    faq4_q:           'Jak długo ważny jest certyfikat ISO 9606?',
    faq4_a:           'Certyfikat ISO 9606 akredytowany przez TÜV Rheinland jest ważny 3 lata. Jest uznawany przez pracodawców w całej Europie.',
    faq5_q:           'Czy pomożecie znaleźć pracę po szkoleniu?',
    faq5_a:           'Tak. Mamy 15+ fabryk partnerskich i bezpośrednio pomagamy w znalezieniu zatrudnienia po ukończeniu szkolenia.',
    faq6_q:           'Na jakim sprzęcie odbywa się szkolenie?',
    faq6_a:           'Szkolimy na maszynach ESAB — jednej z najbardziej profesjonalnych marek sprzętu spawalniczego, używanego w czołowych zakładach produkcyjnych.',
    faq7_q:           'Czy jest wsparcie dla tych, którzy nie mówią po polsku?',
    faq7_a:           'Tak. Nasz personel mówi po ukraińsku, polsku i angielsku. Pomagamy z dokumentami i adaptacją.',

    contact_label:    'Zacznij szkolenie',
    contact_title:    'ZAPISZ SIĘ NA SZKOLENIE',
    contact_sub:      'Wypełnij formularz, a my skontaktujemy się z tobą w ciągu 1 dnia roboczego',

    form_name_label:  'Twoje imię',
    form_name:        'Twoje imię',
    form_phone_label: 'Telefon / WhatsApp',
    form_phone:       'Telefon / WhatsApp',
    form_program_label:'Program szkolenia',
    prog_select_default:'Wybierz program',
    prog_select_1:    'MIG/MAG (135, 136) — 2 tygodnie',
    prog_select_2:    'TIG (141) — 2 tygodnie',
    prog_select_3:    'Przygotowanie do kontroli wstępnej — 2 dni',
    prog_select_4:    'Inne / nie wiem jeszcze',
    form_msg_label:   'Pytanie (opcjonalne)',
    form_msg:         'Twoje pytanie lub komentarz...',
    form_submit:      'Wyślij wniosek',
    form_sent:        'Wniosek wysłany ✓',
    form_note:        'Odpowiadamy w ciągu 1 dnia roboczego. Mówimy po ukraińsku, polsku i angielsku.',

    office1_tag:      'Główne biuro',
    office1_city:     'Bydgoszcz',
    office1_addr:     'Poznańska 27/1, 85-129 Bydgoszcz, Polska',
    office2_tag:      'Szkoła spawalnicza',
    office2_city:     'Bydgoszcz',
    office2_addr:     'ul. Witebska 1B, 85-759 Bydgoszcz, Polska',
    office3_tag:      'Oddział',
    office3_city:     'Nowy Sącz',
    office3_addr:     'Zielona 27, 33-300 Nowy Sącz, Polska',
    whatsapp_label:   'Napisz na WhatsApp',

    guar_title:       'Gwarancja zatrudnienia',
    guar_desc:        'Po ukończeniu szkolenia gwarantujemy znalezienie pracy poprzez sieć 15+ fabryk partnerskich.',

    footer_tagline:   '"Rozumiemy odpowiedzialność, działamy profesjonalnie."',
    footer_city:      'Bydgoszcz, Polska',
    footer_copy:      '© 2024 Profi Power (Profi Corporation). Wszelkie prawa zastrzeżone.',

    empl_label:       'Otwarte oferty pracy',
    empl_title:       'ZATRUDNIENIE',
    empl_sub:         'Oficjalne zatrudnienie w zakładach w Polsce. Wybierz swoją specjalność — my zajmiemy się resztą.',
    job_per_hour:     'zł netto/h',
    job_apply:        'Aplikuj teraz',
    job_top_badge:    'Top oferta',

    job1_title:  'Ślusarz',
    job1_r1:     'Min. 1 rok doświadczenia jako ślusarz',
    job1_r2:     'Umiejętność czytania rysunków technicznych',
    job1_r3:     'Doświadczenie w montażu konstrukcji metalowych',
    job1_r4:     'Znajomość narzędzi ślusarskich',
    job1_r5:     'Odpowiedzialność i uważność',
    job1_r6:     'Chęć do nauki',

    job2_title:  'Ślusarz-spawacz',
    job2_r1:     'Min. 1 rok doświadczenia jako ślusarz-spawacz',
    job2_r2:     'Umiejętność czytania rysunków technicznych',
    job2_r3:     'Umiejętności spawania MIG/MAG lub TIG',
    job2_r4:     'Doświadczenie w pracach ślusarskich',
    job2_r5:     'Dbałość o szczegóły',
    job2_r6:     'Praca zespołowa',
    job2_r7:     'Gotowość do pracy fizycznej',

    job3_title:  'Spawacz MIG/MAG 135',
    job3_r1:     'Min. 2 lata doświadczenia w spawaniu MIG/MAG',
    job3_r2:     'Uprawnienia spawacza (preferowane ISO 9606)',
    job3_r3:     'Umiejętność czytania rysunków technicznych',
    job3_r4:     'Jakościowe wykonywanie spoin',
    job3_r5:     'Odpowiedzialność',

    job4_title:  'Prostownik termiczny',
    job4_r1:     'Doświadczenie w termicznym prostowaniu metalu',
    job4_r2:     'Praca z palnikiem gazowym',
    job4_r3:     'Wytrzymałość fizyczna',
    job4_r4:     'Uważność i precyzja',
    job4_r5:     'Przestrzeganie norm bezpieczeństwa',

    job5_title:  'Operator robota spawalniczego',
    job5_r1:     'Doświadczenie z robotami spawalniczymi',
    job5_r2:     'Podstawowa znajomość programowania CNC',
    job5_r3:     'Wiedza techniczna',
    job5_r4:     'Uważność i odpowiedzialność',

    job6_title:  'Malarz',
    job6_r1:     'Min. 1 rok doświadczenia malarskiego',
    job6_r2:     'Praca z pistoletem natryskowym',
    job6_r3:     'Przygotowanie powierzchni do malowania',
    job6_r4:     'Przestrzeganie przepisów BHP',
    job6_r5:     'Schludność i dokładność',

    job7_title:  'Monter',
    job7_r1:     'Doświadczenie w pracach montażowych',
    job7_r2:     'Czytanie schematów technicznych',
    job7_r3:     'Praca z narzędziami montażowymi',
    job7_r4:     'Odpowiedzialność',
    job7_r5:     'Praca w zespole',

    job8_title:  'Elektromonter',
    job8_r1:     'Min. 1 rok doświadczenia w montażu elektrycznym',
    job8_r2:     'Znajomość schematów elektrycznych',
    job8_r3:     'Uprawnienia elektryczne (preferowane)',
    job8_r4:     'Przestrzeganie przepisów bezpieczeństwa elektrycznego',
    job8_r5:     'Uważność i precyzja',

    job9_title:  'Mechanik',
    job9_r1:     'Min. 1 rok doświadczenia w pracach mechanicznych',
    job9_r2:     'Czytanie rysunków technicznych',
    job9_r3:     'Znajomość narzędzi mechanicznych',
    job9_r4:     'Myślenie techniczne',
    job9_r5:     'Odpowiedzialne podejście do pracy',

    job10_title: 'Śrutownik (piaskarz)',
    job10_r1:    'Doświadczenie w obróbce śrutowniczej',
    job10_r2:    'Praca ze specjalistycznym sprzętem',
    job10_r3:    'Przestrzeganie norm bezpieczeństwa',
    job10_r4:    'Wytrzymałość fizyczna',
    job10_r5:    'Odpowiedzialność',

    job11_title: 'Elektronik',
    job11_r1:    'Wyższe lub średnie wykształcenie techniczne (elektronika)',
    job11_r2:    'Doświadczenie w serwisowaniu systemów elektronicznych',
    job11_r3:    'Znajomość układów elektronicznych',
    job11_r4:    'Umiejętność obsługi przyrządów pomiarowych',
    job11_r5:    'Myślenie analityczne',
    job11_r6:    'Dbałość o szczegóły',
    job11_r7:    'Chęć do nauki',

    benefits_title: 'Co oferujemy',
    benefits_intro: 'Oficjalne zatrudnienie z pełnym pakietem socjalnym w fabrykach partnerskich w Polsce.',
    ben1:  'Oficjalne zatrudnienie na podstawie umowy',
    ben2:  'Opłacone wszystkie podatki (ubezpieczenie, ZUS, PIT-11)',
    ben3:  'Wypłata do 10. każdego miesiąca bez opóźnień',
    ben4:  'Narzędzia i odzież robocza na koszt firmy',
    ben5:  'Badania lekarskie na koszt pracownika',
    ben6:  'Pełna opieka w zakładzie do pierwszego dnia pracy',
    ben7:  'Dokumenty legalnego zatrudnienia do karty pobytu',
    ben8:  'Zakwaterowanie w razie potrzeby (płatne)',
    ben9:  'Dołączenie rodziny do polisy ubezpieczeniowej',
    ben10: 'Bezpłatna weryfikacja kwalifikacji dla spawaczy i ślusarzy',
    ben11: 'Kurs czytania rysunków technicznych (monter, mechanik, elektromonter, ślusarz)',
  },
};

/* ══════════════════════════════════════════════════════
   LANGUAGE SWITCHER
══════════════════════════════════════════════════════ */
let currentLang = localStorage.getItem('profi-lang') || 'ua';

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('profi-lang', lang);

  const htmlLangMap = { ua: 'uk', en: 'en', pl: 'pl' };
  document.documentElement.lang = htmlLangMap[lang];

  const t = TRANSLATIONS[lang];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* Input / textarea placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Select options */
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (t[key] !== undefined) opt.textContent = t[key];
  });

  /* Sync all lang-btn active states */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* Attach click handlers to every lang button */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
});

/* Apply on load */
setLang(currentLang);

/* ══════════════════════════════════════════════════════
   NAVBAR SCROLL
══════════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ══════════════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════════════ */
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ══════════════════════════════════════════════════════
   WELDING SPARKS — canvas particle system
══════════════════════════════════════════════════════ */
(function initSparks() {
  const canvas = document.getElementById('sparks');
  if (!canvas) return;
  const ctx  = canvas.getContext('2d');
  const hero = document.getElementById('hero');

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function makeSpark(fromBottom) {
    const x = fromBottom
      ? (Math.random() * 0.5 + 0.1) * canvas.width
      : Math.random() * canvas.width;
    return {
      x,
      y:    fromBottom ? canvas.height + 5 : Math.random() * canvas.height,
      r:    Math.random() * 1.6 + 0.3,
      vx:   (Math.random() - 0.45) * 1.1,
      vy:   -(Math.random() * 1.5 + 0.4),
      life: fromBottom ? 0 : Math.random(),
      maxL: 0.45 + Math.random() * 0.55,
      hot:  Math.random() < 0.65,
    };
  }

  const COUNT = 65;
  const sparks = Array.from({ length: COUNT }, () => makeSpark(false));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < sparks.length; i++) {
      const p = sparks[i];
      p.x    += p.vx;
      p.y    += p.vy;
      p.life += 0.006;

      if (p.life > p.maxL || p.y < -10) {
        sparks[i] = makeSpark(true);
        continue;
      }

      const alpha = Math.sin((p.life / p.maxL) * Math.PI) * 0.72;
      if (p.hot) {
        ctx.fillStyle = `rgba(255, ${100 + (Math.random() * 80) | 0}, 15, ${alpha})`;
      } else {
        ctx.fillStyle = `rgba(255, ${200 + (Math.random() * 55) | 0}, 80, ${alpha * 0.85})`;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ══════════════════════════════════════════════════════
   SCROLL-TRIGGERED FADE-INS
══════════════════════════════════════════════════════ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ══════════════════════════════════════════════════════
   FAQ ACCORDION — toggle + icon
══════════════════════════════════════════════════════ */
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    const icon = item.querySelector('.faq-icon');
    if (icon) icon.textContent = item.open ? '−' : '+';
  });
});

/* ══════════════════════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════════════════════ */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const t   = TRANSLATIONS[currentLang];
    btn.textContent     = t.form_sent || 'Sent ✓';
    btn.style.background = 'var(--green-2, #16a34a)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent     = t.form_submit || 'Submit';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}
