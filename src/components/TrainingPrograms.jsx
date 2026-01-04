import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useInitScrollReveal } from '../hooks/useScrollReveal';
import { handleAnchorClick } from '../utils/smoothScroll';

const TrainingPrograms = () => {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState(new Set());

  useInitScrollReveal({ threshold: 0.1 });

  const handleImageLoad = (imageUrl) => {
    setLoadedImages((prev) => new Set([...prev, imageUrl]));
  };

  return (
    <section className="relative z-20 -mt-16 pb-20 px-4 md:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {/* Info Card */}
          <div className="group relative h-[480px] bg-[#0a0a0a] border border-white/10 p-8 md:p-10 flex flex-col justify-between reveal-on-scroll mobile-scale-in overflow-hidden transition-all hover:border-white/20">
            {/* Background Flag Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 via-transparent to-[#7f1d1d]/20 opacity-30"></div>
            
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#ef4444] rounded-full"></span>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">{t('trainingPrograms.philosophy.label')}</span>
              </div>
              
              <h3 className="font-heading text-3xl md:text-4xl font-semibold uppercase text-white mb-4 leading-[0.9] tracking-tight">
                {t('trainingPrograms.philosophy.title')} <br />
                <span className="text-[#ef4444]">{t('trainingPrograms.philosophy.titleHighlight')}</span> <br />
                {t('trainingPrograms.philosophy.titleEnd')}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed font-light mt-6">
                {t('trainingPrograms.philosophy.description')}
              </p>
            </div>
            
            <div className="relative z-10 border-t border-white/10 pt-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
                  <span className="text-[#ef4444]">•</span> {t('trainingPrograms.philosophy.championTrainers')}
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
                  <span className="text-[#3b82f6]">•</span> {t('trainingPrograms.philosophy.technicalSparring')}
                </li>
                <li className="flex items-center gap-3 text-xs md:text-sm text-gray-300 font-medium">
                  <span className="text-white">•</span> {t('trainingPrograms.philosophy.sakYantCulture')}
                </li>
              </ul>
            </div>
          </div>

          {/* Card 1 (Muay Thai) */}
          <a 
            href="#schedule" 
            onClick={handleAnchorClick}
            className="group relative h-[480px] overflow-hidden bg-[#111] border border-white/5 reveal-on-scroll mobile-scale-in delay-100 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ef4444] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            aria-label={`${t('trainingPrograms.muayThai.title')} - ${t('common.viewClass')}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              className={`w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 ${
                loadedImages.has('muaythai') ? 'opacity-60' : 'image-placeholder'
              }`} 
              alt={t('trainingPrograms.muayThai.title')}
              loading="lazy"
              onLoad={() => handleImageLoad('muaythai')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-heading text-3xl font-semibold uppercase text-white mb-1 italic">{t('trainingPrograms.muayThai.title')}</h3>
              <p className="text-gray-400 text-xs font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{t('trainingPrograms.muayThai.description')}</p>
              <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                <span>{t('common.viewClass')}</span>
                <div className="h-[1px] w-8 bg-[#ef4444] group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </a>
          
          {/* Card 2 (Sparring) */}
          <a 
            href="#schedule" 
            onClick={handleAnchorClick}
            className="group relative h-[480px] overflow-hidden bg-[#111] border border-white/5 reveal-on-scroll mobile-scale-in delay-200 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            aria-label={`${t('trainingPrograms.clinchSpar.title')} - ${t('common.viewClass')}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              className={`w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 ${
                loadedImages.has('sparring') ? 'opacity-60' : 'image-placeholder'
              }`} 
              alt={t('trainingPrograms.clinchSpar.title')}
              loading="lazy"
              onLoad={() => handleImageLoad('sparring')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-heading text-3xl font-semibold uppercase text-white mb-1 italic">{t('trainingPrograms.clinchSpar.title')}</h3>
              <p className="text-gray-400 text-xs font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{t('trainingPrograms.clinchSpar.description')}</p>
              <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                <span>{t('common.viewClass')}</span>
                <div className="h-[1px] w-8 bg-[#3b82f6] group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </a>
          
          {/* Card 3 (Conditioning) */}
          <a 
            href="#schedule" 
            onClick={handleAnchorClick}
            className="group relative h-[480px] overflow-hidden bg-[#111] border border-white/5 reveal-on-scroll mobile-scale-in delay-300 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            aria-label={`${t('trainingPrograms.conditioning.title')} - ${t('common.viewClass')}`}
          >
            <img 
              src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              className={`w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 ${
                loadedImages.has('conditioning') ? 'opacity-60' : 'image-placeholder'
              }`} 
              alt={t('trainingPrograms.conditioning.title')}
              loading="lazy"
              onLoad={() => handleImageLoad('conditioning')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-heading text-3xl font-semibold uppercase text-white mb-1 italic">{t('trainingPrograms.conditioning.title')}</h3>
              <p className="text-gray-400 text-xs font-light mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{t('trainingPrograms.conditioning.description')}</p>
              <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                <span>{t('common.viewClass')}</span>
                <div className="h-[1px] w-8 bg-white group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
