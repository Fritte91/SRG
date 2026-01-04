import { useLanguage } from '../context/LanguageContext';
import { handleAnchorClick } from '../utils/smoothScroll';

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <div className="hidden md:flex text-[10px] uppercase z-50 font-semibold text-gray-500 tracking-[0.2em] bg-[#080808] border-white/5 border-b pt-2.5 pr-8 pb-2.5 pl-8 relative items-center justify-between">
      <button 
        className="flex items-center gap-2 hover:text-white transition-colors group focus:outline-none focus:text-white"
        aria-label={t('topBar.location')}
      >
        <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ef4444] transition-colors">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
        <span>{t('topBar.location')}</span>
      </button>

      <div className="flex items-center gap-8">
        <a 
          href="#visas" 
          onClick={handleAnchorClick}
          className="hover:text-white transition-colors focus:outline-none focus:text-white"
          aria-label={t('common.fighterVisa')}
        >
          {t('common.fighterVisa')}
        </a>
        <a 
          href="#accommodation" 
          onClick={handleAnchorClick}
          className="hover:text-white transition-colors focus:outline-none focus:text-white"
          aria-label={t('common.accommodation')}
        >
          {t('common.accommodation')}
        </a>
      </div>
    </div>
  );
};

export default TopBar;
