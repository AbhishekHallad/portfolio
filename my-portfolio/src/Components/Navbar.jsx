import { FaMoon, FaSun, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Navbar({ isMuted, isDarkMode, toggleMute, toggleTheme, playClick }) {
  const handleLinkClick = (e) => {
    playClick();
    if (e.target.href.includes('#')) {
      // Allow default anchor behavior
    }
  };

  return (
    <nav className="bg-white/80 dark:bg-[#0d0d0d]/80 backdrop-blur-sm px-6 py-4 shadow-md sticky top-0 z-50 flex justify-between items-center border-b border-gray-200 dark:border-gray-800">
      {/* Left Side: Name + Social Icons */}
      <div className="flex items-center gap-4">
        <div className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
          <a href="#home" onClick={handleLinkClick}>Abhishek Hallad</a>
        </div>
        {/* Social Icons */}
        <div className="flex items-center gap-2 ml-2">
          <a href="https://github.com/abhishekhallad" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200 text-xl" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/abhishekhallad" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200 text-xl" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:abhishekhallad1998@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200 text-xl" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Right Side: Nav Links & Theme Toggle */}
      <div className="flex items-center gap-4 sm:gap-6">
        <ul className="hidden md:flex gap-6 items-center text-sm sm:text-base font-medium">
          <li><a href="#about" onClick={handleLinkClick} className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200">About</a></li>
          <li><a href="#skills" onClick={handleLinkClick} className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200">Skills</a></li>
          <li><a href="#projects" onClick={handleLinkClick} className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200">Projects</a></li>
          <li><a href="#contact" onClick={handleLinkClick} className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200">Contact</a></li>
          <li><a href="https://drive.google.com/file/d/1sp0L_c6iGYm1m3wng27Z9pEN0RzGJnqy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick} className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200">Resume</a></li>
        </ul>
        <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-700 pl-4">
          <button onClick={() => { playClick(); toggleTheme(); }} className="text-gray-600 dark:text-gray-300 hover:text-[#FFD600] transition-colors duration-200">
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        {/* Mobile Hamburger Menu (to be implemented later) */}
        <div className="md:hidden">
          {/* Hamburger icon can go here */}
        </div>
      </div>
    </nav>
  )
}
