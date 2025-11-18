import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function News() {
  const news = [
    {
      id: 1,
      title: 'Qarshi shahrida yangi Smart Park ochildi',
      description: 'Shahar markazida zamonaviy texnologiyalar bilan jihozlangan yangi park ochildi. Parkda free Wi-Fi, smart yoritish va ekologik toza muhit yaratilgan.',
      date: '2025-11-10',
      category: 'Infratuzilma',
      image: 'https://images.unsplash.com/photo-1677156811762-842312963ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1emJla2lzdGFuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MjkyODIwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Elektron xizmatlar platformasi yangilandi',
      description: 'Smart City ilovasiga 15 ta yangi elektron xizmat qo\'shildi. Endi fuqarolar ko\'proq xizmatlardan onlayn foydalanishlari mumkin.',
      date: '2025-11-08',
      category: 'Texnologiya',
      image: 'https://images.unsplash.com/photo-1679697795362-63e6c722cccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwY291bmNpbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzYyOTI4MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Yangi transport marshrutlari ishga tushirildi',
      description: 'Shahar transporti tizimi optimallashtirilib, 5 ta yangi marshrut yo\'lga qo\'yildi. Barcha avtobuslar GPS tizimi bilan jihozlangan.',
      date: '2025-11-05',
      category: 'Transport',
      image: 'https://images.unsplash.com/photo-1623054339243-0228ef032ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRldmVsb3BtZW50JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2Mjg5NjI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">So'nggi yangiliklar</h2>
            <p className="text-gray-600">Smart City loyihalari va shahar hayotidan yangiliklar</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            Barcha yangiliklar
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString('uz-UZ', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
              <CardFooter>
                <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                  To'liq o'qish
                  <ArrowRight className="h-4 w-4" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
