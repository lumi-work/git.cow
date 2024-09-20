"use client";

import { fetchOrganizationMembers } from "@/lib/features/organizationMembersSlice";
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

  useEffect(() => {
    if (state.organizations && state.organizations.length > 0) {
      state.organizations.forEach((org: any) => {
        dispatch(fetchOrganizationMembers(org.login));
      });
    }
  }, [state.organizations, dispatch]);

  const members = useSelector((item: any) => item.organizationMembers);

  return (
    <div className="mt-8 ml-8">
      <h2 className="text-lg font-semibold text-gray-800 flex-1 mb-6">
        Organizations{" "}
        <span className="text-gray-500 text-sm">
          ({state.organizations.length || 0})
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {state.organizations && state.organizations.length > 0 ? (
          state.organizations.map((item: any, index: number) => (
            <div
              key={index}
              className="text-gray-800 rounded-lg border-2 shadow-lg flex flex-col items-center p-6 hover:scale-105 transition-all hover:cursor-pointer bg-gray-100"
            >
              <img
                src={item.avatar_url}
                alt="organization logo"
                className="w-24 h-24 rounded-full mb-4 border"
              />
              <h2 className="text-xl font-bold mb-2">{item.login}</h2>
              <h3 className="text-gray-600 text-center text-sm h-16">
                {item.description && item.description.length > 50 ? (
                  <p>{item.description.slice(0, 50)}...</p>
                ) : (
                  <p>{item.description || "No description."}</p>
                )}
              </h3>

              {members.organizations_members &&
                members.organizations_members[item.login] && (
                  <div className="flex items-end h-full justify-center gap-8 w-full text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      {members.organizations_members[item.login].length} members
                    </div>
                  </div>
                )}
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
