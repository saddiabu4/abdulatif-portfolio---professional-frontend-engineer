
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-20 py-12">
      <section className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 relative">
           <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-blue-600">
             <img src="https://picsum.photos/seed/bio/400/600" className="w-full h-full object-cover mix-blend-overlay" alt="Abdulatif Bio" />
           </div>
        </div>
        <div className="md:w-2/3 space-y-6">
          <h1 className="text-5xl font-black">{t('about.title')} <span className="text-blue-600">Me</span>.</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic">
            "{t('about.bio')}"
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
             <div className="space-y-1">
               <p className="text-blue-600 font-bold text-3xl">5+</p>
               <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t('about.exp_years')}</p>
             </div>
             <div className="space-y-1">
               <p className="text-blue-600 font-bold text-3xl">50+</p>
               <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t('about.projects_done')}</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
