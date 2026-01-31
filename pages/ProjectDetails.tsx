import React from "react"
import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../constants"

const ProjectDetails: React.FC = () => {
	const { id } = useParams()
	const project = PROJECTS.find((p) => p.id === id)

	if (!project)
		return (
			<div className='text-center py-24 space-y-6'>
				<h1 className='text-4xl font-black text-slate-100'>
					Project Not Found
				</h1>
				<Link
					to='/projects'
					className='text-blue-500 font-bold hover:underline'
				>
					Back to Projects
				</Link>
			</div>
		)

	return (
		<div className='max-w-6xl mx-auto space-y-12 py-12 animate-fade-in px-4'>
			<div className='flex flex-col lg:flex-row gap-12 items-start lg:items-center'>
				<div className='lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800'>
					<img
						src={project.image}
						alt={project.title}
						className='w-full h-auto object-cover'
					/>
				</div>
				<div className='lg:w-1/2 space-y-8'>
					<div>
						<span className='px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/30'>
							{project.category}
						</span>
						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-black mt-4 text-slate-100 tracking-tighter'>
							{project.title}
						</h1>
					</div>
					<p className='text-base sm:text-lg text-slate-400 leading-relaxed'>
						{project.longDescription || project.description}
					</p>
					<div className='flex flex-wrap gap-3'>
						{project.techStack.map((tech) => (
							<span
								key={tech}
								className='px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-300'
							>
								{tech}
							</span>
						))}
					</div>
					<div className='flex flex-col sm:flex-row gap-4 pt-6'>
						<a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95 text-center'
						>
							Live Demo
						</a>
						<a
							href={project.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='px-8 sm:px-10 py-4 sm:py-5 border-2 border-slate-700 text-slate-100 rounded-2xl font-bold hover:bg-slate-900 hover:border-blue-500 transition-all active:scale-95 text-center'
						>
							Source Code
						</a>
					</div>
				</div>
			</div>

			<div className='border-t border-slate-800 pt-12'>
				<Link
					to='/projects'
					className='text-slate-500 hover:text-blue-500 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-colors'
				>
					← Back to all projects
				</Link>
			</div>
		</div>
	)
}

export default ProjectDetails
