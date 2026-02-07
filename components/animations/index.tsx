import { motion, useInView, useReducedMotion, Variants } from "framer-motion"
import React, { ReactNode, useRef } from "react"

// Animation Variants
export const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

export const fadeInDown: Variants = {
	hidden: { opacity: 0, y: -60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

export const fadeInLeft: Variants = {
	hidden: { opacity: 0, x: -60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

export const fadeInRight: Variants = {
	hidden: { opacity: 0, x: 60 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

export const scaleUp: Variants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
}

export const staggerContainer: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
}

export const staggerItem: Variants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
}

// Page transition variants
export const pageVariants: Variants = {
	initial: { opacity: 0, y: 20 },
	enter: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
	},
}

// Hover animations
export const cardHover = {
	rest: { scale: 1, y: 0 },
	hover: {
		scale: 1.02,
		y: -8,
		transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
	},
	tap: { scale: 0.98 },
}

export const buttonHover = {
	rest: { scale: 1 },
	hover: { scale: 1.05 },
	tap: { scale: 0.95 },
}

export const imageHover = {
	rest: { scale: 1 },
	hover: { scale: 1.1, transition: { duration: 0.6 } },
}

// Text reveal animation
export const textReveal: Variants = {
	hidden: { opacity: 0, y: 100 },
	visible: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.8,
			ease: [0.22, 1, 0.36, 1],
		},
	}),
}

// Blur animation
export const blurIn: Variants = {
	hidden: { opacity: 0, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		filter: "blur(0px)",
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

// Slide animations
export const slideInFromBottom: Variants = {
	hidden: { y: "100%" },
	visible: {
		y: 0,
		transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
	},
}

// Props interfaces
interface AnimatedSectionProps {
	children: ReactNode
	className?: string
	delay?: number
	direction?: "up" | "down" | "left" | "right"
}

interface StaggerContainerProps {
	children: ReactNode
	className?: string
	delay?: number
}

interface AnimatedTextProps {
	text: string
	className?: string
	as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

interface AnimatedCardProps {
	children: ReactNode
	className?: string
	index?: number
}

interface PageTransitionProps {
	children: ReactNode
	className?: string
}

// Animated Section Component - for scroll animations
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
	children,
	className = "",
	delay = 0,
	direction = "up",
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })
	const shouldReduceMotion = useReducedMotion()

	const directions = {
		up: fadeInUp,
		down: fadeInDown,
		left: fadeInLeft,
		right: fadeInRight,
	}

	const variants = directions[direction]

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			initial='hidden'
			animate={isInView ? "visible" : "hidden"}
			variants={variants}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</motion.div>
	)
}

// Stagger Container Component
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
	children,
	className = "",
	delay = 0,
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-50px" })
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			initial='hidden'
			animate={isInView ? "visible" : "hidden"}
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
						delayChildren: delay / 1000,
					},
				},
			}}
		>
			{children}
		</motion.div>
	)
}

// Stagger Item Component
export const StaggerItem: React.FC<{
	children: ReactNode
	className?: string
}> = ({ children, className = "" }) => {
	return (
		<motion.div className={className} variants={staggerItem}>
			{children}
		</motion.div>
	)
}

// Animated Card Component with hover effects
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
	children,
	className = "",
	index = 0,
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-50px" })
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			whileHover={{
				y: -10,
				transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
			}}
			whileTap={{ scale: 0.98 }}
		>
			{children}
		</motion.div>
	)
}

// Page Transition Wrapper
export const PageTransition: React.FC<PageTransitionProps> = ({
	children,
	className = "",
}) => {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	)
}

// Animated Text Component with letter animation
export const AnimatedText: React.FC<AnimatedTextProps> = ({
	text,
	className = "",
	as = "p",
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-50px" })
	const shouldReduceMotion = useReducedMotion()
	const Tag = motion[as]

	if (shouldReduceMotion) {
		const StaticTag = as
		return <StaticTag className={className}>{text}</StaticTag>
	}

	const words = text.split(" ")

	return (
		<Tag ref={ref} className={className}>
			{words.map((word, i) => (
				<motion.span
					key={i}
					className='inline-block mr-[0.25em]'
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{
						duration: 0.4,
						delay: i * 0.05,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					{word}
				</motion.span>
			))}
		</Tag>
	)
}

// Animated Button Component
export const AnimatedButton: React.FC<{
	children: ReactNode
	className?: string
	onClick?: () => void
	type?: "button" | "submit" | "reset"
	disabled?: boolean
}> = ({
	children,
	className = "",
	onClick,
	type = "button",
	disabled = false,
}) => {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return (
			<button
				className={className}
				onClick={onClick}
				type={type}
				disabled={disabled}
			>
				{children}
			</button>
		)
	}

	return (
		<motion.button
			className={className}
			onClick={onClick}
			type={type}
			disabled={disabled}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.button>
	)
}

// Animated Image Component
export const AnimatedImage: React.FC<{
	src: string
	alt: string
	className?: string
}> = ({ src, alt, className = "" }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <img src={src} alt={alt} className={className} />
	}

	return (
		<motion.div
			ref={ref}
			className='overflow-hidden'
			initial={{ opacity: 0, scale: 1.1 }}
			animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
		>
			<motion.img
				src={src}
				alt={alt}
				className={className}
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.5 }}
			/>
		</motion.div>
	)
}

