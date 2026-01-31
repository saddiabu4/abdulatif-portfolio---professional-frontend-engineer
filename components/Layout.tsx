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

	return (
		<div className='min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden'>
			<header className='sticky top-0 z-[100] glass shadow-lg shadow-slate-950/50 transition-all duration-300'>
				<nav className='container mx-auto px-4 md:px-6 py-4 flex justify-between items-center'>
					<Link
						to='/'
						className='text-xl md:text-2xl font-extrabold tracking-tighter text-blue-500 relative z-[210]'
					>
						ABDULATIF
						<span className={isMenuOpen ? "text-slate-500" : "text-slate-100"}>
							.DEV
						</span>
					</Link>

					{/* Desktop Nav */}
					<div className='hidden lg:flex items-center space-x-6'>
						<div className='flex space-x-6 items-center border-r border-slate-700 pr-6'>
							{navLinks.map((link) => (
								<NavLink
									key={link.to}
									to={link.to}
									className={({ isActive }) =>
										`text-xs font-bold uppercase tracking-widest transition-colors hover:text-blue-400 ${
											isActive ? "text-blue-500" : "text-slate-400"
										}`
									}
								>
									{link.label}
								</NavLink>
							))}
							{isAuthenticated && (
								<Link
									to='/dashboard'
									className='text-xs font-bold text-emerald-500 uppercase tracking-widest hover:text-emerald-400'
								>
									{t("nav.dashboard")}
								</Link>
							)}
						</div>

						{/* Language Switcher Desktop */}
						<div className='flex bg-slate-900 border border-slate-700 rounded-lg p-1 shadow-sm'>
							{(["EN", "RU", "UZ"] as const).map((lang) => (
								<button
									key={lang}
									onClick={() => setLanguage(lang)}
									className={`px-3 py-1.5 text-[10px] font-bold rounded-md transition-all ${
										language === lang
											? "bg-blue-600 text-white shadow-md"
											: "text-slate-400 hover:text-slate-200"
									}`}
								>
									{lang}
								</button>
							))}
						</div>
					</div>

					{/* Mobile Menu Toggle Button - Requirement 7.2 */}
					<button
						className='lg:hidden p-2 text-slate-100 focus:outline-none z-[210]'
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					>
						<div className='w-6 h-5 relative flex flex-col justify-between'>
							<span
								className={`w-full h-0.5 bg-current transition-all duration-300 ${
									isMenuOpen ? "rotate-45 translate-y-2.25 mt-2" : ""
								}`}
							></span>
							<span
								className={`w-full h-0.5 bg-current transition-all duration-300 ${
									isMenuOpen ? "opacity-0 scale-x-0" : ""
								}`}
							></span>
							<span
								className={`w-full h-0.5 bg-current transition-all duration-300 ${
									isMenuOpen ? "-rotate-45 -translate-y-2.25 mb-2" : ""
								}`}
							></span>
						</div>
					</button>
				</nav>

				{/* 
          Requirement 1 & 2: Fullscreen Mobile Menu (Fixed + Inset-0) 
          Requirement 4: Smooth Slide-in Animation
        */}
				<div
					className={`fixed inset-0 w-screen h-screen bg-slate-950 z-[200] lg:hidden transition-transform duration-500 ease-in-out transform ${
						isMenuOpen ? "translate-x-0" : "translate-x-full"
					} overflow-y-auto`}
				>
					<div className='flex flex-col h-full pt-24 pb-12 px-6'>
						{/* Requirement 5: Large Typography Column */}
						<div className='flex flex-col space-y-2'>
							{navLinks.map((link, idx) => (
								<NavLink
									key={link.to}
									to={link.to}
									onClick={handleLinkClick}
									style={{
										transitionDelay: isMenuOpen ? `${idx * 50}ms` : "0ms",
									}}
									className={({ isActive }) =>
										`block px-6 py-5 rounded-[2rem] text-4xl font-black uppercase tracking-tighter transition-all duration-300 transform ${
											isMenuOpen
												? "translate-x-0 opacity-100"
												: "translate-x-12 opacity-0"
										} ${
											isActive
												? "text-blue-500 bg-slate-900"
												: "text-slate-100 active:bg-slate-900"
										}`
									}
								>
									{link.label}
								</NavLink>
							))}

							{isAuthenticated && (
								<Link
									to='/dashboard'
									onClick={handleLinkClick}
									className='block px-6 py-5 rounded-[2rem] text-4xl font-black text-emerald-500 uppercase tracking-tighter active:bg-slate-900 transition-all duration-300'
								>
									{t("nav.dashboard")}
								</Link>
							)}
						</div>

						{/* Requirement 6: Language Switcher at Bottom */}
						<div className='mt-auto pt-10 space-y-6'>
							<div className='space-y-4'>
								<p className='px-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500'>
									Environment Language
								</p>
								<div className='flex gap-3 px-2'>
									{(["EN", "RU", "UZ"] as const).map((lang) => (
										<button
											key={lang}
											onClick={() => setLanguage(lang)}
											className={`flex-grow py-5 text-sm font-black rounded-2xl border-2 transition-all active:scale-95 ${
												language === lang
													? "bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/20"
													: "border-slate-800 bg-slate-900 text-slate-400"
											}`}
										>
											{lang}
										</button>
									))}
								</div>
							</div>
							<div className='pt-8 border-t border-slate-800 px-6'>
								<p className='text-[10px] text-slate-600 font-black uppercase tracking-widest'>
									Architecture v2.0 • 2024
								</p>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className='flex-grow'>
				<div className='container mx-auto px-4 md:px-6 py-8'>
					<Outlet />
				</div>
			</main>

			<footer className='bg-slate-900 border-t border-slate-800 py-16'>
				<div className='container mx-auto px-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left'>
						<div className='space-y-4'>
							<Link
								to='/'
								className='text-2xl font-black tracking-tighter text-blue-500'
							>
								ABDULATIF<span className='text-slate-100'>.DEV</span>
							</Link>
							<p className='text-sm text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0'>
								Frontend Architect focused on creating high-performance digital
								experiences with React and modern CSS.
							</p>
						</div>
						<div className='space-y-4'>
							<h4 className='font-bold text-slate-100'>Navigation</h4>
							<ul className='space-y-2'>
								{navLinks.slice(0, 4).map((link) => (
									<li key={link.to}>
										<Link
											to={link.to}
											className='text-sm text-slate-400 hover:text-blue-500 transition-colors'
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className='space-y-4'>
							<h4 className='font-bold text-slate-100'>Contact</h4>
							<ul className='space-y-2'>
								<li className='text-sm text-slate-400'>saddiabu4@gmail.com</li>
								<li className='text-sm text-slate-400'>+998 90 149 79 90</li>
							</ul>
						</div>
						<div className='space-y-4'>
							<h4 className='font-bold text-slate-100'>Follow</h4>
							<div className='flex justify-center md:justify-start gap-4'>
								<a
									href='#'
									className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm'
								>
									<Github />
								</a>
								<a
									href='#'
									className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm'
								>
									<Linkedin />
								</a>
								<a
									href='#'
									className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm'
								>
									<X />
								</a>
								<a
									href='#'
									className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm'
								>
									<Send />
								</a>
							</div>
						</div>
					</div>
					<div className='mt-16 pt-8 border-t border-slate-800 text-center'>
						<p className='text-xs text-slate-500'>
							© 2024 Abdulatif. Barcha huquqlar himoyalangan.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Layout
