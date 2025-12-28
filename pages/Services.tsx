
import React from 'react';
import { SERVICES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-16 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black">{t('nav.services')}</h1>
        <p className="text-slate-500 max-w-xl mx-auto">Providing high-quality solutions tailored to your business needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map(service => (
          <div key={service.id} className="group glass p-10 rounded-[2.5rem] space-y-6 hover:-translate-y-4 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform shadow-inner">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              {service.description}
            </p>
            <button className="text-blue-600 font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Learn More <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
