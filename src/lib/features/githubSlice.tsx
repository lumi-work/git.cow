import { createSlice } from "@reduxjs/toolkit";

export interface githubState {
  value: number;
}

const initialState: githubState = {
  value: 0,
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {},
});

export const {} = githubSlice.actions;

export default githubSlice.reducer;
