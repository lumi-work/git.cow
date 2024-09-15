"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

import OverviewContent from "@/components/pages/OverviewContent";
import RepositoryContent from "@/components/pages/RepositoryContent";
import ProjectsContent from "@/components/pages/ProjectsContent";
import AnalyictsContent from "@/components/pages/AnalyictsContent";
import PackagesContent from "@/components/pages/PackagesContent";

function PageRouter() {
  const searchParams = useSearchParams();
  const params = searchParams.get("page");
  const router = useRouter();

  useEffect(() => {
    const params = searchParams.get("page");

    if (!params) {
      router.push("/dashboard?page=overview");
    }
  }, []);

  return (
    <>
      {params?.toString() === "overview" ? <OverviewContent /> : null}
      {params?.toString() === "repository" ? <RepositoryContent /> : null}
      {params?.toString() === "projects" ? <ProjectsContent /> : null}
      {params?.toString() === "analyicts" ? <AnalyictsContent /> : null}
      {params?.toString() === "packages" ? <PackagesContent /> : null}
    </>
  );
}

export default PageRouter;
