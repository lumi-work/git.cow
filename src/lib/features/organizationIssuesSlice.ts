import { createSlice } from "@reduxjs/toolkit";

export interface OrganizationIssuesState {
  organizations_issues: any[];
}

const initialState: OrganizationIssuesState = {
  organizations_issues: [],
};

export const organizationIssuesSlice = createSlice({
  name: "organizationIssues",
  initialState,
  reducers: {
    setOrganizationIssues: (state, action) => {
      state.organizations_issues = action.payload;
    },
  },
});

export const { setOrganizationIssues } = organizationIssuesSlice.actions;
export default organizationIssuesSlice.reducer;
