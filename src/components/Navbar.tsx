import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'எங்கள் நோக்கம்', href: '#about' },
    { label: 'அணுகுமுறை', href: '#advisory' },
    { label: 'ஏன் SimpleLife?', href: '#why-us' },
    { label: '6 முக்கிய கோட்பாடுகள்', href: '#principles' },
    { label: 'பயணம்', href: '#journey' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#07C28D]/50 rounded-lg p-1"
          >
            <img
              src="https://6aae6613380f009d8901a4e1.imgix.net/sandbox/Simple%20life%20Logo.png"
              alt="SimpleLife.lk Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#09448B] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#07C28D] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/simplelife.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#09448B] bg-[#e8f1fa] hover:bg-[#d8e8f8] transition-colors"
              title="Open pure HTML/CSS/JS version"
            >
              <span>Pure HTML Version</span>
              <span className="text-[10px] bg-white px-1.5 py-0.5 rounded font-mono text-slate-600">.html</span>
            </a>
            <button
              id="nav-clarity-call-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#09448B] hover:bg-[#07356e] active:scale-[0.98] shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>ஆலோசனை பெற</span>
              <ArrowRight className="w-4 h-4 text-[#07C28D]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#09448B] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-[#09448B] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="/simplelife.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#09448B] bg-[#e8f1fa]"
              >
                <span>Open Pure HTML/CSS/JS Page</span>
              </a>
              <button
                id="mobile-drawer-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#09448B] active:bg-[#07356e] shadow"
              >
                <PhoneCall className="w-4 h-4 text-[#07C28D]" />
                <span>ஆலோசனை பெற (Free Advisory)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
