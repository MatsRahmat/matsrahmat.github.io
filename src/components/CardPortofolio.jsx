function CardPortofolio({data}) {
  return (
    <>
      <div className="border border-white w-[13em] h-[17em] md:w-[16em] md:h-[19em] hover:backdrop-blur-md bg-opacity-40 hover:bg-opacity-100 rounded-xl hover:shadow-2xl hover:shadow-slate-300 my-10 transition-all duration-200 bg-gray-700 hover:bg-gray-500 cursor-pointer px-5 py-8 relative hover:scale-105">
        <div className="text-white">
          <h1 className="text-lg sm:text-3xl font-bold underline underline-offset-4">Judul</h1>
          <p className="text-base sm:text-lg font-semibold">Description: </p>
          <p className="text-base sm:text-lg italic">Tech stack: </p>
        </div>
        <div className="absolute text-white left-0 bottom-0 h-20 w-full flex items-center justify-center gap-6 sm:gap-10 font-Oswald">
          <a className="px-4 py-2 md:px-6 md:py-2 border border-white rounded-md text-sm sm:text-md bg-blue-500 hover:bg-sky-700" href="#">Visit</a>
          <a className="px-3 py-2 md:px-6 md:py-2 border border-white rounded-md text-sm sm:text-md bg-slate-800 hover:bg-gray-900" href="#">Source Code</a>
        </div>
      </div>
    </>
  );
}

export default CardPortofolio;
