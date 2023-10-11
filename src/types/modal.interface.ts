import { ITodoItem } from './todo.interface'

export interface IModalState {
  isOpen: boolean
  item: ITodoItem | undefined
}