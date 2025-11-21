import { Target, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutProject() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Target,
      title: t('about.goal'),
      description: t('about.goal.desc'),
      color: 'bg-blue-500',
    },
    {
      icon: Users,
      title: t('about.team'),
      description: t('about.team.desc'),
      color: 'bg-teal-500',
    },
    {
      icon: TrendingUp,
      title: t('about.results'),
      description: t('about.results.desc'),
      color: 'bg-red-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-700 dark:text-white">{t('about.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-700 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}