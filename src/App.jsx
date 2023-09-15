import { createSignal, createEffect } from "solid-js";
import { useRoutes } from "@solidjs/router";
import { route } from "./routers/router";
import Navbar from "./components/Navbar";

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
    <div className="h-screen">
      <Navbar />
      <section className="h-full pt-16">
        <Routes />
      </section>
    </div>
  );
}

export default App;
