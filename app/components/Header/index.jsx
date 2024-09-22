"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 my-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-7 place-self-center text-center sm:text-left ps-2"
      >
        <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-bold ">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Hello, I&apos;m{" "}
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "ER. Chetan Jalandharia",
              1300,
              "Full Stack Developer",
              1000,
              "ReactJS Developer",
              1000,
              "Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={200}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Crafting seamless, user-friendly digital experiences from front to
          back. With expertise in both frontend and backend development, I
          transform ideas into functional, efficient, and scalable solutions.
          Passionate about clean code, problem-solving, and continuous learning.
        </p>
        <div>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-200 text-white">
            <Link href="https://www.linkedin.com/in/chetan-jalandharia/">
              Hire Me
            </Link>
          </button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-800 text-white  mt-3">
            <Link
              href="https://drive.google.com/file/d/1Qn-2U8CmZ3FQA_MFtAqVQQC0enC-pCz5/view?usp=sharing"
              className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
            >
              Download CV
            </Link>
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-5 place-self-center mt-4 lg:mt-0"
      >
        <div className="rounded-full relative bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
          <Image
            src={"/images/Avatar.png"}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="User-Image"
            height={400}
            width={400}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
