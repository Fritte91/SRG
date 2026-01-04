import { Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { handleAnchorClick } from '../utils/smoothScroll';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top Section: Logo & Nav */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Logo Left */}
          <a href="#hero-section" className="group">
            <div className="flex flex-col items-start">
              <div className="font-heading font-bold text-3xl italic tracking-tighter leading-none text-black">
                STICKY <span className="text-[#ef4444]">RICE</span>
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.3em] leading-none mt-1 text-gray-500">{t('footer.tagline')}</div>
            </div>
          </a>

          {/* Nav Right */}
          <nav className="flex gap-8 md:gap-12 text-xs font-heading font-bold uppercase tracking-widest text-black" role="navigation" aria-label="Footer navigation">
            <a href="#hero-section" onClick={handleAnchorClick} className="hover:text-[#ef4444] transition-colors relative group focus:outline-none focus:text-[#ef4444]">
              {t('common.gym')}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ef4444] transition-all group-hover:w-full group-focus:w-full"></span>
            </a>
            <a href="#visas" onClick={handleAnchorClick} className="hover:text-[#3b82f6] transition-colors relative group focus:outline-none focus:text-[#3b82f6]">
              {t('common.visas')}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3b82f6] transition-all group-hover:w-full group-focus:w-full"></span>
            </a>
            <a href="#schedule" onClick={handleAnchorClick} className="hover:text-[#ef4444] transition-colors relative group focus:outline-none focus:text-[#ef4444]">
              {t('common.fighters')}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ef4444] transition-all group-hover:w-full group-focus:w-full"></span>
            </a>
            <a href="#contact" onClick={handleAnchorClick} className="hover:text-[#3b82f6] transition-colors relative group focus:outline-none focus:text-[#3b82f6]">
              {t('common.contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3b82f6] transition-all group-hover:w-full group-focus:w-full"></span>
            </a>
          </nav>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 mb-8"></div>

        {/* Middle Section: Socials Left, Legal Right */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Social Icons */}
          <div className="flex gap-6 text-gray-600">
            <a href="#" className="hover:text-[#ef4444] transition-colors transform hover:-translate-y-1 duration-300" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors transform hover:-translate-y-1 duration-300" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#ef4444] transition-colors transform hover:-translate-y-1 duration-300" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-[10px] text-gray-500 font-semibold uppercase tracking-wider">
            <a href="#" className="hover:text-black transition-colors">{t('footer.waiver')}</a>
            <a href="#" className="hover:text-black transition-colors">{t('footer.rules')}</a>
            <a href="#" className="hover:text-black transition-colors">{t('footer.policy')}</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-[9px] text-gray-400 uppercase tracking-wider">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
