import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    }
  }),
}

export default function Home({ playClick }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#fefefe] via-[#fdd] to-[#fee] dark:from-[#0d0d0d] dark:to-[#1a002a] text-black dark:text-white px-4 md:px-10 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Left Side */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start py-12 md:py-0 md:pr-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.p className="text-lg text-gray-600 dark:text-gray-300 mb-2" variants={fadeInUp} custom={1}>
          Hello! I am
        </motion.p>
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-black dark:text-white mb-2"
          style={{ letterSpacing: '0.03em' }}
          variants={fadeInUp}
          custom={2}
        >
          Abhishek Shivasharan Hallad
        </motion.h1>
        <motion.div
          className="text-lg sm:text-xl md:text-2xl font-bold text-pink-500 dark:text-[#FFD600] mb-4 h-10 flex items-center min-h-[2.5rem]"
          variants={fadeInUp}
          custom={3}
        >
          <Typewriter
            words={['Software Engineer', 'DevOps Specialist', 'ML Engineer', 'Full Stack Developer']}
            loop={0}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </motion.div>
        <motion.p
          className="max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          variants={fadeInUp}
          custom={4}
        >
          I'm a passionate software engineer based in USA currently studying masters in Computer Science at University of California, Irvine with 4 years of DevOps experience and a growing specialization in AI and full-stack development. I've led critical initiatives like zero-downtime cloud migrations, built AI-powered scheduling tools like CalRoute, and contributed to many developments projects. My focus lies in turning real-world needs into technical solutions with measurable impact. I'm currently exploring open source, productivity tech, and all things cloud.
        </motion.p>
        <motion.a
          href="https://drive.google.com/file/d/1sp0L_c6iGYm1m3wng27Z9pEN0RzGJnqy/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={playClick}
          className="border-2 border-pink-500 text-pink-500 dark:border-[#FFD600] dark:text-[#FFD600] px-7 py-2 rounded-lg font-bold uppercase tracking-wide hover:bg-pink-500 hover:text-white dark:hover:bg-[#FFD600] dark:hover:text-black transition-all duration-200 shadow-md mb-6 inline-block"
          style={{ boxShadow: '0 0 12px 0 #FFD600' }}
          variants={fadeInUp}
          custom={5}
        >
          Get My Resume
        </motion.a>
        <motion.div className="flex gap-5 mt-2" variants={fadeInUp} custom={6}>
          <a href="https://github.com/abhishekhallad" onClick={playClick} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:hover:text-[#FFD600] hover:text-pink-500 transition text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhishek-hallad" onClick={playClick} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:hover:text-[#FFD600] hover:text-pink-500 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:ahallad@uci.edu" onClick={playClick} className="text-gray-700 dark:hover:text-[#FFD600] hover:text-pink-500 transition text-2xl">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
      {/* Right Side */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative py-12 md:py-0"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        {/* Gradient blob */}
        <div className="absolute -z-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-pink-300/40 to-yellow-200/30 dark:from-[#FFD600]/40 dark:to-white/20 blur-3xl opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        {/* Portrait with neon border */}
        <div className="border-4 border-pink-500 dark:border-[#FFD600] rounded-2xl transform rotate-3 shadow-2xl overflow-hidden" style={{ boxShadow: '0 0 32px 0 #FFD600' }}>
          <img
            src="/photos/profile.jpeg"
            alt="Abhishek Hallad portrait"
            className="w-56 h-56 md:w-80 md:h-80 object-cover bg-gray-200 dark:bg-gray-800"
          />
        </div>
      </motion.div>
    </section>
  )
}
