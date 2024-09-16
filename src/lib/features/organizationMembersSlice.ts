import { createClient } from "@/utils/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface OrganizationMembersState {
  organizations_members: { [key: string]: any[] };
  loading: boolean;
  error: string | null;
}

const initialState: OrganizationMembersState = {
  organizations_members: {},
  loading: false,
  error: null,
};

export const fetchOrganizationMembers = createAsyncThunk(
  'user/organizationMembers',
  async (organizationName: string) => {
    const supabase = createClient();
    const { data: loginedUser, error } = await supabase.auth.getUser();

    if (error || !loginedUser?.user) {
      console.log('Organization members fetch error:', error || 'No organization members found.');
      throw new Error('No repository found.');
    }

    const username = loginedUser.user.user_metadata?.user_name;

    if (!username) {
      throw new Error('GitHub username not found');
    }

    const req = await fetch(`https://api.github.com/orgs/${organizationName}/members`);
    const data = await req.json();
    return { organizationName, members: data };
  }
);

export const organizationMembersSlice = createSlice({
  name: "organizationMembers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizationMembers.fulfilled, (state, action) => {
        state.organizations_members[action.payload.organizationName] = action.payload.members;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchOrganizationMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizationMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error';
      });
  },
});

export const {} = organizationMembersSlice.actions;
export default organizationMembersSlice.reducer;
