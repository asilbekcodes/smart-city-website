import { useLanguage } from '../contexts/LanguageContext';

export function Statistics() {
  const { t } = useLanguage();
  
  const stats = [
    { value: '250+', label: t('stats.statistics') },
    { value: '50+', label: t('stats.data') },
    { value: '100+', label: t('stats.service') },
    { value: '2000+', label: t('stats.users') },
    { value: '4500+', label: t('stats.indicators') },
    { value: '95%', label: t('stats.efficiency') },
    { value: '247', label: t('stats.projects') },
    { value: '87%', label: t('stats.satisfaction') },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 text-white">
          <h2 className="text-3xl md:text-4xl mb-4">{t('stats.title')}</h2>
          <p className="text-blue-100">
            {t('stats.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white">
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}