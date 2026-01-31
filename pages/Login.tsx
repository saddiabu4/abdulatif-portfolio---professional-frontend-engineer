import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
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
		<div className='max-w-md mx-auto py-24 px-4'>
			<div className='bg-slate-900 border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl text-center space-y-6'>
				<div className='w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl mx-auto border border-blue-500/30'>
					🔐
				</div>
				<h1 className='text-2xl sm:text-3xl font-black text-slate-100'>
					Admin Access
				</h1>
				<p className='text-slate-400'>
					Only authorized personnel can access the dashboard content.
				</p>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<input
						type='password'
						placeholder='Enter Password (admin123)'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className='w-full px-5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 focus:ring-2 ring-blue-500 outline-none placeholder:text-slate-500'
					/>
					{error && <p className='text-xs text-red-400 font-bold'>{error}</p>}
					<button className='w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all'>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login
