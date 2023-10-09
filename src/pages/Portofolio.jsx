import CardPortofolio from "../components/CardPortofolio";
import PinLogo from "../components/PinLogo";

function Portofolio() {
  return (
    <>
      <div className="bg-gradient-radial from-gray-800  to-slate-950 min-h-screen py-24">
        <div className="text-white my-10">
          <h1 className="text-center text-2xl lg:text-5xl font-bold"> <span className="text-sky-300">Portofolio</span> Project</h1>
        </div>
        <div className="xl:container md:w-[80%] w-[95%] mx-auto border border-white flex gap-20 justify-center flex-wrap px-10 py-16 relative rounded-ee-3xl">
          <span className="absolute text-white -left-5 -top-5 hidden xl:inline-block">
            <PinLogo size={74} />
          </span>
          <span className="absolute text-white -left-5 -top-5 hidden sm:inline-block xl:hidden">
            <PinLogo size={50} />
          </span>
          <span className="absolute text-white -left-5 -top-5 sm:hidden">
            <PinLogo size={45} />
          </span>
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
          <CardPortofolio />
        </div>
      </div>
    </>
  );
}

export default Portofolio;
