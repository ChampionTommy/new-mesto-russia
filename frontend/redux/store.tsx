import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authSlice from './slices/auth'
import modalSlice from './slices/modal'
import imagesSlice from './slices/images'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		images: imagesSlice,
		modal: modalSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
