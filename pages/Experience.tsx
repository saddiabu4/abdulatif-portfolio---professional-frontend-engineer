
import React from 'react';
import { EXPERIENCES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto py-12 space-y-12 lg:space-y-20 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900">{t('nav.experience')}</h1>
        <div className="w-20 h-2 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative pl-8 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Timeline dot */}
            <div className="absolute left-[-29px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-blue-600 ring-8 ring-white shadow-lg z-10"></div>
            
            <div className="hidden md:block w-1/2"></div>
            
            <div className="w-full md:w-1/2 md:px-12">
              <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-50 group hover:-translate-y-2 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <span className="px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">{exp.role}</h3>
                <p className="text-blue-600 font-bold mb-4">{exp.company}</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
