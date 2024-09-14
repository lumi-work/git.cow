import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import repositorySlice from './features/repositorySlice'
import repositoryPullSlice from './features/repositoryPullSlice'
import repositoryLanguagesSlice from './features/repositoryLanguagesSlice'
import repositoryForkSlice from './features/repositoryForkSlice'
import repositoryEventsSlice from './features/repositoryEventsSlice'
import repositoryContributorsSlice from './features/repositoryContributorsSlice'
import repositoryCommitsSlice from './features/repositoryCommitsSlice'
import repositoryBranchSlice from './features/repositoryBranchSlice'
import organizationReposSlice from './features/organizationReposSlice'
import organizationMembersSlice from './features/organizationMembersSlice'
import organizationIssuesSlice from './features/organizationIssuesSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
       user: userSlice,
       repo: repositorySlice,
       repoPull: repositoryPullSlice,
       repoLanguage: repositoryLanguagesSlice,
       repoFork: repositoryForkSlice,
       repoEvents: repositoryEventsSlice,
       repoContributors: repositoryContributorsSlice,
       repoCommits: repositoryCommitsSlice,
       repoBranch: repositoryBranchSlice,
       organizationRepo: organizationReposSlice,
       organizationMembers: organizationMembersSlice,
       organizationIssues: organizationIssuesSlice
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']