// Counter Animation Component
export const AnimatedCounter: React.FC<{
	value: number | string
	suffix?: string
	className?: string
}> = ({ value, suffix = "", className = "" }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const shouldReduceMotion = useReducedMotion()
	const numericValue = typeof value === "string" ? parseInt(value) || 0 : value

	if (shouldReduceMotion) {
		return (
			<span className={className}>
				{value}
				{suffix}
			</span>
		)
	}

	return (
		<motion.span
			ref={ref}
			className={className}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : { opacity: 0 }}
		>
			<motion.span
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				{isInView && (
					<motion.span
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						{numericValue}
						{suffix}
					</motion.span>
				)}
			</motion.span>
		</motion.span>
	)
}

// Floating Animation Component
export const FloatingElement: React.FC<{
	children: ReactNode
	className?: string
	duration?: number
	distance?: number
}> = ({ children, className = "", duration = 3, distance = 10 }) => {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			animate={{
				y: [-distance, distance, -distance],
			}}
			transition={{
				duration,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		>
			{children}
		</motion.div>
	)
}

// Pulse Animation Component
export const PulseElement: React.FC<{
	children: ReactNode
	className?: string
}> = ({ children, className = "" }) => {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			className={className}
			animate={{
				scale: [1, 1.05, 1],
				opacity: [1, 0.8, 1],
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut",
			}}
		>
			{children}
		</motion.div>
	)
}

// Slide In Component
export const SlideIn: React.FC<{
	children: ReactNode
	className?: string
	direction?: "left" | "right" | "up" | "down"
	delay?: number
}> = ({ children, className = "", direction = "left", delay = 0 }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-50px" })
	const shouldReduceMotion = useReducedMotion()

	const directionMap = {
		left: { x: -100, y: 0 },
		right: { x: 100, y: 0 },
		up: { x: 0, y: 100 },
		down: { x: 0, y: -100 },
	}

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, ...directionMap[direction] }}
			animate={
				isInView
					? { opacity: 1, x: 0, y: 0 }
					: { opacity: 0, ...directionMap[direction] }
			}
			transition={{
				duration: 0.6,
				delay: delay / 1000,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{children}
		</motion.div>
	)
}

// Reveal on scroll component
export const RevealOnScroll: React.FC<{
	children: ReactNode
	className?: string
	width?: "fit-content" | "100%"
}> = ({ children, className = "", width = "fit-content" }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>
	}

	return (
		<div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
			<motion.div
				className={className}
				initial={{ opacity: 0, y: 75 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
			>
				{children}
			</motion.div>
			<motion.div
				style={{
					position: "absolute",
					top: 4,
					bottom: 4,
					left: 0,
					right: 0,
					background: "#3b82f6",
					zIndex: 20,
				}}
				initial={{ left: 0 }}
				animate={isInView ? { left: "100%" } : { left: 0 }}
				transition={{ duration: 0.5, ease: "easeIn" }}
			/>
		</div>
	)
}

// Magnetic button effect
export const MagneticButton: React.FC<{
	children: ReactNode
	className?: string
	onClick?: () => void
}> = ({ children, className = "", onClick }) => {
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return (
			<button className={className} onClick={onClick}>
				{children}
			</button>
		)
	}

	return (
		<motion.button
			className={className}
			onClick={onClick}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
		>
			{children}
		</motion.button>
	)
}

// Progress bar animation
export const AnimatedProgressBar: React.FC<{
	progress: number
	className?: string
	barClassName?: string
}> = ({ progress, className = "", barClassName = "" }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const shouldReduceMotion = useReducedMotion()

	if (shouldReduceMotion) {
		return (
			<div className={className}>
				<div className={barClassName} style={{ width: `${progress}%` }} />
			</div>
		)
	}

	return (
		<div ref={ref} className={className}>
			<motion.div
				className={barClassName}
				initial={{ width: 0 }}
				animate={isInView ? { width: `${progress}%` } : { width: 0 }}
				transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
			/>
		</div>
	)
}

export default {
	AnimatedSection,
	StaggerContainer,
	StaggerItem,
	AnimatedCard,
	PageTransition,
	AnimatedText,
	AnimatedButton,
	AnimatedImage,
	AnimatedCounter,
	FloatingElement,
	PulseElement,
	SlideIn,
	RevealOnScroll,
	MagneticButton,
	AnimatedProgressBar,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	scaleUp,
	staggerContainer,
	staggerItem,
	pageVariants,
	cardHover,
	buttonHover,
	imageHover,
	textReveal,
	blurIn,
	slideInFromBottom,
}
