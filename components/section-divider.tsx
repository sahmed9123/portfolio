"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="py-[5rem]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
    >
      <Spline scene="https://prod.spline.design/zdZAM3kqL-XMk3ko/scene.splinecode" />
    </motion.div>
  );
}
