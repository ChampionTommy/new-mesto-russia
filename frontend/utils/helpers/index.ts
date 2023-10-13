import { type SlicesState } from '../interfaces'

export const HelperModalOpen = (state: SlicesState) => state.modal.isOpen

export const HelperModalType = (state: SlicesState) => state.modal.modalType

export const HelperImageData = (state: SlicesState) => state.images
