"use client";

import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, Users, CalendarDays, Settings, LogOut, 
  CheckCircle, Clock, XCircle, ChevronRight, Menu, X, 
  TrendingUp, DollarSign, Briefcase, Camera, Utensils,
  ArrowRight, PlayCircle, MessageSquare, Star, ArrowUpRight,
  ShieldCheck, Zap, Layers, BarChart3, Construction, 
  Palette, GraduationCap, Laptop, HelpCircle, 
  MonitorSmartphone, PenTool, RefreshCw, Database,
  ArrowUpCircle, FileText, Sun, Moon, Globe,
  Mail, Phone
} from 'lucide-react';

// ==========================================
// KONFIGURASI GLOBAL & SEO
// ==========================================
// 1. URL Logo & Favicon (Menggunakan file yang sudah ada di public/image/)
const LOGO_URL = "image/logo-solusilokal-1.png";
const SITE_URL = "https://solusilokal.id"; // Sesuaikan dengan domain Anda nanti

// 2. URL Google Apps Script Web App
const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbww9fcwLGKQhj4RKyY1UgyPZhp74THjUrO_GU3VM-iYLbvSqYiR9OjzQSCiH-WnoSLI/exec";

// 3. Skema JSON-LD untuk SEO Local Business / Agency
const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "SolusiLokal.ID",
  "image": `${SITE_URL}/${LOGO_URL}`,
  "description": "Partner digital development and creative studio di Palangka Raya. Ahli dalam membangun website profesional, sistem operasional, dan branding untuk bisnis jasa.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palangka Raya",
    "addressRegion": "Kalimantan Tengah",
    "addressCountry": "ID"
  },
  "telephone": "+6289529605601",
  "email": "solusilokalid@gmail.com",
  "url": SITE_URL,
  "priceRange": "Rp3.000.000 - Rp20.000.000",
  "founder": {
    "@type": "Person",
    "name": "Hermon Triberly Karisma"
  }
};

const BrandLogo = ({ className = "w-10 h-10 object-contain" }) => (
  <img src={LOGO_URL} alt="SolusiLokal Logo" className={className} />
);

// Ikon Instagram Kustom
const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const mockProjects = [
  { id: 'PRJ-1001', client: 'Budi Santoso', service: 'Redesign Website Jasa Aluminium', status: 'In Progress', value: 3500000, deadline: '2026-04-10' },
  { id: 'PRJ-1002', client: 'Siti Aminah', service: 'Custom Dashboard UMKM', status: 'Testing', value: 12000000, deadline: '2026-04-15' },
  { id: 'PRJ-1003', client: 'Dina Mariana', service: 'Landing Page Conversion', status: 'Completed', value: 6000000, deadline: '2026-03-30' },
];

export default function SolusiLokalApp() {
  const [currentPath, setCurrentPath] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efek untuk Inisialisasi Favicon & Dark Mode
  useEffect(() => {
    // Set Favicon secara dinamis
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = LOGO_URL;
    document.getElementsByTagName('head')[0].appendChild(link);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Efek untuk Dynamic SEO & Tab Title setiap perpindahan halaman
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);

    const seoData = {
      home: { 
        title: "SolusiLokal.ID | Digital Growth Partner & Creative Studio Palangka Raya", 
        desc: "Partner pengembangan digital dari Palangka Raya. Bangun website profesional, sistem booking otomatis, dan identitas visual bisnis Anda bersama SolusiLokal.ID." 
      },
      services: { 
        title: "Layanan Website, Branding & System Development | SolusiLokal.ID", 
        desc: "Tingkatkan kredibilitas bisnis jasa Anda dengan layanan pembuatan website kustom, desain identitas visual, dan pengembangan dashboard operasional." 
      },
      solutions: { 
        title: "Solusi Arsitektur Digital Bisnis Jasa | SolusiLokal.ID", 
        desc: "Solusi digital tepat sasaran berdasarkan fase bisnis Anda, mulai dari paket Starter untuk kehadiran online hingga paket Pro untuk sistem terskala." 
      },
      portfolio: { 
        title: "Portofolio Proyek Transformasi Digital | SolusiLokal.ID", 
        desc: "Lihat hasil nyata kolaborasi SolusiLokal dengan brand lokal seperti Luniflow dan Lunilooks dalam membangun ekosistem digital yang efisien." 
      },
      process: { 
        title: "Workflow Kerja & Proses Pengerjaan Sistem | SolusiLokal.ID", 
        desc: "Proses transparan dan terstruktur dari fase konsultasi, perencanaan arsitektur, pengembangan build, hingga peluncuran sistem." 
      },
      pricing: { 
        title: "Paket Investasi Website & Sistem UMKM | SolusiLokal.ID", 
        desc: "Transparansi harga layanan pembuatan website dan pengembangan sistem digital di Palangka Raya. Investasi mulai dari 3 juta rupiah." 
      },
      about: { 
        title: "Tentang SolusiLokal - Hermon Triberly Karisma", 
        desc: "Mengenal SolusiLokal, digital partner yang dipimpin oleh Hermon Triberly Karisma, kreator multidisiplin dan pengajar DKV di Palangka Raya." 
      },
      contact: { 
        title: "Konsultasi Gratis - Hubungi Kami Sekarang | SolusiLokal.ID", 
        desc: "Siap membawa bisnis Anda ke level berikutnya? Mulai konsultasi gratis tantangan digital Anda melalui WhatsApp atau Email resmi kami." 
      },
      login: { 
        title: "Client Portal Login | SolusiLokal.ID", 
        desc: "Masuk ke dasbor terpadu untuk memantau progres proyek dan manajemen layanan digital Anda." 
      },
      dashboard: { 
        title: "System Admin Dashboard | SolusiLokal.ID", 
        desc: "Panel kontrol operasional internal SolusiLokal." 
      }
    };

    if (seoData[currentPath]) {
      document.title = seoData[currentPath].title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = seoData[currentPath].desc;
    }
  }, [currentPath]);

  const isDashboardOrLogin = currentPath === 'dashboard' || currentPath === 'login';

  return (
    <>
      {/* Schema.org markup untuk Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      <div className="font-sans antialiased text-slate-900 bg-white dark:bg-slate-900 dark:text-white selection:bg-[#00D2D3] selection:text-white min-h-screen transition-colors duration-300 flex flex-col relative overflow-x-hidden">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
            .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
          `}
        </style>

        {!isDashboardOrLogin && (
          <Navbar 
            currentPath={currentPath} 
            setPath={setCurrentPath} 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        )}
        
        <main className={`flex-grow ${!isDashboardOrLogin ? "pt-20" : ""}`}>
          {currentPath === 'home' && <HomePage setPath={setCurrentPath} />}
          {currentPath === 'services' && <ServicesPage setPath={setCurrentPath} />}
          {currentPath === 'solutions' && <SolutionsPage setPath={setCurrentPath} />}
          {currentPath === 'portfolio' && <PortfolioPage setPath={setCurrentPath} />}
          {currentPath === 'process' && <ProcessPage setPath={setCurrentPath} />}
          {currentPath === 'pricing' && <PricingPage setPath={setCurrentPath} />}
          {currentPath === 'about' && <AboutPage setPath={setCurrentPath} />}
          {currentPath === 'contact' && <ContactPage setPath={setCurrentPath} />}
          
          {currentPath === 'login' && <LoginPage setPath={setCurrentPath} />}
          {currentPath === 'dashboard' && <DashboardBackend setPath={setCurrentPath} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
        </main>

        {!isDashboardOrLogin && <Footer setPath={setCurrentPath} />}

        {/* FLOATING WA BUTTON */}
        {!isDashboardOrLogin && (
          <a 
            href="https://wa.me/6289529605601?text=Halo%20SolusiLokal%2C%20saya%20ingin%20konsultasi%20mengenai%20layanan%20digital%20untuk%20bisnis%20jasa%20saya." 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] group flex items-center justify-center"
            aria-label="Hubungi SolusiLokal via WhatsApp"
          >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
            <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-transform duration-300 relative z-10 flex items-center justify-center">
              <MessageSquare size={28} className="fill-current" />
            </div>
            <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white text-sm font-black py-2 px-4 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap border border-slate-100 dark:border-slate-700 hidden sm:block">
              Konsultasi Gratis
            </div>
          </a>
        )}
      </div>
    </>
  );
}

