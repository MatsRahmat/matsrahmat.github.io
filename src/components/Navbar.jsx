import { useContext, useEffect, useRef, useState } from "react";
import { ParentContext } from "../App";

const Navbar = () => {
  const [isFloat, setIsFloat] = useState(false);
  window.addEventListener("scroll", function (event) {
    // console.log("Scrool");
    const winScrool = this.window.scrollY + 20;
    setIsFloat(winScrool > 250);
  });
  const context = useContext(ParentContext);

  useEffect(() => {
    console.log(context);
  }, [context]);
  const RenderContent = () => {
    return (
      <>
        <ul className="flex justify-center gap-3 font-sans font-fira text-white [&>li]:cursor-pointer">
          <li className="hover:text-violet-500">Profile</li>
          <li className="hover:text-violet-500">Experience</li>
          <li className="hover:text-violet-500">Education</li>
          <li className="hover:text-violet-500">Project</li>
          <li className="hover:text-violet-500">Sosial Media</li>
          <li className="hover:text-violet-500">Contact</li>
        </ul>
      </>
    );
  };

  useEffect(() => {
    console.log(isFloat);
  }, [isFloat]);

  const FloatComponent = () => (
    <>
      <nav className="flex justify-center w-full transition-all animate-[fade_2s_ease_in] sticky top-2">
        <div className="px-5 rounded-full bg-sky-700 bg-opacity-40 py-3 backdrop-blur-md">
          <RenderContent />
        </div>
      </nav>
    </>
  );

  return (
    <>
      {isFloat ? (
        <FloatComponent />
      ) : (
        <nav className="flex justify-center w-full transition-all absolute top-0 animate-[slide-down_500ms_ease-in] ">
          <div className="w-full bg-sky-700 bg-opacity-40 py-3 backdrop-blur-md">
            <RenderContent />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
