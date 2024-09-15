"use client";

import { fetchOrganization } from "@/lib/features/organizationSlice";
import { AppDispatch } from "@/lib/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProjectsContent() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOrganization());
  }, [dispatch]);

  const state = useSelector((item: any) => item.organization);

  return (
    <div className="mt-8 ml-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.organizations && state.organizations.length > 0 ? (
          state.organizations.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={item.avatar_url}
                alt="organization logo"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{item.login}</h2>
              <p className="text-gray-600 text-center text-sm">
                {item.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No organizations found.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsContent;
