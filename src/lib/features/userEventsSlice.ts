import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userEvent: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userEvent: [],
  loading: false,
  error: null,
};

export const fetchUserEvents = createAsyncThunk('user/usersevents', async () => {
  const supabase = createClient();
  const { data: loginedUser, error } = await supabase.auth.getUser();

  if (error || !loginedUser?.user) {
    console.log('User events fetch error:', error || 'No user events found');
    throw new Error('User events not found');
  }

  const username = loginedUser.user.user_metadata?.user_name;
  
  if (!username) {
    throw new Error('GitHub username not found');
  }

  const req = await fetch(`https://api.github.com/users/${username}/events`);
  const data = await req.json();
  

  const filteredData = data?.filter((item: any) => item.type == "PushEvent") || [];
  return filteredData;

});

export const userEventsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserEvents.fulfilled, (state, action) => {
        state.userEvent = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = userEventsSlice.actions;
export default userEventsSlice.reducer;
