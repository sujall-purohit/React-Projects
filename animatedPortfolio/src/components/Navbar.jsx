import React, { useState } from "react";
import { Link } from "react-scroll";
import { TextAlignJustify, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() =>{
    let tl = gsap.timeline()
    tl.from("nav h1",{
      y:-100,duration:1,opacity:0
    })
    tl.from("nav ul li",{
        y:-100,duration:1,opacity:0,stagger:0.1
    })
  })
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full h-20 flex items-center justify-between px-10 font-bold z-50">
      
     
      <h1 className="text-[30px] bg-linear-to-r from-[rgb(66,180,205)] to-white bg-clip-text text-transparent">
        PORTFOLIO
      </h1>

      
      <ul className="hidden md:flex items-center gap-5 text-white text-xl">
        <Link to="home" smooth duration={500} spy activeClass="active">
          <li>Home</li>
        </Link>
        <Link to="about" smooth duration={500} spy activeClass="active">
          <li>About</li>
        </Link>
        <Link to="projects" smooth duration={500} spy activeClass="active">
          <li>Projects</li>
        </Link>
        <Link to="contact" smooth duration={500} spy activeClass="active">
          <li>Contact</li>
        </Link>
      </ul>

      
      <div className="md:hidden text-white cursor-pointer">
        <TextAlignJustify onClick={() => setOpen(true)} />
      </div>

     
      <div
        className={`
          fixed top-0 right-0 w-full h-screen
          bg-[rgba(17,20,23,0.476)]
          backdrop-blur-[7px]
          flex flex-col items-center justify-center
          gap-12.5 text-white text-2xl
          transition-all duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <X
          className="absolute top-7 right-10 cursor-pointer"
          onClick={() => setOpen(false)}
        />

        <Link to="home" smooth duration={500} spy onClick={() => setOpen(false)}>
          Home
        </Link>

        <Link to="about" smooth duration={500} spy onClick={() => setOpen(false)}>
          About
        </Link>

        <Link to="projects" smooth duration={500} spy onClick={() => setOpen(false)}>
          Projects
        </Link>

        <Link to="contact" smooth duration={500} spy onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;