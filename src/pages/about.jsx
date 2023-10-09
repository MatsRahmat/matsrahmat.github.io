import EducationCard from "../components/EducationCard";
const education = [
  {
    institute: "Politeknik LP3I jakarta",
    major: "Management Informatika",
    date: "2023 - Presents",
    link: "https://www.lp3i.ac.id/campus/politeknik-lp3i-jakarta-kampus-cimone-tangerang",
  },
  {
    institute: "Bootcamp Hacktiv8 Indonesia",
    major: "FullStack Javascript",
    date: "May 2023 - Sep 2023",
    link: "https://www.hacktiv8.com",
  },
  {
    institute: "SMK Tri Bintang Purwadadi",
    major: "Teknik Komputer dan Jaringan",
    date: "2017 - 2020",
    link: "https://smkyatribi.wordpress.com",
  },
  
];

export default function About() {
  return (
    <>
      <div className="bg-gradient-radial to-gray-950 from-zinc-800 min-h-screen">
        <section className="lg:w-[80%] xl:w-[80%] sm:w-[80s%] w-[70%] mx-auto py-20 md:py-[20%] text-white ">
          <div className="py-4">
            <h1 className="text-3xl md:text-4xl capitalize font-bold px-5 text-center md:text-left underline underline-offset-4 md:underline-offset-8">
              Summary
            </h1>
          </div>
          <div>
            <p className="font-Oswald md:text-2xl text-sm md:indent-8 px-5 text-center md:text-left md:leading-10 leading-relaxed py-5">
              I started my programming journey by learning independently, then I
              went deeper by attending the Hacktiv8 bootcamp as a full-stack web
              developer for 4 months, with complex material about software
              development. I have experience working as a Network Engineer but
              have not yet studied coding. In the end I decided to leave my
              previous career to pursue what had become my passion to work in
              the field of software development.
            </p>
            <p className="font-Oswald md:text-2xl text-sm md:indent-8 px-5 text-center md:text-left md:leading-10 leading-relaxed">
              Familiar using frontend frameworks/libraries such as React
              Js, Vue JS, jQuery, Solid JS, React Native for mobile development,
              etc. For backends like Express JS, GraphQL, Redis and for
              databases like PostgresSQL, MySql, MongoDB. I also have basic on
              Docker containers and AWS
            </p>
          </div>
        </section>
        <section className=" lg:w-[80%] xl:w-[80%] sm:w-[80s%] w-[70%] mx-auto text-white py-36">
          <div className="">
            <h1 className="text-2xl md:text-3xl capitalize font-bold px-0 xl:px-5 py-5 md:py-8 text-center md:text-left underline underline-offset-4 md:underline-offset-8">
              Education
            </h1>
          </div>
          <div className="mx-10">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                obj={edu}
                index={index}
                top={index === education.length - 1 || index !== 0}
                bottom={index === 0 || index !== education.length - 1}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
