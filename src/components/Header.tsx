import { Menu, X, Sun, Moon, Bell } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const [notificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.project'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        panelRef.current &&
        !notificationRef.current.contains(event.target as Node) &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setNotificationOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo className="h-10 w-auto" />
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
            {/* <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Search className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button> */}

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setNotificationOpen((prev) => !prev)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Language selector (select control) */}
            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg px-2">
              <select
                aria-label="Select language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'uz' | 'ru' | 'en')}
                className="text-sm py-1 pr-4 pl-2 outline-none bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-white" />
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
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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

            {/* Mobile language selector (select control) */}
            <div className="px-4 pt-2">
              <select
                aria-label="Select language"
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'uz' | 'ru' | 'en')}
                className="w-full py-2 px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg outline-none"
              >
                <option value="uz">UZB</option>
                <option value="ru">RUS</option>
                <option value="en">ENG</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Notification side panel */}
      {notificationOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" />
          <div
            ref={panelRef}
            className="relative h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-800 animate-slide-in-right"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800">
              <div>
                <p className="text-lg font-semibold">Bildirishnomalar</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Oxirgi xabarlar</p>
              </div>
              <button
                aria-label="Close notifications"
                onClick={() => setNotificationOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
            <div className='flex justify-center items-center mt-10'>
              Hozircha Bildirishnomalar yo'q
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
