"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { dataProjects } from "@/database/data-projects";

export default function Project() {
  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select");

    noSelectElements.forEach((element) => {
      (element as HTMLElement).style.userSelect = "none";
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col w-full font-asap no-select">
        <div
          className="flex justify-center pt-[3rem] md:pb-5 pb-5 font-semibold text-gray-700"
          style={{
            fontSize: "clamp(1.25rem, 1.03rem + 0.939vw, 1.875rem)",
          }}
        >
          My Last Projects
        </div>
        <div className="flex flex-col gap-5 pt-5 pb-10">
          {dataProjects.map((project) => {
            return <ProjectCard key={project.title} {...project} />;
          })}
        </div>
      </div>
    </div>
  );
}
