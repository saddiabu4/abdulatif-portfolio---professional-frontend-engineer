import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { Navigate } from "react-router-dom"
import { PageTransition } from "../components/animations"
import { useAuth } from "../context/AuthContext"
import { useProjects } from "../hooks/useProjects"

const Dashboard: React.FC = () => {
	const { isAuthenticated, logout } = useAuth()
	const { projects, deleteProject, addProject } = useProjects()
	const [showAddModal, setShowAddModal] = useState(false)
	const [newProject, setNewProject] = useState({ title: "", tech: "" })

	if (!isAuthenticated) return <Navigate to='/login' />

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault()
		addProject({
			id: Date.now().toString(),
			title: newProject.title,
			techStack: [newProject.tech],
			category: "Web",
			description: "Loyiha Dashboard orqali qo'shildi.",
			image: "https://picsum.photos/seed/new/800/500",
			liveUrl: "#",
			githubUrl: "#",
		})
		setNewProject({ title: "", tech: "" })
		setShowAddModal(false)
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.2 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
		},
	}

	return (
		<PageTransition className='space-y-8 md:space-y-12 pb-12'>
			<motion.div
				className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-slate-800 pb-8 md:pb-12'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<div>
					<motion.h1
						className='text-3xl md:text-5xl font-black text-slate-100 tracking-tight'
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1 }}
					>
						Dashboard
					</motion.h1>
					<motion.p
						className='text-slate-400 font-medium mt-2'
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
					>
						Boshqaruv markaziga xush kelibsiz.
					</motion.p>
				</div>
				<motion.div
					className='flex flex-wrap gap-4 w-full lg:w-auto'
					initial={{ opacity: 0, x: 30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3 }}
				>
					<motion.button
						onClick={() => setShowAddModal(true)}
						className='flex-grow lg:flex-none px-8 py-4 bg-blue-600 text-white rounded-2xl text-sm font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-500 transition-all'
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						+ Yangi loyiha
					</motion.button>
					<motion.button
						onClick={logout}
						className='flex-grow lg:flex-none px-8 py-4 bg-slate-900 border border-red-500/30 text-red-400 rounded-2xl text-sm font-bold hover:bg-red-500/10 transition-all'
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						Chiqish
					</motion.button>
				</motion.div>
			</motion.div>

			<motion.div
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'
				variants={containerVariants}
				initial='hidden'
				animate='visible'
			>
				{[
					{ label: "Loyihalar", value: projects.length, color: "bg-blue-600" },
					{ label: "Tashriflar", value: "1,420", color: "bg-emerald-500" },
					{ label: "Xabarlar", value: "8", color: "bg-amber-500" },
				].map((stat, index) => (
					<motion.div
						key={stat.label}
						className='bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm flex items-center justify-between group'
						variants={itemVariants}
						whileHover={{
							y: -5,
							boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.1)",
							borderColor: "rgba(59, 130, 246, 0.2)",
						}}
					>
						<div>
							<p className='text-xs font-black text-slate-500 uppercase tracking-widest'>
								{stat.label}
							</p>
							<motion.p
								className='text-4xl font-black text-slate-100 mt-2'
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
							>
								{stat.value}
							</motion.p>
						</div>
						<motion.div
							className={`w-12 h-1.5 rounded-full ${stat.color}`}
							initial={{ width: 0 }}
							animate={{ width: 48 }}
							transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
							whileHover={{ width: 64 }}
						/>
					</motion.div>
				))}
			</motion.div>

			<motion.div
				className='bg-slate-900 rounded-[2rem] border border-slate-800 shadow-sm overflow-hidden'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.6 }}
			>
				<div className='overflow-x-auto'>
					<table className='w-full min-w-[600px] text-left'>
						<thead className='bg-slate-800/50'>
							<tr>
								<th className='px-8 py-5 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b border-slate-800'>
									Loyiha Nomi
								</th>
								<th className='px-8 py-5 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b border-slate-800'>
									Texnologiyalar
								</th>
								<th className='px-8 py-5 text-[10px] font-black uppercase text-slate-500 tracking-widest border-b border-slate-800'>
									Amallar
								</th>
							</tr>
						</thead>
						<tbody className='divide-y divide-slate-800'>
							<AnimatePresence>
								{projects.map((p, index) => (
									<motion.tr
										key={p.id}
										className='hover:bg-slate-800/50 transition-colors'
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 20, height: 0 }}
										transition={{ delay: index * 0.05 }}
										layout
									>
										<td className='px-8 py-6'>
											<div className='flex items-center gap-4'>
												<motion.div
													className='w-10 h-10 rounded-lg bg-slate-800 overflow-hidden border border-slate-700'
													whileHover={{ scale: 1.1 }}
												>
													<img
														src={p.image}
														className='w-full h-full object-cover'
														alt=''
													/>
												</motion.div>
												<span className='font-bold text-slate-100'>
													{p.title}
												</span>
											</div>
										</td>
										<td className='px-8 py-6'>
											<div className='flex flex-wrap gap-2'>
												{p.techStack.slice(0, 3).map((t) => (
													<motion.span
														key={t}
														className='px-3 py-1 bg-slate-800 border border-slate-700 text-blue-400 text-[9px] rounded-lg font-black uppercase shadow-sm tracking-tighter'
														whileHover={{
															scale: 1.1,
															backgroundColor: "#3b82f6",
															color: "#fff",
														}}
													>
														{t}
													</motion.span>
												))}
											</div>
										</td>
										<td className='px-8 py-6'>
											<div className='flex gap-4'>
												<motion.button
													className='text-blue-500 hover:text-blue-400 text-xs font-black uppercase tracking-widest transition-colors'
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
												>
													Edit
												</motion.button>
												<motion.button
													onClick={() => deleteProject(p.id)}
													className='text-red-400 hover:text-red-300 text-xs font-black uppercase tracking-widest transition-colors'
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
												>
													Delete
												</motion.button>
											</div>
										</td>
									</motion.tr>
								))}
							</AnimatePresence>
						</tbody>
					</table>
				</div>
			</motion.div>

			<AnimatePresence>
				{showAddModal && (
					<motion.div
						className='fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className='bg-slate-900 p-6 sm:p-10 rounded-[2.5rem] w-full max-w-md shadow-3xl border border-slate-800'
							initial={{ opacity: 0, scale: 0.9, y: 50 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 50 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
						>
							<div className='flex justify-between items-center mb-8'>
								<motion.h2
									className='text-2xl sm:text-3xl font-black text-slate-100'
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.1 }}
								>
									Yangi loyiha
								</motion.h2>
								<motion.button
									onClick={() => setShowAddModal(false)}
									className='text-slate-500 hover:text-slate-100 text-2xl'
									whileHover={{ scale: 1.2, rotate: 90 }}
									whileTap={{ scale: 0.9 }}
								>
									✕
								</motion.button>
							</div>
							<form onSubmit={handleAdd} className='space-y-6'>
								<motion.div
									className='space-y-2'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									<label className='text-[10px] font-black uppercase text-slate-500 tracking-widest'>
										Loyiha Nomi
									</label>
									<motion.input
										required
										value={newProject.title}
										onChange={(e) =>
											setNewProject((p) => ({ ...p, title: e.target.value }))
										}
										placeholder='Masalan: Portfolio Pro'
										className='w-full px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-100 focus:ring-4 ring-blue-600/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600'
										whileFocus={{ scale: 1.02 }}
									/>
								</motion.div>
								<motion.div
									className='space-y-2'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<label className='text-[10px] font-black uppercase text-slate-500 tracking-widest'>
										Asosiy Texnologiya
									</label>
									<motion.input
										required
										value={newProject.tech}
										onChange={(e) =>
											setNewProject((p) => ({ ...p, tech: e.target.value }))
										}
										placeholder='Masalan: React.js'
										className='w-full px-5 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-100 focus:ring-4 ring-blue-600/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600'
										whileFocus={{ scale: 1.02 }}
									/>
								</motion.div>
								<motion.div
									className='flex flex-col sm:flex-row gap-4 mt-8'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
								>
									<motion.button
										type='submit'
										className='flex-grow py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20'
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Loyiha Qo'shish
									</motion.button>
									<motion.button
										onClick={() => setShowAddModal(false)}
										type='button'
										className='flex-grow py-4 bg-slate-800 text-slate-300 rounded-2xl font-bold hover:bg-slate-700 transition-all border border-slate-700'
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Bekor qilish
									</motion.button>
								</motion.div>
							</form>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</PageTransition>
	)
}

export default Dashboard
