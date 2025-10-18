import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.observe-section');
    sections.forEach((section) => observerRef.current?.observe(section));

    return () => observerRef.current?.disconnect();
  }, []);

  const portfolioItems = [
    {
      id: 1,
      title: 'БРЕНДИНГ',
      description: 'Создание фирменного стиля для стартапа',
      image: 'https://cdn.poehali.dev/projects/7b3223a0-20ca-40db-8110-72c0445da378/files/bae47e4f-4e83-406f-999f-5cca684ed9ae.jpg',
    },
    {
      id: 2,
      title: 'ТИПОГРАФИКА',
      description: 'Серия постеров для культурного центра',
      image: 'https://cdn.poehali.dev/projects/7b3223a0-20ca-40db-8110-72c0445da378/files/68cd2aec-b4e8-4dd5-b491-d559c9d2a119.jpg',
    },
    {
      id: 3,
      title: 'ДИЗАЙН',
      description: 'Абстрактные композиции для выставки',
      image: 'https://cdn.poehali.dev/projects/7b3223a0-20ca-40db-8110-72c0445da378/files/dd62760a-0dba-42e4-8d88-c834ed3b84c0.jpg',
    },
  ];

  const services = [
    { icon: 'Palette', title: 'БРЕНДИНГ', description: 'Разработка фирменного стиля и айдентики' },
    { icon: 'Type', title: 'ТИПОГРАФИКА', description: 'Создание уникальных шрифтовых решений' },
    { icon: 'Layers', title: 'ГРАФИКА', description: 'Иллюстрации и визуальные концепции' },
    { icon: 'Layout', title: 'МАКЕТЫ', description: 'Дизайн печатной и digital продукции' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1E9] overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-[#F6F1E9] border-b-3 border-[#1A1A1A] py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ДИЗАЙНЕР</h1>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-primary transition-colors">ОБО МНЕ</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">ПОРТФОЛИО</a>
            <a href="#services" className="hover:text-primary transition-colors">УСЛУГИ</a>
            <a href="#contact" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-10 text-6xl animate-rotate-star">✦</div>
        <div className="absolute top-40 right-1/4 text-4xl text-primary animate-rotate-star">✦</div>
        
        <div className="max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="overflow-hidden">
                <h1 className="text-huge uppercase leading-none animate-slide-in">
                  ГРАФИЧЕСКИЙ
                  <br />
                  <span className="text-primary">ДИЗАЙНЕР</span>
                </h1>
              </div>
              <p className="text-xl max-w-lg">
                Создаю визуальные решения, которые работают. Брендинг, типографика, печатная и digital продукция.
              </p>
              <Button 
                size="lg" 
                className="brutalist-border-red hover-lift bg-primary text-white px-12 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                СВЯЗАТЬСЯ
              </Button>
            </div>
            
            <div className="relative">
              <div className="brutalist-border bg-white p-8 hover-lift">
                <div className="aspect-square bg-[#1A1A1A] flex items-center justify-center">
                  <span className="text-9xl">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-[#1A1A1A] text-[#F6F1E9] observe-section">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-display uppercase mb-8">
                <span className="text-primary">ОБО</span> МНЕ
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Привет! Я графический дизайнер с 5+ летним опытом в создании визуальных концепций для брендов и проектов.
                </p>
                <p>
                  Моя специализация — брендинг, типографика и создание уникальных визуальных решений. Работаю с клиентами по всему миру, превращая идеи в запоминающиеся дизайны.
                </p>
                <p>
                  Вдохновляюсь брутализмом, швейцарской школой и современным минимализмом. Верю, что хороший дизайн должен быть не только красивым, но и функциональным.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="brutalist-border-red bg-primary p-8">
                <h3 className="text-3xl font-bold mb-4">ОБРАЗОВАНИЕ</h3>
                <p className="text-lg">Школа дизайна НИУ ВШЭ, 2019</p>
              </div>
              
              <div className="brutalist-border bg-[#F6F1E9] text-[#1A1A1A] p-8">
                <h3 className="text-3xl font-bold mb-4">ОПЫТ</h3>
                <ul className="space-y-3 text-lg">
                  <li>• Брендинг для 50+ компаний</li>
                  <li>• Победитель Red Dot Award</li>
                  <li>• Преподаватель в Skillbox</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 px-6 observe-section">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-display uppercase mb-16 text-center">
            ПОРТ<span className="text-primary">ФОЛИО</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id} 
                className="brutalist-border hover-lift bg-white overflow-hidden cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-[#1A1A1A] text-[#F6F1E9]">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-primary text-[#F6F1E9] observe-section">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-display uppercase mb-16 text-center">
            УС<span className="text-[#1A1A1A]">ЛУГИ</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="brutalist-border bg-[#F6F1E9] text-[#1A1A1A] p-8 hover-lift"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-primary text-[#F6F1E9] p-4 border-3 border-[#1A1A1A]">
                    <Icon name={service.icon} size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                    <p className="text-lg">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 observe-section">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-display uppercase mb-16 text-center">
            КОН<span className="text-primary">ТАКТЫ</span>
          </h2>
          
          <div className="brutalist-border bg-white p-12">
            <form className="space-y-8">
              <div>
                <label className="block text-xl font-bold mb-4">ИМЯ</label>
                <Input 
                  className="brutalist-border w-full p-4 text-lg focus:ring-primary" 
                  placeholder="Ваше имя"
                />
              </div>
              
              <div>
                <label className="block text-xl font-bold mb-4">EMAIL</label>
                <Input 
                  type="email"
                  className="brutalist-border w-full p-4 text-lg focus:ring-primary" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-xl font-bold mb-4">СООБЩЕНИЕ</label>
                <Textarea 
                  className="brutalist-border w-full p-4 text-lg min-h-40 focus:ring-primary" 
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="brutalist-border-red hover-lift bg-primary text-white w-full py-6 text-xl"
              >
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
          
          <div className="mt-16 flex justify-center gap-8 text-xl">
            <a href="mailto:designer@example.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Mail" size={24} />
              designer@example.com
            </a>
            <a href="https://t.me/designer" className="hover:text-primary transition-colors flex items-center gap-2">
              <Icon name="Send" size={24} />
              Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1A1A] text-[#F6F1E9] py-12 px-6 border-t-3 border-[#F6F1E9]">
        <div className="container mx-auto text-center">
          <p className="text-lg">© 2024 ГРАФИЧЕСКИЙ ДИЗАЙНЕР. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
