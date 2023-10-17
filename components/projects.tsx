"use client";
import Image from "next/image";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section className="items-center justify-center">
      <SectionHeading>Some Projects 😳</SectionHeading>
      <div className="items-center justify-center px-80">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[0];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <div className="bg-white max-w-[50rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-8 items-center">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="bg-slate-900 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-lg"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] shadow-2xl"
      />
    </div>
  );
}
