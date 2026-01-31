import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

	return (
		<div className='max-w-5xl mx-auto py-12 space-y-12 animate-fade-in'>
			<div className='text-center space-y-4'>
				<h1 className='text-4xl sm:text-5xl font-black tracking-tight text-slate-100'>
					{t("nav.blog")}
				</h1>
				<p className='text-slate-400'>
					Insights, tutorials, and thoughts on the future of web technology.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10'>
				{loading
					? [1, 2].map((i) => (
							<div key={i} className='animate-pulse space-y-4'>
								<div className='h-64 bg-slate-800 rounded-3xl w-full'></div>
								<div className='h-4 bg-slate-800 rounded w-1/4'></div>
								<div className='h-8 bg-slate-800 rounded w-full'></div>
								<div className='h-4 bg-slate-800 rounded w-3/4'></div>
							</div>
					  ))
					: BLOGS.map((blog) => (
							<article key={blog.id} className='group space-y-4'>
								<Link
									to={`/blog/${blog.id}`}
									className='block relative h-64 sm:h-72 rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-800'
								>
									<img
										src={blog.image}
										className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
										alt={blog.title}
									/>
									<div className='absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-xl text-[10px] font-black uppercase tracking-widest text-blue-400 shadow-lg border border-slate-700'>
										{blog.category}
									</div>
								</Link>
								<div className='px-2 space-y-2'>
									<p className='text-xs font-bold text-slate-500'>
										{blog.date} • {blog.author}
									</p>
									<Link
										to={`/blog/${blog.id}`}
										className='block text-xl sm:text-2xl font-black text-slate-100 group-hover:text-blue-500 transition-colors'
									>
										{blog.title}
									</Link>
									<p className='text-slate-400 text-sm line-clamp-2 leading-relaxed'>
										{blog.excerpt}
									</p>
								</div>
							</article>
					  ))}
			</div>
		</div>
	)
}

export default Blog
