import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [requestType, setRequestType] = useState('');
  
  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ['Qarshi shahri, Mustaqillik ko\'chasi, 1-uy', 'Qashqadaryo viloyati, O\'zbekiston'],
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ['+998 (75) 225-00-00', '+998 (75) 225-00-01'],
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['info@qarshi.uz', 'support@qarshi.uz'],
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      details: ['Dushanba-Juma: 9:00 - 18:00', 'Shanba: 9:00 - 13:00'],
    },
  ];

  const requestTypes = [
    { value: 'question', label: 'Savol' },
    { value: 'complaint', label: 'Shikoyat' },
    { value: 'suggestion', label: 'Taklif' },
    { value: 'thanks', label: 'Rahmat' },
    { value: 'other', label: 'Boshqa' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 dark:text-white">{t('contact.title')}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 dark:text-white">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97499.72493499153!2d65.7267!3d38.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4e8c0b0b0b0b0b%3A0x0!2sQarshi!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 transition-colors shadow-lg">
            <h3 className="text-2xl mb-6 dark:text-white">{t('contact.form.title')}</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 dark:text-gray-300">{t('contact.form.firstname')}</label>
                  <Input placeholder={t('contact.form.firstname')} className="dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm mb-2 dark:text-gray-300">{t('contact.form.lastname')}</label>
                  <Input placeholder={t('contact.form.lastname')} className="dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 dark:text-gray-300">Email yoki Telefon</label>
                <Input type="text" placeholder="example@email.com yoki +998 (__) ___-__-__" className="dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm mb-2 dark:text-gray-300">Murojaat turi</label>
                <select
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="" className="dark:bg-gray-700">Murojaat turini tanlang</option>
                  {requestTypes.map((type) => (
                    <option key={type.value} value={type.value} className="dark:bg-gray-700">
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2 dark:text-gray-300">{t('contact.form.subject')}</label>
                <Input placeholder={t('contact.form.subject')} className="dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm mb-2 dark:text-gray-300">{t('contact.form.message')}</label>
                <Textarea 
                  placeholder={t('contact.form.message')}
                  className="min-h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {t('contact.form.send')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}