import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userProfile: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userProfile: [],
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk('user/users', async () => {
  const supabase = createClient();
  const { data: loginedUser, error } = await supabase.auth.getUser();

  // Hata veya boş kullanıcı kontrolü
  if (error || !loginedUser?.user) {
    console.log('User fetch error:', error || 'No user found');
    throw new Error('User not found');
  }

  // Kullanıcı meta verilerinden user_name'i alıyoruz
  const username = loginedUser.user.user_metadata?.user_name;

  // GitHub API'den kullanıcı bilgilerini çekiyoruz
  if (!username) {
    throw new Error('GitHub username not found');
  }

  const req = await fetch(`https://api.github.com/users/${username}`);
  const data = await req.json();
  
  return data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userProfile = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
