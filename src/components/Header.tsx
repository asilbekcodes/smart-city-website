import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Logo } from './Logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.project'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.news'), href: '#news' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo className="h-10 w-auto dark:brightness-0 dark:invert" />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
            
            {/* Language selector */}
            <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'uz' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                UZB
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'ru' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                RUS
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile theme toggle */}
            <div className="px-4 pt-2">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {theme === 'light' ? 'Темный режим' : 'Светлый режим'}
                </span>
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
            
            {/* Mobile language selector */}
            <div className="px-4 pt-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`flex-1 px-3 py-2 text-sm rounded transition-colors ${
                    language === 'uz' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  UZB
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`flex-1 px-3 py-2 text-sm rounded transition-colors ${
                    language === 'ru' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  RUS
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-3 py-2 text-sm rounded transition-colors ${
                    language === 'en' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  ENG
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}