interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-darkBg/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="font-bold text-xl tracking-wider">RH.</div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-500 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
          <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 ml-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}


export default Navbar