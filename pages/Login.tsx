import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FloatingElement, PageTransition } from "../components/animations"
import { useAuth } from "../context/AuthContext"

const Login: React.FC = () => {
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const { login } = useAuth()
	const navigate = useNavigate()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (login(password)) {
			navigate("/dashboard")
		} else {
			setError("Invalid password. Try admin123")
		}
	}

	return (
		<PageTransition className='max-w-md mx-auto py-24 px-4'>
			<motion.div
				className='bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl text-center space-y-6 relative overflow-hidden'
				initial={{ opacity: 0, y: 50, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				whileHover={{
					boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
				}}
			>
				{/* Floating background decorations */}
				<FloatingElement
					duration={5}
					distance={20}
					className='absolute -top-10 -right-10 opacity-20'
				>
					<div className='w-32 h-32 bg-blue-500 rounded-full blur-3xl' />
				</FloatingElement>
				<FloatingElement
					duration={6}
					distance={15}
					className='absolute -bottom-10 -left-10 opacity-20'
				>
					<div className='w-24 h-24 bg-emerald-500 rounded-full blur-3xl' />
				</FloatingElement>

				<motion.div
					className='w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto border border-blue-500/30 relative z-10'
					initial={{ opacity: 0, scale: 0, rotate: -180 }}
					animate={{ opacity: 1, scale: 1, rotate: 0 }}
					transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
					whileHover={{ scale: 1.1, rotate: 10 }}
				>
					🔐
				</motion.div>
				<motion.h1
					className='text-2xl sm:text-3xl font-black text-slate-100 relative z-10'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					Admin Access
				</motion.h1>
				<motion.p
					className='text-slate-400 relative z-10'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					Only authorized personnel can access the dashboard content.
				</motion.p>
				<motion.form
					onSubmit={handleSubmit}
					className='space-y-4 relative z-10'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					<motion.input
						type='password'
						placeholder='Enter Password (admin123)'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 ring-blue-500 outline-none placeholder:text-slate-500'
						whileFocus={{ scale: 1.02 }}
					/>
					<AnimatePresence>
						{error && (
							<motion.p
								className='text-xs text-red-400 font-bold'
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3 }}
							>
								{error}
							</motion.p>
						)}
					</AnimatePresence>
					<motion.button
						type='submit'
						className='w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all'
						whileHover={{ scale: 1.02, y: -2 }}
						whileTap={{ scale: 0.98 }}
					>
						Login
					</motion.button>
				</motion.form>
			</motion.div>
		</PageTransition>
	)
}

export default Login
