
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Menu, 
  X, 
  Box, 
  Gem, 
  Star, 
  MessageSquare, 
  MapPin, 
  Phone,
  ArrowRight,
  Clock,
  Plus,
  Minus,
  MessageCircle,
  Hammer
} from 'lucide-react';

// --- CONFIGURAÇÕES DE NEGÓCIO & SEO ---
const BUSINESS_INFO = {
  name: "LuxWood Marcenaria Autoral",
  phone: "5515999999999", 
  phoneDisplay: "(15) 99999-9999",
  address: "Av. Professora Izoraida Marques Peres, 401 - Campolim",
  city: "Sorocaba",
  state: "SP",
  zip: "18048-110",
  whatsappMsg: "Olá! Gostaria de solicitar um diagnóstico de marcenaria de luxo para meu projeto em Sorocaba."
};

const NAVIGATION = [
  { name: "Início", href: "#home" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Projetos", href: "#projetos" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
];

const REVIEWS = [
  {
    name: "Helena Bittencourt",
    location: "Residencial Campolim",
    text: "A entrega superou todas as expectativas. O acabamento de joalheria é real. Meu projeto 3D personalizado ficou idêntico à execução final no meu apartamento.",
    initials: "HB"
  },
  {
    name: "Ricardo Mendes",
    location: "Santa Rosália",
    text: "Precisão técnica impecável. É difícil encontrar marcenaria de luxo em Sorocaba com esse nível de profissionalismo e comprometimento com prazos.",
    initials: "RM"
  },
  {
    name: "Marina Valente",
    location: "Condomínio Sunset",
    text: "Móveis sob medida no Campolim com design autoral. Captaram exatamente o luxo minimalista que eu buscava para minha residência.",
    initials: "MV"
  }
];

const FAQ_DATA = [
  {
    q: "O que define a marcenaria de luxo LuxWood?",
    a: "Unimos engenharia de alta precisão com design autoral. Utilizamos apenas ferragens alemãs e painéis de MDF de alta densidade, garantindo a estética superior que nossos clientes em Sorocaba exigem."
  },
  {
    q: "Como os projetos 3D personalizados auxiliam na decisão?",
    a: "Nossos projetos 3D personalizados oferecem uma visualização foto-realista do ambiente. Isso elimina erros e permite que você sinta o espaço antes mesmo da produção começar."
  },
  {
    q: "Quais as áreas de atuação em Sorocaba?",
    a: "Somos especialistas em marcenaria de luxo e móveis sob medida no Campolim, Santa Rosália, Parque Campolim e nos principais condomínios de alto padrão da região."
  },
  {
    q: "Qual o prazo para móveis sob medida no Campolim?",
    a: "Nosso prazo médio de entrega é de 45 a 60 dias úteis, seguindo um cronograma rigoroso de engenharia para garantir a máxima qualidade na instalação."
  }
];

// --- COMPONENTES ---

const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "description": "Marcenaria de luxo em Sorocaba especializada em móveis sob medida no Campolim e projetos 3D personalizados.",
    "url": window.location.origin,
    "telephone": BUSINESS_INFO.phoneDisplay,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": BUSINESS_INFO.city,
      "addressRegion": BUSINESS_INFO.state,
      "postalCode": BUSINESS_INFO.zip,
      "addressCountry": "BR"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/95 backdrop-blur-xl py-4 border-b border-wood-900/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="group">
          <span className="text-2xl font-serif font-black text-wood-400 tracking-tighter uppercase leading-none block">
            Lux<span className="text-white group-hover:text-wood-400 transition-colors">Wood</span>
          </span>
          <span className="text-[9px] text-white/40 font-sans tracking-[0.4em] uppercase leading-none">
            Marcenaria de Luxo
          </span>
        </a>
        <div className="hidden lg:flex space-x-12 items-center">
          {NAVIGATION.map((item) => (
            <a key={item.name} href={item.href} className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]">
              {item.name}
            </a>
          ))}
        </div>
        <button className="lg:hidden text-wood-400" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-[-1] transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAVIGATION.map((item) => (
          <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-2xl font-serif font-bold text-white hover:text-wood-400 transition-colors">
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-slate-950/60 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
        alt="Marcenaria de luxo Sorocaba - Design de Interiores" 
        className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950 z-20"></div>
    </div>
    <div className="container mx-auto px-6 relative z-30 pt-20">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.05] tracking-tighter">
          Marcenaria de Luxo <br />
          <span className="text-wood-400 italic">em Sorocaba</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed">
          Sua referência em <span className="text-white font-medium italic">móveis sob medida no Campolim</span>. Unimos engenharia de precisão com <span className="text-white font-medium italic">projetos 3D personalizados</span> para criar ambientes verdadeiramente exclusivos.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a href="#contato" className="bg-wood-600 hover:bg-wood-700 text-white px-12 py-5 rounded-sm font-bold transition-all text-[11px] uppercase tracking-[0.3em] flex items-center justify-center shadow-2xl shadow-wood-900/20">
            Solicitar Diagnóstico
            <ArrowRight className="ml-4" size={16} />
          </a>
          <a href="#projetos" className="border border-white/10 hover:border-wood-500 text-white px-12 py-5 rounded-sm font-bold transition-all text-[11px] uppercase tracking-[0.3em] flex items-center justify-center backdrop-blur-sm">
            Ver Portfólio
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { title: "Projetos 3D Personalizados", desc: "Visualize cada detalhe em ultra-definição antes da produção iniciar, garantindo fidelidade total.", icon: <Box className="text-wood-400" size={32} /> },
    { title: "Móveis Sob Medida Campolim", desc: "Expertise em logística e montagem de alto padrão para os condomínios mais exigentes da região.", icon: <Gem className="text-wood-400" size={32} /> },
    { title: "Marcenaria de Luxo Sorocaba", desc: "Acabamentos milimétricos com ferragens alemãs e materiais nobres de durabilidade eterna.", icon: <Hammer className="text-wood-400" size={32} /> },
    { title: "Engenharia de Interiores", desc: "Atendimento técnico exclusivo do diagnóstico inicial à entrega final das chaves.", icon: <Clock className="text-wood-400" size={32} /> }
  ];
  return (
    <section id="diferenciais" className="py-32 bg-slate-950 bg-mesh">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-wood-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Expertise e Localização</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Especialistas em ambientes de alto padrão em Sorocaba</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-12 border border-slate-900 bg-slate-900/20 rounded-sm hover:bg-slate-900/50 transition-all duration-500 group">
              <div className="mb-8 transform group-hover:scale-110 transition-transform">{f.icon}</div>
              <h4 className="text-lg font-serif font-bold text-white mb-4 group-hover:text-wood-400 transition-colors">{f.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    { title: "Cozinha Gourmet", loc: "Campolim", img: "https://images.unsplash.com/photo-1556912177-85cdf4867f26?auto=format&fit=crop&q=80&w=800" },
    { title: "Living Room Autoral", loc: "Parque Campolim", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
    { title: "Suíte com Closet", loc: "Santa Rosália", img: "https://images.unsplash.com/photo-1505693419148-de397e1c4b9a?auto=format&fit=crop&q=80&w=800" },
    { title: "Home Office Office", loc: "Condomínio Sunset", img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=800" }
  ];
  return (
    <section id="projetos" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-wood-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Projetos Executados</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">Móveis que redefinem o conceito de luxo em Sorocaba.</h3>
          </div>
          <a href="#contato" className="text-wood-400 font-bold text-[10px] uppercase tracking-widest border-b border-wood-900 pb-2 hover:text-white transition-colors">Solicitar Orçamento de Luxo</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/5] bg-slate-900 rounded-sm">
              <img src={item.img} alt={`Móveis sob medida no ${item.loc}`} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-wood-500 text-[9px] font-bold uppercase tracking-[0.3em] mb-2 block">{item.loc}</span>
                <h4 className="text-xl font-serif font-bold text-white group-hover:text-wood-400 transition-colors">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="depoimentos" className="py-32 bg-slate-900/10">
    <div className="container mx-auto px-6">
      <div className="text-center mb-24">
        <h2 className="text-wood-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Depoimentos</h2>
        <h3 className="text-4xl font-serif font-bold text-white">Reconhecimento de quem exige marcenaria de alto nível</h3>
      </div>
      <div className="grid lg:grid-cols-3 gap-12">
        {REVIEWS.map((r, i) => (
          <div key={i} className="p-12 bg-slate-900/30 border border-slate-800 rounded-sm relative">
            <MessageSquare className="absolute -top-6 -right-6 w-12 h-12 text-wood-900/20" />
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-wood-500 text-wood-500" />)}
            </div>
            <p className="text-slate-300 italic mb-12 leading-relaxed font-light">"{r.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-wood-900/30 flex items-center justify-center text-wood-400 font-bold text-xs border border-wood-500/20">{r.initials}</div>
              <div>
                <h5 className="text-white font-bold text-sm tracking-tight">{r.name}</h5>
                <span className="text-wood-500 text-[9px] uppercase tracking-widest">{r.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="faq" className="py-32 bg-slate-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-20">
          <h2 className="text-wood-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">FAQ: Dúvidas Sobre Móveis Sob Medida</h2>
          <h3 className="text-4xl font-serif font-bold text-white">Transparência em cada detalhe</h3>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((item, i) => (
            <div key={i} className="border border-slate-900 bg-slate-900/10 rounded-sm overflow-hidden">
              <button onClick={() => setActive(active === i ? null : i)} className="w-full flex items-center justify-between p-8 text-left hover:bg-slate-900/40 transition-colors">
                <span className="text-white font-serif text-lg pr-8">{item.q}</span>
                {active === i ? <Minus size={20} className="text-wood-500" /> : <Plus size={20} className="text-wood-500" />}
              </button>
              <div className={`transition-all duration-500 ease-in-out ${active === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 pt-0 text-slate-400 text-sm leading-relaxed border-t border-slate-900/50">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-32 bg-slate-950">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-wood-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">Diagnóstico Premium</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">Sua marcenaria de luxo em Sorocaba <span className="text-wood-400 italic">começa aqui.</span></h3>
          <p className="text-slate-400 text-lg mb-12 font-light leading-relaxed">Referência em móveis sob medida no Campolim. Fale agora com nossa equipe de concierge para iniciar seu projeto 3D personalizado e transformar seu patrimônio.</p>
          <div className="space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-sm"><MapPin size={20} className="text-wood-500" /></div>
              <p className="text-slate-200 text-sm">{BUSINESS_INFO.address}, Sorocaba</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="w-12 h-12 bg-slate-900 flex items-center justify-center rounded-sm"><Phone size={20} className="text-wood-500" /></div>
              <p className="text-slate-200 text-sm">{BUSINESS_INFO.phoneDisplay}</p>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-wood-600 to-wood-900 rounded-sm blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-slate-900 p-12 md:p-16 border border-slate-800 rounded-sm text-center">
            <h4 className="text-2xl font-serif font-bold text-white mb-6">Atendimento Concierge</h4>
            <p className="text-slate-400 text-sm mb-12">Inicie seu projeto 3D personalizado hoje mesmo através de nosso canal exclusivo.</p>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.phone}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-wood-600 hover:bg-wood-700 text-white py-6 px-10 rounded-sm font-bold uppercase tracking-[0.3em] transition-all text-[11px] flex items-center justify-center group/btn"
            >
              <MessageCircle className="mr-4 group-hover/btn:scale-110 transition-transform" />
              Solicitar via WhatsApp
            </a>
            <p className="text-slate-600 text-[10px] mt-8 uppercase tracking-[0.2em]">Especialistas disponíveis para Sorocaba e região</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FloatingContact = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a 
      href={`https://wa.me/${BUSINESS_INFO.phone}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`fixed bottom-10 right-10 z-50 p-5 rounded-full shadow-[0_20px_50px_rgba(166,119,86,0.25)] transition-all duration-700 transform flex items-center justify-center 
        ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50 pointer-events-none'}
        bg-wood-600 hover:bg-wood-700 text-white border border-white/10 group
      `}
      aria-label="Falar com Especialista"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-6 whitespace-nowrap bg-slate-900/95 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-sm border border-wood-900/30 opacity-0 group-hover:opacity-100 transition-all shadow-xl pointer-events-none">
        Falar com Especialista
      </span>
    </a>
  );
};

// --- APP ROOT ---

const App = () => (
  <div className="min-h-screen bg-slate-950 selection:bg-wood-600 selection:text-white">
    <JsonLd />
    <Navbar />
    <main>
      <Hero />
      <Features />
      <Portfolio />
      <Testimonials />
      <FAQSection />
      <Contact />
    </main>
    <footer className="py-20 bg-slate-950 border-t border-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <span className="text-xl font-serif font-black text-wood-400 tracking-tighter uppercase block">LuxWood</span>
            <span className="text-slate-600 text-[9px] uppercase tracking-[0.3em]">Marcenaria de Luxo Sorocaba • Campolim</span>
          </div>
          <div className="flex gap-12">
            {NAVIGATION.filter(n => n.name !== "Início").map(item => (
              <a key={item.name} href={item.href} className="text-slate-600 hover:text-wood-400 text-[10px] uppercase tracking-widest font-bold transition-colors">{item.name}</a>
            ))}
          </div>
          <p className="text-slate-700 text-[10px] uppercase tracking-[0.2em] font-bold">
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}
          </p>
        </div>
      </div>
    </footer>
    <FloatingContact />
  </div>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}
