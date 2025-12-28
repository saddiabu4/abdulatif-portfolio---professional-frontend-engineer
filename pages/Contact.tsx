import React, { useState } from "react"
import { useLanguage } from "../context/LanguageContext"

const Contact: React.FC = () => {
	const { t } = useLanguage()
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "Inquiry",
		message: "",
	})

	const [status, setStatus] = useState<"idle" | "submitting" | "success">(
		"idle"
	)

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setStatus("submitting")
		setTimeout(() => {
			setStatus("success")
			setFormData({ name: "", email: "", subject: "Inquiry", message: "" })
			setTimeout(() => setStatus("idle"), 5000)
		}, 1500)
	}

	return (
		<div className='max-w-5xl mx-auto py-12 animate-fade-in px-4'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
				<div className='space-y-8 text-center lg:text-left'>
					<h1 className='text-5xl sm:text-7xl font-black tracking-tighter text-slate-900 leading-tight'>
						{t("contact.title")}
						<span className='text-blue-600'>.</span>
					</h1>
					<p className='text-xl text-slate-500 leading-relaxed max-w-md mx-auto lg:mx-0'>
						{t("contact.subtitle")}
					</p>

					<div className='space-y-6 pt-10 border-t border-slate-100'>
						<div className='flex items-center justify-center lg:justify-start gap-4'>
							<div className='w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl font-bold'>
								@
							</div>
							<div>
								<p className='text-[10px] font-black uppercase text-slate-400 tracking-widest'>
									Email me
								</p>
								<p className='font-bold text-slate-900'>saddiabu4@gmail.com</p>
							</div>
						</div>
						<div className='flex items-center justify-center lg:justify-start gap-4'>
							<div className='w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center text-xl font-bold'>
								#
							</div>
							<div>
								<p className='text-[10px] font-black uppercase text-slate-400 tracking-widest'>
									Social
								</p>
								<p className='font-bold text-slate-900'>@saddi_abu</p>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-white p-6 sm:p-10 rounded-[3rem] shadow-2xl shadow-blue-600/5 border border-slate-50'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='space-y-2'>
							<label className='block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1'>
								{t("contact.name")}
							</label>
							<input
								required
								name='name'
								value={formData.name}
								onChange={handleChange}
								type='text'
								placeholder='John Doe'
								className='w-full px-6 py-4 rounded-2xl text-slate-900 bg-slate-50 border border-slate-100 focus:ring-4 ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300'
							/>
						</div>
						<div className='space-y-2'>
							<label className='block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1'>
								{t("contact.email")}
							</label>
							<input
								required
								name='email'
								value={formData.email}
								onChange={handleChange}
								type='email'
								placeholder='john@example.com'
								className='w-full px-6 py-4 rounded-2xl text-slate-900 bg-slate-50 border border-slate-100 focus:ring-4 ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300'
							/>
						</div>
						<div className='space-y-2'>
							<label className='block text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1'>
								{t("contact.message")}
							</label>
							<textarea
								required
								name='message'
								value={formData.message}
								onChange={handleChange}
								rows={4}
								placeholder='How can I help you?'
								className='w-full px-6 py-4 rounded-2xl text-slate-900 bg-slate-50 border border-slate-100 focus:ring-4 ring-blue-600/5 focus:border-blue-600 outline-none transition-all placeholder:text-slate-300'
							></textarea>
						</div>
						<button
							disabled={status !== "idle"}
							type='submit'
							className='w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-700 disabled:opacity-50 transition-all active:scale-95'
						>
							{status === "idle"
								? t("contact.send")
								: status === "submitting"
								? t("contact.sending")
								: t("contact.success")}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact
