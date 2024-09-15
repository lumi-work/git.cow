import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface RepositoryState {
  repository: any[];
  loading: boolean;
  error: string | null;
}

const initialState: RepositoryState = {
  repository: [],
  loading: false,
  error: null
};

export const fetchRepository = createAsyncThunk('user/repository', async () => {
  const supabase = createClient();
  const { data: loginedUser, error } = await supabase.auth.getUser();

  if (error || !loginedUser?.user) {
    console.log('Repository fetch error:', error || 'No repository found.');
    throw new Error('No repository found.');
  }

  const username = loginedUser.user.user_metadata?.user_name;
  
  if (!username) {
    throw new Error('GitHub username not found');
  }

  const req = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await req.json();
  return data;
});

export const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepository.fulfilled, (state, action) => {
        state.repository = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRepository.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepository.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = repositorySlice.actions;
export default repositorySlice.reducer;
