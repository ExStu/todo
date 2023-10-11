import { createSlice} from '@reduxjs/toolkit'
import { IModalState } from '../../types/modal.interface'

const initialState: IModalState = {
  isOpen: false,
  item: undefined
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true
      state.item = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  }
})