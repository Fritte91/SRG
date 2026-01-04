import { useLanguage } from '../context/LanguageContext';

const Affiliations = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h5 className="font-heading text-xl font-bold uppercase tracking-wider text-gray-400 mb-16">{t('affiliations.title')}</h5>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-300 text-black grayscale hover:grayscale-0">
          {/* ONE Championship Placeholder */}
          <div className="font-heading font-black text-3xl italic tracking-tighter">ONE</div>
          
          {/* WBC Muay Thai */}
          <div className="flex flex-col items-center">
            <span className="font-heading font-bold text-2xl text-green-700">WBC</span>
            <span className="text-[8px] font-bold tracking-widest">MUAY THAI</span>
          </div>

          {/* Lumpinee */}
          <div className="font-heading font-bold text-xl tracking-widest text-[#ef4444]">LUMPINEE</div>

          {/* Rajadamnern */}
          <div className="font-heading font-bold text-xl tracking-widest text-[#3b82f6]">RAJADAMNERN</div>
        </div>
      </div>
    </section>
  );
};

export default Affiliations;
