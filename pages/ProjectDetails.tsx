import { motion } from "framer-motion"
import React from "react"
import { Link, useParams } from "react-router-dom"
import { PageTransition } from "../components/animations"
import { PROJECTS } from "../constants"

const ProjectDetails: React.FC = () => {
	const { id } = useParams()
	const project = PROJECTS.find((p) => p.id === id)

	if (!project)
		return (
			<motion.div
				className='text-center py-24 space-y-6'
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h1
					className='text-4xl font-black text-slate-100'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Project Not Found
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					whileHover={{ scale: 1.05 }}
				>
					<Link
						to='/projects'
						className='text-blue-500 font-bold hover:underline'
					>
						Back to Projects
					</Link>
				</motion.div>
			</motion.div>
		)

	return (
		<PageTransition className='max-w-6xl mx-auto space-y-12 py-12 px-4'>
			<div className='flex flex-col lg:flex-row gap-12 items-start lg:items-center'>
				<motion.div
					className='lg:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800'
					initial={{ opacity: 0, x: -50, rotateY: -10 }}
					animate={{ opacity: 1, x: 0, rotateY: 0 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{ scale: 1.02 }}
				>
					<motion.img
						src={project.image}
						alt={project.title}
						className='w-full h-auto object-cover'
						initial={{ scale: 1.1 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.8 }}
						whileHover={{ scale: 1.05 }}
					/>
				</motion.div>
				<motion.div
					className='lg:w-1/2 space-y-8'
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
				>
					<div>
						<motion.span
							className='inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-blue-500/30'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.3, type: "spring" }}
							whileHover={{ scale: 1.05 }}
						>
							{project.category}
						</motion.span>
						<motion.h1
							className='text-4xl sm:text-5xl lg:text-6xl font-black mt-4 text-slate-100 tracking-tighter'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
						>
							{project.title}
						</motion.h1>
					</div>
					<motion.p
						className='text-base sm:text-lg text-slate-400 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					>
						{project.longDescription || project.description}
					</motion.p>
					<motion.div
						className='flex flex-wrap gap-3'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						{project.techStack.map((tech, index) => (
							<motion.span
								key={tech}
								className='px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs font-bold text-slate-300'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.6 + index * 0.05 }}
								whileHover={{
									scale: 1.1,
									backgroundColor: "#3b82f6",
									color: "#ffffff",
								}}
							>
								{tech}
							</motion.span>
						))}
					</motion.div>
					<motion.div
						className='flex flex-col sm:flex-row gap-4 pt-6'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
					>
						<motion.a
							href={project.liveUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all text-center'
							whileHover={{ scale: 1.05, y: -3 }}
							whileTap={{ scale: 0.95 }}
						>
							Live Demo
						</motion.a>
						<motion.a
							href={project.githubUrl}
							target='_blank'
							rel='noopener noreferrer'
							className='px-8 sm:px-10 py-4 sm:py-5 border-2 border-slate-700 text-slate-100 rounded-2xl font-bold hover:bg-slate-900 hover:border-blue-500 transition-all text-center'
							whileHover={{ scale: 1.05, y: -3 }}
							whileTap={{ scale: 0.95 }}
						>
							Source Code
						</motion.a>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className='border-t border-slate-800 pt-12'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				<motion.div whileHover={{ x: -5 }}>
					<Link
						to='/projects'
						className='text-slate-500 hover:text-blue-500 font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-colors'
					>
						← Back to all projects
					</Link>
				</motion.div>
			</motion.div>
		</PageTransition>
	)
}

export default ProjectDetails
