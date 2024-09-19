"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/gitcow.svg";
import { FaGithub } from "react-icons/fa";
import { createClient } from "@/utils/client";

function Nav() {
  const supabase = createClient();

  async function signInWithGithub() {
    const { error } = await supabase.auth.signInWithOAuth({
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
    <div className="w-full h-[4.8rem] flex items-center justify-between px-8 text-black">
      <Link href={"/"}>
        <Image src={logo} width={80} height={80} alt="logo" />
      </Link>
      <div className="w-64 h-32 blur-[200px] bg-pink-500 ml-80 absolute "></div>

      <ul className="flex items-center gap-8 text-[15px] text-gray-700 relative">
        <li className="hover:text-pink-500 transition-all cursor-pointer">
          <Link href={"/team"}>Team</Link>
        </li>
        <li className="hover:text-pink-500 transition-all cursor-pointer">
          Discord
        </li>
        <li className="hover:text-pink-500 transition-all cursor-pointer">
          <Link href={"https://git-cow.gitbook.io/git.cow-docs"}> Docs</Link>
        </li>
        <li className="hover:text-pink-500 transition-all cursor-pointer">
          Company
        </li>
      </ul>
      <button
        onClick={signInWithGithub}
        className="flex items-center gap-2 bg-black text-white rounded-lg px-4 py-1.5 hover:-translate-y-[1px] transition-all shadow-md"
      >
        <FaGithub className="text-[18px]" />
        <p className="text-[15px] font-medium">Get Started</p>
      </button>
    </div>
  );
}

export default Nav;
