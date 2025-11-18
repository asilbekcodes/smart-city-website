import { Building2, Map, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Infrastructure() {
  const { t } = useLanguage();
  
  const categories = [
    {
      icon: Building2,
      title: t('infra.architecture'),
      items: [
        'Binolar reestri',
        'Arxitektura nazorati',
        'Qurilish ruxsatnomasi',
        'Reja-loyihalar',
      ],
      bgColor: 'bg-blue-50',
      iconColor: 'bg-blue-500',
    },
    {
      icon: Map,
      title: t('infra.geo'),
      items: [
        'Interaktiv xarita',
        'Kadastr ma\'lumotlari',
        'Yer uchastkalari',
        'Zonalash',
      ],
      bgColor: 'bg-yellow-50',
      iconColor: 'bg-yellow-500',
    },
    {
      icon: Smartphone,
      title: t('infra.smart'),
      items: [
        'IoT sensorlar',
        'Smart yoritish',
        'Video monitoring',
        'Ekologiya nazorati',
      ],
      bgColor: 'bg-red-50',
      iconColor: 'bg-red-500',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 dark:text-white">{t('infra.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('infra.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className={`${category.bgColor} dark:bg-gray-800 rounded-xl p-8 transition-colors`}>
                <div className={`${category.iconColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl mb-4 dark:text-white">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}