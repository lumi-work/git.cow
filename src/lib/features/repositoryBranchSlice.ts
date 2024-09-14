import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryBranchState {
  repository_branch: any[];
}

const initialState: RepositoryBranchState = {
  repository_branch: [],
};

export const repositoryBranchSlice = createSlice({
  name: "repositoryBranch",
  initialState,
  reducers: {
    setRepositoryBranch: (state, action) => {
      state.repository_branch = action.payload;
    },
  },
});

export const { setRepositoryBranch } = repositoryBranchSlice.actions;
export default repositoryBranchSlice.reducer;
