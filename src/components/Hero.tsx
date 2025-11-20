import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import karshi from '../assets/qarshi.jpg';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      {/* Background image with blue overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-blue-900/90">
        <ImageWithFallback
          src={karshi}
          alt="Qarshi city"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mr-auto text-left text-white">
          <h1 className="text-5xl md:text-6xl mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg mb-8 opacity-90">
            {t('hero.description')}
          </p>

          {/* Search bar */}
          {/* <div className="max-w-xl">
            <div className="flex gap-2 bg-white rounded-lg p-2">
              <Input 
                placeholder={t('hero.search')}
                className="border-0 focus-visible:ring-0"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div> */}

          {/* Statistics cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-1">2477</div>
              <div className="text-sm opacity-90">{t('hero.stat1')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-1">9000+</div>
              <div className="text-sm opacity-90">{t('hero.stat2')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-1">456</div>
              <div className="text-sm opacity-90">{t('hero.stat3')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl mb-1">1245</div>
              <div className="text-sm opacity-90">{t('hero.stat4')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}