import { motion } from "framer-motion"
import React from "react"
import { AnimatedProgressBar, PageTransition } from "../components/animations"
import { SKILLS } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Skills: React.FC = () => {
	const { t } = useLanguage()

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.2 },
		},
	}

	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	}

	return (
		<PageTransition className='max-w-6xl mx-auto py-12 space-y-20'>
			<motion.div
				className='text-center space-y-4'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<motion.h1
					className='text-4xl sm:text-5xl md:text-6xl font-black text-slate-100'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t("skills.title")}
				</motion.h1>
				<motion.p
					className='text-slate-400 max-w-xl mx-auto font-medium'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{t("skills.subtitle")}
				</motion.p>
			</motion.div>

			<motion.div
				className='grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12'
				variants={containerVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: "-100px" }}
			>
				{["Frontend", "Tools", "Design"].map((cat, catIndex) => (
					<motion.div
						key={cat}
						className='space-y-8 bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] border border-slate-800 shadow-lg'
						variants={cardVariants}
						whileHover={{
							y: -10,
							boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
						}}
						transition={{ duration: 0.3 }}
					>
						<motion.h2
							className='text-xl font-black flex items-center gap-3 text-slate-100'
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: catIndex * 0.1 }}
						>
							<motion.span
								className='w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-500 text-sm border border-blue-500/30'
								whileHover={{ scale: 1.2, rotate: 10 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								#
							</motion.span>
							{cat}
						</motion.h2>
						<div className='space-y-10'>
							{SKILLS.filter((s) => s.category === cat).map(
								(skill, skillIndex) => (
									<motion.div
										key={skill.name}
										className='space-y-3 group'
										initial={{ opacity: 0, x: -30 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: skillIndex * 0.1 + catIndex * 0.15,
										}}
									>
										<div className='flex justify-between items-end'>
											<motion.span
												className='font-bold text-slate-300 flex items-center gap-3'
												whileHover={{ x: 5 }}
												transition={{ duration: 0.2 }}
											>
												<motion.span
													className='text-2xl'
													animate={{ rotate: [0, 10, -10, 0] }}
													transition={{
														duration: 2,
														repeat: Infinity,
														repeatDelay: 3 + skillIndex,
													}}
												>
													{skill.icon}
												</motion.span>
												{skill.name}
											</motion.span>
											<motion.span
												className='text-xs font-black text-blue-400'
												initial={{ opacity: 0, scale: 0 }}
												whileInView={{ opacity: 1, scale: 1 }}
												viewport={{ once: true }}
												transition={{
													duration: 0.3,
													delay: 0.5 + skillIndex * 0.1,
												}}
											>
												{skill.level}%
											</motion.span>
										</div>
										<AnimatedProgressBar
											progress={skill.level}
											className='h-1.5 w-full bg-slate-800 rounded-full overflow-hidden'
											barClassName='h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full'
										/>
									</motion.div>
								)
							)}
						</div>
					</motion.div>
				))}
			</motion.div>
		</PageTransition>
	)
}

export default Skills
