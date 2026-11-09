interface EducationItem {
  school: string;
  major: string;
  date: string;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      school: "Politeknik LP3I Jakarta (D3)",
      major: "Information Management (Night Class)",
      date: "September 2023 - September 2026 | Tangerang, Indonesia"
    },
    {
      school: "Hacktiv8 (Bootcamp)",
      major: "Full Stack JavaScript Immersive Program",
      date: "May 2023 - September 2023 | Jakarta, Indonesia"
    }
  ];

  return (
    <section id="education" className="w-full max-w-3xl flex flex-col items-center mb-20">
      <h2 className="text-3xl font-bold mb-10 text-center relative pb-2 after:content-[''] after:absolute after:w-16 after:h-1 after:bg-blue-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full">Education</h2>
      
      <div className="w-full pl-4 md:pl-0">
        <div className="border-l-2 border-slate-200 dark:border-slate-700 ml-4 pl-8 max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative mb-10 last:mb-0 text-left">
              <div className="absolute -left-[41px] top-1.5 w-[14px] h-[14px] rounded-full bg-blue-500 border-2 border-slate-50 dark:border-darkBg"></div>
              <h3 className="text-xl font-bold">{edu.school}</h3>
              <div className="text-blue-500 font-medium mb-1">{edu.major}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{edu.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}