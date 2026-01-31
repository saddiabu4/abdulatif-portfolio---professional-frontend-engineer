import React from "react"
import { Link } from "react-router-dom"

const NotFound: React.FC = () => {
	return (
		<div className='min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 animate-fade-in px-4'>
			<div className='relative'>
				<h1 className='text-[8rem] sm:text-[12rem] font-black text-slate-800 select-none tracking-tighter'>
					404
				</h1>
				<p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl font-black text-blue-500'>
					Oops!
				</p>
			</div>
			<div className='space-y-4'>
				<h2 className='text-xl sm:text-2xl font-bold text-slate-100'>
					Page Not Found
				</h2>
				<p className='text-slate-400 max-w-sm mx-auto font-medium'>
					The page you're looking for might have been moved, renamed, or
					deleted.
				</p>
			</div>
			<Link
				to='/'
				className='px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all active:scale-95'
			>
				Return Home
			</Link>
		</div>
	)
}

export default NotFound
