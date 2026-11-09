interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    { title: "Programming Languages", skills: ["JavaScript", "PHP", "Python", "Bash"] },
    { title: "Front End", skills: ["React.JS", "Vue.JS", "HTML & CSS", "Bootstrap", "TailwindCSS", "Redux"] },
    { title: "Back End & Databases", skills: ["Node.js", "Express", "Sequelize", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Django", "FastAPI"] },
    { title: "Other Tools", skills: ["REST API", "Docker Container", "Linux", "Mikrotik"] }
  ];

  return (
    <section id="skills" className="w-full max-w-3xl flex flex-col items-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center relative pb-2 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">Skills</h2>
      
      <div className="w-full bg-white dark:bg-darkSurface border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-xl">
        {skillCategories.map((category, index) => (
          <div key={index} className="mb-10 last:mb-0 text-center">
            <h4 className="text-lg font-bold mb-4">{category.title}</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-5 py-2 text-sm font-medium rounded-full bg-transparent dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600 hover:border-blue-500 hover:text-blue-500 hover:bg-slate-50 dark:hover:bg-darkSurface hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}