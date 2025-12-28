import React from "react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import { PROJECTS } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Home: React.FC = () => {
	const { t } = useLanguage()

	// Matnni bo'laklarga ajratish va blue-600 klassini qo'llash uchun yordamchi funksiya
	const renderTitle = () => {
		const fullTitle = t("hero.title")
		const parts = fullTitle.split("|")

		if (parts.length === 3) {
			return (
				<>
					{parts[0]}
					<span className='text-blue-600'>{parts[1]}</span>
					{parts[2]}
				</>
			)
		}
		return fullTitle
	}

	return (
		<div className='space-y-20 lg:space-y-32 animate-fade-in'>
			<section className='flex flex-col lg:flex-row items-center justify-between gap-12 py-10 lg:py-24'>
				<div className='w-full lg:w-2/3 space-y-6 lg:space-y-8 text-center lg:text-left'>
					<div className='inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black tracking-[0.2em] uppercase'>
						{t("hero.badge")}
					</div>
					<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tighter text-slate-900 text-balance'>
						{renderTitle()}
					</h1>
					<p className='text-lg sm:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-balance'>
						{t("hero.subtitle")}
					</p>
					<div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4'>
						<Link
							to='/projects'
							className='px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 text-center'
						>
							{t("hero.cta_work")}
						</Link>
						<Link
							to='/contact'
							className='px-10 py-5 border-2 border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-white hover:border-blue-600 transition-all text-center'
						>
							{t("hero.cta_contact")}
						</Link>
					</div>
				</div>

				<div className='w-full lg:w-1/3 relative px-4 sm:px-10 lg:px-0'>
					<div className='relative w-full aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-3xl group'>
						<img
							src='https://picsum.photos/seed/abdulatif/800/800'
							className='w-full h-full object-cover transition-transform duration-1000 lg:grayscale lg:group-hover:grayscale-0 group-hover:scale-110'
							alt='Abdulatif Profile'
						/>
						<div className='absolute inset-0 bg-blue-600/5 mix-blend-multiply'></div>
					</div>
					<div className='absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-6 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-50 hidden sm:block animate-bounce-slow'>
						<p className='text-3xl sm:text-4xl font-black text-blue-600'>1+</p>
						<p className='text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1'>
							Yillik Tajriba
						</p>
					</div>
				</div>
			</section>

			<section className='space-y-12'>
				<div className='flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left'>
					<div className='space-y-2'>
						<h2 className='text-3xl sm:text-4xl font-black text-slate-900'>
							{t("nav.projects")}
						</h2>
						<p className='text-slate-500 font-medium italic'>
							Oxirgi amalga oshirilgan ijodiy ishlarim
						</p>
					</div>
					<Link
						to='/projects'
						className='px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm'
					>
						Barcha loyihalar →
					</Link>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10'>
					{PROJECTS.slice(0, 3).map((p) => (
						<ProjectCard key={p.id} project={p} />
					))}
				</div>
			</section>
		</div>
	)
}

export default Home
