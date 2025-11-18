import { Facebook, Instagram, Send, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const footerLinks = {
    [t('nav.project')]: [
      'Biz haqimizda',
      'Maqsad va vazifalar',
      'Jamoamiz',
      'Hamkorlar',
    ],
    [t('nav.services')]: [
      'Elektron xizmatlar',
      'Smart texnologiyalar',
      'Infratuzilma',
      'Monitoring',
    ],
    'Ma\'lumot': [
      'Yangiliklar',
      'E\'lonlar',
      'Hujjatlar',
      'FAQ',
    ],
    'Yordam': [
      'Bog\'lanish',
      'Qo\'llab-quvvatlash',
      'Foydalanish shartlari',
      'Maxfiylik siyosati',
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Logo className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-400 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Send className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 Qarshi Smart City. {t('footer.copyright')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="hover:text-blue-400 transition-colors">{t('footer.terms')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}