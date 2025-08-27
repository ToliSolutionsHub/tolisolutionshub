"use client"

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

// Brand Icons from react-icons - Only import what we use
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGraphql,
  SiSolidity,
  SiWeb3Dotjs,
  SiTensorflow,
  SiOpenai,
  SiFirebase,
  SiPrisma,
  SiFlutter,
  SiEthereum,
  SiIpfs,
  SiVercel,
  SiGithub,
  SiLinkedin
} from 'react-icons/si'
import { HiOutlineMail } from 'react-icons/hi'
import { BsArrowUpRight, BsX } from 'react-icons/bs'
import Image from 'next/image'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isHovering, setIsHovering] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])

  useEffect(() => {
    setMounted(true)
    
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    let mouseTimer: NodeJS.Timeout
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseTimer) return
      mouseTimer = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        mouseTimer = null as any
      }, 16)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!mounted) return null

  const skills = [
    { 
      name: "Frontend Architect", 
      icon: <SiReact className="text-3xl" />,
      level: 98,
      color: "#61DAFB",
      techs: [
        { name: "React", icon: <SiReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> }
      ]
    },
    { 
      name: "Backend Systems", 
      icon: <SiNodedotjs className="text-3xl" />,
      level: 95,
      color: "#339933",
      techs: [
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Python", icon: <SiPython /> },
        { name: "GraphQL", icon: <SiGraphql /> }
      ]
    },
    { 
      name: "Database Expert", 
      icon: <SiPostgresql className="text-3xl" />,
      level: 92,
      color: "#4169E1",
      techs: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Redis", icon: <SiRedis /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    { 
      name: "Cloud Native", 
      icon: <SiAmazon className="text-3xl" />,
      level: 90,
      color: "#FF9900",
      techs: [
        { name: "AWS", icon: <SiAmazon /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Vercel", icon: <SiVercel /> }
      ]
    },
    {
      name: "Blockchain Dev",
      icon: <SiEthereum className="text-3xl" />,
      level: 85,
      color: "#627EEA",
      techs: [
        { name: "Solidity", icon: <SiSolidity /> },
        { name: "Web3.js", icon: <SiWeb3Dotjs /> },
        { name: "Ethereum", icon: <SiEthereum /> },
        { name: "IPFS", icon: <SiIpfs /> }
      ]
    },
    {
      name: "AI Integration",
      icon: <SiOpenai className="text-3xl" />,
      level: 88,
      color: "#00A67E",
      techs: [
        { name: "OpenAI", icon: <SiOpenai /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Python", icon: <SiPython /> },
        { name: "LangChain", icon: <SiOpenai /> }
      ]
    }
  ]

  const techGrid = [
    { name: "React", icon: <SiReact />, color: "#61DAFB", category: "frontend" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", category: "frontend" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", category: "frontend" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", category: "frontend" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", category: "backend" },
    { name: "Python", icon: <SiPython />, color: "#3776AB", category: "backend" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", category: "database" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "database" },
    { name: "Redis", icon: <SiRedis />, color: "#DC382D", category: "database" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1", category: "database" },
    { name: "AWS", icon: <SiAmazon />, color: "#FF9900", category: "cloud" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED", category: "cloud" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5", category: "cloud" },
    { name: "Git", icon: <SiGit />, color: "#F05032", category: "tools" },
    { name: "GraphQL", icon: <SiGraphql />, color: "#E10098", category: "tools" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", category: "tools" },
    { name: "Solidity", icon: <SiSolidity />, color: "#363636", category: "blockchain" },
    { name: "Ethereum", icon: <SiEthereum />, color: "#627EEA", category: "blockchain" },
    { name: "Web3.js", icon: <SiWeb3Dotjs />, color: "#F16822", category: "blockchain" },
    { name: "OpenAI", icon: <SiOpenai />, color: "#00A67E", category: "ai" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00", category: "ai" },
    { name: "Prisma", icon: <SiPrisma />, color: "#2D3748", category: "tools" },
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B", category: "mobile" }
  ]

  const projects = [
    {
      title: "Fueled – Digital Done Right",
      category: "Enterprise Platform",
      description: "Digital transformation agency that designs and builds high-quality digital products",
      fullDescription: "Fueled is a digital transformation agency that designs and builds high-quality digital products that drive real business results. With a team of over 300 experts, Fueled offers services in digital strategy, UX and product design, engineering, AI, cloud infrastructure, SEO, and analytics. Their clientele includes global brands like Apple, Microsoft, Disney, The New York Times, and Harvard, as well as public sector platforms for The White House and Mayo Clinic.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiAmazon key="aws" />],
      color: "from-blue-600 to-purple-600",
      metrics: { clients: "Fortune 500", team: "300+", experience: "15+ years" },
      url: "https://fueled.com/",
      folder: "fueled",
      images: ["/projects/fueled/Screenshot_1.png", "/projects/fueled/Screenshot_2.png", "/projects/fueled/Screenshot_3.png", "/projects/fueled/Screenshot_4.png"]
    },
    {
      title: "SUNY College of Optometry",
      category: "Healthcare Education",
      description: "Comprehensive optometry education and patient care platform",
      fullDescription: "Founded in 1971 and located in Midtown Manhattan, the SUNY College of Optometry offers comprehensive programs including the Doctor of Optometry (OD), Master of Science (MS), and Doctor of Philosophy (PhD) in Vision Science. The college is renowned for its rigorous academic curriculum, extensive clinical training, and cutting-edge research initiatives. Its University Eye Center is one of the largest outpatient vision care facilities in the United States, providing services to over 60,000 patients annually.",
      tech: [<SiReact key="react" />, <SiPostgresql key="pg" />, <SiDocker key="docker" />],
      color: "from-emerald-600 to-teal-600",
      metrics: { patients: "60K+", programs: "3", founded: "1971" },
      url: "https://www.sunyopt.edu/",
      folder: "COLLEGE OF OPTOMETRY",
      images: ["/projects/COLLEGE OF OPTOMETRY/Screenshot_1.png", "/projects/COLLEGE OF OPTOMETRY/Screenshot_2.png", "/projects/COLLEGE OF OPTOMETRY/Screenshot_3.png", "/projects/COLLEGE OF OPTOMETRY/Screenshot_4.png"]
    },
    {
      title: "Cross Country Healthcare",
      category: "Healthcare Workforce",
      description: "Tech-enabled workforce solutions platform for healthcare staffing",
      fullDescription: "Cross Country Healthcare is a tech-enabled workforce solutions platform and advisory firm with over 38 years of industry experience. The company specializes in providing staffing services for healthcare professionals, including travel nurses, allied health professionals, and physicians. Their services encompass temporary and permanent placements, managed services programs (MSP), recruitment process outsourcing (RPO), and other consultative services aimed at addressing complex labor-related challenges in the healthcare sector.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
      color: "from-purple-600 to-pink-600",
      metrics: { experience: "38+ years", specialties: "Multiple", services: "MSP/RPO" },
      url: "https://www.crosscountry.com/",
      folder: "CROSS COUNTRY",
      images: ["/projects/CROSS COUNTRY/Screenshot_1.png", "/projects/CROSS COUNTRY/Screenshot_2.png", "/projects/CROSS COUNTRY/Screenshot_3.png", "/projects/CROSS COUNTRY/Screenshot_4.png"]
    },
    {
      title: "Practipago",
      category: "FinTech Platform",
      description: "Secure online mass payment platform for commission management",
      fullDescription: "Paga vía online a todos tus comisionistas de manera segura y ágil con nuestra plataforma de emisión electrónica y pagos masivos. Advanced payment processing platform designed for businesses to manage mass payments to their commission-based workforce with secure electronic payment capabilities.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiPostgresql key="pg" />],
      color: "from-indigo-600 to-blue-600",
      metrics: { payments: "Mass", security: "High", processing: "Real-time" },
      url: "https://practipago.pe/",
      folder: "Practipago",
      images: ["/projects/Practipago/Screenshot_1.png", "/projects/Practipago/Screenshot_2.png", "/projects/Practipago/Screenshot_3.png", "/projects/Practipago/Screenshot_4.png"]
    },
    {
      title: "Hyper Health",
      category: "AI Health Platform",
      description: "AI-powered personal health solutions for iPhone and Apple Watch",
      fullDescription: "Hyper Health, Inc. is a privately held company specializing in health, wellness, and fitness technologies. Their flagship product, Hyper, is an AI designed to advance personal health, available for iPhone and Apple Watch Series 10 and above. The company's mission is to empower individuals by providing innovative tools that support proactive health management.",
      tech: [<SiReact key="react" />, <SiTensorflow key="tf" />, <SiPython key="python" />],
      color: "from-green-600 to-emerald-600",
      metrics: { platform: "iOS", devices: "iPhone/Watch", team: "2-10" },
      url: "https://www.hyper-healthcare.com/",
      folder: "HYPER",
      images: ["/projects/HYPER/Screenshot_1.png", "/projects/HYPER/Screenshot_2.png", "/projects/HYPER/Screenshot_3.png", "/projects/HYPER/Screenshot_4.png", "/projects/HYPER/Screenshot_5.png"]
    },
    {
      title: "ClassCover",
      category: "Education Platform",
      description: "Connecting schools with relief teachers across Australia",
      fullDescription: "Access a thriving hub of teachers looking for work, with 2000+ teachers signing up every month. Instantly connect with teachers to book for relief teaching days or hire at your school. ClassCover is Australia's leading platform for connecting educational institutions with qualified relief teachers.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiPostgresql key="pg" />],
      color: "from-orange-600 to-red-600",
      metrics: { teachers: "2K+/month", bookings: "Instant", coverage: "Australia" },
      url: "https://www.classcover.com.au/",
      folder: "ClassOver",
      images: ["/projects/ClassOver/Screenshot_1.png", "/projects/ClassOver/Screenshot_2.png", "/projects/ClassOver/Screenshot_3.png"]
    },
    {
      title: "BET88 Gaming Platform",
      category: "Entertainment Platform",
      description: "Premium gaming and entertainment platform with 5-star services",
      fullDescription: "BET88 được mệnh danh là thiên đường giải trí đổi thưởng uy tín hàng đầu. Sân chơi mang đến cho cược thủ đa dạng sự lựa chọn với dịch vụ đẳng cấp 5 sao. Advanced gaming platform offering diverse entertainment options with premium user experience and secure transaction processing.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
      color: "from-red-600 to-orange-600",
      metrics: { rating: "5 stars", games: "Multiple", security: "High" },
      url: "https://theneatspace.io/",
      folder: "Bet",
      images: ["/projects/Bet/Screenshot_1.jpg", "/projects/Bet/Screenshot_2.jpg", "/projects/Bet/Screenshot_3.jpg", "/projects/Bet/Screenshot_4.jpg", "/projects/Bet/Screenshot_5.jpg"]
    },
    {
      title: "Karmin Hair Tools",
      category: "E-commerce Platform",
      description: "Professional hair styling tools with advanced technology",
      fullDescription: "Karmin Hair Tools is a professional hair styling brand offering a range of high-quality tools designed for both salon professionals and at-home users. Their product lineup includes hair straighteners, curling irons, hair dryers, epilators, and men's grooming tools. The brand incorporates advanced technologies such as tourmaline ceramic plates and ionic technology to ensure efficient styling while minimizing hair damage.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
      color: "from-purple-600 to-pink-600",
      metrics: { products: "50+", technology: "Advanced", global: "Worldwide" },
      url: "https://karminhairtools.com",
      folder: "KARMIN",
      images: ["/projects/KARMIN/Screenshot_1.png", "/projects/KARMIN/Screenshot_2.png", "/projects/KARMIN/Screenshot_3.png"]
    },
    {
      title: "Rising Stars Academy",
      category: "Education Platform",
      description: "Personalized virtual tutoring and academic support platform",
      fullDescription: "Established in 2006, Rising Stars' Academy is dedicated to enriching children's lives through high-quality educational and social services. RSA offers personalized 1-on-1 virtual tutoring, customized learning plans, and a range of online resources to support students from early learners to high school seniors. Their programs include live small group tutoring, on-demand video lessons, interactive exercises, and virtual assessments with a focus on fostering growth mindset and mental well-being.",
      tech: [<SiReact key="react" />, <SiPython key="python" />, <SiPostgresql key="pg" />],
      color: "from-green-600 to-emerald-600",
      metrics: { families: "1000+", founded: "2006", programs: "Multiple" },
      url: "https://www.myrisingstar.org/",
      folder: "Rising stars",
      images: ["/projects/Rising stars/Screenshot_1.png", "/projects/Rising stars/Screenshot_2.png"]
    },
    {
      title: "Up&Loaded",
      category: "Social Media Agency",
      description: "Bay Area social media management agency for nonprofits",
      fullDescription: "Get social media followers through trending content tailored towards your target audience. Up&Loaded is a Bay Area Social Media Management agency specializing in helping nonprofits build their online presence, engage with their communities, and amplify their impact through strategic social media marketing and content creation.",
      tech: [<SiReact key="react" />, <SiNodedotjs key="node" />, <SiMongodb key="mongo" />],
      color: "from-blue-600 to-cyan-600",
      metrics: { clients: "50+", engagement: "+150%", region: "Bay Area" },
      url: "https://upandloaded.com/",
      folder: "UP&Loaded",
      images: ["/projects/UP&Loaded/Screenshot_1.png", "/projects/UP&Loaded/Screenshot_2.png", "/projects/UP&Loaded/Screenshot_3.png"]
    },
    {
      title: "Devsolves",
      category: "Software Development",
      description: "AI-powered ticketing system and custom software development",
      fullDescription: "Devsolves ofrece soluciones tecnológicas innovadoras adaptadas a las necesidades específicas de sus clientes. Su producto destacado es un sistema de gestión de solicitudes (ticketing) que incorpora inteligencia artificial para agilizar la resolución de incidencias, mejorando la productividad y reduciendo los tiempos de respuesta. Además, la empresa proporciona servicios de desarrollo de software personalizado para diversas plataformas, incluyendo aplicaciones web y móviles.",
      tech: [<SiReact key="react" />, <SiPython key="python" />, <SiTensorflow key="tf" />],
      color: "from-indigo-600 to-purple-600",
      metrics: { AI: "Integrated", platforms: "Multi", focus: "Security" },
      url: "https://devsolves.cl/",
      folder: "Developers",
      images: ["/projects/Developers/Screenshot_1.png", "/projects/Developers/Screenshot_2.png", "/projects/Developers/Screenshot_3.png"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Technologies', count: techGrid.length },
    { id: 'frontend', name: 'Frontend', count: techGrid.filter(t => t.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: techGrid.filter(t => t.category === 'backend').length },
    { id: 'database', name: 'Database', count: techGrid.filter(t => t.category === 'database').length },
    { id: 'cloud', name: 'Cloud', count: techGrid.filter(t => t.category === 'cloud').length },
    { id: 'blockchain', name: 'Web3', count: techGrid.filter(t => t.category === 'blockchain').length },
    { id: 'ai', name: 'AI/ML', count: techGrid.filter(t => t.category === 'ai').length }
  ]

  return (
    <main className="min-h-screen text-white overflow-hidden relative" style={{ zIndex: 1 }}>
      {/* Simplified Cursor - No trail for performance */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <div
          className="absolute w-6 h-6 border-2 border-white rounded-full mix-blend-difference"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transition: 'transform 0.1s ease-out',
            willChange: 'transform',
            transform: `translate3d(0, 0, 0)`
          }}
        />
      </div>
      
      {/* Simplified Background - Less layers for performance */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Asymmetric Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex justify-between items-center px-8 py-6">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-black text-xl">A.B</span>
            </div>
            <div className="text-white">
              <div className="text-xs opacity-60">Anatoli Bigdas</div>
              <div className="text-sm font-mono">{currentTime.toLocaleTimeString()}</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
              <a href="#work" className="hover:text-gray-300 transition-colors">Work</a>
              <a href="#tech" className="hover:text-gray-300 transition-colors">Stack</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
            </div>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black rounded-full px-6"
            >
              Let&apos;s Talk
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section - Brutalist Style */}
      <section className="min-h-screen flex items-center relative px-8">
        <motion.div 
          className="max-w-7xl mx-auto w-full"
          style={{ y: backgroundY }}
        >
          <div className="grid grid-cols-12 gap-4">
            <motion.div 
              className="col-span-12 md:col-span-7"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="inline-block bg-white text-black px-4 py-2 font-mono text-sm mb-6 -rotate-1">
                  8+ YEARS // FULL STACK DEVELOPER
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 relative">
                <span className="block relative">
                  BUILDING
                </span>
                <span className="block text-transparent relative" style={{
                  WebkitTextStroke: '2px white',
                  textStroke: '2px white'
                }}>
                  DIGITAL
                </span>
                <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  EXPERIENCES
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg mb-8">
                Architecting scalable solutions with cutting-edge technologies. 
                Specialized in React, Node.js, Cloud Architecture & Blockchain.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-6 text-lg font-bold"
                >
                  VIEW PROJECTS
                </Button>
                <Button 
                  onClick={() => window.open('https://github.com/tolisolutionshub', '_blank')}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-lg"
                >
                  GITHUB PROFILE
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-12 md:col-span-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-30" />
                <motion.div 
                  className="relative bg-black/80 backdrop-blur-sm border-2 border-white p-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-6xl font-mono font-black text-center mb-4">
                    45+
                  </div>
                  <div className="text-center text-gray-400 mb-6">Projects Delivered</div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">25+</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">8+</div>
                      <div className="text-xs text-gray-500">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.8</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating Tech Icons */}
        <div className="absolute bottom-10 left-8 right-8">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="text-sm text-gray-500 whitespace-nowrap">Tech Stack →</span>
            {[SiReact, SiNodedotjs, SiTypescript, SiPython, SiAmazon, SiDocker, SiEthereum].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Magazine Layout */}
      <section id="skills" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-black mb-4">
              <span className="text-transparent" style={{
                WebkitTextStroke: '1px white',
                textStroke: '1px white'
              }}>CORE</span>{' '}
              <span>EXPERTISE</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
                whileHover={{ scale: 1.01 }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-50" />
                  <div className="relative border border-gray-800 p-6 hover:border-white transition-colors overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div style={{ color: skill.color }}>{skill.icon}</div>
                      <div className="text-3xl font-bold">{skill.level}%</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                    <div className="flex gap-3 mb-4">
                      {skill.techs.map((tech, i) => (
                        <div key={i} className="text-gray-400 text-xl hover:text-white transition-colors">
                          {tech.icon}
                        </div>
                      ))}
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Card Stack */}
      <section id="work" className="py-24 px-8 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-black mb-4">SELECTED WORK</h2>
            <p className="text-xl text-gray-400">Real-world applications with millions of users</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
              >
                <div className={`relative overflow-hidden bg-gradient-to-br ${project.color} p-[1px]`}>
                  <div className="bg-black/70 backdrop-blur-sm p-8 hover:bg-black/80 transition-colors relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-2">{project.category}</div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      </div>
                      <BsArrowUpRight className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    
                    <div className="flex gap-4 mb-6">
                      {project.tech.map((icon, i) => (
                        <div key={i} className="text-2xl text-gray-400">
                          {icon}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xl font-bold">{value}</div>
                          <div className="text-xs text-gray-500 uppercase">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack - Interactive Grid */}
      <section id="tech" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl font-black mb-8">TECH ARSENAL</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 border ${
                    selectedCategory === cat.id 
                      ? 'bg-white text-black border-white' 
                      : 'border-gray-700 text-gray-400 hover:border-white hover:text-white'
                  } transition-all`}
                >
                  {cat.name} ({cat.count})
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4"
            layout
          >
            {techGrid
              .filter(tech => selectedCategory === 'all' || tech.category === selectedCategory)
              .map((tech, index) => (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="group"
                >
                  <div className="aspect-square border border-gray-800 hover:border-white transition-all p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-900 relative overflow-hidden">
                    <div className="text-3xl relative z-10" style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors relative z-10">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Split Screen */}
      <section id="contact" className="min-h-screen flex items-center px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl font-black mb-8">
                LET&apos;S<br />
                <span className="text-transparent" style={{
                  WebkitTextStroke: '2px white',
                  textStroke: '2px white'
                }}>CREATE</span><br />
                TOGETHER
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ready to transform your ideas into reality? 
                I&apos;m always excited to work on innovative projects.
              </p>
              
              <div className="space-y-4 mb-8">
                <a href="mailto:bigdasanatolij32@gmail.com" className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors">
                  <HiOutlineMail className="text-2xl" />
                  bigdasanatolij32@gmail.com
                </a>
                <a href="https://github.com/tolisolutionshub" className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors">
                  <SiGithub className="text-2xl" />
                  github.com/tolisolutionshub
                </a>
                <a href="https://www.linkedin.com/in/anatoli-bigdas-6a8a67380/" className="flex items-center gap-4 text-xl hover:text-gray-300 transition-colors">
                  <SiLinkedin className="text-2xl" />
                  linkedin.com/in/anatoli-bigdas
                </a>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-4 font-bold">
                  DOWNLOAD CV
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-4">
                  SCHEDULE CALL
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                className="bg-white text-black p-8"
                className="bg-white text-black p-8 -rotate-1"
                whileHover={{ rotate: 0, scale: 1.01 }}
              >
                <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
                <div className="space-y-4">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-gray-100 border-0 text-black placeholder:text-gray-500 rounded-none"
                  />
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="bg-gray-100 border-0 text-black placeholder:text-gray-500 rounded-none"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[150px] bg-gray-100 border-0 text-black placeholder:text-gray-500 rounded-none resize-none"
                  />
                  <Button className="w-full bg-black text-white hover:bg-gray-900 rounded-none py-4 font-bold">
                    SEND MESSAGE →
                  </Button>
                </div>
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-8 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-gray-400">
            © 2024 Portfolio. Crafted with passion & code.
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="relative bg-gray-900 border border-gray-700 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-700">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="text-sm text-gray-400 mb-4">{selectedProject.category}</div>
                <div className="flex gap-3">
                  {selectedProject.tech.map((icon: any, i: number) => (
                    <div key={i} className="text-xl text-gray-400">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <BsX className="text-3xl" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
              </div>

              {/* Metrics */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Metrics</h3>
                <div className="grid grid-cols-3 gap-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-white mb-1">{value as string}</div>
                      <div className="text-sm text-gray-400 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Images */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((imagePath: string, index: number) => (
                    <div key={index} className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <Image
                        src={imagePath}
                        alt={`${selectedProject.title} Screenshot ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-700">
                {selectedProject.url !== '#' && (
                  <Button
                    onClick={() => window.open(selectedProject.url, '_blank')}
                    className="bg-white text-black hover:bg-gray-200 rounded-none px-8 py-3 font-bold"
                  >
                    Visit Live Site →
                  </Button>
                )}
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 rounded-none px-8 py-3"
                >
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  )
}