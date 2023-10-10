function Summary() {
  return (
    <section className="lg:w-[80%] xl:w-[80%] sm:w-[80s%] w-[70%] min-h-screen flex flex-col justify-center text-white bg-gradient-radial-at-b from-gray-700 to-slate-2300 border rounded-2xl shadow-xl shadow-slate-500">
      <div className="pb-4">
        <h1 className="text-3xl md:text-4xl capitalize font-bold px-5 text-center md:text-left underline underline-offset-4 md:underline-offset-8">
          Summary
        </h1>
      </div>
      <div>
        <p className="font-Oswald md:text-2xl text-sm md:indent-8 px-5 text-center md:text-left md:leading-10 leading-relaxed py-5">
          I started my programming journey by learning independently, then I
          went deeper by attending the Hacktiv8 bootcamp as a full-stack web
          developer for 4 months, with complex material about software
          development. I have experience working as a Network Engineer but have
          not yet studied coding. In the end I decided to leave my previous
          career to pursue what had become my passion to work in the field of
          software development.
        </p>
        <p className="font-Oswald md:text-2xl text-sm md:indent-8 px-5 text-center md:text-left md:leading-10 leading-relaxed">
          Familiar using frontend frameworks/libraries such as React Js, Vue JS,
          jQuery, Solid JS, React Native for mobile development, etc. For
          backends like Express JS, GraphQL, Redis and for databases like
          PostgresSQL, MySql, MongoDB. I also have basic on Docker containers
          and AWS
        </p>
      </div>
    </section>
  );
}

export default Summary
