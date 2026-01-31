import React, { Suspense, lazy } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import { AuthProvider } from "./context/AuthContext"
import { LanguageProvider } from "./context/LanguageContext"

const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Skills = lazy(() => import("./pages/Skills"))
const Projects = lazy(() => import("./pages/Projects"))
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"))
const Experience = lazy(() => import("./pages/Experience"))
const Services = lazy(() => import("./pages/Services"))
const Blog = lazy(() => import("./pages/Blog"))
const BlogDetails = lazy(() => import("./pages/BlogDetails"))
const Contact = lazy(() => import("./pages/Contact"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Login = lazy(() => import("./pages/Login"))
const NotFound = lazy(() => import("./pages/NotFound"))

const LoadingSpinner = () => (
	<div className='min-h-screen flex items-center justify-center bg-slate-950'>
		<div className='relative w-16 h-16'>
			<div className='absolute inset-0 border-4 border-blue-600/10 rounded-full'></div>
			<div className='absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
		</div>
	</div>
)

const App: React.FC = () => {
	return (
		<LanguageProvider>
			<AuthProvider>
				<HashRouter>
					<Suspense fallback={<LoadingSpinner />}>
						<Routes>
							<Route path='/' element={<Layout />}>
								<Route index element={<Home />} />
								<Route path='about' element={<About />} />
								<Route path='skills' element={<Skills />} />
								<Route path='projects' element={<Projects />} />
								<Route path='projects/:id' element={<ProjectDetails />} />
								<Route path='experience' element={<Experience />} />
								<Route path='services' element={<Services />} />
								<Route path='blog' element={<Blog />} />
								<Route path='blog/:id' element={<BlogDetails />} />
								<Route path='contact' element={<Contact />} />
								<Route path='login' element={<Login />} />
								<Route path='dashboard' element={<Dashboard />} />
								<Route path='*' element={<NotFound />} />
							</Route>
						</Routes>
					</Suspense>
				</HashRouter>
			</AuthProvider>
		</LanguageProvider>
	)
}

export default App
