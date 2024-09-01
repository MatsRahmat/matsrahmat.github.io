import { createContext, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

export const ParentContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const aboutRef = useRef();
  const experienceRef = useRef();

  const valueContext = {
    about: aboutRef,
    experience: experienceRef,
  };
  return (
    <>
      <ParentContext.Provider value={valueContext}>
        <div className="">
          <Navbar />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
        </div>
      </ParentContext.Provider>
    </>
  );
}

export default App;
