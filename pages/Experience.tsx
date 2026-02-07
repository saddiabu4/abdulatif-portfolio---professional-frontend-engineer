import { motion } from "framer-motion"
import React from "react"
import { PageTransition } from "../components/animations"
import { EXPERIENCES } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Experience: React.FC = () => {
	const { t } = useLanguage()

	const timelineVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.3, delayChildren: 0.2 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	}

	const dotVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: { duration: 0.4, type: "spring", stiffness: 300 },
		},
	}

	return (
		<PageTransition className='max-w-4xl mx-auto py-12 space-y-12 lg:space-y-20'>
			<motion.div
				className='text-center space-y-4'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<motion.h1
					className='text-4xl sm:text-6xl font-black text-slate-100'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t("nav.experience")}
				</motion.h1>
				<motion.div
					className='w-20 h-2 bg-blue-600 mx-auto rounded-full'
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				/>
			</motion.div>

			<motion.div
				className='relative pl-8 md:pl-0'
				variants={timelineVariants}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: "-100px" }}
			>
				{/* Timeline Line */}
				<motion.div
					className='absolute left-[11px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800'
					initial={{ scaleY: 0, originY: 0 }}
					whileInView={{ scaleY: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
				/>

				{EXPERIENCES.map((exp, index) => (
					<motion.div
						key={exp.id}
						className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center w-full ${
							index % 2 === 0 ? "md:flex-row-reverse" : ""
						}`}
						variants={itemVariants}
					>
						{/* Timeline dot */}
						<motion.div
							className='absolute left-[-29px] md:left-1/2 md:-ml-2 w-4 h-4 rounded-full bg-blue-600 ring-8 ring-slate-950 shadow-lg z-10'
							variants={dotVariants}
							whileHover={{ scale: 1.5 }}
						/>

						<div className='hidden md:block w-1/2'></div>

						<motion.div
							className='w-full md:w-1/2 md:px-12'
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.6,
								delay: index * 0.2,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<motion.div
								className='bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-slate-800 group'
								whileHover={{
									y: -10,
									boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
									borderColor: "rgba(59, 130, 246, 0.3)",
								}}
								transition={{ duration: 0.3 }}
							>
								<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6'>
									<motion.span
										className='px-4 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-full self-start border border-blue-500/30'
										whileHover={{ scale: 1.05 }}
									>
										{exp.period}
									</motion.span>
								</div>
								<motion.h3
									className='text-xl sm:text-2xl font-black text-slate-100 mb-1'
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.2 }}
								>
									{exp.role}
								</motion.h3>
								<motion.p
									className='text-blue-500 font-bold mb-4'
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.3 }}
								>
									{exp.company}
								</motion.p>
								<motion.p
									className='text-slate-400 text-sm leading-relaxed'
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.4 }}
								>
									{exp.description}
								</motion.p>
							</motion.div>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
		</PageTransition>
	)
}

export default Experience
