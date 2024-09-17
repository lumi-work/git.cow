"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { GrAppsRounded } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { HiOutlineServer } from "react-icons/hi";
import { TbPresentationAnalytics } from "react-icons/tb";
import { LuPackageSearch } from "react-icons/lu";
import { BsStars } from "react-icons/bs";

import logo from "../../../public/gitcow.svg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { fetchUser } from "@/lib/features/userSlice";
import Signout from "./Signout";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LeftBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setSelected] = useState<string>("overview");

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const page = searchParams.get("page") || "overview";
    setSelected(page);
  }, [searchParams]);

  function handleLeftBar(item: string) {
    setSelected(item);
    const params = new URLSearchParams(searchParams);
    params.set("page", item);

    const newURL = `/dashboard?${params.toString()}`;
    router.replace(newURL);
  }

  const state = useSelector((item: any) => item.user);

  return (
    <div className="flex flex-col items-start ml-8 pt-8 h-screen">
      <div className="flex flex-col w-full">
        <div>
          <Link href={"/dashboard?page=overview"}>
            <Image src={logo} width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className="flex-col items-start mt-8 w-full pr-8">
          <div className="text-gray-400 font-medium text-[14px]">MY DASHBOARD</div>
          <div
            onClick={() => handleLeftBar("overview")}
            className={`hover:bg-gray-100 rounded-lg w-full flex items-center gap-2 py-1 pl-1 mt-2 text-[16px] text-gray-600 cursor-pointer ${
              selected === "overview" ? "bg-gray-100" : ""
            }`}
          >
            <GrAppsRounded /> <p>Overview</p>
          </div>
          <div
            onClick={() => handleLeftBar("repository")}
            className={`hover:bg-gray-100 rounded-lg w-full flex items-center gap-2 py-1 pl-1 mt-2 text-[16px] text-gray-600 cursor-pointer ${
              selected === "repository" ? "bg-gray-100" : ""
            }`}
          >
            <GrBook /> <p>Repository</p>
          </div>
          <div
            onClick={() => handleLeftBar("projects")}
            className={`hover:bg-gray-100 rounded-lg w-full flex items-center gap-2 py-1 pl-1 mt-2 text-[16px] text-gray-600 cursor-pointer ${
              selected === "projects" ? "bg-gray-100" : ""
            }`}
          >
            <HiOutlineServer /> <p>Projects</p>
          </div>
        </div>
        <div className="flex-col items-start mt-8 w-full pr-8">
          <div className="text-gray-400 font-medium text-[14px]">CODESPACE</div>
          <div
            // onClick={() => handleLeftBar("analyicts")}
            className={`rounded-lg w-full flex items-center gap-2 py-1 pl-1 mt-2 text-[16px] text-gray-600 cursor-not-allowed ${selected === "analyicts" ? "bg-gray-100" : ""}`}
          >
            <TbPresentationAnalytics /> <p>Analyicts</p> <BsStars className="text-pink-500 text-[18px]" />
          </div>
          <div
            onClick={() => handleLeftBar("packages")}
            className={`hover:bg-gray-100 rounded-lg w-full flex items-center gap-2 py-1 pl-1 mt-2 text-[16px] text-gray-600 cursor-pointer ${
              selected === "packages" ? "bg-gray-100" : ""
            }`}
          >
            <LuPackageSearch /> <p>Packages</p>
          </div>
        </div>
      </div>
      <div className="text-gray-600 text-md flex items-end h-full pb-4 w-full">
        <div className="flex items-center justify-start bg-gray-100 rounded-lg py-4 px-4 w-full text-gray-700 mr-6 gap-2 shadow-md">
          <img src={state.userProfile.avatar_url} width={40} height={40} alt="userimage" className="border-2 border-gray-300 rounded-full object-cover -ml-2" />
          <div className="flex flex-col justify-center flex-grow">
            <p className="text-lg font-semibold">@{state.userProfile.login}</p>
            <p className="text-gray-500 text-xs">ID: {state.userProfile.id}</p>
          </div>
          <div className="ml-auto">
            <Signout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
