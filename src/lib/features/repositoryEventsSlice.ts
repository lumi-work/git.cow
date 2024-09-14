import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryEventsState {
  repository_events: any[];
}

const initialState: RepositoryEventsState = {
  repository_events: [],
};

export const repositoryEventsSlice = createSlice({
  name: "repositoryEvents",
  initialState,
  reducers: {
    setRepositoryEvents: (state, action) => {
      state.repository_events = action.payload;
    },
  },
});

export const { setRepositoryEvents } = repositoryEventsSlice.actions;
export default repositoryEventsSlice.reducer;
