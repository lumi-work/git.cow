import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryCommitsState {
  repository_commits: any[];
}

const initialState: RepositoryCommitsState = {
  repository_commits: [],
};

export const repositoryCommitsSlice = createSlice({
  name: "repositoryCommits",
  initialState,
  reducers: {
    setRepositoryCommits: (state, action) => {
      state.repository_commits = action.payload;
    },
  },
});

export const { setRepositoryCommits } = repositoryCommitsSlice.actions;
export default repositoryCommitsSlice.reducer;
