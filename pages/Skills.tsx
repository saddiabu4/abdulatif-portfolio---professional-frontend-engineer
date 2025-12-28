
import React from 'react';
import { SKILLS } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto py-12 space-y-20 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-black text-slate-900">{t('skills.title')}</h1>
        <p className="text-slate-500 max-w-xl mx-auto font-medium">{t('skills.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {['Frontend', 'Tools', 'Design'].map(cat => (
          <div key={cat} className="space-y-8 bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h2 className="text-xl font-black flex items-center gap-3 text-slate-900">
              <span className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm">#</span>
              {cat}
            </h2>
            <div className="space-y-10">
              {SKILLS.filter(s => s.category === cat).map(skill => (
                <div key={skill.name} className="space-y-3 group">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-slate-700 flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-xs font-black text-blue-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
