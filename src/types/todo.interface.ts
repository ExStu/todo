export interface ITodoItem {
  id: number | string
  task: string
  status: TodoStatusEnum
}

export enum TodoStatusEnum {
  Planned = 'planned',
  InProgress = 'inProgress',
  Done = 'done'
}

export interface ITodoState {
  items: ITodoItem[]
}