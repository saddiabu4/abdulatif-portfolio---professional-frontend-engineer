import { motion } from "framer-motion"
import React from "react"
import { Link, useParams } from "react-router-dom"
import { PageTransition } from "../components/animations"
import { BLOGS } from "../constants"

const BlogDetails: React.FC = () => {
	const { id } = useParams()
	const blog = BLOGS.find((b) => b.id === id)

	if (!blog)
		return (
			<motion.div
				className='text-center py-24 space-y-6'
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h1
					className='text-4xl font-black text-slate-100'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Blog Post Not Found
				</motion.h1>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					whileHover={{ scale: 1.05 }}
				>
					<Link to='/blog' className='text-blue-500 font-bold hover:underline'>
						Back to Blog
					</Link>
				</motion.div>
			</motion.div>
		)

	return (
		<PageTransition className='max-w-4xl mx-auto py-12 space-y-10 px-4'>
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				whileHover={{ x: -5 }}
			>
				<Link
					to='/blog'
					className='text-slate-500 hover:text-blue-500 font-bold flex items-center gap-2 text-sm uppercase tracking-widest'
				>
					← Back to all posts
				</Link>
			</motion.div>

			<div className='space-y-6'>
				<motion.div
					className='space-y-4'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
				>
					<motion.span
						className='inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2, type: "spring" }}
						whileHover={{ scale: 1.05 }}
					>
						{blog.category}
					</motion.span>
					<motion.h1
						className='text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-slate-100'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{blog.title}
					</motion.h1>
					<motion.p
						className='text-slate-500 font-medium'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
					>
						{blog.date} • {blog.author}
					</motion.p>
				</motion.div>

				<motion.div
					className='h-[300px] sm:h-[400px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-800'
					initial={{ opacity: 0, y: 40, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{ scale: 1.02 }}
				>
					<motion.img
						src={blog.image}
						className='w-full h-full object-cover'
						alt={blog.title}
						initial={{ scale: 1.1 }}
						animate={{ scale: 1 }}
						transition={{ duration: 0.8 }}
						whileHover={{ scale: 1.05 }}
					/>
				</motion.div>

				<motion.div
					className='max-w-none pt-10'
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					<motion.p
						className='text-lg sm:text-xl leading-relaxed text-slate-300 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-blue-500'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6 }}
					>
						{blog.content}
					</motion.p>
					<motion.div
						className='mt-8 p-6 sm:p-8 bg-slate-900 rounded-3xl border border-slate-800 italic text-slate-400'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						whileHover={{
							borderColor: "rgba(59, 130, 246, 0.3)",
							boxShadow: "0 10px 40px -15px rgba(59, 130, 246, 0.1)",
						}}
					>
						More content coming soon in this series. Stay tuned for deeper dives
						into modern React architecture and design systems.
					</motion.div>
				</motion.div>
			</div>
		</PageTransition>
	)
}

export default BlogDetails
