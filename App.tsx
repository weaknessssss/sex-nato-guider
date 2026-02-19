
import React, { useState } from 'react';
import { 
  Shield, 
  Target, 
  MapPin, 
  Zap, 
  MessageSquare, 
  ChevronRight, 
  Activity,
  Maximize2,
  Lock,
  Heart,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { getTacticalAdvice } from './services/geminiService';
import { AIResponse, NavItem } from './types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems: NavItem[] = [
    { label: 'Протокол Спектру', href: '#spectrum' },
    { label: 'План Наступу', href: '#operations' },
    { label: 'AI Бріфінг', href: '#ai' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-md">
              <div className="bg-black p-1 rounded-sm">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-black uppercase italic tracking-tighter">
              RAINBOW<span className="text-pink-500">SHIELD</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-xs font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-white text-black text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all">
              Запросити Бріфінг
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950 to-zinc-950 z-10" />
      <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover opacity-30 grayscale" alt="Tactical" />
    </div>

    <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-900 border border-white/10 mb-8">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Система активна: Львівський Сектор</span>
      </div>
      <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
        ГЛИБОКЕ <br />
        <span className="rainbow-text italic">ПРОНИКНЕННЯ</span>
      </h1>
      <p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium italic leading-relaxed">
        "Секс — це не розвага. Це <span className="text-white">спільна операція</span>, що вимагає тактичної підготовки, логістики задоволення та дотримання стандартів <span className="text-pink-500">Rainbow Interoperability</span>."
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#operations" className="px-10 py-5 bg-pink-500 text-white font-black uppercase tracking-widest text-sm rounded-sm hover:bg-pink-600 transition-all flex items-center gap-3">
          План Наступу <ChevronRight className="w-4 h-4" />
        </a>
        <a href="#ai" className="px-10 py-5 bg-zinc-900 text-white font-black uppercase tracking-widest text-sm rounded-sm border border-zinc-800 hover:bg-zinc-800 transition-all">
          Запитати Інструктора
        </a>
      </div>
    </div>
  </section>
);

const Operations = () => (
  <section id="operations" className="py-24 bg-zinc-950 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-16">
        <h2 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4">Tactical Engagement Models</h2>
        <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic">Бойові <span className="rainbow-text">Сценарії</span></h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "Joint Strike", 
            subtitle: "Прямий Контакт", 
            desc: "Класичне розгортання сил у форматі 1х1. Оптимізація траєкторій введення та контроль витрат біо-палива.", 
            icon: <Target className="text-red-500 w-10 h-10" /> 
          },
          { 
            title: "Multi-Spectral", 
            subtitle: "Райдужний Маневр", 
            desc: "Операції для юнітів будь-якої ідентифікації. Повна сумісність інтерфейсів та розширення зони комфорту.", 
            icon: <Activity className="text-purple-500 w-10 h-10" /> 
          },
          { 
            title: "Deep Recon", 
            subtitle: "Стратегічний Оральний Бріфінг", 
            desc: "Розвідка чутливих зон противника (партнера) з використанням передових технік маскування та стимуляції.", 
            icon: <Maximize2 className="text-blue-500 w-10 h-10" /> 
          }
        ].map((op, i) => (
          <div key={i} className="bg-zinc-900/50 p-10 border border-white/5 hover:border-pink-500/50 transition-all group">
            <div className="mb-8">{op.icon}</div>
            <h4 className="text-xs font-black text-pink-500 uppercase tracking-widest mb-2">{op.title}</h4>
            <h5 className="text-2xl font-black text-white uppercase mb-4 italic">{op.subtitle}</h5>
            <p className="text-zinc-500 text-sm leading-relaxed">{op.desc}</p>
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
    <section id="ai" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <div className="p-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-2xl">
          <div className="bg-zinc-950 p-8 md:p-12 rounded-[calc(1rem+4px)]">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-2">Бріфінг з Позивною <span className="rainbow-text">Веселка</span></h2>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Запитуй про тактику, безпеку та логістику сексу</p>
            </div>
            
            <form onSubmit={handleAsk} className="flex flex-col md:flex-row gap-2 mb-8">
              <input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Як провести тактичне десантування в тил?"
                className="flex-1 bg-zinc-900 border border-zinc-800 p-5 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-pink-500 transition-all"
              />
              <button disabled={loading} className="bg-pink-500 text-white font-black uppercase px-8 py-5 rounded-lg hover:bg-pink-600 transition-all disabled:opacity-50">
                {loading ? 'АНАЛІЗ...' : 'В ПУСК'}
              </button>
            </form>

            {response && (
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 animate-in fade-in slide-in-from-top-2">
                <div className="text-zinc-300 text-sm leading-relaxed mb-6 italic whitespace-pre-wrap">
                  {response.text}
                </div>
                {response.sources.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {response.sources.map((s, i) => s.web?.uri && (
                      <a key={i} href={s.web.uri} target="_blank" className="text-[10px] text-zinc-500 hover:text-pink-500 transition-colors flex items-center gap-1">
                        <ExternalLink className="w-2 h-2" /> {s.web.title || 'Розвіддані'}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-zinc-950 py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex justify-center gap-4 mb-12">
        <Shield className="w-12 h-12 text-zinc-800" />
      </div>
      <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.5em] mb-4">NATO TACTICAL INSTRUCTOR • LVIV UNIT</p>
      <p className="text-zinc-700 text-[9px] font-bold uppercase tracking-widest">Всі операції проводяться за згодою сторін. Протокол безпеки — понад усе.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <Hero />
      <Operations />
      <SearchWidget />
      <Footer />
    </div>
  );
}
