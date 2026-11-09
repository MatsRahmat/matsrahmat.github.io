export default function Hero() {
  // Skill badges highlight khusus untuk Rahmat Hidayat
  const heroSkills: string[] = [
    "DevOps",
    "Docker",
    "Linux",
    "JavaScript",
    "Python",
    "React.JS",
    "Node.js",
    "Laravel (PHP)",
    "PostgreSQL",
    "REST API",
    "Bash",
  ];

  return (
    <section id="home" className="w-full max-w-7xl my-2 md:my-5 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-14">
        
        {/* Profile Image with Glowing Gradient Ring (Left Side) */}
        <div className="relative shrink-0 group">
          {/* External Outer Glow */}
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-75 blur-xl group-hover:opacity-100 transition duration-500"></div>
          
          {/* Gradient Border Frame */}
          <div className="relative p-1.5 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
              alt="Rahmat Hidayat Profile"
              className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-slate-950"
            />
          </div>
        </div>

        {/* Text & Content (Right Side) */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hi, I'm
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-500 via-indigo-400 to-purple-500 mt-1">
            Rahmat Hidayat
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-blue-500 dark:text-blue-400 mt-3">
            DevOps Engineer
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
            Versatile and results-driven technology professional with a progressive career spanning network engineering, full-stack development, and DevOps. Currently excelling as a DevOps Developer with expertise in continuous service improvement, system monitoring, and application maintenance. Backed by a D3 degree in Informatics Management from Politeknik LP3I Jakarta with an impressive 3.7 GPA.
          </p>

          {/* Skill Badges Pills */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {heroSkills.map((skill, index) => (
              <span
                key={index}
                className="px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-900/90 text-blue-600 dark:text-cyan-300 border border-slate-300 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-cyan-400/60 hover:shadow-[0_0_12px_rgba(56,189,248,0.25)] transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#contact"
              className="px-6 py-2.5 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-all duration-300 shadow-md cursor-pointer"
            >
              Contact Me
            </a>
            <a
              href="#"
              className="px-6 py-2.5 text-sm font-medium rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 cursor-pointer"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}