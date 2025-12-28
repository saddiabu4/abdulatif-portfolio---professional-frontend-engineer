
import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { projects, deleteProject, addProject } = useProjects();
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState({ title: '', tech: '' });

  if (!isAuthenticated) return <Navigate to="/login" />;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      id: Date.now().toString(),
      title: newProject.title,
      techStack: [newProject.tech],
      category: 'Web',
      description: 'Loyiha Dashboard orqali qo\'shildi.',
      image: 'https://picsum.photos/seed/new/800/500',
      liveUrl: '#',
      githubUrl: '#'
    });
    setNewProject({ title: '', tech: '' });
    setShowAddModal(false);
  };

  return (
    <div className="space-y-8 md:space-y-12 animate-fade-in pb-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-slate-200 pb-8 md:pb-12">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 font-medium mt-2">Boshqaruv markaziga xush kelibsiz.</p>
        </div>
        <div className="flex flex-wrap gap-4 w-full lg:w-auto">
           <button 
             onClick={() => setShowAddModal(true)} 
             className="flex-grow lg:flex-none px-8 py-4 bg-blue-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
           >
             + Yangi loyiha
           </button>
           <button onClick={logout} className="flex-grow lg:flex-none px-8 py-4 bg-white border border-red-100 text-red-500 rounded-2xl text-sm font-bold hover:bg-red-50 transition-all active:scale-95">Chiqish</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          { label: 'Loyihalar', value: projects.length, color: 'bg-blue-600' },
          { label: 'Tashriflar', value: '1,420', color: 'bg-emerald-500' },
          { label: 'Xabarlar', value: '8', color: 'bg-amber-500' }
        ].map(stat => (
          <div key={stat.label} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:shadow-md transition-all">
            <div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-4xl font-black text-slate-900 mt-2">{stat.value}</p>
            </div>
            <div className={`w-12 h-1.5 rounded-full ${stat.color} transition-all group-hover:w-16`}></div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-slate-50/50">
              <tr>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-100">Loyiha Nomi</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-100">Texnologiyalar</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-slate-400 tracking-widest border-b border-slate-100">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {projects.map(p => (
                <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 overflow-hidden">
                        <img src={p.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <span className="font-bold text-slate-800">{p.title}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                     <div className="flex flex-wrap gap-2">
                       {p.techStack.slice(0, 3).map(t => (
                         <span key={t} className="px-3 py-1 bg-white border border-slate-100 text-blue-600 text-[9px] rounded-lg font-black uppercase shadow-sm tracking-tighter">{t}</span>
                       ))}
                     </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-4">
                      <button className="text-blue-600 hover:text-blue-800 text-xs font-black uppercase tracking-widest transition-colors">Edit</button>
                      <button 
                        onClick={() => deleteProject(p.id)} 
                        className="text-red-400 hover:text-red-600 text-xs font-black uppercase tracking-widest transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4">
           <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] w-full max-w-md shadow-3xl animate-fade-in border border-slate-50">
             <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-slate-900">Yangi loyiha</h2>
                <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-900 text-2xl">✕</button>
             </div>
             <form onSubmit={handleAdd} className="space-y-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Loyiha Nomi</label>
                 <input 
                   required
                   value={newProject.title}
                   onChange={e => setNewProject(p => ({ ...p, title: e.target.value }))}
                   placeholder="Masalan: Portfolio Pro"
                   className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Asosiy Texnologiya</label>
                 <input 
                   required
                   value={newProject.tech}
                   onChange={e => setNewProject(p => ({ ...p, tech: e.target.value }))}
                   placeholder="Masalan: React.js"
                   className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-4 ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300"
                 />
               </div>
               <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button type="submit" className="flex-grow py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">Loyiha Qo'shish</button>
                  <button onClick={() => setShowAddModal(false)} type="button" className="flex-grow py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all active:scale-95">Bekor qilish</button>
               </div>
             </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
