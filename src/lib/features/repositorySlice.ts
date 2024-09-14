import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryState {
  repository: any[];
}

const initialState: RepositoryState = {
  repository: [],
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    setRepository: (state, action) => {
      state.repository = action.payload;
    },
  },
});

export const { setRepository } = repositorySlice.actions;
export default repositorySlice.reducer;
