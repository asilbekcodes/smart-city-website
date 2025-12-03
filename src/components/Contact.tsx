import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { createAppeals, getCompanies, getSectors } from '../services/appeals';

export function Contact() {
  const { t } = useLanguage();

  const [requestType, setRequestType] = useState('');
  const [sectorType, setSectorType] = useState('');
  const [companies, setCompanies] = useState('');
  const [sectors, setSectors] = useState([]);
  const [companiesList, setCompaniesList] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // PHONE + EMAIL bitta input
  const [contactValue, setContactValue] = useState('');

  const [priority, setPriority] = useState('medium'); // Yangi priority

  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('')

  // To‘liq murojaat turlari enum
  const requestTypes = [
    { value: 'complaint', label: 'Shikoyat' },
    { value: 'suggestion', label: 'Taklif' },
    { value: 'question', label: 'Savol' },
    { value: 'request', label: 'So‘rov' },
    { value: 'appreciation', label: 'Minnatdorchilik' },
    { value: 'other', label: 'Boshqa' },
  ];

  // Telefon yoki email ekanini aniqlash
  const detectContactType = (value: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^[0-9+() -]{7,}$/;

    if (emailRegex.test(value)) {
      return { email: value, phone: "" };
    }

    if (phoneRegex.test(value)) {
      return { phone: value, email: "" };
    }

    return { phone: "", email: "" };
  };


  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ['Qarshi shahri, Mustaqillik ko‘chasi, 1-uy', 'Qashqadaryo viloyati, O‘zbekiston'],
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
      details: ['Dushanba–Juma: 9:00–18:00', 'Shanba: 9:00–13:00'],
    },
  ];
  
  useEffect(() => {
    const sectorGet = async () => {
      try {
        const res = await getSectors();
        setSectors(res.data.sectors);
      } catch (err) {
        console.log(err);
      }
    };
    sectorGet()
  }, [])

  useEffect(() => {
    const companiesGet = async () => {
      try {
        const res = await getCompanies();
        setCompaniesList(res.data.companies);
      } catch (err) {
        console.log(err);
      }
    };

    companiesGet();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { phone, email } = detectContactType(contactValue);

    const data: createAppeals = {
      firstName,
      lastName,
      title,
      message,
      type: requestType,
      sector: sectorType,
      company: companies,
      priority,
      location: {
        district: "",
        address
      }
    };

    // Email aniqlangan bo‘lsa – data ichiga qo‘shamiz
    if (email) {
      data.email = email;
    }

    // Telefon aniqlangan bo‘lsa – data ichiga qo‘shamiz
    if (phone) {
      data.phone = phone;
    }

    try {
      const res = await createAppeals(data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-700 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE – INFO */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-gray-700 dark:text-white">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 dark:text-gray-400 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}

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

          {/* RIGHT SIDE – FORM */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl mb-6 text-gray-700 dark:text-white">{t('contact.form.title')}</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>

              {/* FIRST + LAST NAME */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">{t('contact.form.firstname')}</label>
                  <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={t('contact.form.firstname')} className="dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white" />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">{t('contact.form.lastname')}</label>
                  <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={t('contact.form.lastname')} className="dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white" />
                </div>
              </div>

              {/* PHONE + EMAIL COMBINED */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Telefon yoki Email</label>
                <Input
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  placeholder="+998 (__) ___-__-__ yoki example@gmail.com kiriting"
                  className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* SECTOR */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Sektor</label>
                <select
                  value={sectorType}
                  onChange={(e) => setSectorType(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Sektorni tanlang</option>
                  {sectors.map((s: any) => (
                    <option key={s.slug} value={s.slug}>{s.name}</option>
                  ))}
                </select>
              </div>

              {/* COMPANIES */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Tashkilot</label>
                <select
                  value={companies}
                  onChange={(e) => setCompanies(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Tashkilotni tanlang</option>
                  {companiesList.map((c: any) => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  ))}
                </select>
              </div>

              {/* REQUEST TYPE */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Murojaat turi</label>
                <select
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Murojaat turini tanlang</option>
                  {requestTypes.map((t) => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              {/* PRIORITY SELECT – YANGI QO‘SHILDI */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Muhimlik darajasi</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Past</option>
                  <option value="medium">O‘rta</option>
                  <option value="high">Yuqori</option>
                  <option value="urgent">Shoshilinch</option>
                </select>
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">{t('contact.form.subject')}</label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t('contact.form.subject')} className="dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white" />
              </div>

              {/* ADDRESS */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">Address</label>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Manzilni kiriting' className="dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white" />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm mb-2 text-gray-700 dark:text-gray-300">{t('contact.form.message')}</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('contact.form.message')}
                  className="min-h-32 dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white"
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
