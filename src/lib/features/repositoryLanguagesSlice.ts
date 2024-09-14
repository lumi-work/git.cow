import { createSlice } from "@reduxjs/toolkit";

export interface RepositoryLanguagesState {
  repository_languages: any[];
}

const initialState: RepositoryLanguagesState = {
  repository_languages: [],
};

export const repositoryLanguagesSlice = createSlice({
  name: "repositoryLanguages",
  initialState,
  reducers: {
    setRepositoryLanguages: (state, action) => {
      state.repository_languages = action.payload;
    },
  },
});

export const { setRepositoryLanguages } = repositoryLanguagesSlice.actions;
export default repositoryLanguagesSlice.reducer;
