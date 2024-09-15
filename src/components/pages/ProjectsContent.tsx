"use client";

import { fetchOrganization } from "@/lib/features/organizationSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProjectsContent() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOrganization());
  }, []);

  const state = useSelector((item: any) => item.organization);

  console.log(state);

  return (
    <div className="mt-8 ml-8">
      {state.organizations && state.organizations.length > 0
        ? state.organizations.map((item: any, index: number) => (
            <div key={index}>
              <img src={item.avatar_url} alt="organizationimage" width={100} height={100} />
              <div>
                <h2>{item.login}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default ProjectsContent;
