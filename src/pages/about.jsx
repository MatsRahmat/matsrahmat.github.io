import Certification from "../components/CertificationSection";
import Education from "../components/Education";
import ReuseModal from "../components/ReuseModal";
import Summary from "../components/Summary";

import { createContext, createEffect } from "solid-js";
import { createStore } from "solid-js/store";

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
      url: "",
      name: "node-basic",
    },
    {
      url: "",
      name: "python-basic",
    },
    {
      url: "",
      name: "react-hackerrank",
    },
    {
      url: "",
      name: "sql-hackerrank",
    },
    {
      url: "",
      name: "digital-adda-react",
    },
    {
      url: "",
      name: "digital-adda-web",
    },
    {
      url: "",
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
        <h1 className="text-center text-white text-5xl font-bold py-10">
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
