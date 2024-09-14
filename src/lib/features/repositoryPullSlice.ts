import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryPullState {
  repository_pull: any[];
}

const initialState: RepositoryPullState = {
  repository_pull: [],
};

export const repositoryPullSlice = createSlice({
  name: "repositoryPull",
  initialState,
  reducers: {
    setRepositoryPull: (state, action) => {
      state.repository_pull = action.payload;
    },
  },
});

export const { setRepositoryPull } = repositoryPullSlice.actions;
export default repositoryPullSlice.reducer;
