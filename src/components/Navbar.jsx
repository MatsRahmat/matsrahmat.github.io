// import {create} from 'solid-js'
import { A } from "@solidjs/router";
import logo from '/logo.png'
export default function Navbar() {
  return (
    <div className="fixed bg-slate-700 w-screen transition-all duration-150 delay-200 h-16 text-white text-xl z-50">
      <nav className="flex justify-between px-5 uppercase font-bold">
        <div className="flex-grow py-1"> <A href="/"><img src={logo} className="w-16 h-14 "/></A></div>
        <div className="flex-1 py-2">
          <ul className="flex space-x-10">
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
            <A href="/portofolio">
              <li className="px-3 py-2 cursor-pointer relative bg-slate-300 hover:bg-gradient-to-r hover:duration-150 hover:delay-0 from-purple-700 to-sky-300 bg-clip-text hover:text-transparent duration-200 delay-75 before:block before:h-1 before:absolute hover:before:w-[90%] before:w-0 before:hover:delay-100 before:duration-150 before:bg-cyan-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2">
                Portofolio
              </li>
            </A>
            <A href="/contact">
              <li className="px-3 py-2 cursor-pointer relative bg-slate-300 hover:bg-gradient-to-r hover:duration-150 hover:delay-0 from-purple-700 to-sky-300 bg-clip-text hover:text-transparent duration-200 delay-75 before:block before:h-1 before:absolute hover:before:w-[90%] before:w-0 before:hover:delay-100 before:duration-150 before:bg-cyan-500 before:bottom-0 before:right-0">
                Contact
              </li>
            </A>
          </ul>
        </div>
      </nav>
    </div>
  );
}
