import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { FloatingElement, PageTransition } from "../components/animations"
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

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setStatus("submitting")

		try {
			const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN
			const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID

			const message = `
🔔 *Yangi xabar!*

👤 *Ism:* ${formData.name}
📧 *Email:* ${formData.email}
📋 *Mavzu:* ${formData.subject}

💬 *Xabar:*
${formData.message}
			`.trim()

			const response = await fetch(
				`https://api.telegram.org/bot${botToken}/sendMessage`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						chat_id: chatId,
						text: message,
						parse_mode: "Markdown",
					}),
				}
			)

			if (response.ok) {
				setStatus("success")
				setFormData({ name: "", email: "", subject: "Inquiry", message: "" })
				setTimeout(() => setStatus("idle"), 5000)
			} else {
				throw new Error("Failed to send message")
			}
		} catch (error) {
			console.error("Error sending message:", error)
			setStatus("idle")
			alert(
				"Xabar yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko'ring."
			)
		}
	}

	const inputVariants = {
		focus: { scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" },
		blur: { scale: 1, boxShadow: "0 0 0 rgba(59, 130, 246, 0)" },
	}

	return (
		<PageTransition className='max-w-5xl mx-auto py-12 px-4'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
				<motion.div
					className='space-y-8 text-center lg:text-left'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				>
					<motion.h1
						className='text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-slate-100 leading-tight'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						{t("contact.title")}
						<motion.span
							className='text-blue-500'
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
						>
							.
						</motion.span>
					</motion.h1>
					<motion.p
						className='text-lg sm:text-xl text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						{t("contact.subtitle")}
					</motion.p>

					<motion.div
						className='space-y-6 pt-10 border-t border-slate-800'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<motion.div
							className='flex items-center justify-center lg:justify-start gap-4'
							whileHover={{ x: 10 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								className='w-12 h-12 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center text-xl font-bold border border-blue-500/30'
								whileHover={{ scale: 1.1, rotate: 10 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								@
							</motion.div>
							<div>
								<p className='text-[10px] font-black uppercase text-slate-500 tracking-widest'>
									Email me
								</p>
								<p className='font-bold text-slate-100'>saddiabu4@gmail.com</p>
							</div>
						</motion.div>
						<motion.div
							className='flex items-center justify-center lg:justify-start gap-4'
							whileHover={{ x: 10 }}
							transition={{ duration: 0.3 }}
						>
							<motion.div
								className='w-12 h-12 bg-emerald-600/20 text-emerald-500 rounded-2xl flex items-center justify-center text-xl font-bold border border-emerald-500/30'
								whileHover={{ scale: 1.1, rotate: -10 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								#
							</motion.div>
							<div>
								<p className='text-[10px] font-black uppercase text-slate-500 tracking-widest'>
									Social
								</p>
								<p className='font-bold text-slate-100'>@saddi_abu</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Floating decorative elements */}
					<div className='relative hidden lg:block'>
						<FloatingElement
							duration={4}
							distance={20}
							className='absolute -bottom-20 left-0'
						>
							<div className='w-16 h-16 bg-blue-500/10 rounded-full blur-xl' />
						</FloatingElement>
						<FloatingElement
							duration={5}
							distance={15}
							className='absolute -bottom-10 left-20'
						>
							<div className='w-10 h-10 bg-emerald-500/10 rounded-full blur-xl' />
						</FloatingElement>
					</div>
				</motion.div>

				<motion.div
					className='bg-slate-900 p-6 sm:p-10 rounded-[3rem] shadow-2xl shadow-blue-600/5 border border-slate-800'
					initial={{ opacity: 0, x: 50, rotateY: 10 }}
					animate={{ opacity: 1, x: 0, rotateY: 0 }}
					transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
					whileHover={{
						boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
					}}
				>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<motion.div
							className='space-y-2'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<label className='block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1'>
								{t("contact.name")}
							</label>
							<motion.input
								required
								name='name'
								value={formData.name}
								onChange={handleChange}
								type='text'
								placeholder='John Doe'
								className='w-full px-6 py-4 rounded-2xl text-slate-100 bg-slate-800 border border-slate-700 focus:ring-4 ring-blue-600/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600'
								whileFocus={{ scale: 1.02 }}
							/>
						</motion.div>
						<motion.div
							className='space-y-2'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<label className='block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1'>
								{t("contact.email")}
							</label>
							<motion.input
								required
								name='email'
								value={formData.email}
								onChange={handleChange}
								type='email'
								placeholder='john@example.com'
								className='w-full px-6 py-4 rounded-2xl text-slate-100 bg-slate-800 border border-slate-700 focus:ring-4 ring-blue-600/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600'
								whileFocus={{ scale: 1.02 }}
							/>
						</motion.div>
						<motion.div
							className='space-y-2'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<label className='block text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1'>
								{t("contact.message")}
							</label>
							<motion.textarea
								required
								name='message'
								value={formData.message}
								onChange={handleChange}
								rows={4}
								placeholder='How can I help you?'
								className='w-full px-6 py-4 rounded-2xl text-slate-100 bg-slate-800 border border-slate-700 focus:ring-4 ring-blue-600/20 focus:border-blue-500 outline-none transition-all placeholder:text-slate-600'
								whileFocus={{ scale: 1.02 }}
							></motion.textarea>
						</motion.div>
						<motion.button
							disabled={status !== "idle"}
							type='submit'
							className='w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-bold shadow-xl shadow-blue-600/20 hover:bg-blue-500 disabled:opacity-50 transition-all'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.7 }}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<AnimatePresence mode='wait'>
								{status === "idle" && (
									<motion.span
										key='idle'
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
									>
										{t("contact.send")}
									</motion.span>
								)}
								{status === "submitting" && (
									<motion.span
										key='submitting'
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -10 }}
										className='flex items-center justify-center gap-2'
									>
										<motion.span
											animate={{ rotate: 360 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												ease: "linear",
											}}
										>
											⏳
										</motion.span>
										{t("contact.sending")}
									</motion.span>
								)}
								{status === "success" && (
									<motion.span
										key='success'
										initial={{ opacity: 0, scale: 0.5 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, y: -10 }}
										className='flex items-center justify-center gap-2'
									>
										✅ {t("contact.success")}
									</motion.span>
								)}
							</AnimatePresence>
						</motion.button>
					</form>
				</motion.div>
			</div>
		</PageTransition>
	)
}

export default Contact
