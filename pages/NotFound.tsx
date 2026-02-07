import { motion } from "framer-motion"
import React from "react"
import { Link } from "react-router-dom"
import { FloatingElement, PageTransition } from "../components/animations"

const NotFound: React.FC = () => {
	return (
		<PageTransition className='min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 px-4'>
			<motion.div
				className='relative'
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
			>
				<motion.h1
					className='text-[8rem] sm:text-[12rem] font-black text-slate-800 select-none tracking-tighter'
					animate={{
						textShadow: [
							"0 0 20px rgba(59, 130, 246, 0)",
							"0 0 60px rgba(59, 130, 246, 0.3)",
							"0 0 20px rgba(59, 130, 246, 0)",
						],
					}}
					transition={{ duration: 2, repeat: Infinity }}
				>
					404
				</motion.h1>
				<motion.p
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl font-black text-blue-500'
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
				>
					Oops!
				</motion.p>

				{/* Floating elements */}
				<FloatingElement
					duration={3}
					distance={15}
					className='absolute -top-10 -left-10'
				>
					<div className='w-8 h-8 bg-blue-500/30 rounded-full blur-sm' />
				</FloatingElement>
				<FloatingElement
					duration={4}
					distance={20}
					className='absolute -bottom-5 -right-5'
				>
					<div className='w-6 h-6 bg-emerald-500/30 rounded-full blur-sm' />
				</FloatingElement>
				<FloatingElement
					duration={5}
					distance={10}
					className='absolute top-0 right-10'
				>
					<div className='w-4 h-4 bg-purple-500/30 rounded-full blur-sm' />
				</FloatingElement>
			</motion.div>

			<motion.div
				className='space-y-4'
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4, duration: 0.5 }}
			>
				<motion.h2
					className='text-xl sm:text-2xl font-bold text-slate-100'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Page Not Found
				</motion.h2>
				<motion.p
					className='text-slate-400 max-w-sm mx-auto font-medium'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
				>
					The page you're looking for might have been moved, renamed, or
					deleted.
				</motion.p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.7 }}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				<Link
					to='/'
					className='inline-block px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all'
				>
					Return Home
				</Link>
			</motion.div>
		</PageTransition>
	)
}

export default NotFound
