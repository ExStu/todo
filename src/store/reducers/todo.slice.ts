import { createSlice} from '@reduxjs/toolkit'
import { ITodoState } from '../../types/todo.interface'


const initialState: ITodoState = {
  items: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({...action.payload})
    },
    editTodo: (state, action) => {
      state.items.forEach((item) => {
        if (item.id === action.payload.id) {
          item.status = action.payload.status
          item.task = action.payload.task
        }
      })
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    deleteAllTodos: state => {
      state.items = []
    }
  }
})

export const {
  addTodo,
  editTodo,
  deleteTodo,
  deleteAllTodos
} = todoSlice.actions