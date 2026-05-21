import React from "react";
import Card from "../components/Card";
import mern from "../assets/IMG/mern.png";
import java from "../assets/IMG/java.png";
import dsa from "../assets/IMG/dsa.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      stagger: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".circle",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scroll: "body",
        scrub: 2,
  
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".details h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".details h1",
        scroll: "body",
        scrub: 2,
      
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".details li", {
      y:100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".details li",
        scroll: "body",
        scrub: 2,
      
        start: "top 60%",
        end: "top 30%",
      },
    });
    gsap.from(".right", {
      x:100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".right",
        scroll: "body",
        scrub: 2,

        start: "top 60%",
        end: "top 30%",
      },
    });
  });
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row" id="about">
      {/* Left */}
      <div className="w-full md:w-1/2 h-screen flex justify-center items-center gap-6 md:gap-10 px-4">
        {/* Circle-Line */}
        <div className="flex justify-center items-center flex-col">
          <div className="circle w-12.5 h-12.5 md:w-15 md:h-15 rounded-full bg-[#7ad7ea] shadow-[2px_2px_20px_#7ad7ea]"></div>
          <div className="line w-0.5 h-20 md:h-30 bg-[aliceblue]"></div>
          <div className="circle w-12.5 h-12.5 md:w-15 md:h-15 rounded-full bg-[#7ad7ea] shadow-[2px_2px_20px_#7ad7ea]"></div>
          <div className="line w-0.5 h-20 md:h-30 bg-[aliceblue]"></div>
          <div className="circle w-12.5 h-12.5 md:w-15 md:h-15 rounded-full bg-[#7ad7ea] shadow-[2px_2px_20px_#7ad7ea]"></div>
        </div>

        {/* Details */}
        <div className="details flex flex-col gap-8 md:gap-15">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-[rgb(198,42,96)] to-white bg-clip-text text-transparent">
              Personal Info
            </h1>
            <ul className="text-white text-sm md:text-base">
              <li>
                <span className="text-[#7ad7ea]">NAME</span> : SUJAL PUROHIT
              </li>
              <li>
                <span className="text-[#7ad7ea]">AGE</span> : 22 YEARS
              </li>
              <li>
                <span className="text-[#7ad7ea]">GENDER</span> : MALE
              </li>
              <li>
                <span className="text-[#7ad7ea]">LANGUAGE</span> : HINDI |
                ENGLISH
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-[rgb(198,42,96)] to-white bg-clip-text text-transparent">
              Education
            </h1>
            <ul className="text-white text-sm md:text-base">
              <li>
                <span className="text-[#7ad7ea]">COURSE</span> : BCA
              </li>
              <li>
                <span className="text-[#7ad7ea]">CGPA</span> : 9.0
              </li>
              <li>
                <span className="text-[#7ad7ea]">YEAR</span> : 2022-2025
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-[rgb(198,42,96)] to-white bg-clip-text text-transparent">
              Skills
            </h1>
            <ul className="text-white text-sm md:text-base">
              <li>FRONTEND</li>
              <li>GRAPHIC DESIGNING</li>
              <li>C LANGUAGE</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right */}
      <div
        className="right
      w-full md:w-1/2
      min-h-screen
      flex flex-wrap md:flex-col
      items-center justify-center
      gap-5
      p-4
      "
      >
        <Card title={"FRONTEND"} image={mern} />
        <Card title={"GRAPHIC DESIGNING"} image={java} />
        <Card title={"C LANGUAGE"} image={dsa} />
      </div>
    </div>
  );
};

export default About;
