import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface RepositoryLanguagesState {
  repository_languages: any[];
  loading: boolean;
  error: string | null
}

const initialState: RepositoryLanguagesState = {
  repository_languages: [],
  loading: false,
  error: null
};

export const fetchRepositoryLanguage = createAsyncThunk('user/repositorylanguage', async (projectName: string) => {
  const supabase = createClient();
  const { data: loginedUser, error } = await supabase.auth.getUser();

  if (error || !loginedUser?.user) {
    console.log('Repository language fetch error:', error || 'No repository language found.');
    throw new Error('No repository language found.');
  }

  const username = loginedUser.user.user_metadata?.user_name;
  
  if (!username) {
    throw new Error('GitHub username not found');
  }

  const req = await fetch(`https://api.github.com/repos/${username}/${projectName}/languages`);
  const data = await req.json();
  return data;
});

export const repositoryLanguagesSlice = createSlice({
  name: "repositoryLanguages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositoryLanguage.fulfilled, (state, action) => {
        state.repository_languages = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRepositoryLanguage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositoryLanguage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = repositoryLanguagesSlice.actions;
export default repositoryLanguagesSlice.reducer;
