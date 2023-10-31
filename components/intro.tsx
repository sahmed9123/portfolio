"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineMail } from "react-icons/hi";

export default function intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.h1
        className="mb-10 mt-4 text-2xl !leading-[1.5] sm:text-4xl px-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hi! My name is Saima. I am a recent graduate suffering from
          unemployment 😭
          <br></br>I could be your next<br></br>
        </span>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Full Stack Developer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "UI/UX Designer",
            1000,
            "Data Engineer",
            1000,
            "Cloud Architect",
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-black text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white/20 px-7 py-3 flex items-center gap-2 rounded-lg hover:scale-110 transition cursor-pointer hover:bg-white/30"
          href="/2023 cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white/20 p-4 text-white flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/saima-ahmed-351632161/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white/20 p-4 text-white flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/sahmed9123"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white/20 p-4 text-white flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="mailto:saima.ahmed.2528@gmail.com"
          target="_blank"
        >
          <HiOutlineMail />
        </a>
      </motion.div>
    </section>
  );
}
