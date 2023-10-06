import imageProfile from "/assets/smooth.png";
export default function HomePage() {
  return (
    <>
      <div className="bg-gradient-radial from-[#334155] via-[#0f172a] to-slate-950 h-full flex flex-col items-center justify-center md:flex-row space-y-5 md:space-y-0 md:space-x-5 lg:space-x-7 xl:space-x-10">
        <div className="w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[42rem] xl:h-[35rem] flex items-center text-white">
          <div className="p-5">
            <h1 className="text-7xl font-sans font-bold text-white underline underline-offset-[10px]">
              Rahmat Hidayat
            </h1>
            <h1 className="text-4xl my-10 font-bold ">
              Software Developer
            </h1>
            <p className="text-xl font-Oswald">
              
            </p>
          </div>
        </div>
        <div className="sw-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[30rem] lg:h-[30rem] xl:w-[42rem] xl:h-[35rem] relative flex justify-center">
          <img
            src={imageProfile}
            alt="image"
            className="w-[80%] absolute bottom-0 bg-gradient-to-t from-slate-600 rounded-full saturate-150 transition-all duration-150"
          />
          {/* <div className="absolute bottom-0 xl:bottom-16">
            <h1 className="text-7xl font-sans font-bold px-5 text-white text-center">
              Rahmat Hidayat
            </h1>
          </div> */}
        </div>
      </div>
    </>
  );
}
