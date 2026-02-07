import { motion } from "framer-motion"
import React from "react"
import { PageTransition } from "../components/animations"
import { SERVICES } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Services: React.FC = () => {
	const { t } = useLanguage()

	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
		},
	}

	return (
		<PageTransition className='max-w-6xl mx-auto py-12 space-y-16'>
			<motion.div
				className='text-center space-y-4'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<motion.h1
					className='text-4xl sm:text-5xl font-black text-slate-100'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t("nav.services")}
				</motion.h1>
				<motion.p
					className='text-slate-400 max-w-xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Providing high-quality solutions tailored to your business needs.
				</motion.p>
			</motion.div>

			<motion.div
				className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, margin: "-100px" }}
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.15, delayChildren: 0.2 },
					},
				}}
			>
				{SERVICES.map((service, index) => (
					<motion.div
						key={service.id}
						className='group bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-[2.5rem] space-y-6'
						variants={cardVariants}
						whileHover={{
							y: -15,
							boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
							borderColor: "rgba(59, 130, 246, 0.3)",
						}}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className='w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-3xl border border-blue-500/30'
							whileHover={{ scale: 1.2, rotate: 10 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							{service.icon}
						</motion.div>
						<motion.h3
							className='text-xl sm:text-2xl font-black text-slate-100'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index }}
						>
							{service.title}
						</motion.h3>
						<motion.p
							className='text-slate-400 leading-relaxed text-sm'
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.15 * index }}
						>
							{service.description}
						</motion.p>
						<motion.button
							className='text-blue-500 font-black text-xs uppercase tracking-widest inline-flex items-center gap-2'
							whileHover={{ x: 10 }}
							transition={{ duration: 0.3 }}
						>
							Learn More{" "}
							<motion.span
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1, repeat: Infinity }}
							>
								→
							</motion.span>
						</motion.button>
					</motion.div>
				))}
			</motion.div>
		</PageTransition>
	)
}

export default Services
