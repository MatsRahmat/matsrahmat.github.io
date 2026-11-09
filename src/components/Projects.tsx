interface ProjectItem {
  title: string;
  desc: string;
  stack: string;
  img: string;
}

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "Personal Website",
      desc: "Personal Profile website, using React.js library & deployed using GitHub Pages.",
      stack: "React JS, TailwindCSS & Vite",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Flip And Bomb",
      desc: "Turn-based game with a leaderboard system. Built with React.js and TailwindCSS.",
      stack: "ReactJS, Redux, TailwindCSS, ExpressJS, PostgreSQL",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="w-full max-w-4xl flex flex-col items-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center relative pb-2 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col overflow-hidden bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover border-b border-slate-200 dark:border-slate-700" />
            <div className="p-6 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{project.desc}</p>
              <div className="text-sm font-medium text-blue-500">Tech stack: {project.stack}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}