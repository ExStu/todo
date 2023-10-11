export interface ITodoItem {
  id: number | string
  task: string
  completed: boolean
  status: TodoStatusEnum
  category: CategoryEnum
}

export enum TodoStatusEnum {
  Planned = 'Planned',
  InProgress = 'InProgress',
  // Done = 'Done'
}

export enum CategoryEnum {
  All = 'all',
  Work = 'work',
  Groceries = 'groceries',
  Other = 'other'
}

export interface ITodoState {
  items: ITodoItem[]
}