// ==========================================
// NAVIGATION & FOOTER COMPONENTS
// ==========================================
function Navbar({ currentPath, setPath, isMobileMenuOpen, setIsMobileMenuOpen, isDarkMode, setIsDarkMode }) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setPath('home')}>
          <BrandLogo className="w-10 h-10 drop-shadow-sm group-hover:scale-105 transition-transform rounded-lg overflow-hidden shrink-0" />
          <div className="flex flex-col justify-center text-slate-900 dark:text-white">
            <span className="font-black text-[1.1rem] md:text-[1.2rem] leading-[1.1] tracking-tight">Solusi</span>
            <span className="font-black text-[1.1rem] md:text-[1.2rem] leading-[1.1] tracking-tight">Lokal.ID</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-6 font-bold text-slate-500 dark:text-slate-400 text-sm">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => setPath(link.id)}
              className={`hover:text-[#00D2D3] transition ${currentPath === link.id ? 'text-[#00D2D3] dark:text-[#00D2D3]' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 text-slate-400 hover:text-[#00D2D3] transition rounded-full hover:bg-slate-50 dark:hover:bg-slate-800"
            title="Toggle Dark Mode"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setPath('login')} className="text-xs font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white hidden sm:block uppercase tracking-wider transition-colors">Client Login</button>
          <button onClick={() => setPath('contact')} className="hidden sm:flex bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#00D2D3] dark:hover:bg-[#00D2D3] dark:hover:text-white transition shadow-xl">
            Konsultasi Gratis
          </button>
          <button className="lg:hidden text-slate-600 dark:text-slate-300 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Buka Menu Navigasi">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 shadow-xl py-4 px-4 flex flex-col gap-4 font-bold text-slate-600 dark:text-slate-300 transition-colors duration-300">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => setPath(link.id)} className="text-left py-3 px-4 hover:text-[#00D2D3] hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">{link.label}</button>
          ))}
          <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
          <button onClick={() => setPath('contact')} className="bg-[#00D2D3] text-white py-4 rounded-xl text-center shadow-lg">Konsultasi Gratis Sekarang</button>
        </div>
      )}
    </nav>
  );
}

function Footer({ setPath }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto bg-slate-900 dark:bg-slate-950 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center text-white shadow-2xl relative overflow-hidden group border border-transparent dark:border-slate-800">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D2D3]/20 rounded-full blur-3xl group-hover:scale-150 transition duration-700"></div>
           <h2 className="text-3xl md:text-5xl font-extrabold mb-8 relative z-10 leading-tight">Siap membawa bisnis jasa Anda <br className="hidden md:block"/><span className="text-[#00D2D3]">ke level berikutnya?</span></h2>
           <button onClick={() => setPath('contact')} className="bg-[#00D2D3] text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-extrabold text-lg md:text-xl hover:scale-105 transition shadow-xl shadow-[#00D2D3]/30 relative z-10 active:scale-95 flex items-center justify-center gap-3 mx-auto w-full sm:w-auto">
              Konsultasi Gratis <MessageSquare size={24}/>
           </button>
        </div>
      </section>

      <footer className="bg-slate-50 dark:bg-slate-950 pt-16 md:pt-20 pb-24 md:pb-10 px-4 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => setPath('home')}>
              <BrandLogo className="w-10 h-10 rounded-lg overflow-hidden shrink-0" />
              <div className="flex flex-col justify-center text-slate-900 dark:text-white">
                <span className="font-black text-[1.2rem] leading-[1.1] tracking-tight">Solusi</span>
                <span className="font-black text-[1.2rem] leading-[1.1] tracking-tight">Lokal.ID</span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-md font-medium leading-relaxed">Digital development partner yang membantu bisnis jasa membangun website profesional, memperkuat branding, dan mengembangkan sistem digital operasional secara terstruktur.</p>
          </div>
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Main Navigation</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400 font-bold">
              <li><button onClick={() => setPath('services')} className="hover:text-[#00D2D3] transition">Services</button></li>
              <li><button onClick={() => setPath('solutions')} className="hover:text-[#00D2D3] transition">Solutions</button></li>
              <li><button onClick={() => setPath('portfolio')} className="hover:text-[#00D2D3] transition">Portfolio</button></li>
              <li><button onClick={() => setPath('pricing')} className="hover:text-[#00D2D3] transition">Pricing</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-sm">Contact Information</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400 font-bold text-sm">
              <li>Service Area: Nationwide, Indonesia</li>
              <li>Palangka Raya, Central Kalimantan</li>
              <li>Business Hours: 08.00 - 20.00 WIB</li>
              <li className="pt-2 flex items-center gap-2">
                 <Mail size={16} className="text-slate-500 dark:text-slate-400 shrink-0" />
                 solusilokalid@gmail.com
              </li>
              <li className="flex items-center gap-2">
                 <Phone size={16} className="text-slate-500 dark:text-slate-400 shrink-0" />
                 +62 895 2960 5601
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-800 relative flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4 z-20 md:order-1 order-2">
              <a 
                href="https://www.instagram.com/solusilokal.id/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-900 rounded-full text-slate-500 dark:text-slate-400 hover:text-white hover:bg-[#00D2D3] dark:hover:bg-[#00D2D3] dark:hover:text-white transition-all shadow-md border border-slate-100 dark:border-slate-800"
                aria-label="Instagram SolusiLokal"
              >
                <Instagram size={20} />
              </a>
           </div>

           <span className="text-xs text-slate-400 font-black tracking-widest uppercase text-center z-10 md:order-2 order-1">
             © {currentYear} SolusiLokal.id. All Rights Reserved.
           </span>
        </div>
      </footer>
    </>
  );
}

// ==========================================
// PAGES COMPONENTS
// ==========================================

function HomePage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 w-full overflow-hidden">
      <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 bg-white dark:bg-slate-900 transition-colors duration-300 w-full">
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-[10px] md:text-xs font-black uppercase tracking-widest mb-8">
            <Zap size={14} className="text-[#00D2D3]" /> Growth Partner Bisnis Jasa
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6 md:mb-8">
            Website, System, dan Branding<br className="hidden sm:block" />
            untuk Bisnis Jasa yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2D3] to-[#009B9C] block sm:inline mt-2 sm:mt-0">Ingin Naik Level</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-2">
            SolusiLokal adalah digital development partner yang membantu bisnis Anda membangun website profesional, memperkuat branding, dan mengembangkan sistem digital operasional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <button onClick={() => setPath('contact')} className="w-full sm:w-auto bg-[#00D2D3] text-white px-8 md:px-10 py-4 rounded-full font-black text-base md:text-lg shadow-xl shadow-[#00D2D3]/30 hover:scale-105 transition flex items-center justify-center gap-2">
              Konsultasi Gratis <ArrowRight size={20} />
            </button>
            <button onClick={() => setPath('services')} className="w-full sm:w-auto bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 md:px-10 py-4 rounded-full font-black text-base md:text-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition flex items-center justify-center gap-2">
              Lihat Layanan Kami
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12 md:mb-16 text-slate-900 dark:text-white leading-tight">Siklus yang menghambat<br className="hidden md:block" />pertumbuhan bisnis Anda.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ProblemCard title="Website Pasif" desc="Website ada tetapi tidak mendatangkan prospek atau klien baru." />
            <ProblemCard title="Booking Manual" desc="Pesan menumpuk, rawan terlewat, dan banyak membuang waktu produktif." />
            <ProblemCard title="Data Tercecer" desc="Tidak ada database klien terpusat untuk menjaga retensi pelanggan." />
            <ProblemCard title="Brand Kurang Kuat" desc="Tampilan kurang meyakinkan dan mudah kalah bersaing dengan kompetitor." />
          </div>
          <p className="mt-12 md:mt-16 font-bold text-slate-500 dark:text-slate-400 text-base md:text-lg px-4">Jika hal ini terjadi, bisnis Anda membutuhkan fondasi digital yang terstruktur.</p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white">Core Offerings</h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium text-base md:text-lg max-w-xl">Kami tidak sekadar membuat web. Kami membangun sistem terintegrasi agar bisnis Anda siap berkembang pesat.</p>
            </div>
            <button onClick={() => setPath('services')} className="text-[#00D2D3] font-bold flex items-center gap-2 hover:underline">Pelajari Selengkapnya <ChevronRight size={20}/></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <OfferCard icon={<MonitorSmartphone/>} title="Website Solutions" desc="Company profile dan landing page yang dirancang khusus untuk mengonversi pengunjung menjadi klien." />
            <OfferCard icon={<Database/>} title="System Development" desc="Sistem booking, database pelanggan yang aman, dan manajemen operasional bisnis." />
            <OfferCard icon={<Palette/>} title="Creative Branding" desc="Desain logo, identitas visual, dan aset marketing profesional yang berkarakter kuat." />
            <OfferCard icon={<RefreshCw/>} title="Digital Improvement" desc="Pembaruan desain website, optimasi kecepatan server, dan migrasi sistem teknologi." />
          </div>
        </div>
      </section>

      {/* PORTOFOLIO */}
      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-slate-900 dark:text-white">Studi Kasus</h2>
            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium px-2">Melihat langsung bagaimana struktur digital mengubah cara bisnis jasa beroperasi secara nyata.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <CaseStudyCard 
              title="Aplikasi Workflow Kreatif Luniflow"
              tags={["Website Development", "Interactive UI"]}
              result="Tracking produktivitas multidisiplin dengan antarmuka interaktif, memperkuat workflow digital dan meningkatkan produktivitas secara signifikan."
              image="image/porto-1.jpg"
              demoLink="https://luniflow.vercel.app/"
            />
            <CaseStudyCard 
              title="Katalog Layanan MUA Lunilooks"
              tags={["Katalog Digital", "Branding Visual"]}
              result="Digitalisasi profil layanan dan portofolio visual ke dalam satu platform responsif, mempermudah calon klien mengeksplorasi layanan dan mempercepat konversi."
              image="image/porto-2.jpg"
              demoLink="https://lunilooks.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-slate-900 dark:text-white">Kisah Sukses Klien</h2>
            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium px-2">Apa kata mereka setelah bekerja sama dengan SolusiLokal.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
             <TestimonialCard 
                quote="SolusiLokal benar-benar mengubah cara kami bekerja. Dulu reservasi studio sering bentrok karena dicatat manual, sekarang semua serba otomatis. Klien juga merasa layanan kami jauh lebih profesional."
                author="Rizal F."
                role="Pemilik Studio Fotografi Komersial"
             />
             <TestimonialCard 
                quote="Awalnya ragu untuk membuat website karena takut sulit mengurusnya. Ternyata tim SolusiLokal membangunkan sistem yang sangat mudah dipakai. Prospek yang masuk dari internet meningkat drastis!"
                author="Andi Hermawan"
                role="Direktur Konsultan Konstruksi"
             />
             <TestimonialCard 
                quote="Sistem manajemen pesanan kustom yang dibuatkan untuk bisnis kuliner kami sangat membantu. Dapur menjadi jauh lebih rapi dan efisien, tidak ada lagi pesanan pelanggan yang terlewat."
                author="Siti Aisyah"
                role="Owner Bisnis F&B"
             />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-slate-900 dark:text-white">Pricing & Packages</h2>
            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Model layanan tersistemasi dengan harga yang transparan.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 max-w-5xl mx-auto lg:max-w-none">
            <PricingCard 
              tier="Starter" role="Website Presence" price="3jt"
              features={["Exclusive company profile", "Conversion-focused homepage", "Fully responsive design", "Direct WhatsApp integration"]}
            />
            <PricingCard 
              tier="Growth" role="Conversion Website" price="5–7jt" popular
              features={["All Starter features", "High-converting landing page", "Speed optimization", "Lead generation flow"]}
            />
            <PricingCard 
              tier="Pro" role="Custom System" price="10jt+" custom
              features={["Custom executive dashboard", "Reservation & booking system", "Secure client database", "Internal workflow automation"]}
            />
          </div>

          <div className="text-center">
            <button onClick={() => setPath('pricing')} className="inline-flex items-center gap-2 text-[#00D2D3] font-bold hover:underline text-base md:text-lg">
              Pelajari Detail Selengkapnya <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 text-slate-900 dark:text-white">Pertanyaan Umum (FAQ)</h2>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400">Punya pertanyaan sebelum memulai? Kami merangkum hal-hal yang sering ditanyakan oleh klien B2B kami.</p>
          </div>
          
          <div className="space-y-4">
            <FaqItem 
              q="Berapa lama proses pengerjaan sistem atau website?"
              a="Waktu pengerjaan bergantung pada kompleksitas proyek. Paket Starter & Growth umumnya memakan waktu 1 hingga 2 minggu. Sementara itu, untuk paket Pro (Custom System), proses memakan waktu sekitar 3 hingga 6 minggu."
            />
            <FaqItem 
              q="Apakah ada biaya maintenance bulanan di luar investasi awal?"
              a="Investasi utama pada paket kami adalah satu kali bayar (One-time Investment) untuk pengembangan. Namun, untuk menjaga agar sistem tetap online, akan ada biaya server/hosting dan domain tahunan yang nominalnya disesuaikan dengan kapasitas kebutuhan operasional bisnis Anda."
            />
            <FaqItem 
              q="Apakah website dan sistem operasionalnya bisa diakses lewat HP?"
              a="Tentu saja. Seluruh website company profile, landing page, maupun custom dashboard admin yang kami bangun bersifat 100% responsif. Artinya, tampilan dan fungsinya akan beradaptasi dengan sempurna dan tetap nyaman digunakan baik melalui HP, tablet, maupun laptop/PC."
            />
            <FaqItem 
              q="Bagaimana jika di masa depan bisnis saya butuh fitur spesifik (custom)?"
              a="Sangat bisa. Sistem yang kami kembangkan dirancang dengan arsitektur yang sangat skalabel. Anda dapat melakukan penambahan fitur, modul khusus, maupun upgrade ke paket yang lebih tinggi kapan saja tanpa harus merombak ulang sistem dari nol."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicesPage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
           <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Layanan Kami</h1>
           <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto px-2">Pendekatan berbasis sistem untuk setiap elemen digital bisnis jasa Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
             <div className="w-16 h-16 bg-[#00D2D3]/10 text-[#00D2D3] rounded-2xl flex items-center justify-center mb-8"><MonitorSmartphone size={32}/></div>
             <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 dark:text-white">Website Development</h2>
             <ul className="space-y-4">
               <ServiceListItem text="Company Profile Profesional" />
               <ServiceListItem text="Landing Page Khusus Konversi" />
               <ServiceListItem text="Website Redesign & Revamp" />
               <ServiceListItem text="Hybrid Website (Sistem & Web Terpadu)" />
             </ul>
          </div>
          <div className="bg-slate-900 dark:bg-slate-950 text-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-transparent dark:border-slate-800 transition-colors duration-300">
             <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8"><Database size={32}/></div>
             <h2 className="text-2xl md:text-3xl font-black mb-6">System Development</h2>
             <ul className="space-y-4">
               <ServiceListItem text="Sistem Booking Terkustomisasi" dark />
               <ServiceListItem text="Manajemen Database Klien" dark />
               <ServiceListItem text="Sistem Alur Kerja Internal" dark />
               <ServiceListItem text="Dashboard Admin Terintegrasi" dark />
             </ul>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
             <div className="w-16 h-16 bg-[#00D2D3]/10 text-[#00D2D3] rounded-2xl flex items-center justify-center mb-8"><Palette size={32}/></div>
             <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 dark:text-white">Creative Branding</h2>
             <ul className="space-y-4">
               <ServiceListItem text="Desain Logo & Identitas Visual" />
               <ServiceListItem text="Desain Visual Pemasaran" />
               <ServiceListItem text="Fotografi Komersial Profesional" />
               <ServiceListItem text="Penyusunan Panduan Merek" />
             </ul>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
             <div className="w-16 h-16 bg-[#00D2D3]/10 text-[#00D2D3] rounded-2xl flex items-center justify-center mb-8"><ArrowUpCircle size={32}/></div>
             <h2 className="text-2xl md:text-3xl font-black mb-6 text-slate-900 dark:text-white">Website Improvement</h2>
             <ul className="space-y-4">
               <ServiceListItem text="Optimasi Kecepatan & Dasar SEO" />
               <ServiceListItem text="Migrasi Teknologi Sistem Baru" />
               <ServiceListItem text="Peningkatan Fitur Website Hybrid" />
               <ServiceListItem text="Dukungan dan Pemeliharaan Sistem" />
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionsPage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Solusi Sesuai Fase Bisnis</h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 md:mb-20 px-2">Kami memposisikan diri sebagai konsultan digital. Temukan solusi yang paling tepat untuk tahap bisnis jasa Anda saat ini.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
           <SolutionPersonaCard 
             title="Untuk Bisnis Baru" 
             desc="Anda membutuhkan fondasi kredibilitas agar klien mudah percaya dan merasa aman."
             focus="Kehadiran Online Profesional"
             recommendation="SolusiLokal Starter"
           />
           <SolutionPersonaCard 
             title="Untuk Bisnis Berkembang" 
             desc="Anda memiliki prospek masuk, butuh website yang efektif mengonversi mereka menjadi klien nyata."
             focus="Konversi & Akuisisi Prospek"
             recommendation="SolusiLokal Growth"
             highlight
           />
           <SolutionPersonaCard 
             title="Untuk Bisnis Scale-up" 
             desc="Jumlah klien sudah banyak, namun pengelolaan operasional masih berantakan dan rawan kesalahan."
             focus="Automasi & Sistem Operasional"
             recommendation="SolusiLokal Pro"
           />
        </div>
      </div>
    </div>
  );
}

function PortfolioPage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Studi Kasus</h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 md:mb-20 px-2">Melihat langsung bagaimana struktur digital mengubah cara bisnis jasa beroperasi secara nyata.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
          <CaseStudyCard 
            title="Website Workflow Kreatif Luniflow"
            tags={["Website Development", "Interactive UI"]}
            result="Tracking produktivitas multidisiplin dengan antarmuka interaktif, memperkuat workflow digital dan meningkatkan produktivitas secara signifikan."
            image="image/porto-1.jpg"
            demoLink="https://luniflow.vercel.app/"
          />
          <CaseStudyCard 
            title="Katalog Layanan MUA Lunilooks"
            tags={["Katalog Digital", "Branding Visual"]}
            result="Digitalisasi profil layanan dan portofolio visual ke dalam satu platform responsif, mempermudah calon klien mengeksplorasi layanan dan mempercepat konversi."
            image="image/porto-2.jpg"
            demoLink="https://lunilooks.vercel.app/"
          />
          <CaseStudyCard 
            title="Company Profile Institusi Pendidikan"
            tags={["Pembuatan Website", "Branding Digital"]}
            result="Menampilkan citra profesional yang secara langsung menumbuhkan kepercayaan para pendaftar baru."
            image="image/porto-3.jpg"
            demoLink="#"
          />
          <CaseStudyCard 
            title="Sistem Alur Kerja Bisnis F&B"
            tags={["Aplikasi Khusus", "Integrasi Dapur"]}
            result="Integrasi pesanan pelanggan langsung menuju layar monitor dapur secara akurat dan tepat waktu."
            image="image/porto-4.jpg"
            demoLink="#"
          />
        </div>
      </div>
    </div>
  );
}

function ProcessPage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 pt-24 pb-8 bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Workflow Kami</h1>
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-16 md:mb-20 px-2">Proses kerja yang terstruktur ketat untuk meminimalisir risiko dan memaksimalkan hasil investasi digital Anda.</p>
        
        <div className="max-w-4xl mx-auto relative mb-16">
           <div className="hidden md:block absolute top-[40px] left-0 w-full h-1 bg-slate-100 dark:bg-slate-800 z-0"></div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 relative z-10 px-4 md:px-0">
              <ProcessCircle step="01" title="Consult" desc="Bedah masalah dan alur operasional bisnis Anda." />
              <ProcessCircle step="02" title="Plan" desc="Merancang struktur arsitektur sistem yang paling ideal." />
              <ProcessCircle step="03" title="Build" desc="Tahap pengembangan aplikasi dan implementasi teknis." />
              <ProcessCircle step="04" title="Test" desc="Pengujian kualitas dan revisi fungsionalitas menyeluruh." />
              <ProcessCircle step="05" title="Launch" desc="Peluncuran sistem beserta sesi pelatihan dan serah terima." />
           </div>
        </div>
      </div>
    </div>
  );
}

function PricingPage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Pricing & Packages</h1>
           <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium px-2">Model layanan terstandarisasi dengan transparansi harga untuk hasil yang pasti terukur.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-20 max-w-5xl mx-auto lg:max-w-none">
          <PricingCard 
            tier="Starter" role="Website Presence" price="3jt"
            features={["Exclusive company profile", "Conversion-focused homepage", "Fully responsive design", "Direct WhatsApp integration", "Basic SEO structure"]}
          />
          <PricingCard 
            tier="Growth" role="Conversion Website" price="5–7jt" popular
            features={["All Starter features", "High-converting landing page", "Speed optimization", "Lead generation flow", "Conversion-oriented layout"]}
          />
          <PricingCard 
            tier="Pro" role="Custom System" price="10jt+" custom
            features={["Custom executive dashboard", "Reservation & booking management", "Secure client database", "Internal workflow automation", "Custom feature development"]}
          />
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
           <h3 className="text-2xl md:text-3xl font-black mb-8 md:mb-10 text-center text-slate-900 dark:text-white">Digital Improvement & Add-ons</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              <div>
                 <h4 className="font-bold text-[#00D2D3] uppercase tracking-widest text-sm mb-4">Platform Upgrades</h4>
                 <ul className="space-y-3 md:space-y-4">
                    <AddonItem name="Website Redesign Package" price="2 – 4jt" />
                    <AddonItem name="Hybrid System Upgrade" price="4 – 8jt" />
                    <AddonItem name="Advanced Speed & SEO" price="1 – 2.5jt" />
                    <AddonItem name="Full-scale System Migration" price="3 – 6jt" />
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold text-[#00D2D3] uppercase tracking-widest text-sm mb-4">Creative Support</h4>
                 <ul className="space-y-3 md:space-y-4">
                    <AddonItem name="Business Logo Design" price="800rb – 1.5jt" />
                    <AddonItem name="Visual Identity Development" price="300rb – 1jt" />
                    <AddonItem name="Commercial Product Photography" price="500rb – 2jt" />
                    <AddonItem name="Digital Strategy Consulting" price="250rb – 750rb" />
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage({ setPath }) {
  return (
    <div className="animate-in fade-in duration-500 py-24 bg-white dark:bg-slate-900 min-h-screen flex items-center transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <BrandLogo className="w-20 h-20 md:w-24 md:h-24 mx-auto md:mx-0 mb-8 md:mb-10 drop-shadow-xl rounded-2xl" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] md:leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Membangun fondasi digital yang terstruktur untuk <span className="text-[#00D2D3]">bisnis jasa.</span>
          </h1>
        </div>

        <div className="space-y-6 text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-left">
          <p>
            Banyak bisnis jasa lokal yang tertahan pertumbuhannya karena terjebak dalam operasional yang serba manual dan memiliki website yang sekadar "ada" tanpa kemampuan mendatangkan klien baru.
          </p>
          <p>
            SolusiLokal hadir untuk memutus rantai kendala tersebut. Kami memposisikan diri bukan sebagai sekadar vendor pembuatan website biasa, melainkan sebagai <strong className="font-extrabold text-slate-900 dark:text-white">Digital Development Partner</strong> yang merencanakan skala perluasan bisnis Anda secara utuh dan holistik.
          </p>
          <p>
            Melalui pola pikir arsitektur terstruktur dan berorientasi pada pencapaian target pemasaran, kami merancang aset digital terintegrasi mulai dari penyusunan profil perusahaan, halaman khusus penawaran, hingga pembuatan dashboard operasional kustom. Segala sistem kami kembangkan dengan cermat agar hasil bisnis dapat terus meningkat seiring kemajuan klien kami.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-12">
           <span className="px-5 md:px-6 py-2.5 md:py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-xs md:text-sm text-slate-600 dark:text-slate-300">Digital Studio</span>
           <span className="px-5 md:px-6 py-2.5 md:py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-xs md:text-sm text-slate-600 dark:text-slate-300">System Builder</span>
           <span className="px-5 md:px-6 py-2.5 md:py-3 bg-[#00D2D3]/10 border border-[#00D2D3]/20 rounded-full font-bold text-xs md:text-sm text-[#009B9C] dark:text-[#00D2D3]">Growth Partner</span>
        </div>
      </div>
    </div>
  );
}

function ContactPage({ setPath }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    const data = new URLSearchParams(formData);

    try {
      await fetch(GAS_WEB_APP_URL, {
        method: 'POST',
        body: data,
        mode: 'no-cors'
      });
      setStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('success'); 
    }
  };

  return (
    <div className="animate-in fade-in duration-500 py-24 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
           <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white">Mulai Konsultasi.</h1>
           <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12">Ceritakan secara singkat tantangan bisnis jasa Anda saat ini, dan mari bersama-sama merumuskan sistem digital yang tepat guna.</p>
           
           <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700 flex items-center justify-center text-[#00D2D3] shrink-0"><MessageSquare/></div>
                 <div>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Jalur WhatsApp</p>
                    <p className="font-black text-base md:text-lg text-slate-900 dark:text-white">+62 895 2960 5601</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700 flex items-center justify-center text-[#00D2D3] shrink-0"><MonitorSmartphone/></div>
                 <div>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Alamat Surel Resmi</p>
                    <p className="font-black text-base md:text-lg text-slate-900 dark:text-white">solusilokalid@gmail.com</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                 <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700 flex items-center justify-center text-[#00D2D3] shrink-0"><Globe/></div>
                 <div>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Area Layanan Konsultasi</p>
                    <p className="font-black text-base md:text-lg text-slate-900 dark:text-white">Seluruh Indonesia</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-transparent dark:border-slate-700 flex items-center justify-center text-[#00D2D3] shrink-0"><Clock/></div>
                 <div>
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Jam Operasional Tim</p>
                    <p className="font-black text-base md:text-lg text-slate-900 dark:text-white">08.00 - 20.00 WIB</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800 transition-colors duration-300">
           {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                 <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6"><CheckCircle size={40}/></div>
                 <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white">Pesan Berhasil Terkirim!</h3>
                 <p className="text-slate-500 dark:text-slate-400">Tim representatif SolusiLokal akan segera merespons permintaan Anda melalui jalur komunikasi yang tersedia.</p>
                 <button onClick={() => setStatus('idle')} className="mt-8 font-bold text-[#00D2D3]">Kirim pesan lainnya</button>
              </div>
           ) : (
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                 <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Nama Lengkap Pendaftar</label>
                    <input type="text" name="nama_lengkap" required className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-2xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-[#00D2D3] font-bold" />
                 </div>
                 <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Sektor Industri Perusahaan</label>
                    <input type="text" name="sektor_industri" placeholder="Contoh: Studio Kreatif, Konstruksi" required className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-2xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-[#00D2D3] font-bold" />
                 </div>
                 <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Tantangan Utama Saat Ini</label>
                    <textarea name="tantangan_utama" rows="3" required className="w-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-2xl border border-slate-200 dark:border-slate-700 outline-none focus:ring-2 focus:ring-[#00D2D3] font-bold resize-none"></textarea>
                 </div>
                 <button type="submit" disabled={status === 'loading'} className="w-full bg-[#00D2D3] text-white py-4 rounded-2xl font-black text-base md:text-lg hover:bg-[#00B5B6] transition shadow-lg shadow-[#00D2D3]/30 disabled:opacity-70 mt-2">
                    {status === 'loading' ? 'Sedang Memproses Data...' : 'Kirim Permintaan Konsultasi'}
                 </button>
              </form>
           )}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// BACKOFFICE COMPONENTS (SUPABASE READY)
// ==========================================

function DashboardBackend({ setPath, isDarkMode, setIsDarkMode }) {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 flex flex-col md:flex-row animate-in fade-in transition-colors duration-300 w-full overflow-hidden">
      <aside className="w-full md:w-72 bg-slate-900 dark:bg-slate-900 border-r border-slate-800 p-6 flex flex-col text-slate-300 z-20 shrink-0">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <BrandLogo className="w-10 h-10 drop-shadow-sm rounded-lg" />
            <div>
              <p className="font-bold text-lg text-white leading-tight">SolusiLokal</p>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Sistem Terpadu</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition">
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setPath('home')} className="md:hidden p-2 bg-slate-800 rounded-full text-slate-400 hover:text-red-400 transition">
              <LogOut size={16} />
            </button>
          </div>
        </div>
        
        <div className="hidden md:block text-xs font-black uppercase tracking-widest text-slate-600 mb-4 px-4">Modul Sistem Server</div>
        <nav className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-1.5 flex-1 pb-4 md:pb-0 hide-scrollbar">
          <NavItemBackend active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<LayoutDashboard size={20}/>} label="Dashboard" />
          <NavItemBackend active={activeTab === 'clients'} onClick={() => setActiveTab('clients')} icon={<Users size={20}/>} label="Klien" />
          <NavItemBackend active={activeTab === 'projects'} onClick={() => setActiveTab('projects')} icon={<Briefcase size={20}/>} label="Proyek" />
          <NavItemBackend active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')} icon={<CalendarDays size={20}/>} label="Reservasi" />
          <NavItemBackend active={activeTab === 'invoices'} onClick={() => setActiveTab('invoices')} icon={<FileText size={20}/>} label="Tagihan" />
          <NavItemBackend active={activeTab === 'tasks'} onClick={() => setActiveTab('tasks')} icon={<CheckCircle size={20}/>} label="Tugas" />
        </nav>
        
        <button onClick={() => setPath('home')} className="hidden md:flex mt-auto items-center gap-3 p-4 text-slate-500 hover:text-white font-bold transition rounded-xl hover:bg-slate-800">
          <LogOut size={20} /> Keluar Sistem
        </button>
      </aside>

      <main className="flex-1 p-4 sm:p-6 lg:p-10 h-screen overflow-y-auto overflow-x-hidden">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight capitalize">{activeTab}</h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs md:text-sm">Modul Backend Persiapan Pengembang</p>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 pr-4">
             <div className="w-10 h-10 bg-slate-900 dark:bg-slate-800 rounded-xl flex items-center justify-center text-white shrink-0"><ShieldCheck size={18}/></div>
             <div className="leading-tight text-slate-900 dark:text-white">
               <span className="font-black text-xs md:text-sm block">Administrator</span>
               <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Otoritas Penuh</span>
             </div>
          </div>
        </header>

        {activeTab === 'projects' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
              <StatCard title="Proyek Aktif Saat Ini" value="3" icon={<Briefcase className="text-blue-500"/>} color="bg-blue-50 dark:bg-blue-900/30" />
              <StatCard title="Total Pendapatan Terukur" value="Rp 21.5M" icon={<DollarSign className="text-emerald-500"/>} color="bg-emerald-50 dark:bg-emerald-900/30" />
              <StatCard title="Tugas Menunggu Konfirmasi" value="12" icon={<CheckCircle className="text-orange-500"/>} color="bg-orange-50 dark:bg-orange-900/30" />
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors duration-300">
               <div className="p-5 md:p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/50">
                  <h3 className="font-black text-base md:text-lg text-slate-900 dark:text-white">Pusat Data Proyek Perusahaan</h3>
                  <button className="bg-slate-900 dark:bg-[#00D2D3] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm">Tambah Proyek Baru</button>
               </div>
               <div className="overflow-x-auto w-full">
                  <table className="w-full text-left min-w-[700px]">
                     <thead className="bg-white dark:bg-slate-900 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] border-b border-slate-100 dark:border-slate-800">
                        <tr>
                           <th className="p-4 md:p-6">Identitas Proyek</th>
                           <th className="p-4 md:p-6">Klien Terdaftar</th>
                           <th className="p-4 md:p-6">Batas Waktu Target</th>
                           <th className="p-4 md:p-6">Status Pengerjaan</th>
                           <th className="p-4 md:p-6 text-right">Nilai Kontrak (IDR)</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                        {mockProjects.map(p => (
                           <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition cursor-pointer">
                              <td className="p-4 md:p-6">
                                 <p className="font-black text-slate-800 dark:text-slate-200 text-xs md:text-sm mb-1">{p.service}</p>
                                 <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono font-bold bg-slate-100 dark:bg-slate-800 inline-block px-2 py-0.5 rounded">{p.id}</p>
                              </td>
                              <td className="p-4 md:p-6 text-xs md:text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] shrink-0">{p.client.charAt(0)}</div>
                                 <span className="truncate">{p.client}</span>
                              </td>
                              <td className="p-4 md:p-6 text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400">{p.deadline}</td>
                              <td className="p-4 md:p-6">
                                 <span className={`px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest ${
                                    p.status === 'In Progress' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400' : 
                                    p.status === 'Testing' ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-400' :
                                    'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400'
                                 }`}>
                                    {p.status}
                                 </span>
                              </td>
                              <td className="p-4 md:p-6 text-right font-black text-slate-900 dark:text-white text-xs md:text-sm">{p.value.toLocaleString()}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </>
        )}

        {activeTab !== 'projects' && (
           <div className="h-64 md:h-96 flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2rem] md:rounded-[3rem] p-6 text-center">
              <Database size={48} className="mb-4 opacity-50"/>
              <h2 className="text-lg md:text-xl font-black mb-2 uppercase tracking-widest text-slate-500 dark:text-slate-400">Tabel Modul: {activeTab}</h2>
              <p className="font-bold text-xs md:text-sm">Sistem ini siap dihubungkan menuju infrastruktur Supabase.</p>
           </div>
        )}
      </main>
    </div>
  );
}

// ==========================================
// REUSABLE UI COMPONENTS
// ==========================================

function ProblemCard({ title, desc }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm text-left transition-colors duration-300">
      <div className="w-10 h-10 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-xl flex items-center justify-center mb-5 md:mb-6"><XCircle size={20}/></div>
      <h3 className="font-black text-lg md:text-xl mb-2 md:mb-3 text-slate-900 dark:text-white">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  );
}

function OfferCard({ icon, title, desc }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800 p-6 md:p-8 rounded-3xl hover:bg-[#00D2D3] dark:hover:bg-[#00D2D3] hover:text-white dark:hover:text-white transition duration-300 group cursor-default">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-900 text-slate-800 dark:text-white rounded-2xl flex items-center justify-center mb-5 md:mb-6 shadow-sm group-hover:scale-110 transition">{icon}</div>
      <h3 className="font-black text-lg md:text-xl mb-2 md:mb-3 text-slate-900 dark:text-white group-hover:text-white">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 font-medium group-hover:text-white/90 leading-relaxed text-sm md:text-base">{desc}</p>
    </div>
  );
}

function ServiceListItem({ text, dark }) {
  return (
    <li className="flex items-start gap-3 font-bold text-sm md:text-base">
      <CheckCircle size={18} className="text-[#00D2D3] mt-0.5 shrink-0" />
      <span className={`leading-snug ${dark ? "text-slate-300 dark:text-slate-300" : "text-slate-700 dark:text-slate-300"}`}>{text}</span>
    </li>
  );
}

function SolutionPersonaCard({ title, desc, focus, recommendation, highlight }) {
  return (
    <div className={`p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border transition ${highlight ? 'bg-slate-900 dark:bg-slate-950 text-white border-slate-800 shadow-2xl md:scale-105' : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border-slate-100 dark:border-slate-700'}`}>
       <h3 className="text-xl md:text-2xl font-black mb-4">{title}</h3>
       <p className={`mb-6 md:mb-8 font-medium leading-relaxed text-sm md:text-base ${highlight ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>{desc}</p>
       <div className={`p-4 rounded-2xl mb-6 md:mb-8 ${highlight ? 'bg-slate-800 dark:bg-slate-900' : 'bg-white dark:bg-slate-900 shadow-sm'}`}>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#00D2D3] mb-1">Fokus Utama Pelayanan</p>
          <p className="font-bold text-sm">{focus}</p>
       </div>
       <p className="text-[10px] md:text-xs font-black uppercase tracking-widest mb-1 md:mb-2 opacity-50">Rekomendasi Paket Investasi</p>
       <p className="font-black text-lg md:text-xl text-[#00D2D3]">{recommendation}</p>
    </div>
  );
}

function CaseStudyCard({ title, tags, result, image, demoLink }) {
  return (
    <a 
      href={demoLink || "#"} 
      target={demoLink && demoLink !== "#" ? "_blank" : "_self"} 
      rel="noopener noreferrer" 
      className="block bg-white dark:bg-slate-900 p-2 rounded-[2rem] md:rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm group cursor-pointer hover:border-[#00D2D3]/70 hover:shadow-lg transition-all duration-300"
    >
       <div className="h-48 md:h-56 bg-slate-100 dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] mb-5 md:mb-6 relative overflow-hidden flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <span className="font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest text-lg md:text-2xl text-center px-4">Preview Visual</span>
          )}
          
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
             <span className="bg-[#00D2D3] text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm md:text-base">
               Lihat Live Demo <ArrowUpRight size={18} />
             </span>
          </div>
       </div>
       <div className="px-5 md:px-8 pb-5 md:pb-8">
          <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
             {tags.map((t, i) => <span key={i} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full">{t}</span>)}
          </div>
          <h3 className="text-lg md:text-2xl font-black mb-3 md:mb-4 leading-tight text-slate-900 dark:text-white group-hover:text-[#00D2D3] transition-colors">{title}</h3>
          <p className="font-medium leading-relaxed text-sm md:text-base text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-500/20">{result}</p>
       </div>
    </a>
  );
}

function ProcessCircle({ step, title, desc }) {
  return (
    <div className="text-center group">
       <div className="w-14 h-14 md:w-20 md:h-20 bg-white dark:bg-slate-900 border-4 border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center font-black text-lg md:text-2xl text-slate-300 dark:text-slate-600 mx-auto mb-3 md:mb-6 relative z-10 group-hover:border-[#00D2D3] dark:group-hover:border-[#00D2D3] group-hover:text-[#00D2D3] transition duration-500 shadow-lg">
         {step}
       </div>
       <h3 className="font-black text-base md:text-xl mb-1 md:mb-2 text-slate-900 dark:text-white">{title}</h3>
       <p className="text-slate-500 dark:text-slate-400 font-medium text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">{desc}</p>
    </div>
  );
}

function PricingCard({ tier, role, price, features, popular, custom }) {
  const waMessage = `Halo SolusiLokal, saya tertarik untuk membangun sistem digital dengan paket *SolusiLokal ${tier}*. Boleh minta info lebih lanjut?`;
  const waLink = `https://wa.me/6289529605601?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border flex flex-col relative transition-colors duration-300 ${popular ? 'bg-slate-900 dark:bg-slate-950 text-white shadow-2xl lg:scale-105 border-slate-800 z-10 mt-4 lg:mt-0' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'}`}>
      {popular && <div className="absolute top-0 right-6 md:right-10 bg-[#00D2D3] text-white px-4 md:px-5 py-1.5 md:py-2 rounded-b-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest">Most Popular</div>}
      
      <p className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-2">{role}</p>
      <h3 className="text-xl md:text-3xl font-black mb-4 md:mb-6">SolusiLokal {tier}</h3>
      
      <div className="flex items-baseline gap-1 mb-2">
         {!custom && <span className="font-bold text-sm md:text-base">Starting From</span>}
         <span className="text-3xl md:text-5xl font-black">{price}</span>
      </div>
      <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8 pb-6 md:pb-8 border-b ${popular ? 'border-slate-800 text-slate-500' : 'border-slate-100 dark:border-slate-800 text-slate-400'}`}>One-time Investment</p>
      
      <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
         {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 font-bold text-xs md:text-sm">
               <CheckCircle size={16} className="text-[#00D2D3] mt-0.5 shrink-0" />
               <span className={`leading-snug ${popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{f}</span>
            </li>
         ))}
      </ul>
      
      <a 
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-3 md:py-4 rounded-full font-black transition block text-center text-sm md:text-base ${popular ? 'bg-[#00D2D3] text-white hover:bg-[#00B5B6]' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700'}`}
      >
        Choose {tier}
      </a>
    </div>
  );
}

