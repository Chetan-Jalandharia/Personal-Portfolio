"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-wrap justify-center md:justify-start gap-10">
        <li>
          <Image
            src={"/aboutImage/icons8-html.svg"}
            alt="HTML"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-css.svg"}
            alt="CSS"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-javascript.svg"}
            alt="Javascript"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-mongodb.svg"}
            alt="MongoDB"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-express.svg"}
            alt="Express"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-node-js.svg"}
            alt="NodeJS"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-react-js.svg"}
            alt="React"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-redux.svg"}
            alt="Redux"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/nextjs-icon.svg"}
            alt="Next.JS"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-python.svg"}
            alt="Python"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-c.svg"}
            alt="C++"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/icons8-bootstrap.svg"}
            alt="Bootstrap"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/materialui.svg"}
            alt="MaterialUI"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/tailwindcss-icon.svg"}
            alt="TailwindCSS"
            width={75}
            height={75}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/postman.svg"}
            alt="Postman"
            width={75}
            height={70}
          />
        </li>
        <li>
          <Image
            src={"/aboutImage/npm-icon.svg"}
            alt="NPM"
            width={75}
            height={75}
          />
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div class="grid gap-2">
        <div class="bg-slate-800 shadow-lg rounded-lg p-4">
          <h3 class="text-xl font-semibold">
            Masters in Computer Applications - MCA
          </h3>
          <p class="mt-2">Lovely Professional University, Phagwara</p>
          <span class="text-sm mt-1">2023 - 2025</span>
          <span class="text-sm mt-1 ml-10">CGPA: 8.2</span>
        </div>
        <div class="bg-slate-800 shadow-lg rounded-lg p-4">
          <h3 class="text-xl font-semibold">
            Bachelors in Computer Applications - BCA
          </h3>
          <p class="mt-2">
            Ramgarhia Institute of Engineering and Technology, Phagwara
          </p>
          <span class="text-sm mt-1">2020 - 2023</span>
          <span class="text-sm mt-1 ml-10">CGPA: 8.53</span>
        </div>
        <div class="bg-slate-800 shadow-lg rounded-lg p-4">
          <h3 class="text-xl font-semibold">
            Higher Secondary School Certificate (HSSC)
          </h3>
          <p class="mt-2">Shri Mahavir Jain Model Sr. Sec School, Phagwara</p>
          <span class="text-sm mt-1">2019 - 2020</span>
          <span class="text-sm mt-1 ml-10">Percentage: 83%</span>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <div>
            <h3 class="text-xl font-semibold text-white">
              Full Stack Web Development in MERN Stack
            </h3>
            <p class="text-gray-400 text-sm">Issued by O7 Services</p>
            <p class="text-gray-500 text-xs mt-2">
              Completed a comprehensive offline industrial training on MERN
              stack technologies.
            </p>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <div>
            <h3 class="text-xl font-semibold text-white">Python Programming Basics</h3>
            <p class="text-gray-400 text-sm">Issued by HackerRank</p>
            <p class="text-gray-500 text-xs mt-2">
              Completed the fundamentals of Python programming, focusing on core
              concepts and problem-solving.
            </p>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <div>
            <h3 class="text-xl font-semibold text-white">SQL Basics</h3>
            <p class="text-gray-400 text-sm">Issued by HackerRank</p>
            <p class="text-gray-500 text-xs mt-2">
              Mastered SQL queries, database design, and data manipulation
              skills.
            </p>
          </div>
        </div>

        <div class="bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
          <div>
            <h3 class="text-xl font-semibold text-white">C++ Basics</h3>
            <p class="text-gray-400 text-sm">Issued by Coding Ninjas</p>
            <p class="text-gray-500 text-xs mt-2">
              Proficient in C++ programming, focusing on object-oriented
              concepts and algorithms.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="About" className="pt-16">
      <div className="md:grid md:grid-cols-2 gap-6 items-center xl:gap-16">
        <Image
          src={"/Images/8.svg"}
          alt="PC SETUP"
          width={1000}
          height={1000}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-justify md:text-left">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, MongoDB,
            Next.JS HTML, CSS, Postman, Git and GitHub. I am a quick learner and
            I am always looking to expand my knowledge and skill set. I am a
            team player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row mt-8 justify-center md:justify-start">
            {TAB_DATA.map((val, index) => (
              <button key={index} onClick={() => handleTabChange(val.id)}>
                <p
                  className={`mr-3 font-semibold hover:text-white ${
                    tab === val.id
                      ? "text-white border-b-2 border-purple-500"
                      : "text-[#ADB7BE]"
                  }`}
                >
                  {val.title}
                </p>
              </button>
            ))}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id == tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
