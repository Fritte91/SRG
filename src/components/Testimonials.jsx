import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useInitScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: "Mike T.",
    location: "From USA",
    quote: "I came to Bangkok for 2 weeks and stayed for 6 months. The Kru are incredible—they fixed my kick technique in the first session. Best gym in Thailand.",
    image: "https://images.unsplash.com/photo-1591117207239-78898dd1e3d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Sarah Jenkins",
    location: "From UK",
    quote: "The facilities are clean, the vibe is friendly, but the training is serious business. I lost 5kg in my first month of fighter camp.",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    name: "Takeshi K.",
    location: "From Japan",
    quote: "Authentic Muay Thai. Technical sparring is controlled and respectful. Highly recommend for anyone wanting to learn the real art.",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateTestimonial = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial(newIndex);
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(newIndex);
  };

  // Use scroll reveal hook instead of manual IntersectionObserver
  useInitScrollReveal({ threshold: 0.1 });

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white text-black relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center reveal-on-scroll">
          {/* Dynamic Image */}
          <div className="relative p-3 border border-gray-200 bg-white shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            {/* Tape Effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ef4444]/90 -rotate-2 z-20 shadow-sm opacity-90 flex items-center justify-center">
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">Sticky Rice</span>
            </div>
            
            <img
              src={current.image}
              className={`w-full h-96 object-cover filter contrast-125 transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}
              alt="Member"
            />
            
            <div className="absolute -bottom-5 left-8 bg-black text-white px-6 py-2 shadow-xl border-l-4 border-[#3b82f6]">
              <span className="font-heading font-semibold text-lg uppercase tracking-widest whitespace-nowrap">{current.name}</span>
            </div>
          </div>

          {/* Dynamic Content */}
          <div>
            <h3 className="font-heading text-4xl font-semibold uppercase mb-2">
              {t('testimonials.title')} <span className="text-[#ef4444]">{t('testimonials.titleHighlight')}</span>
            </h3>
            <h4 className="font-heading text-xl font-medium uppercase text-gray-500 mb-8 tracking-wide">{t('testimonials.subtitle')}</h4>
            
            <div className="min-h-[200px]">
              {/* Rating */}
              <div className="flex text-[#ef4444] gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              
              <p className={`text-gray-800 text-lg md:text-xl font-normal leading-relaxed mb-6 font-heading transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                "{current.quote}"
              </p>
              
              <div className={`mb-8 pl-4 border-l-2 border-black transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <div className="font-bold text-sm uppercase tracking-wide">{current.name}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{current.location}</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-8 border-t border-gray-100 pt-8">
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 border border-gray-200 rounded-sm flex items-center justify-center hover:bg-[#ef4444] hover:text-white hover:border-[#ef4444] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 border border-gray-900 rounded-sm flex items-center justify-center bg-gray-900 text-white hover:bg-[#3b82f6] hover:border-[#3b82f6] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <a href="#" className="text-[#ef4444] font-bold uppercase tracking-[0.1em] text-[10px] hover:text-[#3b82f6] transition-colors flex items-center gap-1">
                {t('testimonials.readAllReviews')}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
