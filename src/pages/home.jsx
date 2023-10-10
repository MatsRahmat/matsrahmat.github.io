import imageProfile2 from "/assets/rahmat.png";

import ButtonCustom from "../components/ButtonCustom";
import InstagramIcon from "../components/icons/InstagramIcon";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";

import cvFile from "/assets/file/Rahmat-CV.pdf";

export default function HomePage() {
  return (
    <>
      <div className="bg-gradient-radial-at-r from-[#334155] via-[#0f172a] to-slate-950 min-h-full flex flex-col-reverse items-center justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-5 lg:space-x-7 xl:space-x-10 relative z-[5]">
        <div className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[42rem] xl:h-[35rem] flex items-center text-white">
          <div className="md:p-5 absolute z-10 home-text">
            <h2 className="md:text-4xl font-bold">Hello, I am</h2>
            <h1 className="text-2xl md:text-7xl font-sans font-bold text-white underline underline-offset-[10px]">
              Rahmat Hidayat
            </h1>
            <h1 className="text-2xl md:text-4xl my-4 md:my-10 font-bold ">
              and I'm a &nbsp;
              <span className="text-sky-400 mutiple-text">
                Software Developer
              </span>
            </h1>
            <p className="md:text-xl font-Oswald w-[80%] md:w-1/2">
              A person who is curious about any technology such as web
              development, applications, server, AI, Machine learning and how
              the internet works
            </p>
            <div className="my-5">
              <ul className="flex gap-5">
                <li className="p-3 border border-violet-800 rounded-full bg-gradient-radial from-blue-300 to-cyan-500 shadow-md shadow-slate-300 cursor-pointer">
                  <a
                    href="https://www.instagram.com/rah_mt.02/"
                    target="_blank"
                  >
                    <InstagramIcon size={25} />
                  </a>
                </li>
                <li className="p-3 border border-violet-800 rounded-full bg-gradient-radial from-blue-300 to-cyan-500 shadow-md shadow-slate-300 cursor-pointer">
                  <a href="https://github.com/MatsRahmat" target="_blank">
                    <GithubIcon size={25} />
                  </a>
                </li>
                <li className="p-3 border border-violet-800 rounded-full bg-gradient-radial from-blue-300 to-cyan-500 shadow-md shadow-slate-300 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/rahmat-hidayat-65893323a"
                    target="_blank"
                  >
                    <LinkedinIcon size={25} />
                  </a>
                </li>
              </ul>
              <div className="my-10">
                <a
                  href={cvFile}
                  download="Rahmat-CV-File"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonCustom text={"Download CV"} style={8} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[42rem] xl:h-[35rem] relative flex justify-center">
          <img
            id="image-logo"
            src={imageProfile2}
            alt="image"
            className={`w-full md:w-96 absolute bottom-0 rounded-full saturate-150 transition-all duration-150 animate__animated animate__slideInUp bg-gradient-to-t from-gray-700 via-[#cffafe] to-[#cffafe10]`}
            draggable="false"
          />
        </div>
        <div
          className={`hidden md:block h-full w-1/2 bg-gradient-radial from-sky-300 to-sky-500 absolute -z-[1] skew-x-[12deg] -right-20 transition-all duration-200 delay-300 animate__animated animate__zoomInRight`}
        />
      </div>
    </>
  );
}
