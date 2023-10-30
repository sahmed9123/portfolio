import React from "react";
import {TbBrandDisney} from "react-icons/tb"
import { LuGraduationCap } from "react-icons/lu";
import calorieImg from "@/public/calorieTracker.png";
import drakeImg from "@/public/drakeAnalysis.png";
import portfolioImg from "@/public/portfolio.png";
import { FaReact } from "react-icons/fa";
import { AiOutlineDatabase, AiOutlineCloud } from "react-icons/ai"
import {GiMaterialsScience} from "react-icons/gi"
import {BsCodeSlash} from "react-icons/bs"
import dccs from "@/public/dccs.ico"


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
    title: "B.S. Computer Science",
    company: "University of Maryland College Park",
    location: "College Park, MD",
    description:"I am still paying off the loans it took for me to get this degree!",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Data Science Research Intern",
    company: "First-Year Innovation Research & Experience CERN Laboratories",
    location: "College Park, MD",
    description:"I got to work on improving CERN's Particle Swarm Optimization (PSO) algorithm using Python and R, used in their Large Hadron Collider (LHC) simulation software, ATLAS",
    icon: React.createElement(GiMaterialsScience),
    date: "2019 - 2020",
  },
  {
    title: "Website Developer",
    company:"University of Maryland Department of Resident Life",
    location: "College Park, MD",
    description:"My first programming job! I worked on maintaining the content for my school's Resident Life websites starting from straight HTML and CSS, to pioneering the use of tools like Bootstrap, React, AWS EC2, Google Analytics, and Drupal in my team",
    icon: React.createElement(BsCodeSlash),
    date: "2020 - 2022",
  },
  {
    title: "Junior Cloud Engineer",
    company: "Data and Cloud Computing Society",
    location: "College Park, MD",
    description:"Through this campus organization I got to learn about and acquire the AWS Cloud Practitioner certification, as well as experience building and deploying a website from scratch using AWS and Wordpress. I eventually became the Outreach Officer for the group, organizing events, and managing socials",
    icon: React.createElement(AiOutlineCloud),
    date: "2021 - 2022",
  },
  {
    title: "Data Engineer Intern",
    company: "Disney Media and Entertainment Distribution",
    location: "Bristol, CT",
    description:"I worked with the Ad Platforms team at ESPN on modernizing their enterprise-level data architecture from using Snowflake to going fully cloud based for streaming data, integrating and implementing tools like Apache Kafka, Flink, and Spark through AWS Firehose, Glue, and Redshift",
    icon: React.createElement(TbBrandDisney),
    date: "2022",
  },
  {
    title: "Software Engineer",
    company:"Clearhaven Technologies",
    location: "Washington, DC",
    description:"I was contracted for 6 months to work with this 10 person startup on a web interface (MERN Stack) for the Army Research Lab (ARL), to provide a platform for them to view and pull data from censors they have throughout America",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "Does Drake Only Make Music for Girls?",
    description:
     "A Binary Classifier trained on Genius' Collection of Drake Lyrics to determine the answer to our generation's most heated debate",
     tags: ["Pandas", "NumPy", "Python", "NLTK", "Work2Vec", "Sci-Kit"],
    imageUrl: drakeImg,
  },
  {
    title: "Portfolio Website",
    description:
     "Literally this website you are scrolling through right now. I figured I should make something to showcase my web dev skills",
     tags: ["Next.js", "TypeScript", "GitHub Pages", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
  },
  {
    title: "CalorieTracker",
    description:
    "an iOS app written in Swift used for logging meals, daily calorie intake, goal projection, diet planning. I just needed something to help keep track of my gym and diet progress lol",
    tags: ["Swift", "SwiftUI", "Swift Views", "Firebase"],
    imageUrl: calorieImg,
  },
] as const;

export const skillsData = [
    "Java",
    "Python",
    "Pandas",
    "NumPy",
    "AWS Cloud Practitioner",
    "SwiftUI",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "TailwindCSS",
    "MongoDB",
    "Express",
    "SQL",
    "Python",
    "Framer Motion",
    "Apache Flink",
    "Apache Kafka",
    "Apache Spark",
    "AWS Glue",
    "AWS Firehose",
    "AWS Redshift"
] as const;