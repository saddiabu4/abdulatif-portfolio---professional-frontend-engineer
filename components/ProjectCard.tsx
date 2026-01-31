import React from "react"
import { Link } from "react-router-dom"
import { Project } from "../types"

interface ProjectCardProps {
	project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	return (
		<div className='group bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 hover:-translate-y-2'>
			<div className='relative overflow-hidden h-48 sm:h-64'>
				<img
					src={project.image}
					alt={project.title}
					className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
				/>
				<div className='absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity'></div>
			</div>
			<div className='p-6 sm:p-8 space-y-4'>
				<span className='text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]'>
					{project.category}
				</span>
				<h3 className='text-xl sm:text-2xl font-bold text-slate-100'>
					{project.title}
				</h3>
				<p className='text-slate-400 text-sm leading-relaxed line-clamp-2'>
					{project.description}
				</p>
				<div className='flex flex-wrap gap-2 pt-2'>
					{project.techStack.map((tech) => (
						<span
							key={tech}
							className='text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 font-bold border border-slate-700'
						>
							{tech}
						</span>
					))}
				</div>
				<Link
					to={`/projects/${project.id}`}
					className='block w-full py-3 mt-4 text-center bg-slate-800 text-slate-100 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-colors border border-slate-700 hover:border-blue-600'
				>
					Batafsil ko'rish
				</Link>
			</div>
		</div>
	)
}

export default ProjectCard
