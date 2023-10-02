import { todoSlice } from './reducers/todo.slice'
import { modalSlice } from './reducers/modal.slice'

export const rootActions = {
  ...todoSlice.actions,
  ...modalSlice.actions
}