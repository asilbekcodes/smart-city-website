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
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from './ui/dialog';

export function Services() {
  const { t } = useLanguage();

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const services = [
    {
      key: 'docs',
      icon: FileText,
      title: t('service.docs'),
      items: [
        t('service.docs.item1'),
        t('service.docs.item2'),
        t('service.docs.item3'),
      ],
      color: 'bg-blue-500',
    },
    {
      key: 'infrastructure',
      icon: Building2,
      title: t('service.infrastructure'),
      items: [
        t('service.infrastructure.item1'),
        t('service.infrastructure.item2'),
        t('service.infrastructure.item3'),
      ],
      color: 'bg-teal-500',
    },
    {
      key: 'social',
      icon: Users,
      title: t('service.social'),
      items: [
        t('service.social.item1'),
        t('service.social.item2'),
        t('service.social.item3'),
      ],
      color: 'bg-red-500',
    },
    {
      key: 'economy',
      icon: Briefcase,
      title: t('service.economy'),
      items: [
        t('service.economy.item1'),
        t('service.economy.item2'),
        t('service.economy.item3'),
      ],
      color: 'bg-purple-500',
    },
    {
      key: 'smart',
      icon: Zap,
      title: t('service.smart'),
      items: [
        t('service.smart.item1'),
        t('service.smart.item2'),
        t('service.smart.item3'),
      ],
      color: 'bg-yellow-500',
    },
    {
      key: 'health',
      icon: Heart,
      title: t('service.health'),
      items: [
        t('service.health.item1'),
        t('service.health.item2'),
        t('service.health.item3'),
      ],
      color: 'bg-red-500',
    },
    {
      key: 'education',
      icon: GraduationCap,
      title: t('service.education'),
      items: [
        t('service.education.item1'),
        t('service.education.item2'),
        t('service.education.item3'),
      ],
      color: 'bg-indigo-500',
    },
    {
      key: 'transport',
      icon: Bus,
      title: t('service.transport'),
      items: [
        t('service.transport.item1'),
        t('service.transport.item2'),
        t('service.transport.item3'),
      ],
      color: 'bg-orange-500',
    },
    {
      key: 'housing',
      icon: Home,
      title: t('service.housing'),
      items: [
        t('service.housing.item1'),
        t('service.housing.item2'),
        t('service.housing.item3'),
      ],
      color: 'bg-green-500',
    },
    {
      key: 'water',
      icon: Droplets,
      title: t('service.water'),
      items: [
        t('service.water.item1'),
        t('service.water.item2'),
        t('service.water.item3'),
      ],
      color: 'bg-cyan-500',
    },
    {
      key: 'wifi',
      icon: Wifi,
      title: t('service.wifi'),
      items: [
        t('service.wifi.item1'),
        t('service.wifi.item2'),
        t('service.wifi.item3'),
      ],
      color: 'bg-blue-400',
    },
    {
      key: 'security',
      icon: Camera,
      title: t('service.security'),
      items: [
        t('service.security.item1'),
        t('service.security.item2'),
        t('service.security.item3'),
      ],
      color: 'bg-gray-700',
    },
    {
      key: 'ecology',
      icon: TreePine,
      title: t('service.ecology'),
      items: [
        t('service.ecology.item1'),
        t('service.ecology.item2'),
        t('service.ecology.item3'),
      ],
      color: 'bg-emerald-500',
    },
    {
      key: 'news',
      icon: Newspaper,
      title: t('service.news'),
      items: [
        t('service.news.item1'),
        t('service.news.item2'),
        t('service.news.item3'),
      ],
      color: 'bg-pink-500',
    },
    {
      key: 'tax',
      icon: Calculator,
      title: t('service.tax'),
      items: [
        t('service.tax.item1'),
        t('service.tax.item2'),
        t('service.tax.item3'),
      ],
      color: 'bg-amber-500',
    },
    {
      key: 'legal',
      icon: ShieldCheck,
      title: t('service.legal'),
      items: [
        t('service.legal.item1'),
        t('service.legal.item2'),
        t('service.legal.item3'),
      ],
      color: 'bg-violet-500',
    },
    {
      key: 'auto',
      icon: Car,
      title: t('service.auto'),
      items: [
        t('service.auto.item1'),
        t('service.auto.item2'),
        t('service.auto.item3'),
      ],
      color: 'bg-slate-600',
    },
    {
      key: 'government',
      icon: Landmark,
      title: t('service.government'),
      items: [
        t('service.government.item1'),
        t('service.government.item2'),
        t('service.government.item3'),
      ],
      color: 'bg-blue-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-700 dark:text-white">{t('services.title')}</h2>
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
                    <CardTitle className="text-lg text-gray-700 dark:text-white">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOpenIndex(index)}
                    className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    {t('services.details')}
                    <span>→</span>
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Modal for service details */}
        <Dialog open={openIndex !== null} onOpenChange={(open) => { if (!open) setOpenIndex(null); }}>
          {openIndex !== null && (
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{services[openIndex].title}</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                <ul className="mt-2 space-y-2">
                  {services[openIndex].items.map((it: string, i: number) => (
                    <li key={i} className="text-sm text-gray-700 dark:text-gray-300">• {it}</li>
                  ))}
                </ul>

                {/* Render rich detail: paragraphs and optional bullet groups from translation text */}
                <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
                  {services[openIndex].key && (() => {
                    const raw = t(`service.${services[openIndex].key}.detail`);
                    if (!raw) return null;
                    const parts = raw.split('\n\n');
                    return parts.map((part, idx) => {
                      const trimmed = part.trim();
                      if (!trimmed) return null;
                      // bullet group: lines starting with '- '
                      if (trimmed.startsWith('-')) {
                        const items = trimmed.split('\n').map(l => l.replace(/^[-\s]+/, '').trim());
                        return (
                          <ul key={idx} className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
                            {items.map((it, i) => (
                              <li key={i}>{it}</li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={idx} className="mt-2">{trimmed}</p>;
                    });
                  })()}
                </div>
              </DialogDescription>
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">{t('services.close')}</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}