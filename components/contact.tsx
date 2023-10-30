"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-white">
        Drop me an email at{" "}
        <a href="mailto:saima.ahmed.2528@gmail.com">
          saima.ahmed.2528@gmail.com
        </a>
      </p>
      <form
        className="mt-10 flex flex-col text-black"
        action={async (formData) => {
          await sendEmail(formData);
          toast.success("email sent!");
        }}
      >
        <input
          name="senderEmail"
          className="h-14 px-4 rounded-lg"
          type="email"
          required
          placeholder="your email"
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg p-3"
          placeholder="your message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] text-white bg-gray-950 hover:scale-110 rounded-lg outline-none transition-all"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}
