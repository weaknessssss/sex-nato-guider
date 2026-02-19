
import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  MapPin, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X,
  Search,
  ExternalLink,
  Lock,
  Heart,
  Activity,
  Maximize2
} from 'lucide-react';
import { getTacticalAdvice } from './services/geminiService';
import { AIResponse, NavItem } from './types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: NavItem[] = [
    { label: 'Спектр', href: '#spectrum' },
    { label: 'Операції', href: '#operations' },
    { label: 'Дислокація', href: '#contact' },
    { label: 'Бріфінг', href: '#ai' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase italic">
              Rainbow<span className="rainbow-text">Shield</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="animate-rainbow bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase shadow-lg shadow-pink-500/20"
              >
                На Контакт
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-300 hover:rainbow-text block px-3 py-4 text-base font-bold uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
    <div className="absolute inset-0 opacity-40 pointer-events-none">
      <img 
        src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070" 
        alt="Rainbow Fog" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
    </div>
    
    <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-white mb-8">
        <Activity className="w-4 h-4 text-pink-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Статус: Активна Фаза / Весь Львів</span>
      </div>
      <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.8] mix-blend-difference">
        ТАКТИКА <br />
        <span className="rainbow-text italic">ПРОНИКНЕННЯ</span>
      </h1>
      <p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-medium italic leading-relaxed">
        "Ми не просто займаємось сексом. Ми проводимо <span className="text-white">спільні операції повного спектру</span> за протоколами STANAG. Інклюзивність — це наша головна зброя."
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="#operations" className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-sm hover:invert transition-all flex items-center gap-3">
          План Наступу <ChevronRight className="w-5 h-5" />
        </a>
        <a href="#spectrum" className="px-10 py-5 bg-zinc-900 text-white font-black uppercase tracking-widest rounded-sm border border-zinc-700 hover:bg-zinc-800 transition-all">
          Огляд Спектру
        </a>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="spectrum" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="rainbow-text font-black uppercase tracking-widest text-sm mb-4">Multi-Spectrum Engagement</h2>
          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight uppercase italic">
            Будь-який юніт. <br />Будь-яка <span className="text-zinc-500">конфігурація</span>.
          </h3>
          <p className="text-zinc-400 text-lg mb-8 italic">
            Ми працюємо над <span className="text-pink-500">інтероперабельністю</span>. Незалежно від вашого прапора чи ідентифікаційного номера, наші тактичні заняття гарантують глибоке проникнення в суть задоволення.
          </p>
          <div className="space-y-6">
            {[
              { t: "Joint Maneuvers (М+Ж, М+М, Ж+Ж)", d: "Повна бойова сумісність підрозділів." },
              { t: "Deep Reconnaissance", d: "Дослідження найвіддаленіших точок дислокації задоволення." },
              { t: "Rainbow Protocols", d: "Інклюзивність як стандарт НАТО 2024." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-1 bg-gradient-to-b from-red-500 via-green-500 to-purple-500" />
                <div>
                  <h4 className="font-black text-white uppercase text-sm">{item.t}</h4>
                  <p className="text-zinc-500 text-sm">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/n1/400/600" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/5 shadow-2xl" />
            <div className="p-6 bg-zinc-900 rounded-2xl border border-pink-500/20">
              <Heart className="text-pink-500 w-8 h-8 mb-2" />
              <p className="text-xs font-black uppercase text-zinc-400 tracking-tighter">Safe & Sound</p>
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="p-6 bg-zinc-900 rounded-2xl border border-blue-500/20">
              <Zap className="text-blue-500 w-8 h-8 mb-2" />
              <p className="text-xs font-black uppercase text-zinc-400 tracking-tighter">High Intensity</p>
            </div>
            <img src="https://picsum.photos/seed/n2/400/500" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/5 shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Operations = () => (
  <section id="operations" className="py-24 bg-black relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-8xl font-black text-white uppercase mb-4 opacity-10 absolute left-0 right-0 -top-10 select-none">TACTICAL INTERCOURSE</h2>
        <h3 className="text-4xl font-black text-white uppercase relative z-10 italic underline decoration-pink-500 decoration-4">Типи Операцій</h3>
      </div>
      
      <div className="grid md:grid-cols-3 gap-1">
        {[
          { icon: <Target className="w-12 h-12" />, title: "Штурмові Дії", price: "$200/hr", desc: "Короткі, але інтенсивні вильоти. Максимальна віддача, нуль зайвих розмов." },
          { icon: <Maximize2 className="w-12 h-12" />, title: "Веселкова Оборона", price: "$350/hr", desc: "Побудова довгострокової стратегії задоволення для пар будь-якого складу." },
          { icon: <Activity className="w-12 h-12" />, title: "Нічне Десантування", price: "$500/op", desc: "Повне занурення в зону бойових дій. Тільки для підготовлених кадрів." }
        ].map((op, i) => (
          <div key={i} className="bg-zinc-900 p-12 hover:bg-zinc-800 transition-all border border-zinc-800 group">
            <div className="text-zinc-500 group-hover:text-pink-500 transition-colors mb-8">{op.icon}</div>
            <div className="flex justify-between items-end mb-4">
              <h4 className="text-2xl font-black text-white uppercase">{op.title}</h4>
              <span className="text-xs font-mono text-zinc-500">{op.price}</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">{op.desc}</p>
            <button className="w-full py-3 border border-zinc-700 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Бронювати Сектор</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SearchWidget = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const result = await getTacticalAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="ai" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 opacity-30" />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-zinc-900 border border-white/5 p-8 md:p-12 rounded-[2rem] shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-pink-500/10 rounded-xl">
              <MessageSquare className="w-6 h-6 text-pink-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Бріфінг з Командуванням</h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Система: RAINBOW-3.LVIV</p>
            </div>
          </div>

          <form onSubmit={handleAsk} className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Запит по тактиці проникнення..."
              className="flex-1 bg-black border border-zinc-800 p-5 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-pink-500 transition-all font-mono"
            />
            <button 
              type="submit"
              disabled={loading}
              className="px-8 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-pink-500 hover:text-white transition-all disabled:opacity-50 h-[66px]"
            >
              Вогонь
            </button>
          </form>

          {response && (
            <div className="space-y-6 animate-in fade-in duration-700">
              <div className="p-6 bg-black/50 rounded-2xl border-l-4 border-pink-500 text-zinc-300 leading-relaxed font-medium italic">
                {response.text}
              </div>
              {response.sources.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {response.sources.map((s, i) => s.web?.uri && (
                    <a key={i} href={s.web.uri} target="_blank" className="text-[10px] bg-zinc-800 text-zinc-500 px-3 py-1.5 rounded-full hover:text-white transition-colors flex items-center gap-1">
                      <ExternalLink className="w-2.5 h-2.5" /> {s.web.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-black py-20 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="mb-12">
        <h2 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter">Готовий до <span className="rainbow-text">Розгортання</span>?</h2>
        <p className="text-zinc-500 mb-8 max-w-lg mx-auto uppercase text-xs font-black tracking-[0.2em]">Signal: @tactical_rainbow_lviv</p>
        <div className="flex justify-center gap-6">
          <a href="#" className="p-4 bg-zinc-900 rounded-full hover:bg-pink-500 transition-colors"><MessageSquare className="w-6 h-6" /></a>
          <a href="#" className="p-4 bg-zinc-900 rounded-full hover:bg-blue-500 transition-colors"><MapPin className="w-6 h-6" /></a>
          <a href="#" className="p-4 bg-zinc-900 rounded-full hover:bg-green-500 transition-colors"><Lock className="w-6 h-6" /></a>
        </div>
      </div>
      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700 gap-4">
        <p>© NATO ALL-SPECTRUM UNIT LVIV 2024</p>
        <p>NO DISCRIMINATION. ONLY PENETRATION.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-zinc-400">Security Clearance</a>
          <a href="#" className="hover:text-zinc-400">Rules of Engagement</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-pink-500 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Operations />
      <SearchWidget />
      <Footer />
    </div>
  );
}
