"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#About",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setnavbarOpen] = useState(false);
  return (
    <nav className="container mx-auto px-6 md:px-12 fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link
          rel="stylesheet"
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src={"/icons/CJ.png"} alt="CJ" width={70} height={65}/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={()=>setnavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={()=>setnavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto lg:me-20" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-12">
            {navLinks.map((val, index) => (
              <li key={index}>
                <NavLink href={val.path} title={val.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        navbarOpen?<MenuOverlay links={navLinks}/>:null
      }
    </nav>
  );
};

export default Navbar;
