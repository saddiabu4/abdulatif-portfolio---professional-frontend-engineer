import { AnimatePresence, motion } from "framer-motion"
import { Github, Linkedin, Send, X } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useLanguage } from "../context/LanguageContext"

const Layout: React.FC = () => {
	const { isAuthenticated } = useAuth()
	const { language, setLanguage, t } = useLanguage()
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	// Requirement 7.1: Close menu when route changes
	useEffect(() => {
		setIsMenuOpen(false)
	}, [location])

	// Requirement 3: Prevent background scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}
		// Cleanup on unmount
		return () => {
			document.body.style.overflow = "unset"
		}
	}, [isMenuOpen])

	const navLinks = [
		{ to: "/", label: t("nav.home") },
		{ to: "/about", label: t("nav.about") },
		{ to: "/skills", label: t("nav.skills") },
		{ to: "/projects", label: t("nav.projects") },
		{ to: "/experience", label: t("nav.experience") },
		{ to: "/blog", label: t("nav.blog") },
		{ to: "/contact", label: t("nav.contact") },
	]

	const handleLinkClick = () => {
		setIsMenuOpen(false)
	}

	const navItemVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: i * 0.05, duration: 0.3 },
		}),
	}

	const socialIconVariants = {
		hidden: { opacity: 0, scale: 0 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			transition: { delay: 0.5 + i * 0.1, type: "spring", stiffness: 300 },
		}),
	}

	return (
		<div className='min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden'>
			<motion.header
				className='sticky top-0 z-[100] glass shadow-lg shadow-slate-950/50'
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			>
				<nav className='container mx-auto px-4 md:px-6 py-4 flex justify-between items-center'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							to='/'
							className='text-xl md:text-2xl font-extrabold tracking-tighter text-blue-500 relative z-[210]'
						>
							ATIF
						</Link>
					</motion.div>

					{/* Desktop Nav */}
					<div className='hidden lg:flex items-center space-x-6'>
						<motion.div
							className='flex space-x-6 items-center border-r border-slate-700 pr-6'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							{navLinks.map((link, i) => (
								<motion.div
									key={link.to}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.05, duration: 0.3 }}
									whileHover={{ y: -2 }}
								>
									<NavLink
										to={link.to}
										className={({ isActive }) =>
											`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-400 ${
												isActive ? "text-blue-500" : "text-slate-400"
											}`
										}
									>
										{link.label}
									</NavLink>
								</motion.div>
							))}
							{isAuthenticated && (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									whileHover={{ scale: 1.05 }}
								>
									<Link
										to='/dashboard'
										className='text-xs font-bold text-emerald-500 uppercase tracking-widest hover:text-emerald-400'
									>
										{t("nav.dashboard")}
									</Link>
								</motion.div>
							)}
						</motion.div>

						{/* Language Switcher Desktop */}
						<motion.div
							className='flex bg-slate-900 border border-slate-700 rounded-lg p-1 shadow-sm'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 }}
						>
							{(["EN", "RU", "UZ"] as const).map((lang) => (
								<motion.button
									key={lang}
									onClick={() => setLanguage(lang)}
									className={`px-3 py-1.5 text-[10px] font-bold rounded-md transition-all ${
										language === lang
											? "bg-blue-600 text-white shadow-md"
											: "text-slate-400 hover:text-slate-200"
									}`}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									{lang}
								</motion.button>
							))}
						</motion.div>
					</div>

					{/* Mobile Menu Toggle Button - Requirement 7.2 */}
					<motion.button
						className='lg:hidden p-2 text-slate-100 focus:outline-none z-[210]'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						whileTap={{ scale: 0.9 }}
					>
						<div className='w-6 h-5 relative flex flex-col justify-between'>
							<motion.span
								className='w-full h-0.5 bg-current'
								animate={{
									rotate: isMenuOpen ? 45 : 0,
									y: isMenuOpen ? 9 : 0,
								}}
								transition={{ duration: 0.3 }}
							/>
							<motion.span
								className='w-full h-0.5 bg-current'
								animate={{
									opacity: isMenuOpen ? 0 : 1,
									scaleX: isMenuOpen ? 0 : 1,
								}}
								transition={{ duration: 0.3 }}
							/>
							<motion.span
								className='w-full h-0.5 bg-current'
								animate={{
									rotate: isMenuOpen ? -45 : 0,
									y: isMenuOpen ? -9 : 0,
								}}
								transition={{ duration: 0.3 }}
							/>
						</div>
					</motion.button>
				</nav>

				{/* 
          Requirement 1 & 2: Fullscreen Mobile Menu (Fixed + Inset-0) 
          Requirement 4: Smooth Slide-in Animation
        */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className='fixed inset-0 w-screen h-screen bg-slate-950 z-[200] lg:hidden overflow-y-auto'
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						>
							<div className='flex flex-col h-full pt-24 pb-12 px-6'>
								{/* Requirement 5: Large Typography Column */}
								<motion.div
									className='flex flex-col space-y-2'
									initial='hidden'
									animate='visible'
									variants={{
										hidden: { opacity: 0 },
										visible: {
											opacity: 1,
											transition: { staggerChildren: 0.08, delayChildren: 0.2 },
										},
									}}
								>
									{navLinks.map((link) => (
										<motion.div
											key={link.to}
											variants={{
												hidden: { opacity: 0, x: 50 },
												visible: {
													opacity: 1,
													x: 0,
													transition: {
														duration: 0.4,
														ease: [0.22, 1, 0.36, 1],
													},
												},
											}}
										>
											<NavLink
												to={link.to}
												onClick={handleLinkClick}
												className={({ isActive }) =>
													`block px-6 py-5 rounded-[2rem] text-4xl font-black uppercase tracking-tighter transition-all ${
														isActive
															? "text-blue-500 bg-slate-900"
															: "text-slate-100 active:bg-slate-900"
													}`
												}
											>
												{link.label}
											</NavLink>
										</motion.div>
									))}

									{isAuthenticated && (
										<motion.div
											variants={{
												hidden: { opacity: 0, x: 50 },
												visible: { opacity: 1, x: 0 },
											}}
										>
											<Link
												to='/dashboard'
												onClick={handleLinkClick}
												className='block px-6 py-5 rounded-[2rem] text-4xl font-black text-emerald-500 uppercase tracking-tighter active:bg-slate-900 transition-all'
											>
												{t("nav.dashboard")}
											</Link>
										</motion.div>
									)}
								</motion.div>

								{/* Requirement 6: Language Switcher at Bottom */}
								<motion.div
									className='mt-auto pt-10 space-y-6'
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.5 }}
								>
									<div className='space-y-4'>
										<p className='px-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500'>
											Environment Language
										</p>
										<div className='flex gap-3 px-2'>
											{(["EN", "RU", "UZ"] as const).map((lang, i) => (
												<motion.button
													key={lang}
													onClick={() => setLanguage(lang)}
													className={`flex-grow py-5 text-sm font-black rounded-2xl border-2 transition-all ${
														language === lang
															? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/20"
															: "border-slate-800 bg-slate-900 text-slate-400"
													}`}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 0.7 + i * 0.1 }}
													whileHover={{ scale: 1.02 }}
													whileTap={{ scale: 0.98 }}
												>
													{lang}
												</motion.button>
											))}
										</div>
									</div>
									<motion.div
										className='pt-8 border-t border-slate-800 px-6'
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: 1 }}
									>
										<p className='text-[10px] text-slate-600 font-black uppercase tracking-widest'>
											Architecture v2.0 • 2024
										</p>
									</motion.div>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.header>

			<main className='flex-grow'>
				<div className='container mx-auto px-4 md:px-6 py-8'>
					<Outlet />
				</div>
			</main>

			<footer className='bg-slate-900 border-t border-slate-800 py-16'>
				<div className='container mx-auto px-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left'>
						<motion.div
							className='space-y-4'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link
									to='/'
									className='text-2xl font-black tracking-tighter text-blue-500 inline-block'
								>
									ATIF
								</Link>
							</motion.div>
							<p className='text-sm text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0'>
								Frontend Architect focused on creating high-performance digital
								experiences with React and modern CSS.
							</p>
						</motion.div>
						<motion.div
							className='space-y-4'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.1,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<h4 className='font-bold text-slate-100'>Navigation</h4>
							<ul className='space-y-2'>
								{navLinks.slice(0, 4).map((link, index) => (
									<motion.li
										key={link.to}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2 + index * 0.05 }}
									>
										<Link
											to={link.to}
											className='text-sm text-slate-400 hover:text-blue-500 transition-colors inline-block'
										>
											<motion.span
												whileHover={{ x: 5 }}
												className='inline-block'
											>
												{link.label}
											</motion.span>
										</Link>
									</motion.li>
								))}
							</ul>
						</motion.div>
						<motion.div
							className='space-y-4'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<h4 className='font-bold text-slate-100'>Contact</h4>
							<ul className='space-y-2'>
								<motion.li
									className='text-sm text-slate-400'
									whileHover={{ color: "#3b82f6", x: 5 }}
								>
									saddiabu4@gmail.com
								</motion.li>
								<motion.li
									className='text-sm text-slate-400'
									whileHover={{ color: "#3b82f6", x: 5 }}
								>
									+998 90 149 79 90
								</motion.li>
							</ul>
						</motion.div>
						<motion.div
							className='space-y-4'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.5,
								delay: 0.3,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<h4 className='font-bold text-slate-100'>Follow</h4>
							<div className='flex justify-center md:justify-start gap-4'>
								{[
									{
										href: "https://github.com/saddiabu4",
										icon: <Github />,
										delay: 0,
									},
									{
										href: "https://www.linkedin.com/in/sodiqjonov-abdulatif-35a243371/",
										icon: <Linkedin />,
										delay: 0.1,
									},
									{ href: "https://x.com/saddi_abu/", icon: <X />, delay: 0.2 },
									{
										href: "https://t.me/saddi_abu",
										icon: <Send />,
										delay: 0.3,
									},
								].map((social, index) => (
									<motion.a
										key={index}
										href={social.href}
										className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm'
										initial={{ opacity: 0, scale: 0 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{
											delay: 0.4 + social.delay,
											type: "spring",
											stiffness: 300,
											damping: 20,
										}}
										whileHover={{ scale: 1.15, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
									>
										{social.icon}
									</motion.a>
								))}
							</div>
						</motion.div>
					</div>
					<motion.div
						className='mt-16 pt-8 border-t border-slate-800 text-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						<p className='text-xs text-slate-500'>
							© 2024 Abdulatif. Barcha huquqlar himoyalangan.
						</p>
					</motion.div>
				</div>
			</footer>
		</div>
	)
}

export default Layout
