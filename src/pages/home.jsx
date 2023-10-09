import imageProfile from "/assets/smooth.png";
import imageProfile2 from "/assets/rahmat.png";
import imageProfile3 from "/assets/bg_blue_rahmat.jpg";
import { createEffect, createSignal } from "solid-js";
export default function HomePage() {

  const [transition, setTransition] = createSignal("animate__slideInUp")
  createEffect(() => {
    setTimeout(() => {
      setTransition('animate-slide-up')
    }, 800)
  }, [])

  createEffect(() => {
    console.log(transition());
  }, [transition()])
  return (
    <>
      <div className="bg-gradient-radial-at-r from-[#334155] via-[#0f172a] to-slate-950 h-full flex flex-col items-center justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-5 lg:space-x-7 xl:space-x-10 relative z-[5]">
        <div className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[42rem] xl:h-[35rem] flex items-center text-white">
          <div className="p-5">
            <h1 className="text-7xl font-sans font-bold text-white underline underline-offset-[10px]">
              Rahmat Hidayat
            </h1>
            <h1 className="text-4xl my-10 font-bold ">Software <span className="text-sky-400">Developer</span></h1>
            <p className="text-xl font-Oswald"></p>
          </div>
        </div>
        <div className="sw-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[42rem] xl:h-[35rem] relative flex justify-center">
          <img
            src={imageProfile2}
            alt="image"
            className={`w-96 absolute bottom-0 rounded-b-2xl saturate-150 transition-all duration-150 animate__animated animate__slideInUp`}
            draggable="false"
          />
        </div>
        <div className={`h-full w-1/2 bg-gradient-radial from-sky-300 to-sky-500 absolute -z-[1] skew-x-[12deg] -right-20 transition-all duration-200 delay-300 animate__animated animate__zoomInRight`}></div>
      </div>
    </>
  );
}
