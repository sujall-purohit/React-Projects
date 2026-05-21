import React from "react";
import contact from "../assets/IMG/contact.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".img2", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".img2",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
    gsap.from("form", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "form",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 30%",
      },
    });
  });
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row" id="contact">
      {/* Image */}
      <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen flex justify-center items-center">
        <img
          className="img2 w-[60%] md:w-[50%] drop-shadow-[2px_2px_10px_rgb(66,180,205)]"
          src={contact}
          alt=""
        />
      </div>

      {/* Form */}
      <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen flex justify-center items-center p-4">
        <form
          action="https://formspree.io/f/mkopeago"
          method="POST"
          className="
          flex flex-col items-center
          gap-6
          w-full sm:w-[80%] md:w-[70%]
          p-6
          bg-[rgb(19,25,29)]
          rounded-[20px]
          shadow-[2px_2px_10px_black,2px_2px_20px_black]
          "
        >
          <h1 className="text-3xl font-bold text-white">Contact Me</h1>

          <input
            className="
            w-full h-12
            border-2 border-[rgb(105,208,215)]
            rounded-[20px]
            px-4
            bg-transparent text-white
            outline-none
            "
            type="text"
            name="Username"
            placeholder="Name"
          />

          <input
            className="
            w-full h-12
            border-2 border-[rgb(105,208,215)]
            rounded-[20px]
            px-4
            bg-transparent text-white
            outline-none
            "
            type="email"
            name="Email"
            placeholder="Email"
          />

          <textarea
            className="
            w-full h-32
            border-2 border-[rgb(105,208,215)]
            rounded-[20px]
            p-4
            bg-transparent text-white
            outline-none
            "
            name="message"
            placeholder="Message Me"
          ></textarea>

          <button
            type="submit"
            className="
            px-8 py-2
            bg-[rgb(66,180,205)]
            text-black
            border-2 border-[rgb(66,180,205)]
            rounded-[20px]
            transition-all duration-300
            hover:bg-transparent
            hover:text-[rgb(66,180,205)]
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
