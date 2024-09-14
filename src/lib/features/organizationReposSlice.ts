import { createSlice } from "@reduxjs/toolkit";

export interface OrganizationReposState {
  organizations_repos: any[];
}

const initialState: OrganizationReposState = {
  organizations_repos: [],
};

export const organizationReposSlice = createSlice({
  name: "organizationRepos",
  initialState,
  reducers: {
    setOrganizationRepos: (state, action) => {
      state.organizations_repos = action.payload;
    },
  },
});

export const { setOrganizationRepos } = organizationReposSlice.actions;
export default organizationReposSlice.reducer;
