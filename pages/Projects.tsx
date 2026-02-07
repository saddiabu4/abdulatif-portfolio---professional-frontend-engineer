import { AnimatePresence, motion } from "framer-motion"
import React, { useCallback, useMemo, useState } from "react"
import { PageTransition } from "../components/animations"
import ProjectCard from "../components/ProjectCard"
import { PROJECTS } from "../constants"

const Projects: React.FC = () => {
	const [filter, setFilter] = useState<"All" | "Web" | "Mobile" | "UI/UX">(
		"All"
	)

	const filteredProjects = useMemo(() => {
		if (filter === "All") return PROJECTS
		return PROJECTS.filter((p) => p.category === filter)
	}, [filter])

	const handleFilterChange = useCallback((category: typeof filter) => {
		setFilter(category)
	}, [])

	const categories = ["All", "Web", "Mobile", "UI/UX"] as const

	return (
		<PageTransition className='space-y-12 py-8 md:py-12'>
			<motion.div
				className='text-center max-w-2xl mx-auto space-y-4'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<motion.h1
					className='text-4xl sm:text-6xl font-black text-slate-100 leading-tight'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Creative{" "}
					<motion.span
						className='text-blue-500'
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
					>
						Universe
					</motion.span>
				</motion.h1>
				<motion.p
					className='text-lg text-slate-400 font-medium'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Turli texnologiyalar va sohalarni qamrab olgan loyihalar to'plami.
				</motion.p>
			</motion.div>

			{/* Responsive Filter Bar */}
			<motion.div
				className='flex overflow-x-auto pb-4 sm:pb-0 sm:justify-center gap-3 no-scrollbar -mx-4 px-4 sm:mx-0'
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
			>
				{categories.map((cat, index) => (
					<motion.button
						key={cat}
						onClick={() => handleFilterChange(cat)}
						className={`whitespace-nowrap px-6 sm:px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
							filter === cat
								? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20"
								: "bg-slate-900 border-slate-800 text-slate-400 hover:border-blue-500 hover:text-blue-400"
						}`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 * index }}
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						{cat}
					</motion.button>
				))}
			</motion.div>

			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8'
				layout
			>
				<AnimatePresence mode='popLayout'>
					{filteredProjects.map((project, index) => (
						<motion.div
							key={project.id}
							layout
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{
								duration: 0.4,
								delay: index * 0.05,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<ProjectCard project={project} index={index} />
						</motion.div>
					))}
				</AnimatePresence>
			</motion.div>
		</PageTransition>
	)
}

export default Projects
