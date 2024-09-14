import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryContributorsState {
  repository_contributors: any[];
}

const initialState: RepositoryContributorsState = {
  repository_contributors: [],
};

export const repositoryContributorsSlice = createSlice({
  name: "repositoryContributors",
  initialState,
  reducers: {
    setRepositoryContributors: (state, action) => {
      state.repository_contributors = action.payload;
    },
  },
});

export const { setRepositoryContributors } = repositoryContributorsSlice.actions;
export default repositoryContributorsSlice.reducer;
