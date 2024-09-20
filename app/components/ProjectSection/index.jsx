"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectData = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description: "portfolio wesite build using NEXT.JS and tailwind CSS",
    image: "/images/1.svg",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Farm-Easy - Equipment Rental website",
    description: "wesite build using MERN, Firebase and materialUI",
    image: "/images/2.svg",
    gitUrl: "https://github.com/Chetan-Jalandharia/FarmEasy-Frontend",
    previewUrl: "https://farmeasy-fa062.web.app/",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description:
      "build using MERN Stack, Socket.IO and Bootstrap",
    image: "/images/3.svg",
    gitUrl: "https://github.com/Chetan-Jalandharia/Chat-App_FrontEnd",
    previewUrl: "https://wolverine-chat.vercel.app/",
  },
  {
    id: 4,
    title: "Employees Task Management System",
    description:
      "Application build using MERN, Redux and Bootstrap to provide work management of employees",
    image: "/images/4.svg",
    gitUrl: "https://github.com/Chetan-Jalandharia/Task-Management-system",
    previewUrl: "https://github.com/Chetan-Jalandharia/Task-Management-system",
  },
  {
    id: 5,
    title: "Weather Application",
    description:
      "A simple weather forcasting wesite build using React, Redux and REST APIs",
    image: "/images/5.svg",
    gitUrl: "https://github.com/Chetan-Jalandharia/WeatherApp",
    previewUrl: "https://github.com/Chetan-Jalandharia/WeatherApp",
  },
  {
    id: 6,
    title: "TO-DO List Application",
    description: "TO-DO tracker wesite build using React, Redux and Bootstrap",
    image: "/images/6.svg",
    gitUrl: "https://github.com/Chetan-Jalandharia/To-Do-List",
    previewUrl: "https://to-do-list-git-main-chetanjalandharias-projects.vercel.app/",
  },
];

const index = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects" className="pt-20">
      <h2 className="text-4xl font-bold mb-8  text-center">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {ProjectData.map((project, index) => (
          <motion.li
            key={index}
            variants={{
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default index;
