import { Blog, Experience, Project, Service, Skill } from "./types"

export const PROJECTS: Project[] = [
	{
		id: "1",
		title: "Freelancer Platform",
		description:
			"Freelancerlar uchun professional platforma - ish topish va buyurtma berish.",
		longDescription:
			"Freelancer Platform - freelancerlar va mijozlarni bog'lovchi zamonaviy platforma. Ish topish, buyurtma berish va portfolio yaratish imkoniyatlari.",
		techStack: ["React", "Tailwind CSS", "TypeScript", "REST API"],
		image:
			"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
		liveUrl: "https://freelancer-sayt.vercel.app/",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "2",
		title: "Atif Transport 3D",
		description:
			"Zamonaviy 3D animatsiyali transport web sayt - yuk tashish va logistika xizmatlari.",
		longDescription:
			"Bu loyiha zamonaviy 3D animatsiyalar va interaktiv UI bilan transport xizmatlarini taqdim etadi. React va Tailwind CSS yordamida yaratilgan.",
		techStack: ["React", "Tailwind CSS", "TypeScript", "3D Animation"],
		image:
			"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
		liveUrl: "https://atif-ten.vercel.app/",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "3",
		title: "Transport Booking System",
		description:
			"Transport bronlash tizimi - qulay va tez bron qilish imkoniyati.",
		longDescription:
			"Foydalanuvchilar uchun transport xizmatlarini onlayn bron qilish imkonini beruvchi zamonaviy platforma.",
		techStack: ["React", "Tailwind CSS", "REST API", "TypeScript"],
		image:
			"https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
		liveUrl: "https://atif-uz-transport-booking.vercel.app/",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "4",
		title: "Modern Transport Solutions",
		description:
			"Zamonaviy transport yechimlari - booking va boshqaruv tizimi.",
		longDescription:
			"Modern Transport Solutions - transport xizmatlari uchun to'liq yechim bo'lib, bronlash, kuzatish va hisobot olish imkoniyatlarini taqdim etadi.",
		techStack: ["React", "Tailwind CSS", "Redux", "TypeScript"],
		image:
			"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
		liveUrl: "https://atif-uz-modern-transport-solutions.vercel.app/#/booking",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "5",
		title: "SoftPoint Landing Page",
		description: "SoftPoint IT kompaniyasi uchun zamonaviy landing page.",
		longDescription:
			"Professional IT kompaniya uchun yaratilgan zamonaviy landing page - animatsiyalar va responsive dizayn bilan.",
		techStack: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
		liveUrl: "https://soft-point-landing-page.vercel.app/",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "6",
		title: "Relay Business Portfolio",
		description: "Biznes portfolio sayti - professional va zamonaviy dizayn.",
		longDescription:
			"Relay Business Portfolio - kompaniyalar uchun professional portfolio sayti, barcha xizmatlar va loyihalarni ko'rsatish imkoniyati.",
		techStack: ["React", "Tailwind CSS", "TypeScript", "Responsive Design"],
		image:
			"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
		liveUrl: "https://relay-business-portfolio.vercel.app/",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "7",
		title: "DigitalArt NFT Marketplace",
		description:
			"NFT san'at bozori - raqamli san'at sotib olish va sotish platformasi.",
		longDescription:
			"DigitalArt NFT Marketplace - raqamli san'at asarlarini sotib olish, sotish va kollektsiya qilish uchun zamonaviy platforma.",
		techStack: ["React", "Tailwind CSS", "Web3", "TypeScript"],
		image:
			"https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
		liveUrl: "https://digitalart-nft-marketplace.vercel.app/",
		githubUrl: "#",
		category: "UI/UX",
	},
	{
		id: "8",
		title: "Oyiin Platform",
		description: "O'yin platformasi - interaktiv va qiziqarli web ilova.",
		longDescription:
			"Oyiin - foydalanuvchilar uchun interaktiv o'yin platformasi bo'lib, turli xil o'yinlar va musobaqalarni taqdim etadi.",
		techStack: ["React", "Tailwind CSS", "Game Logic", "TypeScript"],
		image:
			"https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
		liveUrl: "https://oyiin.vercel.app/",
		githubUrl: "#",
		category: "Web",
	},
	{
		id: "9",
		title: "Paint Loyihasi",
		description: "Rasm chizish ilovasi - kreativ va interaktiv paint dasturi.",
		longDescription:
			"Abdulatif Paint - brauzerda ishlaydigan professional rasm chizish ilovasi, turli cho'tkalar va ranglar bilan ishlash imkoniyati.",
		techStack: ["React", "Canvas API", "Tailwind CSS", "TypeScript"],
		image:
			"https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=500&fit=crop",
		liveUrl: "https://abdulatif-paint-loyihasi.vercel.app/",
		githubUrl: "#",
		category: "UI/UX",
	},
]

export const SKILLS: Skill[] = [
	{ name: "HTML5", level: 95, category: "Frontend", icon: "🌐" },
	{ name: "CSS3", level: 90, category: "Frontend", icon: "🎨" },
	{ name: "Tailwind CSS", level: 95, category: "Frontend", icon: "🍃" },
	{ name: "JavaScript", level: 92, category: "Frontend", icon: "🟨" },
	{ name: "React.js", level: 94, category: "Frontend", icon: "⚛️" },
	{ name: "TypeScript", level: 85, category: "Frontend", icon: "📘" },
	{ name: "Git & GitHub", level: 88, category: "Tools", icon: "🔀" },
	{ name: "REST API", level: 90, category: "Tools", icon: "🔌" },
	{ name: "Responsive Design", level: 95, category: "Design", icon: "📱" },
	{ name: "UI/UX Basics", level: 80, category: "Design", icon: "✨" },
]

export const BLOGS: Blog[] = [
	{
		id: "1",
		title: "Mastering React 18 Patterns",
		excerpt:
			"Deep dive into useTransition, useDeferredValue, and concurrent rendering.",
		content:
			"React 18 brought a significant shift in how we handle rendering. In this post, we explore the nuances of concurrent mode...",
		date: "March 15, 2024",
		author: "Abdulatif",
		category: "Frontend",
		image: "https://picsum.photos/seed/blog1/800/400",
	},
	{
		id: "2",
		title: "Tailwind CSS vs. Styled Components",
		excerpt:
			"A comprehensive comparison of utility-first vs. runtime CSS approach.",
		content:
			"The styling landscape in the React ecosystem is vast. We analyze performance, developer experience, and scalability...",
		date: "February 20, 2024",
		author: "Abdulatif",
		category: "Styling",
		image: "https://picsum.photos/seed/blog2/800/400",
	},
]

export const SERVICES: Service[] = [
	{
		id: "1",
		title: "Web Development",
		description:
			"Building fast, accessible, and high-converting web applications.",
		icon: "💻",
	},
	{
		id: "2",
		title: "Mobile Apps",
		description: "Cross-platform mobile experiences that feel native.",
		icon: "📱",
	},
	{
		id: "3",
		title: "UI/UX Design",
		description:
			"User-centric designs that prioritize usability and aesthetics.",
		icon: "✒️",
	},
]

export const EXPERIENCES: Experience[] = [
	{
		id: "1",
		company: "TechNova Solutions",
		role: "Senior Frontend Developer",
		period: "2021 - Present",
		description:
			"Leading the development of complex enterprise dashboards and mentoring junior developers.",
	},
	{
		id: "2",
		company: "Digital Pulse",
		role: "Frontend Engineer",
		period: "2019 - 2021",
		description:
			"Spearheaded the migration of legacy jQuery apps to modern React functional components.",
	},
]
