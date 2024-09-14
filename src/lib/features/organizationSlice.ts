import { createSlice } from "@reduxjs/toolkit";

export interface OrganizationState {
  organizations: any[];
}

const initialState: OrganizationState = {
  organizations: [],
};

export const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    setOrganizations: (state, action) => {
      state.organizations = action.payload;
    },
  },
});

export const { setOrganizations } = organizationSlice.actions;
export default organizationSlice.reducer;
