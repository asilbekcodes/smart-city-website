import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Header
    'nav.home': 'Asosiy sahifa',
    'nav.project': 'Loyiha',
    'nav.services': 'Xizmatlar',
    'nav.news': 'Yangiliklar',
    'nav.contact': 'Aloqa',
    
    // Hero
    'hero.title': 'Qarshi aqlli shahri',
    'hero.subtitle': 'Shaharni Rivojlantirish Tizimi',
    'hero.description': 'Zamonaviy texnologiyalar asosida shahar infratuzilmasini boshqarish va fuqarolarga sifatli xizmat ko\'rsatish tizimi',
    'hero.search': 'Qidirish...',
    'hero.stat1': 'Ko\'rsatkich',
    'hero.stat2': 'Ma\'lumot',
    'hero.stat3': 'Xizmat',
    'hero.stat4': 'Foydalanuvchi',
    
    // About Project
    'about.title': 'Loyiha Haqida',
    'about.description': 'Qarshi Smart City loyihasi shahar infratuzilmasini zamonaviylashtirib, fuqarolarning hayot sifatini oshirishga qaratilgan kompleks tizimdir.',
    'about.goal': 'Maqsad',
    'about.goal.desc': 'Fuqarolar uchun qulay, xavfsiz va zamonaviy shahar muhitini yaratish',
    'about.team': 'Jamoa',
    'about.team.desc': 'Mutaxassis dasturchilar va shahar rivojlanishi bo\'yicha professional jamoa',
    'about.results': 'Natijalar',
    'about.results.desc': 'Shahar xizmatlarining raqamlashtirilishi va samaradorlikning oshishi',
    
    // Services
    'services.title': 'Tizim Xizmatlari',
    'services.description': 'Fuqarolarning hayotini yengillashtirish uchun zamonaviy elektron xizmatlar majmuasi',
    'service.docs': 'Elektron hujjatlar',
    'service.infrastructure': 'Shahar infratuzilmasi',
    'service.social': 'Ijtimoiy xizmatlar',
    'service.economy': 'Iqtisodiy rivojlanish',
    'service.smart': 'Smart texnologiyalar',
    'service.health': 'Sog\'liqni saqlash',
    'service.education': 'Ta\'lim tizimi',
    'service.transport': 'Jamoat transporti',
    'service.housing': 'Uy-joy xizmatlari',
    'service.water': 'Suv ta\'minoti',
    'service.wifi': 'Free Wi-Fi zonalari',
    'service.security': 'Xavfsizlik tizimi',
    'service.ecology': 'Ekologiya va yashil hudud',
    'service.news': 'Yangiliklar va e\'lonlar',
    'service.tax': 'Soliq va to\'lovlar',
    'service.legal': 'Huquqiy yordam',
    'service.auto': 'Avtomobil xizmatlari',
    'service.government': 'Davlat organlari',
    
    // Statistics
    'stats.title': 'Tizim Statistikasi',
    'stats.description': 'Smart City loyihalarining samaradorligi va shahar rivojlanishi ko\'rsatkichlari',
    'stats.statistics': 'Statistika',
    'stats.data': 'Ma\'lumot',
    'stats.service': 'Xizmat',
    'stats.users': 'Foydalanuvchi',
    'stats.indicators': 'Ko\'rsatkich',
    'stats.efficiency': 'Samaradorlik',
    'stats.projects': 'Loyiha',
    'stats.satisfaction': 'Qoniqish',
    
    // Infrastructure
    'infra.title': 'Shahar infratuzilmasi',
    'infra.description': 'Zamonaviy texnologiyalar asosida shahar infratuzilmasini boshqarish',
    'infra.architecture': 'Shahar me\'morchiligi',
    'infra.geo': 'Geo ma\'lumotlar',
    'infra.smart': 'Smart texnologiyalar',
    
    // Mobile App
    'app.title': 'Mobil ilova',
    'app.description': 'Barcha shahar xizmatlariga bir ilovadan kirish. Hozir yuklab oling va qulay shahar hayotidan bahramand bo\'ling.',
    'app.feature1': 'Qulay interfeys',
    'app.feature1.desc': 'Oson va intuitiv foydalanish',
    'app.feature2': 'Push bildirishnomalar',
    'app.feature2.desc': 'Muhim yangiliklardan xabardor bo\'ling',
    'app.feature3': 'Statistika va hisobotlar',
    'app.feature3.desc': 'Real vaqt ma\'lumotlari',
    'app.feature4': 'Moslash imkoniyati',
    'app.feature4.desc': 'O\'zingizga moslashtiring',
    'app.download': 'Yuklab olish',
    
    // Contact
    'contact.title': 'Bog\'lanish',
    'contact.description': 'Savol va takliflaringiz uchun biz bilan bog\'laning. Sizga yordam berishdan mamnun bo\'lamiz.',
    'contact.address': 'Bizning manzil',
    'contact.phone': 'Telefon raqamlar',
    'contact.email': 'Email manzil',
    'contact.hours': 'Ish vaqti',
    'contact.form.title': 'Xabar yuborish',
    'contact.form.firstname': 'Ismingiz',
    'contact.form.lastname': 'Familiyangiz',
    'contact.form.subject': 'Mavzu',
    'contact.form.message': 'Xabar',
    'contact.form.send': 'Yuborish',
    
    // Footer
    'footer.description': 'Qarshi aqlli shahri - zamonaviy shahar boshqaruvi va fuqarolarga xizmat ko\'rsatish tizimi.',
    'footer.copyright': 'Barcha huquqlar himoyalangan.',
    'footer.privacy': 'Maxfiylik siyosati',
    'footer.terms': 'Foydalanish shartlari',
  },
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.project': 'Проект',
    'nav.services': 'Услуги',
    'nav.news': 'Новости',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'Умный город Карши',
    'hero.subtitle': 'Система развития города',
    'hero.description': 'Система управления городской инфраструктурой и качественного обслуживания граждан на основе современных технологий',
    'hero.search': 'Поиск...',
    'hero.stat1': 'Показатель',
    'hero.stat2': 'Данные',
    'hero.stat3': 'Услуга',
    'hero.stat4': 'Пользователь',
    
    // About Project
    'about.title': 'О проекте',
    'about.description': 'Проект Qarshi Smart City - это комплексная система, направленная на модернизацию городской инфраструктуры и повышение качества жизни граждан.',
    'about.goal': 'Цель',
    'about.goal.desc': 'Создание удобной, безопасной и современной городской среды для граждан',
    'about.team': 'Команда',
    'about.team.desc': 'Профессиональная команда разработчиков и специалистов по развитию города',
    'about.results': 'Результаты',
    'about.results.desc': 'Цифровизация городских услуг и повышение эффективности',
    
    // Services
    'services.title': 'Услуги системы',
    'services.description': 'Комплекс современных электронных услуг для упрощения жизни граждан',
    'service.docs': 'Электронные документы',
    'service.infrastructure': 'Городская инфраструктура',
    'service.social': 'Социальные услуги',
    'service.economy': 'Экономическое развитие',
    'service.smart': 'Умные технологии',
    'service.health': 'Здравоохранение',
    'service.education': 'Система образования',
    'service.transport': 'Общественный транспорт',
    'service.housing': 'Жилищные услуги',
    'service.water': 'Водоснабжение',
    'service.wifi': 'Зоны Free Wi-Fi',
    'service.security': 'Система безопасности',
    'service.ecology': 'Экология и зеленые зоны',
    'service.news': 'Новости и объявления',
    'service.tax': 'Налоги и платежи',
    'service.legal': 'Юридическая помощь',
    'service.auto': 'Автомобильные услуги',
    'service.government': 'Государственные органы',
    
    // Statistics
    'stats.title': 'Статистика системы',
    'stats.description': 'Показатели эффективности проектов Smart City и развития города',
    'stats.statistics': 'Статистика',
    'stats.data': 'Данные',
    'stats.service': 'Услуга',
    'stats.users': 'Пользователь',
    'stats.indicators': 'Показатель',
    'stats.efficiency': 'Эффективность',
    'stats.projects': 'Проект',
    'stats.satisfaction': 'Удовлетворенность',
    
    // Infrastructure
    'infra.title': 'Городская инфраструктура',
    'infra.description': 'Управление городской инфраструктурой на основе современных технологий',
    'infra.architecture': 'Городская архитектура',
    'infra.geo': 'Геоданные',
    'infra.smart': 'Умные технологии',
    
    // Mobile App
    'app.title': 'Мобильное приложение',
    'app.description': 'Доступ ко всем городским услугам из одного приложения. Скачайте сейчас и наслаждайтесь удобной городской жизнью.',
    'app.feature1': 'Удобный интерфейс',
    'app.feature1.desc': 'Простое и интуитивное использование',
    'app.feature2': 'Push-уведомления',
    'app.feature2.desc': 'Будьте в курсе важных новостей',
    'app.feature3': 'Статистика и отчеты',
    'app.feature3.desc': 'Данные в реальном времени',
    'app.feature4': 'Настройка',
    'app.feature4.desc': 'Настройте под себя',
    'app.download': 'Скачать',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.description': 'Свяжитесь с нами по вопросам и предложениям. Мы будем рады помочь вам.',
    'contact.address': 'Наш адрес',
    'contact.phone': 'Телефоны',
    'contact.email': 'Email адрес',
    'contact.hours': 'Часы работы',
    'contact.form.title': 'Отправить сообщение',
    'contact.form.firstname': 'Имя',
    'contact.form.lastname': 'Фамилия',
    'contact.form.subject': 'Тема',
    'contact.form.message': 'Сообщение',
    'contact.form.send': 'Отправить',
    
    // Footer
    'footer.description': 'Умный город Карши - система управления городом и обслуживания граждан.',
    'footer.copyright': 'Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.project': 'Project',
    'nav.services': 'Services',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Qarshi Smart City',
    'hero.subtitle': 'City Development System',
    'hero.description': 'Urban infrastructure management and quality citizen services system based on modern technologies',
    'hero.search': 'Search...',
    'hero.stat1': 'Indicator',
    'hero.stat2': 'Data',
    'hero.stat3': 'Service',
    'hero.stat4': 'User',
    
    // About Project
    'about.title': 'About Project',
    'about.description': 'Qarshi Smart City project is a comprehensive system aimed at modernizing urban infrastructure and improving the quality of life for citizens.',
    'about.goal': 'Goal',
    'about.goal.desc': 'Creating a comfortable, safe and modern urban environment for citizens',
    'about.team': 'Team',
    'about.team.desc': 'Professional team of developers and city development specialists',
    'about.results': 'Results',
    'about.results.desc': 'Digitalization of city services and increased efficiency',
    
    // Services
    'services.title': 'System Services',
    'services.description': 'A complex of modern electronic services to simplify the lives of citizens',
    'service.docs': 'Electronic documents',
    'service.infrastructure': 'City infrastructure',
    'service.social': 'Social services',
    'service.economy': 'Economic development',
    'service.smart': 'Smart technologies',
    'service.health': 'Healthcare',
    'service.education': 'Education system',
    'service.transport': 'Public transport',
    'service.housing': 'Housing services',
    'service.water': 'Water supply',
    'service.wifi': 'Free Wi-Fi zones',
    'service.security': 'Security system',
    'service.ecology': 'Ecology and green areas',
    'service.news': 'News and announcements',
    'service.tax': 'Tax and payments',
    'service.legal': 'Legal assistance',
    'service.auto': 'Auto services',
    'service.government': 'Government agencies',
    
    // Statistics
    'stats.title': 'System Statistics',
    'stats.description': 'Smart City project efficiency and city development indicators',
    'stats.statistics': 'Statistics',
    'stats.data': 'Data',
    'stats.service': 'Service',
    'stats.users': 'Users',
    'stats.indicators': 'Indicators',
    'stats.efficiency': 'Efficiency',
    'stats.projects': 'Projects',
    'stats.satisfaction': 'Satisfaction',
    
    // Infrastructure
    'infra.title': 'City infrastructure',
    'infra.description': 'Urban infrastructure management based on modern technologies',
    'infra.architecture': 'Urban architecture',
    'infra.geo': 'Geodata',
    'infra.smart': 'Smart technologies',
    
    // Mobile App
    'app.title': 'Mobile application',
    'app.description': 'Access to all city services from one application. Download now and enjoy a comfortable city life.',
    'app.feature1': 'User-friendly interface',
    'app.feature1.desc': 'Easy and intuitive to use',
    'app.feature2': 'Push notifications',
    'app.feature2.desc': 'Stay informed about important news',
    'app.feature3': 'Statistics and reports',
    'app.feature3.desc': 'Real-time data',
    'app.feature4': 'Customization',
    'app.feature4.desc': 'Customize to your liking',
    'app.download': 'Download',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Contact us with questions and suggestions. We will be happy to help you.',
    'contact.address': 'Our address',
    'contact.phone': 'Phone numbers',
    'contact.email': 'Email address',
    'contact.hours': 'Working hours',
    'contact.form.title': 'Send message',
    'contact.form.firstname': 'First name',
    'contact.form.lastname': 'Last name',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    
    // Footer
    'footer.description': 'Qarshi Smart City - urban management and citizen service system.',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy policy',
    'footer.terms': 'Terms of use',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('uz');

const t = (key: string): string => {
  return (translations[language] as any)[key] || key;
};


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
