import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '@/services'
import { type AuthState, type SlicesState, type UserData } from '@/utils/interfaces'

const initialState: AuthState = {
	data: null,
	status: 'loading',
}
export const fetchRegister = createAsyncThunk('signup/fetchRegister', async (params: UserData) => {
	const { data } = await axios.post('/signup', params)
	return data
})
export const fetchAuth = createAsyncThunk('signin/fetchAuth', async (params: UserData) => {
	const { data } = await axios.post('/signin', params)
	console.log(data)
	return data
})
export const fetchAuthStatus = createAsyncThunk('authorize/fetchAuthStatus', async () => {
	const { data } = await axios.get('/authorize')
	return data
})
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: state => {
			state.data = null
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAuth.pending, state => {
				state.status = 'loading'
				state.data = null
			})
			.addCase(fetchAuth.fulfilled, (state, action) => {
				state.status = 'loaded'
				state.data = action.payload
			})
			.addCase(fetchAuth.rejected, state => {
				state.status = 'error'
				state.data = null
			})
			.addCase(fetchRegister.pending, state => {
				state.status = 'loading'
				state.data = null
			})
			.addCase(fetchRegister.fulfilled, (state, action) => {
				state.status = 'loaded'
				state.data = action.payload
			})
			.addCase(fetchRegister.rejected, state => {
				state.status = 'error'
				state.data = null
			})
			.addCase(fetchAuthStatus.pending, state => {
				state.status = 'loading'
				state.data = null
			})
			.addCase(fetchAuthStatus.fulfilled, (state, action) => {
				state.status = 'loaded'
				state.data = action.payload
			})
			.addCase(fetchAuthStatus.rejected, state => {
				state.status = 'error'
				state.data = null
			})
	},
})
export const { logout } = authSlice.actions

export const loggedIn = (state: SlicesState) => Boolean(state.auth.data)
export default authSlice.reducer
