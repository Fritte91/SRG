import { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInitScrollReveal } from '../hooks/useScrollReveal';
import { handleAnchorClick } from '../utils/smoothScroll';

const Hero = () => {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useInitScrollReveal();

  // Video error handling
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleError = () => {
      setVideoError(true);
      console.warn('Video failed to load, using fallback');
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoadedData);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <section className="min-h-[700px] flex overflow-hidden bg-black h-[95vh] relative items-center justify-center border-b border-white/5" id="hero-section">
      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Muay Thai Video Loop */}
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className={`absolute w-[300%] h-[300%] lg:w-[150%] lg:h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover opacity-50 grayscale scale-105 transition-opacity duration-1000 ${
                videoLoaded ? 'opacity-50' : 'opacity-0'
              }`}
              aria-label="Muay Thai training background video"
            >
              <source src="https://videos.pexels.com/video-files/3044545/3044545-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Fallback gradient background if video fails
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#050505] to-[#00001a]"></div>
          )}
        </div>
        {/* Gradient Overlay (Red/Blue tint) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-[#050505] z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 opacity-80"></div>
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto flex flex-col items-center pointer-events-none mt-10">
        {/* Label */}
        <div className="mb-6 reveal-on-scroll is-visible flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-[#ef4444] animate-pulse"></div>
          <span className="text-white text-[10px] font-bold uppercase tracking-[0.25em]">{t('hero.label')}</span>
          <div className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] animate-pulse delay-75"></div>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-semibold text-white leading-[0.85] uppercase tracking-tighter mb-8 reveal-on-scroll is-visible drop-shadow-2xl mix-blend-screen">
          {t('hero.title')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-white to-[#3b82f6]">{t('hero.titleHighlight')}</span>
        </h1>

        {/* Subhead */}
        <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed mb-10 max-w-xl reveal-on-scroll delay-100 is-visible mx-auto tracking-wide">
          {t('hero.subtitle')} <span className="text-white font-medium">{t('hero.subtitleHighlight')}</span>. {t('hero.subtitleEnd')}
        </p>

        {/* Search / Action Block */}
        <div className="reveal-on-scroll delay-200 is-visible w-full max-w-sm pointer-events-auto mr-auto ml-auto flex flex-col gap-6">
          <a 
            href="#schedule" 
            onClick={handleAnchorClick}
            className="group relative flex items-center justify-center bg-white hover:bg-gray-100 transition-all text-black w-full h-14 rounded-sm px-6 shadow-[0_0_40px_rgba(255,255,255,0.1)] overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={t('hero.cta')}
          >
            <span className="relative z-10 text-xs font-bold uppercase tracking-[0.2em] font-heading group-hover:tracking-[0.3em] transition-all">{t('hero.cta')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <div className="flex items-center justify-center gap-6 text-[9px] uppercase font-bold tracking-[0.15em] text-gray-500">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <div className="w-1 h-1 rounded-full bg-[#ef4444]"></div> {t('hero.groupClass')}
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <div className="w-1 h-1 rounded-full bg-[#3b82f6]"></div> {t('hero.privateClass')}
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <div className="w-1 h-1 rounded-full bg-white"></div> {t('hero.visa')}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#schedule" 
        onClick={handleAnchorClick}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 text-white/30 hover:text-white/60 transition-colors focus:outline-none focus:text-white/60"
        aria-label="Scroll to content"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
