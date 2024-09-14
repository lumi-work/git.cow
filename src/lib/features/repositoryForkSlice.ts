import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryForkState {
  repository_fork: any[];
}

const initialState: RepositoryForkState = {
  repository_fork: [],
};

export const repositoryForkSlice = createSlice({
  name: "repositoryFork",
  initialState,
  reducers: {
    setRepositoryFork: (state, action) => {
      state.repository_fork = action.payload;
    },
  },
});

export const { setRepositoryFork } = repositoryForkSlice.actions;
export default repositoryForkSlice.reducer;
