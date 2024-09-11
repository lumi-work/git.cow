import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logo.svg";
import { FaGithub } from "react-icons/fa";

function Nav() {
  return (
    <div className="w-full h-[4.8rem] flex items-center justify-center">
      <div className="w-72 h-48 bg-gray-400 blur-[150px] absolute z-0 -translate-y-48"></div>
      <div className="flex items-center justify-between w-full text-white relative z-0">
        <div className="flex items-center gap-16">
          <div>
            <Image src={logo} width={80} height={80} alt="logo" />
          </div>
          <div>
            <ul className="flex items-center gap-8 text-[15px]">
              <li className="hover:text-gray-300 hover:cursor-pointer transition-all">Product</li>
              <li className="hover:text-gray-300 hover:cursor-pointer transition-all">Solutions</li>
              <li className="hover:text-gray-300 hover:cursor-pointer transition-all">Team</li>
              <li className="hover:text-gray-300 hover:cursor-pointer transition-all">Company</li>
              <li className="hover:text-gray-300 hover:cursor-pointer transition-all">Pricing</li>
            </ul>
          </div>
        </div>
        <div>
          <Link href={"/"} className="flex items-center gap-2 bg-[#27262A] text-white rounded-lg px-3 py-1 hover:-translate-y-[1px] transition-all">
            <FaGithub className="text-[18px]" />
            <p className="text-[15px] font-medium">Get Started</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
