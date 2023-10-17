"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function intro() {
  return (
    <section>
      <motion.h1
        className="mb-10 mt-4 text-2xl !leading-[1.5] sm:text-4xl px-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi! My name is Saima.</span> I am a recent
        graduate suffering from{" "}
        <span className="font-bold">unemployment 😭.</span> I can be your next{" "}
        <span className="font-bold">Full Stack Developer</span>,{" "}
        <span className="font-bold">Data Engineer</span>, and even{" "}
        <span className="font-bold">Cloud Architect</span>, for all of your
        interface improvement, data migration, and system modernization needs
        👷🏻‍♀️🛠️.{" "}
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
          className="group bg-slate-800 text-white px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white/20 px-7 py-3 flex items-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href="/2023 cv.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white/20 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
          href="https://www.linkedin.com/in/saima-ahmed-351632161/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white/20 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-lg focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href="https://github.com/sahmed9123"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
