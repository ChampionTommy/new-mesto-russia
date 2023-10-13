import { type ModalState } from '@/utils/interfaces'
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ModalState = {
	isOpen: false,
	modalType: '',
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<string>) => {
			state.isOpen = true
			state.modalType = action.payload
		},
		closeModal: state => {
			state.isOpen = false
			state.modalType = ''
		},
	},
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer
