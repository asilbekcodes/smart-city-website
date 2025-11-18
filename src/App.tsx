import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutProject } from './components/AboutProject';
import { Services } from './components/Services';
import { Statistics } from './components/Statistics';
import { Infrastructure } from './components/Infrastructure';
import { MobileApp } from './components/MobileApp';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main>
            <Hero />
            <AboutProject />
            <Services />
            <Statistics />
            <Infrastructure />
            <MobileApp />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}