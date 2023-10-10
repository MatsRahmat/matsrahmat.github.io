import Certification from "../components/CertificationSection";
import Education from "../components/Education";
import ReuseModal from "../components/ReuseModal";
import Summary from "../components/Summary";

import { createContext, createEffect, onMount } from "solid-js";
import { createStore } from "solid-js/store";

import ScrollReveal from "scrollreveal";

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".heading", { origin: "top" });

export const AboutContext = createContext({});

export function AboutContextProvider(props) {
  const [education, setEducation] = createStore([
    {
      institute: "Politeknik LP3I jakarta",
      major: "Management Informatika",
      date: "2023 - Presents",
      link: "https://www.lp3i.ac.id/campus/politeknik-lp3i-jakarta-kampus-cimone-tangerang",
    },
    {
      institute: "Bootcamp Hacktiv8 Indonesia",
      major: "FullStack Javascript",
      date: "May 2023 - Sep 2023",
      link: "https://www.hacktiv8.com",
    },
    {
      institute: "SMK Tri Bintang Purwadadi",
      major: "Teknik Komputer dan Jaringan",
      date: "2017 - 2020",
      link: "https://smkyatribi.wordpress.com",
    },
  ]);

  const [certification, setCertification] = createStore([
    {
      url: "https://drive.google.com/file/d/16fQs7sDgg_tSNu4KnWy9Ap94fu5bmN81/view?usp=sharing",
      name: "node-basic",
    },
    {
      url: "https://drive.google.com/file/d/1RdSDrAptrMxu7ctdQ_4X39DYhy150poA/view?usp=sharing",
      name: "python-basic",
    },
    {
      url: "https://drive.google.com/file/d/1RDj_GrthboH9lWXvWvwrg7t1HJElCc-n/view?usp=sharing",
      name: "react-hackerrank",
    },
    {
      url: "https://drive.google.com/file/d/16SUtJx4b6krAKV-HhIXxGuRg1IWgoEzr/view?usp=sharing",
      name: "sql-hackerrank",
    },
    {
      url: "https://drive.google.com/file/d/1uwtm637nbFw2r2GKPTc_H7TMD7ZDoJyi/view?usp=sharing",
      name: "digital-adda-react",
    },
    {
      url: "https://drive.google.com/file/d/1ycZvUI75ywAY_e1cAFKNUkPlIQpT6txD/view?usp=sharing",
      name: "digital-adda-web",
    },
    {
      url: "https://drive.google.com/file/d/1UGqIB0CTdbxPeM_fREo4IjN6z3ABWDCU/view?usp=sharing",
      name: "sertificate",
    },
  ]);

  return (
    <AboutContext.Provider value={{ certification, education }}>
      {props.children}
    </AboutContext.Provider>
  );
}

export default function About() {

  return (
    <AboutContextProvider>
      <div className="bg-gradient-radial to-gray-950 from-zinc-800 flex flex-col items-center py-10">
        <h1
          className="text-center text-white text-5xl font-bold py-10"
        >
          <span className="text-sky-400">About</span> Me
        </h1>
        <div className="flex flex-col space-y-11 items-center">
          <Summary />
          <Education />
          <Certification />
        </div>
      </div>
    </AboutContextProvider>
  );
}
