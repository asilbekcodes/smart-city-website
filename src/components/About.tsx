import { Target, Eye, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Maqsadimiz',
      description: 'Fuqarolar uchun qulay, xavfsiz va zamonaviy shahar muhitini yaratish',
    },
    {
      icon: Eye,
      title: 'Vazifamiz',
      description: 'Raqamli texnologiyalar orqali shahar xizmatlarini yaxshilash',
    },
    {
      icon: Award,
      title: 'Yutuqlarimiz',
      description: 'O\'zbekistondagi eng ilg\'or Smart City loyihalaridan biri',
    },
    {
      icon: Globe,
      title: 'Hamkorlik',
      description: 'Xalqaro standartlar asosida rivojlanish',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Qarshi Smart City haqida</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Qarshi shahri O'zbekistonning janubiy qismida joylashgan va boy tarixga ega shaharlardan biridir. 
                320 mingdan ortiq aholi yashaydigan shaharimiz iqtisodiy va madaniy jihatdan tez rivojlanmoqda.
              </p>
              <p>
                Smart City loyihasi 2023-yilda boshlangan bo'lib, maqsadi shahar infratuzilmasini zamonaviylashtirish, 
                fuqarolar uchun elektron xizmatlarni rivojlantirish va hayot sifatini oshirishdan iborat.
              </p>
              <p>
                Loyiha doirasida transport tizimi, kommunal xizmatlar, ta'lim, sog'liqni saqlash va boshqa 
                muhim sohalar raqamlashtirilmoqda. Bizning yondashuvimiz fuqaro markazli va ochiq davlat 
                tamoyillariga asoslangan.
              </p>
              <p>
                Bugungi kunga qadar 50 dan ortiq elektron xizmat ishga tushirildi va ulardan 85% aholi 
                muntazam foydalanmoqda. Kelajakda yanada ko'proq innovatsion yechimlar joriy etishni rejalashtirilgan.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677156811762-842312963ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1emJla2lzdGFuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjkyODIwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Qarshi city"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <div className="text-4xl mb-2">2023</div>
              <div>Smart City loyihasi boshlangan yil</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
