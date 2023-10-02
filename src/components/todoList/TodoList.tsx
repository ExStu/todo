import {ChangeEvent, FC, useEffect, useState} from 'react'
import { CategoryEnum, ITodoItem } from '../../types/todo.interface'
import TodoItem from '../todoItem/TodoItem'
import styles from './TodoList.module.scss'

interface ITodoList {
  items: ITodoItem[]
}

const TodoList: FC<ITodoList> = ({items}) => {

  const data = items

  const [result, setResult] = useState(data)
  const [category, setCategory] = useState(CategoryEnum.All)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const filteredByCategory = data.filter((item) => {
      if (category.toLowerCase() === 'all') {
        return true
      } else return item.category === category.toLowerCase()
    })
    setResult(filteredByCategory)
  }, [data, category])

  useEffect(() => {
    const searchFilter = data.filter((item) => (item.task.toLowerCase().includes(search)))
    setResult(searchFilter)
  }, [data, search])

  const handleCategoryChange = (item: CategoryEnum) => {
    console.log(item);
    setCategory(item)
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <section>
      <input type="text" placeholder='Search...' onChange={handleSearchChange}/>
      <ul>
        {(Object.keys(CategoryEnum) as Array<CategoryEnum>).map((item) => (
          <li key={item}>
            <button onClick={() => handleCategoryChange(item)}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.list}>
        {result.map((item) => (
          <TodoItem item={item} key={item.id}/>
        ))}
      </div>
    </section>
  )
}

export default TodoList;
