import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type ImagesState } from '@/utils/interfaces'
import axios from '@/services'

export const fetchImages = createAsyncThunk<ImagesState>('images/fetchImages', async () => {
	const { data } = await axios.get<ImagesState>('/images')
	return data
})

export const fetchRemoveImage = createAsyncThunk('images/fetchRemovePost', async id => {
	await axios.delete(`/images/${id}`)
})

const initialState: ImagesState = {
	items: [],
	status: 'loading',
}

const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchImages.pending, state => {
				state.items = []
				state.status = 'loading'
			})
			.addCase(fetchImages.fulfilled, (state, action: PayloadAction<ImagesState>) => {
				state.status = 'loaded'
				state.items = action.payload
			})
			.addCase(fetchImages.rejected, state => {
				state.items = []
				state.status = 'error'
			})
			.addCase(fetchRemoveImage.pending, (state, action) => {
				state.items = state.items.filter(obj => obj._id !== action.meta.arg)
			})
	},
})

export default imagesSlice.reducer
