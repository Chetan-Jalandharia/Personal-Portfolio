import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white ">
      <div className="container p-10 flex justify-between">
        <Link
          rel="stylesheet"
          href="/"
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image src={"/icons/CJ.png"} alt="CJ" width={55} height={40} />
        </Link>

        <p className="text-slate-700">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
