import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import calorieImg from "@/public/calorieTracker.png";
import drakeImg from "@/public/drakeAnalysis.png";
import portfolioImg from "@/public/portfolio.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
        title: "Web Developer",
        location: "College Park, MD",
        description:
          "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        //icon: React.createElement(FaReact),
        date: "2020",
      },
    
  {
    title: "Data Engineer Intern",
    location: "Bristol, CT",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    //icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Software Engineer",
    location: "Washington, DC",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    //icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "Does Drake Only Make Music for Girls?",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Jupyter Notebooks", "Pandas", "NumPy", "Python", "NLTK"],
    imageUrl: drakeImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["Next.js", "TypeScript", "GitHub Pages", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
  {
    title: "CalorieTracker",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Swift", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: calorieImg,
  },
] as const;

export const skillsData = [
    "Java",
    "Python",
    "Pandas",
    "NumPy",
    "AWS Cloud Practitioner",
    "Azure Data Engineer",
    "SwiftUI",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "SQL",
    "Python",
    "Framer Motion",
    "Apache Flink",
    "Apache Kafka",
    "Apache Spark",
    "AWS Glue",
    "AWS Firehose"
] as const;