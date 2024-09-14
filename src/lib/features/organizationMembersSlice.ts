import { createSlice } from "@reduxjs/toolkit";

export interface OrganizationMembersState {
  organizations_members: any[];
}

const initialState: OrganizationMembersState = {
  organizations_members: [],
};

export const organizationMembersSlice = createSlice({
  name: "organizationMembers",
  initialState,
  reducers: {
    setOrganizationMembers: (state, action) => {
      state.organizations_members = action.payload;
    },
  },
});

export const { setOrganizationMembers } = organizationMembersSlice.actions;
export default organizationMembersSlice.reducer;
