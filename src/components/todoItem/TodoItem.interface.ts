import { ITodoItem } from '../../types/todo.interface'

export interface IItem {
  item: ITodoItem
}

export type IItemOnly = Pick<IItem, 'item'>