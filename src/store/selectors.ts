// import { useAppSelector } from '../hooks/useTypedSelector'
import { RootState } from './store'

export const getItems = (state: RootState) => state.todos.items

export const getModalState = (state: RootState) => state.modal