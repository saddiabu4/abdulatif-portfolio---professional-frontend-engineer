import React from "react"
import { Link, useParams } from "react-router-dom"
import { BLOGS } from "../constants"

const BlogDetails: React.FC = () => {
	const { id } = useParams()
	const blog = BLOGS.find((b) => b.id === id)

	if (!blog)
		return (
			<div className='text-center py-24 space-y-6'>
				<h1 className='text-4xl font-black text-slate-100'>
					Blog Post Not Found
				</h1>
				<Link to='/blog' className='text-blue-500 font-bold hover:underline'>
					Back to Blog
				</Link>
			</div>
		)

	return (
		<div className='max-w-4xl mx-auto py-12 space-y-10 animate-fade-in px-4'>
			<Link
				to='/blog'
				className='text-slate-500 hover:text-blue-500 font-bold flex items-center gap-2 text-sm uppercase tracking-widest'
			>
				← Back to all posts
			</Link>

			<div className='space-y-6'>
				<div className='space-y-4'>
					<span className='px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30'>
						{blog.category}
					</span>
					<h1 className='text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-slate-100'>
						{blog.title}
					</h1>
					<p className='text-slate-500 font-medium'>
						{blog.date} • {blog.author}
					</p>
				</div>

				<div className='h-[300px] sm:h-[400px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800'>
					<img
						src={blog.image}
						className='w-full h-full object-cover'
						alt={blog.title}
					/>
				</div>

				<div className='max-w-none pt-10'>
					<p className='text-lg sm:text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-blue-500'>
						{blog.content}
					</p>
					<div className='mt-8 p-6 sm:p-8 bg-slate-900 rounded-3xl border border-slate-800 italic text-slate-400'>
						More content coming soon in this series. Stay tuned for deeper dives
						into modern React architecture and design systems.
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogDetails
