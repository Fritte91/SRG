import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavbarScroll } from '../hooks/useNavbarScroll';
import { handleAnchorClick } from '../utils/smoothScroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, changeLanguage } = useLanguage();
  const isScrolled = useNavbarScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <nav className={`sticky w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-lg' 
        : 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/5'
    } supports-[backdrop-filter]:bg-[#050505]/60`}>
      <div className="flex h-20 max-w-[1600px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
        {/* Logo */}
        <a href="#hero-section" onClick={handleAnchorClick} className="flex flex-col items-start justify-center group z-50 shrink-0 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm" aria-label="Sticky Rice Fight Gym Home">
          <div className="leading-none text-2xl font-bold italic text-white tracking-tighter font-heading cursor-pointer flex gap-1.5 items-baseline">
            <span className="text-white drop-shadow-md">STICKY</span>
            <span className="text-[#ef4444] drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">RICE</span>
          </div>
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.35em] leading-none mt-1 pl-0.5 group-hover:text-white transition-colors">Fight Gym</div>
        </a>

        {/* Desktop Links (Centered) */}
        <div className="hidden lg:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <a href="#hero-section" onClick={handleAnchorClick} className="uppercase hover:text-[#ef4444] transition-colors text-xs font-semibold text-gray-300 tracking-[0.15em] font-heading">{t('common.gym')}</a>
          <a href="#trainers" onClick={handleAnchorClick} className="uppercase hover:text-[#3b82f6] transition-colors text-xs font-semibold text-gray-300 tracking-[0.15em] font-heading">{t('common.theKru')}</a>
          <a href="#schedule" onClick={handleAnchorClick} className="text-xs font-heading font-semibold uppercase tracking-[0.15em] text-gray-300 hover:text-[#ef4444] transition-colors">{t('common.training')}</a>
        </div>

        {/* Desktop CTA & Language Switcher (Right) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2 border border-white/10 rounded-sm overflow-hidden">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                language === 'en' 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('th')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                language === 'th' 
                  ? 'bg-white text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              TH
            </button>
          </div>
          <a href="#schedule" onClick={handleAnchorClick} className="relative overflow-hidden group bg-white text-black font-heading font-bold text-xs px-6 py-2.5 rounded-sm uppercase tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:ring-offset-2 focus:ring-offset-[#050505]">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">{t('common.freeTrial')}</span>
            <div className="absolute inset-0 bg-[#ef4444] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white hover:text-[#ef4444] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden bg-black text-white absolute w-full top-20 left-0 px-6 pb-8 border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 visible h-screen' 
            : 'opacity-0 invisible h-0 overflow-hidden'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col space-y-8 pt-12 text-2xl font-heading font-semibold uppercase tracking-tight text-center">
          <a 
            href="#hero-section" 
            onClick={(e) => { handleAnchorClick(e); closeMenu(); }} 
            className="block hover:text-[#ef4444] transition-colors focus:text-[#ef4444] focus:outline-none"
            aria-label={t('common.gym')}
          >
            {t('common.gym')}
          </a>
          <a 
            href="#trainers" 
            onClick={(e) => { handleAnchorClick(e); closeMenu(); }} 
            className="block hover:text-[#3b82f6] transition-colors focus:text-[#3b82f6] focus:outline-none"
            aria-label={t('common.theKru')}
          >
            {t('common.theKru')}
          </a>
          <a 
            href="#schedule" 
            onClick={(e) => { handleAnchorClick(e); closeMenu(); }} 
            className="block hover:text-[#ef4444] transition-colors focus:text-[#ef4444] focus:outline-none"
            aria-label={t('common.training')}
          >
            {t('common.training')}
          </a>
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                changeLanguage('en');
                toggleMenu();
              }}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors rounded-sm ${
                language === 'en' ? 'bg-white text-black' : 'border border-white/20 text-white'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                changeLanguage('th');
                toggleMenu();
              }}
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors rounded-sm ${
                language === 'th' ? 'bg-white text-black' : 'border border-white/20 text-white'
              }`}
            >
              TH
            </button>
          </div>
          <a 
            href="#schedule" 
            onClick={(e) => { handleAnchorClick(e); closeMenu(); }} 
            className="mt-8 w-full bg-white text-black font-bold py-4 text-sm uppercase tracking-widest block hover:bg-gray-100 transition-colors focus:bg-gray-100 focus:outline-none"
            aria-label={t('common.bookSession')}
          >
            {t('common.bookSession')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
