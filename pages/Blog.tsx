import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PageTransition } from "../components/animations"
import { BLOGS } from "../constants"
import { useLanguage } from "../context/LanguageContext"

const Blog: React.FC = () => {
	const { t } = useLanguage()
	const [loading, setLoading] = useState(true)

	// useEffect: Simulate fetching blogs with a delay
	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 800)
		return () => clearTimeout(timer)
	}, [])

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
		},
	}

	const skeletonVariants = {
		pulse: {
			opacity: [0.5, 1, 0.5],
			transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
		},
	}

	return (
		<PageTransition className='max-w-5xl mx-auto py-12 space-y-12'>
			<motion.div
				className='text-center space-y-4'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<motion.h1
					className='text-4xl sm:text-5xl font-black tracking-tight text-slate-100'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{t("nav.blog")}
				</motion.h1>
				<motion.p
					className='text-slate-400'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Insights, tutorials, and thoughts on the future of web technology.
				</motion.p>
			</motion.div>

			<motion.div
				className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10'
				initial='hidden'
				animate='visible'
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: { staggerChildren: 0.15, delayChildren: 0.3 },
					},
				}}
			>
				<AnimatePresence mode='wait'>
					{loading
						? [1, 2].map((i) => (
								<motion.div
									key={`skeleton-${i}`}
									className='space-y-4'
									variants={skeletonVariants}
									animate='pulse'
									exit={{ opacity: 0, scale: 0.9 }}
								>
									<div className='h-64 bg-slate-800 rounded-3xl w-full'></div>
									<div className='h-4 bg-slate-800 rounded w-1/4'></div>
									<div className='h-8 bg-slate-800 rounded w-full'></div>
									<div className='h-4 bg-slate-800 rounded w-3/4'></div>
								</motion.div>
						  ))
						: BLOGS.map((blog, index) => (
								<motion.article
									key={blog.id}
									className='group space-y-4'
									variants={cardVariants}
									initial='hidden'
									animate='visible'
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -5 }}
								>
									<Link
										to={`/blog/${blog.id}`}
										className='block relative h-64 sm:h-72 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-800'
									>
										<motion.img
											src={blog.image}
											className='w-full h-full object-cover'
											alt={blog.title}
											whileHover={{ scale: 1.1 }}
											transition={{ duration: 0.6 }}
										/>
										<motion.div
											className='absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-xl text-[10px] font-black uppercase tracking-widest text-blue-400 shadow-lg border border-slate-700'
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.3 + index * 0.1 }}
										>
											{blog.category}
										</motion.div>
									</Link>
									<motion.div
										className='px-2 space-y-2'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.4 + index * 0.1 }}
									>
										<p className='text-xs font-bold text-slate-500'>
											{blog.date} • {blog.author}
										</p>
										<Link
											to={`/blog/${blog.id}`}
											className='block text-xl sm:text-2xl font-black text-slate-100 group-hover:text-blue-500 transition-colors'
										>
											<motion.span
												whileHover={{ x: 5 }}
												transition={{ duration: 0.2 }}
												className='inline-block'
											>
												{blog.title}
											</motion.span>
										</Link>
										<p className='text-slate-400 text-sm line-clamp-2 leading-relaxed'>
											{blog.excerpt}
										</p>
									</motion.div>
								</motion.article>
						  ))}
				</AnimatePresence>
			</motion.div>
		</PageTransition>
	)
}

export default Blog
