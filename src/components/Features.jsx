import { Crown, Sword, Zap, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInitScrollReveal } from '../hooks/useScrollReveal';
import { handleAnchorClick } from '../utils/smoothScroll';

const Features = () => {
  const { t } = useLanguage();

  useInitScrollReveal({ threshold: 0.1 });

  return (
    <section className="bg-[#050505] py-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="font-heading text-4xl font-semibold uppercase text-white tracking-tight">
            {t('features.title')} <span className="text-[#ef4444]">{t('features.titleHighlight')}</span> <span className="text-white">{t('features.titleEnd')}</span>
          </h2>
        </div>
       
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group p-8 border border-white/5 hover:border-[#ef4444]/40 bg-[#080808] transition-all duration-500 reveal-on-scroll hover:bg-[#0a0a0a]">
            <div className="mb-6 text-[#ef4444] group-hover:scale-110 transition-transform duration-300 bg-[#ef4444]/10 w-16 h-16 flex items-center justify-center rounded-full border border-[#ef4444]/20">
              <Crown className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-medium uppercase text-white mb-3 tracking-wide group-hover:text-[#ef4444] transition-colors">{t('features.eliteTrainers.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {t('features.eliteTrainers.description')}
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group p-8 border border-white/5 hover:border-[#3b82f6]/40 bg-[#080808] transition-all duration-500 reveal-on-scroll delay-100 hover:bg-[#0a0a0a]">
            <div className="mb-6 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300 bg-[#3b82f6]/10 w-16 h-16 flex items-center justify-center rounded-full border border-[#3b82f6]/20">
              <Sword className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-medium uppercase text-white mb-3 tracking-wide group-hover:text-[#3b82f6] transition-colors">{t('features.realTechnique.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {t('features.realTechnique.description')}
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group p-8 border border-white/5 hover:border-white/40 bg-[#080808] transition-all duration-500 reveal-on-scroll delay-200 hover:bg-[#0a0a0a]">
            <div className="mb-6 text-white group-hover:scale-110 transition-transform duration-300 bg-white/5 w-16 h-16 flex items-center justify-center rounded-full border border-white/10">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-medium uppercase text-white mb-3 tracking-wide group-hover:text-white transition-colors">{t('features.premiumFacility.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              {t('features.premiumFacility.description')}
            </p>
          </div>
        </div>

        {/* New Content Block: Fight Camp */}
        <div className="mt-12 border border-white/5 bg-gradient-to-r from-[#0a0a0a] to-[#0f0f0f] p-8 md:p-12 reveal-on-scroll relative overflow-hidden rounded-sm">
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#ef4444] to-transparent opacity-50"></div>
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent opacity-50"></div>
          
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="font-heading text-3xl font-semibold uppercase text-white mb-3 tracking-tight">
                {t('features.fighterVisaLiving.title')} <span className="text-[#3b82f6]">{t('features.fighterVisaLiving.titleHighlight')}</span>
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                {t('features.fighterVisaLiving.description')}
              </p>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="bg-black/40 hover:bg-black/60 transition-colors p-4 border border-white/10 rounded-sm flex-1 text-center group cursor-default">
                  <span className="block text-3xl font-bold text-[#ef4444] font-heading group-hover:scale-110 transition-transform">6</span>
                  <span className="text-[9px] uppercase text-gray-400 tracking-wider">{t('features.fighterVisaLiving.monthVisa')}</span>
                </div>
                <div className="bg-black/40 hover:bg-black/60 transition-colors p-4 border border-white/10 rounded-sm flex-1 text-center group cursor-default">
                  <span className="block text-3xl font-bold text-[#3b82f6] font-heading group-hover:scale-110 transition-transform">12</span>
                  <span className="text-[9px] uppercase text-gray-400 tracking-wider">{t('features.fighterVisaLiving.monthVisa')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ADDED BUTTON */}
        <div className="text-center mt-12 reveal-on-scroll">
          <a 
            href="#schedule" 
            onClick={handleAnchorClick}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] focus:outline-none focus:text-white focus:ring-2 focus:ring-white/20 rounded-sm px-2 py-1"
            aria-label={t('features.viewSchedule')}
          >
            {t('features.viewSchedule')}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
