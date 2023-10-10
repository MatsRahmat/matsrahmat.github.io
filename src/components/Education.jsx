import EducationCard from "./EducationCard";
import { AboutContext } from "../pages/about";
import { useContext } from "solid-js";
function Education() {
  const { education } = useContext(AboutContext);
  return (
    <section className=" lg:w-[80%] xl:w-[80%] sm:w-[80s%] w-[70%] text-white py-5 bg-gradient-radial-at-r from-gray-500 to-gray-800 border rounded-2xl shadow-inner shadow-gray-300">
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
  );
}

export default Education;
