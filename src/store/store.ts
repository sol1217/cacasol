import { configureStore } from '@reduxjs/toolkit'
import authModalReducer from '@store/slices/authModalSlice'
import { homePageReducer } from '@components/features/home/page'

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
    authModal: authModalReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
