import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import Image from "../avatar-ozim.png"
import {
	AnimatedSection,
	FloatingElement,
	PageTransition,
	StaggerContainer,
	StaggerItem,
	fadeInUp,
} from "../components/animations"
import ProjectCard from "../components/ProjectCard"
import { PROJECTS } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Home: React.FC = () => {
	const { t } = useLanguage()

	// Matnni bo'laklarga ajratish va blue-500 klassini qo'llash uchun yordamchi funksiya
	const renderTitle = () => {
		const fullTitle = t("hero.title")
		const parts = fullTitle.split("|")

		if (parts.length === 3) {
			return (
				<>
					{parts[0]}
					<span className='text-blue-500'>{parts[1]}</span>
					{parts[2]}
				</>
			)
		}
		return fullTitle
	}

	return (
		<PageTransition className='space-y-20 lg:space-y-32'>
			<section className='flex flex-col lg:flex-row items-center justify-between gap-12 py-10 lg:py-24'>
				<motion.div
					className='w-full lg:w-2/3 space-y-4 lg:space-y-6 text-center lg:text-left'
					initial='hidden'
					animate='visible'
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.15, delayChildren: 0.2 },
						},
					}}
				>
					<motion.div
						className='inline-block px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase border border-blue-500/30'
						variants={fadeInUp}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{t("hero.badge")}
					</motion.div>
					<motion.h1
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tighter text-slate-100 text-balance'
						variants={fadeInUp}
					>
						{renderTitle()}
					</motion.h1>
					<motion.p
						className='text-base sm:text-lg text-slate-400 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium text-balance'
						variants={fadeInUp}
					>
						{t("hero.subtitle")}
					</motion.p>
					<motion.div
						className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4'
						variants={fadeInUp}
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/projects'
								className='block px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all text-center text-sm sm:text-base'
							>
								{t("hero.cta_work")}
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link
								to='/contact'
								className='block px-8 sm:px-10 py-4 sm:py-5 border-2 border-slate-700 text-slate-100 rounded-2xl font-bold hover:bg-slate-900 hover:border-blue-500 transition-all text-center text-sm sm:text-base'
							>
								{t("hero.cta_contact")}
							</Link>
						</motion.div>
					</motion.div>
				</motion.div>

				<motion.div
					className='w-full lg:w-1/3 relative px-4 sm:px-10 lg:px-0'
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
				>
					<motion.div
						className='relative w-full aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-3xl group border border-slate-800'
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.4 }}
					>
						<motion.img
							src={Image}
							className='w-full h-full object-cover transition-transform duration-1000 lg:grayscale lg:group-hover:grayscale-0'
							alt='Atif Profile'
							initial={{ scale: 1.2 }}
							animate={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.8 }}
						/>
						<div className='absolute inset-0 bg-blue-600/10 mix-blend-multiply'></div>
					</motion.div>
					<FloatingElement
						duration={4}
						distance={15}
						className='absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-6 hidden sm:block'
					>
						<motion.div
							className='bg-slate-900 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-800'
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							whileHover={{ scale: 1.1 }}
						>
							<p className='text-3xl sm:text-4xl font-black text-blue-500'>
								1+
							</p>
							<p className='text-[10px] font-black uppercase tracking-widest text-slate-500 mt-1'>
								Yillik Tajriba
							</p>
						</motion.div>
					</FloatingElement>
				</motion.div>
			</section>

			<AnimatedSection direction='up' className='space-y-12'>
				<motion.div
					className='flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<div className='space-y-2'>
						<motion.h2
							className='text-3xl sm:text-4xl font-black text-slate-100'
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							{t("nav.projects")}
						</motion.h2>
						<motion.p
							className='text-slate-400 font-medium italic'
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							Oxirgi amalga oshirilgan ijodiy ishlarim
						</motion.p>
					</div>
					<motion.div
						whileHover={{ scale: 1.05, x: 5 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							to='/projects'
							className='px-6 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm font-bold text-slate-300 hover:text-blue-500 hover:border-blue-500 transition-all shadow-sm'
						>
							Barcha loyihalar →
						</Link>
					</motion.div>
				</motion.div>

				<StaggerContainer className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'>
					{PROJECTS.slice(0, 3).map((p, index) => (
						<StaggerItem key={p.id}>
							<ProjectCard project={p} index={index} />
						</StaggerItem>
					))}
				</StaggerContainer>
			</AnimatedSection>
		</PageTransition>
	)
}

export default Home
