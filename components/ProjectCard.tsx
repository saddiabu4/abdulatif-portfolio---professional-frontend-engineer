import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import { Project } from "../types"

interface ProjectCardProps {
	project: Project
	index?: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
	return (
		<motion.div
			className='group bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-800 hover:shadow-2xl hover:shadow-blue-600/10 transition-shadow duration-500'
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{ y: -10 }}
			whileTap={{ scale: 0.98 }}
		>
			<div className='relative overflow-hidden h-48 sm:h-64'>
				<motion.img
					src={project.image}
					alt={project.title}
					className='w-full h-full object-cover'
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.6 }}
				/>
				<motion.div
					className='absolute inset-0 bg-blue-600/20'
					initial={{ opacity: 0 }}
					whileHover={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
				/>
			</div>
			<div className='p-6 sm:p-8 space-y-4'>
				<motion.span
					className='inline-block text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]'
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
				>
					{project.category}
				</motion.span>
				<motion.h3
					className='text-xl sm:text-2xl font-bold text-slate-100'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
				>
					{project.title}
				</motion.h3>
				<motion.p
					className='text-slate-400 text-sm leading-relaxed line-clamp-2'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
				>
					{project.description}
				</motion.p>
				<motion.div
					className='flex flex-wrap gap-2 pt-2'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
				>
					{project.techStack.map((tech, techIndex) => (
						<motion.span
							key={tech}
							className='text-[10px] bg-slate-800 px-3 py-1 rounded-full text-slate-300 font-bold border border-slate-700'
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.05 }}
							whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
						>
							{tech}
						</motion.span>
					))}
				</motion.div>
				<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
					<Link
						to={`/projects/${project.id}`}
						className='block w-full py-3 mt-4 text-center bg-slate-800 text-slate-100 text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 transition-colors border border-slate-700 hover:border-blue-600'
					>
						Batafsil ko'rish
					</Link>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default ProjectCard
