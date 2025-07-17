import Navbar from './Components/Navbar.jsx'
import Home from './pages/Home'
import { useState, useEffect } from 'react'
import { FaHistory, FaLightbulb, FaRocket, FaCode, FaPaintBrush, FaTools, FaGithub, FaExternalLinkAlt, FaSun, FaMoon, FaVolumeUp, FaVolumeMute, FaDatabase, FaBrain } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ContactSection from './pages/Contact'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    }
  }),
}

// Inline About, Projects, Resume, Contact as sections
function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-10 bg-gray-50 dark:bg-[#0d0d0d] text-black dark:text-white border-t border-b border-gray-200 dark:border-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">My journey, my focus, and where I'm headed.</p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Past */}
        <motion.div className="text-center p-6 rounded-lg" variants={cardVariants} custom={1}>
          <FaHistory className="text-4xl text-pink-500 dark:text-[#FFD600] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Past</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My journey into tech started with curiosity and gaming. I built my first Pong game in Python just to see if I could make two pixels move. In my previous roles, I served as a Senior Software Engineer and DevOps Administrator at ETAS, where I led projects to modernize and optimize cloud-based development environments. I implemented scalable Jenkins architecture on AWS using Terraform and Packer, configured cost-effective spot instances, and integrated it with many services. I have successfully migrated over 100 projects and transitioned version control systems to Git, moving operations from local servers to the cloud, which significantly improved scalability and team collaboration.
          </p>
        </motion.div>

        {/* Present */}
        <motion.div className="text-center p-6 rounded-lg" variants={cardVariants} custom={2}>
          <FaLightbulb className="text-4xl text-pink-500 dark:text-[#FFD600] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Present</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Currently, I am pursuing my Master’s in Computer Science at UC Irvine, where I am deepening my expertise in cloud infrastructure, DevOps, and scalable system design. Alongside my studies, I am actively working on projects like CalRoute, a smart scheduling and routing application that integrates with Google APIs to optimize users’ daily tasks powered by LLMs and routing APIs and also wordked on many other projects. y current focus reflects my passion for building intelligent, reliable systems that combine backend engineering, cloud automation, and data-driven insights.
          </p>
        </motion.div>

        {/* Future */}
        <motion.div className="text-center p-6 rounded-lg" variants={cardVariants} custom={3}>
          <FaRocket className="text-4xl text-pink-500 dark:text-[#FFD600] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Future</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          In the future, I aim to leverage my expertise in cloud infrastructure, DevOps, and intelligent systems to contribute to innovative projects at the intersection of AI and scalable software engineering. I see myself working in a role where I can design and implement high-performance, cloud-native platforms, lead teams to automate and optimize complex workflows, and build systems that solve meaningful problems in industries like smart infrastructure, healthcare, or enterprise automation. Ultimately, I want to drive projects that deliver reliable, intelligent solutions, positively impacting users and businesses on a global scale.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
function SkillsSection() {
  const skills = {
    languages: [
      "HTML", "CSS", "JavaScript", "TypeScript", "Python", "Bash", "C", "PHP", "Golang", "SQL", "Perl",
      "React", "Flask", "Django", "FastAPI", "Hadoop", "Pandas", "Jupyter"
    ],
    styling: [
      "Tailwind CSS", "Bootstrap", "Sass", "Styled-Components", "Figma", "Canva"
    ],
    devops: [
      "Git", "GitHub Actions", "Docker", "Kubernetes", "AWS EC2/S3", "Azure", "Terraform", "Jenkins", "Linux", "CI/CD", "Grafana", "SonarQube", "Artifactory", "Postman", "VS Code", "Notion", "NGINX"
    ],
    data: [
      "MySQL", "MongoDB", "Firebase", "Ollama", "LLMs",
      "Scikit-Learn", "TensorFlow", "PyTorch", "XGBoost", "SVM", "Gradient Boosting", "Reinforcement Learning"
    ]
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.2,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-10 bg-white dark:bg-[#0d0d0d] text-black dark:text-white border-b border-gray-200 dark:border-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold">Skills & Toolkit</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">The tools and technologies I use to build things.</p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Languages & Frameworks */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-pink-500 dark:text-[#FFD600] mb-4 gap-2">
            <FaCode /> Languages & Frameworks
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.languages.map((skill, i) => (
              <motion.div
                key={skill}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-500 dark:hover:bg-[#FFD600] hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Styling & Design */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-pink-500 dark:text-[#FFD600] mb-4 gap-2">
            <FaPaintBrush /> Styling & Design
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.styling.map((skill, i) => (
              <motion.div
                key={skill}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-500 dark:hover:bg-[#FFD600] hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Dev & Ops Toolkit */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-pink-500 dark:text-[#FFD600] mb-4 gap-2">
            <FaTools /> Dev & Ops Toolkit
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.devops.map((skill, i) => (
              <motion.div
                key={skill}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-500 dark:hover:bg-[#FFD600] hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Data & Intelligence */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-pink-500 dark:text-[#FFD600] mb-4 gap-2">
            <FaBrain /> Data & Intelligence
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.data.map((skill, i) => (
              <motion.div
                key={skill}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-500 dark:hover:bg-[#FFD600] hover:text-white dark:hover:text-black transition-all duration-200 cursor-pointer"
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
const projects = [
  {
    title: "CalRoute",
    description: "An AI-powered scheduling and routing tool that helps users optimize their daily routines by integrating task and location data. It dynamically plans routes based on real-time constraints and learns from user behavior to recommend efficient schedules.",
    tech: ["Python", "Flask", "React", "Typescript", "Javascript", "Gemini API", "Tailwind CSS", "Google APIs", "LLMs", "AWS EC2", "SQLAlchemy", "Redis", "Docker", "MySQL"],
    links: {
      code: "https://github.com/AbhishekHallad/Calroute_app"
    },
    image: "./photos/calroute.png"
  },
  {
    title: "Smart Health App for Elderly",
    description: "A smart health monitoring system tailored for the elderly. It predicts health risks based on real-time user input and ML algorithms, providing caregivers and families with proactive alerts and recommendations.",
    tech: ["HTML", "CSS", "Python", "Javascript", "sklearn", "TensorFlow", "Flask", "MongoDB", "Google APIs"],
    links: {
      code: "https://github.com/AbhishekHallad/Chatbot"
    },
    image: "./photos/smarthealth.png"
  },
  {
    title: "Pong with AI Opponent",
    description: "A classic Pong game rebuilt from scratch using Pygame, featuring an intelligent opponent powered by AI decision-making logic. Created to explore game mechanics and reinforcement learning basics.",
    tech: ["Python", "Pygame", "Neural Networks", "Tensorflow", "NEAT", "Reinforcement Learning"],
    links: {
      code: "https://github.com/AbhishekHallad/Pong-AI"
    },
    image: "./photos/Pongai.png"
  },
  {
    title: "SpaceX Launch Tracker",
    description: "A modern web application that tracks and displays SpaceX launch data in real-time with an interactive world map. The application provides comprehensive analytics, mission tracking, and visual exploration of SpaceX's launch history and upcoming missions through a beautiful, responsive interface.",
    tech: ["Flask", "Python", "HTML", "Tailwind CSS", "Javascript", "Jinja2", "SpaceX API"],
    links: {
      code: "https://github.com/AbhishekHallad/SpaceX-launch-website"
    },
    image: "./photos/Spacexwebsite.png"
  }
];

function ProjectsSection({ playClick }) {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-10 bg-gray-50 dark:bg-[#0d0d0d] text-black dark:text-white border-b border-gray-200 dark:border-gray-800">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold">My Projects</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A selection of things I've built.</p>
      </div>
      <div className="space-y-24 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="border-4 border-pink-500 dark:border-[#FFD600] rounded-lg shadow-lg overflow-hidden" style={{ boxShadow: '0 0 24px 0 rgba(255, 214, 0, 0.3)' }}>
                <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
              </div>
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-pink-500 dark:text-[#FFD600] mb-4">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span key={tech} className="bg-gray-200 dark:bg-gray-800 text-sm text-pink-600 dark:text-[#FFD600] font-semibold px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" onClick={playClick} className="flex items-center gap-2 border-2 border-pink-500 text-pink-500 dark:border-[#FFD600] dark:text-[#FFD600] px-5 py-2 rounded-lg font-bold uppercase tracking-wide hover:bg-pink-500 hover:text-white dark:hover:bg-[#FFD600] dark:hover:text-black transition-all duration-200">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                {project.links.code && (
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" onClick={playClick} className="flex items-center gap-2 border-2 border-gray-400 text-gray-600 dark:border-gray-600 dark:text-gray-300 px-5 py-2 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-600 hover:text-white transition-all duration-200">
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleMute = () => setIsMuted(!isMuted);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const playClick = () => {
    if (!isMuted) {
      new Audio('/click.mp3').play().catch(e => console.error("Could not play audio:", e));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen scroll-smooth">
      <Navbar
        isMuted={isMuted}
        isDarkMode={isDarkMode}
        toggleMute={toggleMute}
        toggleTheme={toggleTheme}
        playClick={playClick}
      />
      <main>
        <section id="home"><Home playClick={playClick} /></section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection playClick={playClick} />
        <section id="contact"><ContactSection playClick={playClick} /></section>
      </main>
    </div>
  )
}

export default App
