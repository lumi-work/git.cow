import { createSlice } from "@reduxjs/toolkit";

export interface githubState<T = any> {
  user: Array<T>;
}

const initialState: githubState = {
  user: [],
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
});

export const {} = githubSlice.actions;

export default githubSlice.reducer;
