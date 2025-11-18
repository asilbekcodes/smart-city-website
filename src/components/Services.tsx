import { 
  FileText, 
  Users, 
  Building2, 
  Briefcase, 
  Zap, 
  Heart,
  GraduationCap,
  Bus,
  Home,
  Droplets,
  Wifi,
  Camera,
  TreePine,
  Newspaper,
  Calculator,
  ShieldCheck,
  Car,
  Landmark
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: FileText,
      title: t('service.docs'),
      items: [
        'Hujjat olish',
        'Onlayn ariza',
        'Status tekshirish',
      ],
      color: 'bg-blue-500',
    },
    {
      icon: Building2,
      title: t('service.infrastructure'),
      items: [
        'Binolar ma\'lumoti',
        'Reja-loyihalar',
        'Qurilish litsenziyasi',
      ],
      color: 'bg-teal-500',
    },
    {
      icon: Users,
      title: t('service.social'),
      items: [
        'Fuqarolar uchun',
        'Ijtimoiy yordam',
        'Pensiya ishlari',
      ],
      color: 'bg-red-500',
    },
    {
      icon: Briefcase,
      title: t('service.economy'),
      items: [
        'Biznes rivojlantirish',
        'Investitsiya loyihalari',
        'Grant dasturlari',
      ],
      color: 'bg-purple-500',
    },
    {
      icon: Zap,
      title: t('service.smart'),
      items: [
        'Smart yoritish',
        'IoT tizimlar',
        'Monitorinq',
      ],
      color: 'bg-yellow-500',
    },
    {
      icon: Heart,
      title: t('service.health'),
      items: [
        'Tibbiy muassasalar',
        'Onlayn qabulga yozilish',
        'Shifokorlar bazasi',
      ],
      color: 'bg-red-500',
    },
    {
      icon: GraduationCap,
      title: t('service.education'),
      items: [
        'Maktablar ma\'lumoti',
        'Bog\'chalar',
        'Onlayn kurslar',
      ],
      color: 'bg-indigo-500',
    },
    {
      icon: Bus,
      title: t('service.transport'),
      items: [
        'Marshrut ma\'lumotlari',
        'Real vaqt kuzatuv',
        'Tarif va jadvallar',
      ],
      color: 'bg-orange-500',
    },
    {
      icon: Home,
      title: t('service.housing'),
      items: [
        'Kommunal to\'lovlar',
        'Uy-joy masalalari',
        'Dispetcher xizmati',
      ],
      color: 'bg-green-500',
    },
    {
      icon: Droplets,
      title: t('service.water'),
      items: [
        'Suv resurslari',
        'Iste\'mol nazorati',
        'Onlayn to\'lovlar',
      ],
      color: 'bg-cyan-500',
    },
    {
      icon: Wifi,
      title: t('service.wifi'),
      items: [
        'Jamoat joylarida Wi-Fi',
        'Xarita va manzillar',
        'Ulanish ko\'rsatmalari',
      ],
      color: 'bg-blue-400',
    },
    {
      icon: Camera,
      title: t('service.security'),
      items: [
        'Video monitoring',
        'Favqulodda vaziyatlar',
        'Onlayn qo\'llab-quvvatlash',
      ],
      color: 'bg-gray-700',
    },
    {
      icon: TreePine,
      title: t('service.ecology'),
      items: [
        'Park va bog\'lar',
        'Atrof-muhit monitoring',
        'Daraxt ekish dasturlari',
      ],
      color: 'bg-emerald-500',
    },
    {
      icon: Newspaper,
      title: t('service.news'),
      items: [
        'Shahar yangiliklari',
        'Rasmiy e\'lonlar',
        'Tadbirlar kalendari',
      ],
      color: 'bg-pink-500',
    },
    {
      icon: Calculator,
      title: t('service.tax'),
      items: [
        'Soliq hisob-kitoblari',
        'Onlayn to\'lovlar',
        'Qarzlar ma\'lumoti',
      ],
      color: 'bg-amber-500',
    },
    {
      icon: ShieldCheck,
      title: t('service.legal'),
      items: [
        'Onlayn maslahatlar',
        'Hujjat namunalari',
        'Murojaat qilish',
      ],
      color: 'bg-violet-500',
    },
    {
      icon: Car,
      title: t('service.auto'),
      items: [
        'Avtomashina ro\'yxati',
        'Jarima ma\'lumotlari',
        'Parkinglar',
      ],
      color: 'bg-slate-600',
    },
    {
      icon: Landmark,
      title: t('service.government'),
      items: [
        'Davlat xizmatlari',
        'Qabulxonalar',
        'Onlayn navbat',
      ],
      color: 'bg-blue-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 dark:text-white">{t('services.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('services.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg dark:text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Batafsil
                    <span>→</span>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}