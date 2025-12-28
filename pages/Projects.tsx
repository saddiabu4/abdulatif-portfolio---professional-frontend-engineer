
import React, { useState, useMemo, useCallback } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'UI/UX'>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === filter);
  }, [filter]);

  const handleFilterChange = useCallback((category: typeof filter) => {
    setFilter(category);
  }, []);

  const categories = ['All', 'Web', 'Mobile', 'UI/UX'] as const;

  return (
    <div className="space-y-12 py-8 md:py-12 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight">
          Creative <span className="text-blue-600">Universe</span>
        </h1>
        <p className="text-lg text-slate-500 font-medium">
          Turli texnologiyalar va sohalarni qamrab olgan loyihalar to'plami.
        </p>
      </div>

      {/* Responsive Filter Bar */}
      <div className="flex overflow-x-auto pb-4 sm:pb-0 sm:justify-center gap-3 no-scrollbar -mx-4 px-4 sm:mx-0">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            className={`whitespace-nowrap px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
              filter === cat 
                ? 'bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20' 
                : 'bg-white border-slate-100 text-slate-400 hover:border-blue-200 hover:text-blue-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
