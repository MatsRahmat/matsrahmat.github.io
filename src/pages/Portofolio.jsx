import CardPortofolio from "../components/CardPortofolio";
import PinLogo from "../components/PinLogo";

const listProject = [
  {
    name: "Flip and Bomb",
    url: "https://flip-and-boom.vercel.app/",
    repo: "https://github.com/Flib-and-Boom/flip-and-boom-FE.git",
    description: "Turn base game basic on card, ",
    tech: "React, Redux, TailwindCSS, ExpressJS, Sequelize, PostgresSQL, Midtrans"
  },
  {
    name: "GameNdut",
    url: "",
    repo: "https://github.com/MatsRahmat/GameNdut.git",
    description: "Cloning from Gamebrott but on Mobile version with React Native",
    tech: "React Native, Apollo GraphQL, Express, Sequelize, Postgres, "
  },
  {
    name: "NoteList",
    url: "",
    repo: "https://github.com/MatsRahmat/note-list-client.git",
    description: "Note and Todo app that can share with friend",
    tech: "VueJS, Pinia, Express, Sequelize, Postgres"
  },
  {
    name: "BinoVo",
    url: "",
    repo: "https://github.com/PairProject-p1-hacktiv8/BinoVo.git",
    description: "Money Management App, A server side rendering with EJS",
    tech: "Express, PostgresSQL, EJS, Sequelize, SweetAlert"
  },
  
]
function Portofolio() {
  return (
    <>
      <div className="bg-gradient-radial from-gray-800  to-slate-950 min-h-screen py-24">
        <div className="text-white my-10">
          <h1 className="text-center text-2xl lg:text-5xl font-bold heading"> <span className="text-sky-300">Portofolio</span> Project</h1>
        </div>
        <div className="xl:container md:w-[80%] w-[95%] mx-auto border border-white flex md:gap-20 justify-center flex-wrap px-10 py-16 relative rounded-ee-3xl">
          <span className="absolute text-white -left-5 -top-5 hidden xl:inline-block">
            <PinLogo size={74} />
          </span>
          <span className="absolute text-white -left-5 -top-5 hidden sm:inline-block xl:hidden">
            <PinLogo size={50} />
          </span>
          <span className="absolute text-white -left-5 -top-5 sm:hidden">
            <PinLogo size={45} />
          </span>
          {listProject.map(el => (<CardPortofolio data={el} />))}
        </div>
      </div>
    </>
  );
}

export default Portofolio;
