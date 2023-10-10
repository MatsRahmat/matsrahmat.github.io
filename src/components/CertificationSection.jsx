import CertificationComponent from "./CertificationComponent";
import { AboutContext } from "../pages/about";
import { useContext } from "solid-js";
function Certification() {
  const { certification } = useContext(AboutContext);
  return (
    <>
      <div className="min-h-screen flex flex-col lg:w-[80%] xl:w-[80%] sm:w-[80s%] w-[70%] md:bg-gradient-to-tr from-gray-700 via-sky-950 to-slate-800 md:border md:rounded-2xl md:shadow-xl md:shadow-slate-500">
        <div className="pt-20">
          <h1 className="indent-4 capitalize tracking-wider text-white font-Oswald font-semibold underline underline-offset-4 text-3xl">
            Certification
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 px-5 justify-center py-10 ">
          {certification.map((obj) => (
            <CertificationComponent obj={obj} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Certification;
