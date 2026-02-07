import { motion } from "framer-motion"
import React from "react"
import Image from "../avatar-ozim.png"
import { FloatingElement, PageTransition } from "../components/animations"
import { useLanguage } from "../context/LanguageContext"

const About: React.FC = () => {
	const { t } = useLanguage()

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.1 },
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
		},
	}

	return (
		<PageTransition className='max-w-4xl mx-auto space-y-20 py-12'>
			<section className='flex flex-col md:flex-row items-center gap-12'>
				<motion.div
					className='md:w-1/3 relative'
					initial={{ opacity: 0, x: -50, rotate: -5 }}
					animate={{ opacity: 1, x: 0, rotate: 0 }}
					transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				>
					<motion.div
						className='aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-blue-600 border border-slate-800'
						whileHover={{ scale: 1.05, rotate: 2 }}
						transition={{ duration: 0.4 }}
					>
						<motion.img
							src={Image}
							className='w-full h-full object-cover mix-blend-overlay'
							alt='Atif Bio'
							initial={{ scale: 1.2 }}
							animate={{ scale: 1 }}
							transition={{ duration: 1 }}
							whileHover={{ scale: 1.1 }}
						/>
					</motion.div>

					{/* Floating decorative elements */}
					<FloatingElement
						duration={3}
						distance={10}
						className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60'
					>
						<div />
					</FloatingElement>
					<FloatingElement
						duration={4}
						distance={15}
						className='absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full opacity-60'
					>
						<div />
					</FloatingElement>
				</motion.div>

				<motion.div
					className='md:w-2/3 space-y-6'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					<motion.h1
						className='text-4xl sm:text-5xl font-black text-slate-100'
						variants={itemVariants}
					>
						{t("about.title")}{" "}
						<motion.span
							className='text-blue-500'
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
						>
							Me
						</motion.span>
						.
					</motion.h1>

					<motion.p
						className='text-lg sm:text-xl text-slate-400 leading-relaxed italic'
						variants={itemVariants}
					>
						"{t("about.bio")}"
					</motion.p>

					<motion.div
						className='grid grid-cols-2 gap-6 pt-4'
						variants={itemVariants}
					>
						<motion.div
							className='space-y-1 bg-slate-900 p-6 rounded-2xl border border-slate-800'
							whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
							transition={{ duration: 0.3 }}
						>
							<motion.p
								className='text-blue-500 font-bold text-3xl'
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
							>
								1+
							</motion.p>
							<p className='text-[10px] text-slate-500 uppercase font-black tracking-widest'>
								{t("about.exp_years")}
							</p>
						</motion.div>
						<motion.div
							className='space-y-1 bg-slate-900 p-6 rounded-2xl border border-slate-800'
							whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
							transition={{ duration: 0.3 }}
						>
							<motion.p
								className='text-blue-500 font-bold text-3xl'
								initial={{ opacity: 0, scale: 0 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
							>
								50+
							</motion.p>
							<p className='text-[10px] text-slate-500 uppercase font-black tracking-widest'>
								{t("about.projects_done")}
							</p>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>
		</PageTransition>
	)
}

export default About
