import React from "react"
import { SERVICES } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Services: React.FC = () => {
	const { t } = useLanguage()

	return (
		<div className='max-w-6xl mx-auto py-12 space-y-16 animate-fade-in'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl sm:text-5xl font-black text-slate-100'>
					{t("nav.services")}
				</h1>
				<p className='text-slate-400 max-w-xl mx-auto'>
					Providing high-quality solutions tailored to your business needs.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
				{SERVICES.map((service) => (
					<div
						key={service.id}
						className='group bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-[2.5rem] space-y-6 hover:-translate-y-4 transition-all duration-500 hover:border-blue-500/30'
					>
						<div className='w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform border border-blue-500/30'>
							{service.icon}
						</div>
						<h3 className='text-xl sm:text-2xl font-black text-slate-100'>
							{service.title}
						</h3>
						<p className='text-slate-400 leading-relaxed text-sm'>
							{service.description}
						</p>
						<button className='text-blue-500 font-black text-xs uppercase tracking-widest hover:translate-x-2 transition-transform inline-flex items-center gap-2'>
							Learn More <span>→</span>
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Services
