"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ARTOFCSE-Elearning platform",
    image: "/images/projects/artofcse.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potumia- POS-Website",
    image: "/images/projects/potumia.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Inventory Management",
    image: "/images/projects/pos.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Education Website",
    image: "/images/projects/school.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="project_area pb-12 pt-12">
      <div className="container mx-auto px-12 py-4">
        <h2 className="text-center text-4xl font-bold  mt-4 mb-8 md:mb-12">My Recent Projects</h2>
        {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div> */}
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
