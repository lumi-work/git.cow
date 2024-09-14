import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userProfile: any[];
  loading: boolean,
  error: string | null
}

const initialState: UserState = {
  userProfile: [],
  loading: false,
  error: null
};

export const fetchUser = createAsyncThunk(
  'user/users',
  async () => {
    const supabase = createClient();
    const { data: loginedUser, error } = await supabase.auth.getUser();

    if (error || !loginedUser?.user) {
      console.log("User fetch error:", error);
    }

  

    const req = await fetch(`https://api.github.com/users/${username}`)
    const data = await req.json();
    return data;
  }
)

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.userProfile = action.payload;
      state.loading = false;
      state.error = null
    })
    .addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
      state.error = null
    })
    .addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error", action.error.message
    })
  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;
