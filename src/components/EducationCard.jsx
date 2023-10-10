import { createEffect, createSignal, onMount } from "solid-js";

export default function EducationCard({ obj, top = false, bottom = false, index }) {
  const [delay, setDelay ] = createSignal('')
  const [animated, setAnimated ] = createSignal('')

  onMount(() => {
    if(index % 2 === 0) {
      setAnimated('animate__slideInLeft')
    } else {
      setAnimated('animate__slideInRight')
    }

    if(index <= 1){
      setDelay('animate__fast')
    } else {
      setDelay(`animate__delay-${index}s`)
    }
  })
  return (
    <>
      <div className={`flex border border-black shadow-md animate__animated ${animated()}`}>
        <div className="w-[25%] md:w-36 text-black">
          <div className="w-[40px] h-full flex justify-center items-center relative">
            <p className="w-4 h-4 rounded-full bg-lime-800 border border-black absolute z-10" />
            {top && (
              <span className="h-1/2 w-2 bg-lime-500 absolute top-0 right-1/2 translate-x-1/2 z-[8]" />
            )}
            {bottom && (
              <span className="h-1/2 w-2 bg-lime-500 absolute bottom-0 right-1/2 translate-x-1/2 z-[8]" />
            )}
          </div>
        </div>
        <div
          className={`flex-grow p-5 my-2 border-black`}
        >
          <h1 className="text-md md:text-2xl font-black">
            {obj.link ? (
              <a
                href={obj?.link || "#"}
                className={
                  obj?.link
                    ? "hover:underline decoration-blue-700 hover:text-purple-800"
                    : ""
                }
                target="_blank"
              >
                {obj?.institute}
              </a>
            ) : (
              `${obj?.institute}`
            )}
          </h1>
          <h1 className="text-md md:text-xl italic">
            {obj?.major || "Teknik Komputer dan Jaringan"}
          </h1>
          <p className="text-sm md:text-base italic">
            {obj?.date || "2017 - 2020"}
          </p>
        </div>
      </div>
    </>
  );
}
