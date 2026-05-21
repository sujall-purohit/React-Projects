import React from "react";
import Card from "../components/Card";
import "../index.css";
import va from "../assets/IMG/va.png";
import bg from "../assets/IMG/br.png";
import cb from "../assets/IMG/cb.png";
import fit from "../assets/IMG/fw.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".heading", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".heading",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center gap-8"
      id="projects"
    >
      <h1 className="heading text-4xl text-center font-bold  bg-linear-to-r from-[rgb(198,42,96)] to-white bg-clip-text text-transparent">
        2+ YEARS EXPERIENCE IN PROJECTS
      </h1>

      <div className="slider w-[90%] h-75 flex items-center gap-8 overflow-x-auto hide-scrollbar">
        <Card title={"VIRTUAL ASSISTANT"} image={va} />
        <Card title={"CHAT BOT"} image={cb} />
        <Card title={"BACKGROUND REMOVER"} image={bg} />
        <Card title={"FITNESS"} image={fit} />
      </div>
    </div>
  );
};

export default Projects;
