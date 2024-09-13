"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logo.svg";
import { FaGithub } from "react-icons/fa";
import { createClient } from "@/utils/client";
import { useRouter } from "next/navigation";

function Nav() {
  const supabase = createClient();
  const router = useRouter();

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });

    if (error) {
      console.error("Auth error:", error);
    }
  }

  return (
    <div className="w-full h-[4.8rem] flex items-center justify-center">
      <div className="w-72 h-48 bg-gray-400 blur-[150px] absolute z-0 -translate-y-48"></div>
      <div className="flex items-center justify-between w-full text-white relative z-0">
        <div className="flex items-center gap-16">
          <Link href={"/"}>
            <Image src={logo} width={80} height={80} alt="logo" />
          </Link>
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
          <button onClick={signInWithGithub} className="flex items-center gap-2 bg-[#27262A] text-white rounded-lg px-3 py-1 hover:-translate-y-[1px] transition-all">
            <FaGithub className="text-[18px]" />
            <p className="text-[15px] font-medium">Get Started</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
