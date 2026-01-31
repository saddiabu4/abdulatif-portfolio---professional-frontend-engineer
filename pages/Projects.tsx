import React, { useCallback, useMemo, useState } from "react"
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
		<div className='space-y-12 py-8 md:py-12 animate-fade-in'>
			<div className='text-center max-w-2xl mx-auto space-y-4'>
				<h1 className='text-4xl sm:text-6xl font-black text-slate-100 leading-tight'>
					Creative <span className='text-blue-500'>Universe</span>
				</h1>
				<p className='text-lg text-slate-400 font-medium'>
					Turli texnologiyalar va sohalarni qamrab olgan loyihalar to'plami.
				</p>
			</div>

			{/* Responsive Filter Bar */}
			<div className='flex overflow-x-auto pb-4 sm:pb-0 sm:justify-center gap-3 no-scrollbar -mx-4 px-4 sm:mx-0'>
				{categories.map((cat) => (
					<button
						key={cat}
						onClick={() => handleFilterChange(cat)}
						className={`whitespace-nowrap px-6 sm:px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border-2 ${
							filter === cat
								? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/20"
								: "bg-slate-900 border-slate-800 text-slate-400 hover:border-blue-500 hover:text-blue-400"
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8'>
				{filteredProjects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	)
}

export default Projects
