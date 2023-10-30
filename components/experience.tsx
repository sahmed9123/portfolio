"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { experiencesData } from "@/lib/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28">
      <SectionHeading>Professional Experience</SectionHeading>
      <Timeline position="alternate">
        {experiencesData.map((item, index) => (
          <>
            <TimelineItem>
              <TimelineOppositeContent>{item.date}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot className="bg-white/30 text-white">
                  {item.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  className="bg-white/10 border-white rounded-lg p-[1rem] hover:bg-white/20"
                  //whileHover={{ scale: 1.1 }}
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                >
                  <h5 className="bg-white/10 borderBlack rounded-xl p-1 px-3">
                    {item.title}
                  </h5>
                  <small className="p-1  text-white/60">{item.company}</small>
                  <br></br>
                  <small className="p-1 text-white/60">{item.location}</small>
                  <p>{item.description}</p>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          </>
        ))}
      </Timeline>
    </section>
  );
}
