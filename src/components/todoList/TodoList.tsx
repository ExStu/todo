import {FC} from 'react'
import { ITodoItem } from '../../types/todo.interface'
import TodoItem from '../todoItem/TodoItem'
import styles from './TodoList.module.scss'

interface ITodoList {
  items: ITodoItem[]
}

const TodoList: FC<ITodoList> = ({items}) => {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <TodoItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default TodoList;
