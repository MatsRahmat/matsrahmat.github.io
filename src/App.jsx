import { createSignal, createEffect } from "solid-js";
import { useRoutes } from "@solidjs/router";
import { route } from "./routers/router";

import Navbar from "./components/Navbar";
import HomePage from "./pages/home";
import About from "./pages/about";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

document.addEventListener('scroll', (e) => {
  const section = document.getElementsByTagName("section")
  console.log(section);
})

function App() {
  return (
    <div className="h-screen scroll-smooth overflow-x-hidden overflow-y-scroll snap-y">
      <Navbar />
      {/* <Routes /> */}
      <section className="h-full snap-start snap-always" id="home">
        <HomePage />
      </section>
      <section id="about" className="snap-start snap-always">
        <About />
      </section>
      <section id="project" className="snap-start snap-always">
        <Portofolio />
      </section>
      <section id="contact" className="snap-start snap-always">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
