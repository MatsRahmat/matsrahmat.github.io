interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  location: string;
  tasks: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "PT. Cnaindo Teknologi Indonesia",
      role: "DevOps Developer",
      date: "September 2025 - Present",
      location: "Jakarta, Indonesia",
      tasks: [
        "Perform service monitoring.",
        "Continuously develop and improve existing applications/services.",
        "Prepare daily monitoring reports.",
        "Perform application/service maintenance."
      ]
    },
    {
      company: "PT. Bestari Aditama Persada",
      role: "Fullstack Developer",
      date: "November 2023 - February 2025",
      location: "Tangerang, Indonesia",
      tasks: [
        "Create dynamic web application.",
        "Create full-stack web application using React Js & Node Js (ExpressJs).",
        "Manage and create REST full API for Front-end application.",
        "Create monolith application using Laravel(PHP)."
      ]
    },
    {
      company: "PT. Transmarco",
      role: "Warehouse Staff",
      date: "July 2022 - March 2023",
      location: "Tangerang, Indonesia",
      tasks: [
        "Handle hundreds of orders swiftly and deftly 300pcs/day.",
        "Handling incoming goods for new stock and reporting incoming goods.",
        "Perform maintenance of goods and layouts according to standards that have been tested."
      ]
    },
    {
      company: "PT. Adhelin Data Solution",
      role: "Network Engineer",
      date: "Aug 2021 - June 2022",
      location: "Ciamis, Indonesia",
      tasks: [
        "Handle customer complaints and reprimands and provide solutions quickly and meticulously.",
        "Regular server maintenance, setting up new devices for customers.",
        "Familiar with proxy devices, and network devices that use optical fiber."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full max-w-3xl flex flex-col items-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center relative pb-2 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">Work Experience</h2>
      
      <div className="w-full pl-4 md:pl-0">
        <div className="border-l-2 border-slate-200 dark:border-slate-700 ml-4 pl-8 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0 text-left">
              <div className="absolute -left-[41px] top-1.5 w-[14px] h-[14px] rounded-full bg-blue-500 border-2 border-slate-50 dark:border-darkBg"></div>
              <h3 className="text-xl font-bold leading-tight">{exp.company}</h3>
              <div className="text-blue-500 font-medium mb-1">{exp.role}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">{exp.date} | {exp.location}</div>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}