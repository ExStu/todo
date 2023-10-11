import { PayloadAction, createSlice} from '@reduxjs/toolkit'
import { ITodoItem, ITodoState } from '../../types/todo.interface'


const initialState: ITodoState = {
  items: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    editTodo: (state, {payload}: PayloadAction<ITodoItem>) => {
      const todo = state.items.find((item) => item.id === payload.id)
      if (todo) {
        todo.task = payload.task
        todo.status = payload.status
        todo.completed = payload.completed
        todo.category = payload.category
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    deleteAllTodos: () => {
      return initialState
    }
  }
})