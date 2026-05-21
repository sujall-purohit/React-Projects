import React from "react";
import man from "../assets/IMG/man.png";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
   useGSAP(() =>{
    let tl1 = gsap.timeline()
    tl1.from(".line1",{
      y:100,duration:1,opacity:0
    })
    tl1.from(".line2",{
        y:100,duration:0.5,opacity:0
    })
    tl1.from(".line3",{
        y:100,duration:0.5,opacity:0
    })
    gsap.from(".img1",{
      x:200,duration:0.5,opacity:0
    })
  })
  return (
    <div className="w-full h-screen flex flex-col md:flex-row" id="home">
      {/* TEXT */}
      <div className="w-full md:w-1/2 h-[50vh] md:min-h-screen order-2 md:order-1 flex items-start md:items-center justify-center text-white">
        <div className="text-[2vmax]">
          <div className="text-[0.8em] line1">I'M</div>

          <div className="text-[2.5em] bg-linear-to-r from-[rgb(66,180,205)] to-white bg-clip-text text-transparent line2">
            SUJAL PUROHIT
          </div>

          <div className="text-[1em] line3">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                1500,
                "SOFTWARE DEVELOPER",
                1500,
                "GRAPHIC DESIGNER",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <button className="btn px-7.5 py-2.5 bg-[rgb(66,180,205)] text-black border-2 border-[rgb(66,180,205)] mt-7.5 rounded-[20px] text-[19px] transition-all duration-200 cursor-pointer hover:bg-transparent hover:text-[rgb(66,180,205)]">
            HIRE ME
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="img1 w-full md:w-1/2 h-[50vh] md:min-h-screen order-1 md:order-2 flex items-end md:items-center justify-center">
        <img
          className="w-[55%] md:w-[60%] drop-shadow-[2px_2px_20px_rgb(116,201,225)]"
          src={man}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
