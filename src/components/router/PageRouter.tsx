"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import OverviewContent from "@/components/pages/OverviewContent";
import RepositoryContent from "@/components/pages/RepositoryContent";
import ProjectsContent from "@/components/pages/ProjectsContent";
import PackagesContent from "@/components/pages/PackagesContent";
import { useSelector } from "react-redux";
import RepositoryMain from "../pages/RepositoryMain";

function PageRouter() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const repoParam = searchParams.get("repo");
  const [routerRepo, setRouterRepo] = useState([]);
  const router = useRouter();
  const state = useSelector((item: any) => item.repo);

  useEffect(() => {
    if (!pageParam && !repoParam) {
      router.push("/dashboard?page=overview");
    }
  }, [pageParam, repoParam, router]);

  useEffect(() => {
    if (repoParam && state.repository && state.repository.length > 0) {
      const filteredData = state.repository.filter(
        (item: any) => item.id.toString() === repoParam.toString()
      );

      if (filteredData && filteredData.length > 0) {
        setRouterRepo(filteredData);
      } else {
        setRouterRepo([]);
      }
    }
  }, [repoParam, state.repository]);

  return (
    <>
      {pageParam === "overview" && <OverviewContent />}
      {pageParam === "repository" && <RepositoryContent />}
      {pageParam === "organizations" && <ProjectsContent />}
      {/* {pageParam === "analyicts" && <AnalyictsContent />} */}
      {pageParam === "packages" && <PackagesContent />}
      {routerRepo.length > 0 && repoParam ? <RepositoryMain /> : null}
    </>
  );
}

export default PageRouter;
