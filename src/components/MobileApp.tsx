import { Smartphone, Bell, BarChart3, Settings } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function MobileApp() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Smartphone,
      title: t('app.feature1'),
      description: t('app.feature1.desc'),
    },
    {
      icon: Bell,
      title: t('app.feature2'),
      description: t('app.feature2.desc'),
    },
    {
      icon: BarChart3,
      title: t('app.feature3'),
      description: t('app.feature3.desc'),
    },
    {
      icon: Settings,
      title: t('app.feature4'),
      description: t('app.feature4.desc'),
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-700 dark:text-white">{t('app.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('app.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile app mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl">
              {/* Dashboard mockup */}
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg text-gray-700">Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                    <div className="w-8 h-8 rounded-full bg-green-100"></div>
                  </div>
                </div>
                
                {/* Mock chart */}
                <div className="h-48 bg-gradient-to-t from-blue-100 to-blue-50 rounded-lg relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-full p-4">
                    {[40, 60, 35, 80, 45, 70, 50].map((height, i) => (
                      <div key={i} className="w-8 bg-blue-500 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>

                {/* Mock list */}
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-blue-100"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t('app.download')}</div>
                  <div>App Store</div>
                </div>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-3">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t('app.download')}</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}