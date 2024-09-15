import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface OrganizationState {
  organizations: any[];
  loading: boolean;
  error: string | null
}

const initialState: OrganizationState = {
  organizations: [],
  loading: false,
  error: null
};

export const fetchOrganization = createAsyncThunk('user/organization', async () => {
  const supabase = createClient();
  const { data: loginedUser, error } = await supabase.auth.getUser();

  if (error || !loginedUser?.user) {
    console.log('organization fetch error:', error || 'No organization found.');
    throw new Error('No repository found.');
  }

  const username = loginedUser.user.user_metadata?.user_name;
  
  if (!username) {
    throw new Error('GitHub username not found');
  }

  const req = await fetch(`https://api.github.com/users/${username}/orgs`);
  const data = await req.json();
  return data;
});

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganization.fulfilled, (state, action) => {
        state.organizations = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOrganization.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganization.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = organizationSlice.actions;
export default organizationSlice.reducer;
