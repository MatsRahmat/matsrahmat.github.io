function CardPortofolio({data}) {
  return (
    <>
      <div className="border border-white w-[15em] h-[20em] md:w-[19em] md:h-[23em] glass my-10 transition-all duration-200 hover:bg-stone-500 cursor-pointer px-5 py-8 relative hover:scale-105">
        <div className="text-white">
          <h1 className="text-lg sm:text-3xl font-bold underline underline-offset-4">Judul</h1>
          <p className="text-base sm:text-lg font-semibold">Description: </p>
          <p className="text-base sm:text-lg italic">Tech stack: </p>
        </div>
        <div className="absolute text-white left-0 bottom-0 h-20 w-full flex items-center justify-center gap-6 sm:gap-10 font-Oswald">
          <button className="px-4 py-2 md:px-6 md:py-2 border border-white rounded-md text-md sm:text-lg bg-blue-500 hover:bg-sky-700">Visit</button>
          <button className="px-3 py-2 md:px-6 md:py-2 border border-white rounded-md text-md sm:text-lg bg-slate-800 hover:bg-gray-900">Source Code</button>
        </div>
      </div>
    </>
  );
}

export default CardPortofolio;
