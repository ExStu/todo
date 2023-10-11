import { CategoryEnum, ITodoItem, TodoStatusEnum } from '../../types/todo.interface'

export interface IFormValues {
  task: string
  status: TodoStatusEnum
  category: CategoryEnum
  completed: boolean
}

export interface IForm {
  item?: ITodoItem
}