function AddonItem({ name, price }) {
  return (
    <li className="flex flex-col sm:flex-row justify-between sm:items-center py-2.5 md:py-3 border-b border-slate-50 dark:border-slate-800 border-dashed gap-1">
       <span className="font-bold text-slate-700 dark:text-slate-300 text-xs md:text-sm">{name}</span>
       <span className="font-black text-slate-900 dark:text-white text-xs md:text-sm">{price}</span>
    </li>
  );
}

function NavItemBackend({ icon, label, active, onClick }) {
  return (
    <button onClick={onClick} className={`w-full flex items-center justify-center md:justify-start gap-3 p-3 md:p-4 rounded-2xl transition duration-200 min-w-[60px] md:min-w-0 ${
      active ? 'bg-[#00D2D3] text-white font-black shadow-lg shadow-[#00D2D3]/20' : 'text-slate-500 hover:bg-slate-800 hover:text-white font-bold'
    }`}>
      {icon}
      <span className="hidden md:inline flex-1 text-left text-xs md:text-sm">{label}</span>
    </button>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group transition-colors duration-300">
      <div className={`absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 ${color} opacity-40 rounded-bl-[3rem] md:rounded-bl-[4rem] group-hover:scale-[2] transition duration-700`}></div>
      <div className="relative z-10 flex items-center justify-between gap-4">
        <div>
           <p className="text-slate-400 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 md:mb-2 leading-tight">{title}</p>
           <p className="text-xl md:text-3xl font-black text-slate-900 dark:text-white">{value}</p>
        </div>
        <div className="w-10 h-10 md:w-14 md:h-14 bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl shadow-inner flex items-center justify-center border border-slate-50 dark:border-slate-700 shrink-0">{icon}</div>
      </div>
    </div>
  );
}

