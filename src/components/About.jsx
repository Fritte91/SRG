import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInitScrollReveal } from '../hooks/useScrollReveal';
import { handleAnchorClick } from '../utils/smoothScroll';

const About = () => {
  const { t } = useLanguage();

  useInitScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Decorative Background Text */}
      <div className="absolute -top-20 right-0 text-[200px] font-heading font-semibold text-white/5 whitespace-nowrap select-none pointer-events-none tracking-tighter opacity-10">
        STICKY RICE
      </div>

      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Content */}
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#ef4444]"></div>
              <span className="text-[#ef4444] text-xs font-bold uppercase tracking-[0.3em]">{t('about.label')}</span>
            </div>
            
            <h2 className="font-heading text-5xl lg:text-7xl font-semibold uppercase text-white leading-[0.9] mb-8 tracking-tight">
              {t('about.title')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-white to-[#3b82f6]">{t('about.titleHighlight')}</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light pl-6 border-l border-[#3b82f6]">
              {t('about.description')} <strong className="text-white font-medium">{t('about.descriptionHighlight')}</strong>{t('about.descriptionEnd')}
            </p>

            {/* ADDED CONTENT BLOCK */}
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-heading text-xl font-medium uppercase tracking-tight mb-4">
                  {t('about.trainingFocus.title')} <span className="text-[#ef4444]">{t('about.trainingFocus.titleHighlight')}</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-light group hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#ef4444] rounded-full"></div>
                    {t('about.trainingFocus.dailyPadWork')}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-light group hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full"></div>
                    {t('about.trainingFocus.clinchSparring')}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-400 font-light group hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    {t('about.trainingFocus.strengthConditioning')}
                  </li>
                </ul>
              </div>
              <div>
                 <h3 className="text-white font-heading text-xl font-medium uppercase tracking-tight mb-4">
                    {t('about.gymStats.title')} <span className="text-[#3b82f6]">{t('about.gymStats.titleHighlight')}</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 text-center border border-white/5">
                    <div className="text-[#ef4444] font-heading text-2xl font-bold">2</div>
                    <div className="text-[9px] uppercase tracking-widest text-gray-500">{t('about.gymStats.fullRings')}</div>
                  </div>
                  <div className="bg-white/5 p-3 text-center border border-white/5">
                    <div className="text-[#3b82f6] font-heading text-2xl font-bold">20+</div>
                    <div className="text-[9px] uppercase tracking-widest text-gray-500">{t('about.gymStats.heavyBags')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ADDED BUTTON */}
            <a 
              href="#schedule" 
              onClick={handleAnchorClick}
              className="group bg-white text-black font-semibold uppercase tracking-[0.2em] py-4 px-10 text-xs transition-all rounded-sm inline-flex items-center gap-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050505]"
              aria-label={t('about.cta')}
            >
              {t('about.cta')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>

          {/* Image Composition */}
          <div className="relative reveal-on-scroll mobile-scale-in delay-200">
            {/* Red/Blue Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-[#ef4444] to-[#3b82f6] blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 p-2 bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-sm">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Pad Work" className="w-full h-auto grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 relative z-10 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
