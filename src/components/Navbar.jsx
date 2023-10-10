import { A } from "@solidjs/router";
import logo from "/logo.png";
import MenuIcon from "./icons/Menu";
import { createSignal } from "solid-js";
import CloseIcon from "./icons/CloseIcon";
export default function Navbar() {
  const [show, setShow] = createSignal(false);
  return (
    <div className="fixed bg-gradient-to-b from-[#334155] to-[#94a3b800] w-screen transition-all duration-150 delay-200 h-16 text-white text-xl z-50">
      <nav className="flex justify-between px-5 uppercase font-bold">
        <div className="flex-grow py-1">
          <A href="/">
            <img src={logo} className="w-16 h-14 " />
          </A>
        </div>
        <div className="flex-1 py-2">
          <ul className="hidden md:flex space-x-10">
            <a href="#home">
              <li className="px-3 py-2 cursor-pointer relative bg-slate-300 hover:bg-gradient-to-r hover:duration-150 hover:delay-0 from-purple-700 to-sky-300 bg-clip-text hover:text-transparent duration-200 delay-75 before:block before:h-1 before:absolute hover:before:w-[90%] before:w-0 before:hover:delay-100 before:duration-150 before:bg-cyan-500 before:bottom-0">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="px-3 py-2 cursor-pointer relative bg-slate-300 hover:bg-gradient-to-r hover:duration-150 hover:delay-0 from-purple-700 to-sky-300 bg-clip-text hover:text-transparent duration-200 delay-75 before:block before:h-1 before:absolute hover:before:w-[90%] before:w-0 before:hover:delay-100 before:duration-150 before:bg-cyan-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2">
                About
              </li>
            </a>
            <a href="#project">
              <li className="px-3 py-2 cursor-pointer relative bg-slate-300 hover:bg-gradient-to-r hover:duration-150 hover:delay-0 from-purple-700 to-sky-300 bg-clip-text hover:text-transparent duration-200 delay-75 before:block before:h-1 before:absolute hover:before:w-[90%] before:w-0 before:hover:delay-100 before:duration-150 before:bg-cyan-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2">
                Portofolio
              </li>
            </a>
            <a href="#contact">
              <li className="px-3 py-2 cursor-pointer relative bg-slate-300 hover:bg-gradient-to-r hover:duration-150 hover:delay-0 from-purple-700 to-sky-300 bg-clip-text hover:text-transparent duration-200 delay-75 before:block before:h-1 before:absolute hover:before:w-[90%] before:w-0 before:hover:delay-100 before:duration-150 before:bg-cyan-500 before:bottom-0 before:right-0">
                Contact
              </li>
            </a>
          </ul>
        </div>
        <div className="md:hidden pt-2" onClick={() => setShow(true)}>
          <MenuIcon size={50} width={3} />
        </div>
      </nav>
      {show() && (
        <>
          <div
            id="sidenav"
            className="fixed right-0 w-[80%] bg-gray-900 bg-opacity-95 min-h-screen top-0 z-50 animate__animated animate__slideInRight"
          >
            <div
              className=" w-full flex items-center font-bold h-16"
              onClick={() => setShow(false)}
            >
              <CloseIcon color={"#fff"} size={55} style={"font-bold"} />
              <h1 className="text-3xl text-right ">Menu</h1>
            </div>
            <nav className=" py-3">
              <ul className="flex flex-col gap-1 px-4">
                <a href="#home" onClick={() => setShow(false)}>
                  <li className="py-2 text-center text-2xl font-semibold border border-black rounded-lg bg-gradient-to-tr from-blue-600 via-slate-400 to-purple-700">
                    Home
                  </li>
                </a>
                <a href="#about" onClick={() => setShow(false)}>
                  <li className="py-2 text-center text-2xl font-semibold border border-black rounded-lg bg-gradient-to-l to-blue-600 via-slate-400 from-purple-700">
                    About
                  </li>
                </a>
                <a href="#project" onClick={() => setShow(false)}>
                  <li className="py-2 text-center text-2xl font-semibold border border-black rounded-lg bg-gradient-to-br from-blue-600 via-slate-400 to-purple-700">
                    Portofolio
                  </li>
                </a>
                <a href="#contact" onClick={() => setShow(false)}>
                  <li className="py-2 text-center text-2xl font-semibold border border-black rounded-lg bg-gradient-to-b from-blue-600 via-slate-400 to-purple-700">
                    Contact
                  </li>
                </a>
              </ul>
            </nav>
          </div>
          <div
            className="fixed bg-black bg-opacity-50 left-0 top-0 right-0 bottom-0 z-[45]"
            onClick={() => setShow(false)}
          />
        </>
      )}
    </div>
  );
}
