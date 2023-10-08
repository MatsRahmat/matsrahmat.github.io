import { createSignal, createEffect } from "solid-js";
import { useRoutes } from "@solidjs/router";
import { route } from "./routers/router";


import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import About from "./pages/about";
import Portofolio from "./pages/Portofolio";

function App() {
  const [winHeight, setWinHeight] = createSignal();
  const Routes = useRoutes(route);
  // const top = window.scrollY;
  // const [hei, setHei] = createSignal('h-20')
  // window.addEventListener('scroll', (e) => {
  //   setHei('h-10')
  //   console.log(tes);
  //   console.log(tes > top);

  // })
  return (
    <div className="h-screen scroll-smooth overflow-x-hidden overflow-y-scroll snap-y">
      <Navbar />
        {/* <Routes /> */}
      <section className="h-full pt-16 snap-start snap-always" id="home">
        <HomePage />
      </section>
      <section id="about" className="snap-start snap-always">
        <About />
      </section>
      <section id="project">
        <Portofolio />
      </section>
    </div>
  );
}

export default App;
