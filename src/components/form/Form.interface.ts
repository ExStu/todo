import { CategoryEnum, TodoStatusEnum } from '../../types/todo.interface'

export interface IForm {
  task: string
  status: TodoStatusEnum
  category: CategoryEnum
}