function LoginPage({ setPath }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin.solusilokal' && password === '@admin-solusi') {
      setErrorMsg('');
      setPath('dashboard');
    } else {
      setErrorMsg('Kredensial tidak cocok. Periksa kembali username dan kata sandi Anda.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-300 w-full">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-2xl p-6 sm:p-8 md:p-12 border border-slate-100 dark:border-slate-800 text-center relative overflow-hidden">
         <BrandLogo className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-6 md:mb-8 drop-shadow-xl relative z-10 rounded-xl" />
         <h1 className="text-xl md:text-3xl font-black mb-1 md:mb-2 relative z-10 text-slate-900 dark:text-white">Akses Sistem Utama</h1>
         <p className="text-slate-400 font-black text-[9px] md:text-[10px] uppercase tracking-widest mb-8 md:mb-10 relative z-10">Dasbor Terpadu SolusiLokal</p>
         
         {errorMsg && (
            <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-bold border border-red-100 dark:border-red-900/50">
               {errorMsg}
            </div>
         )}

         <form onSubmit={handleLogin} className="space-y-4 relative z-10 text-left">
            <div>
               <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-1.5 md:mb-2 px-1">Identitas Pengguna</label>
               <input 
                  type="text" 
                  placeholder="Masukkan Nama Pengguna" 
                  className="w-full p-3 md:p-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-[#00D2D3] font-bold text-xs md:text-sm transition" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
               />
            </div>
            <div>
               <label className="block text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400 mb-1.5 md:mb-2 px-1">Kunci Keamanan</label>
               <input 
                  type="password" 
                  placeholder="Masukkan Kata Sandi" 
                  className="w-full p-3 md:p-4 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-[#00D2D3] font-bold text-xs md:text-sm transition" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
               />
            </div>
            <button type="submit" className="w-full bg-slate-900 dark:bg-[#00D2D3] text-white py-3.5 md:py-4 mt-2 rounded-xl md:rounded-2xl font-black transition shadow-xl hover:bg-[#00D2D3] dark:hover:bg-[#00B5B6] active:scale-95 text-sm md:text-base">Masuk ke Ruang Kerja</button>
         </form>
         
         <button onClick={() => setPath('home')} className="mt-6 md:mt-8 text-slate-400 font-bold text-[10px] md:text-xs hover:text-[#00D2D3] uppercase tracking-widest relative z-10 transition">Kembali menuju Beranda</button>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300 flex flex-col h-full">
      <div className="flex gap-1 mb-6 text-yellow-400">
        {[1,2,3,4,5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic mb-8 flex-grow">
        "{quote}"
      </p>
      <div className="flex items-center gap-4 mt-auto border-t border-slate-50 dark:border-slate-800 pt-6">
        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center font-black text-slate-400 dark:text-slate-500 shrink-0">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-black text-slate-900 dark:text-white leading-tight">{author}</p>
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-colors duration-300 bg-white dark:bg-slate-900 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition"
      >
        <span className="font-bold text-slate-900 dark:text-white pr-4">{q}</span>
        <ChevronRight size={20} className={`text-[#00D2D3] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
}