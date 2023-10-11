import ClearIcon from '@mui/icons-material/Clear'
import { ChangeEvent, FC, useEffect, useState, useCallback } from 'react'
import { CategoryEnum, ITodoItem } from '../../types/todo.interface'
import { searchMain } from '../../utils/search'
import { SButton } from '../button/ButtonUi'
import TodoItem from '../todoItem/TodoItem'
import { SClearBtn, SFilterList, SFilterListWrapp, SFiltersWrapper, SInput, SInputWrapper, STodoList } from './TodoListUi'
import { useActions } from '../../hooks/useActions'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Typography } from '@mui/material'

interface ITodoList {
  items: ITodoItem[]
}

const TodoList: FC<ITodoList> = ({items}) => {

  const {deleteAllTodos} = useActions()

  const [result, setResult] = useState(items)
  const [category, setCategory] = useState(CategoryEnum.All)
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    const filteredByCategory = items.filter((item) => {
      if (category.toLowerCase() === 'all') {
        return true
      } else return item.category === category.toLowerCase()
    })
    const searchFilter = searchMain(filteredByCategory, search)
    setResult(searchFilter)
  }, [items, category, search])

  const handleCategoryChange = (item: CategoryEnum) => {
    setCategory(item)
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const resetQuery = () => {
    setSearch('')
  }

  const onDeleteAll = () => {
    deleteAllTodos()
  }

  return (
    <section>
      <SFiltersWrapper>
        <SInputWrapper>
          <SInput type="text" value={search} placeholder='Search...' onChange={handleSearchChange}/>
          {search.length > 0 && (<SClearBtn onClick={resetQuery}><ClearIcon/></SClearBtn>)}
        </SInputWrapper>
        <SFilterListWrapp>
          <SFilterList>
            {(Object.keys(CategoryEnum) as Array<CategoryEnum>).map((item) => (
              <li key={item}>
                <SButton variant={category.toLowerCase() === item.toLowerCase() ? 'fill' : 'outlined'} radius='5' onClick={() => handleCategoryChange(item)}>
                  {item}
                  {item.toLowerCase() === 'groceries' ? <ShoppingBagIcon/> : item.toLowerCase() === 'work' ? <SsidChartIcon/> : item.toLowerCase() === 'other' ? <AltRouteIcon/> : <FormatListBulletedIcon/>}
                </SButton>
              </li>
            ))}
          </SFilterList>
          <SButton onClick={onDeleteAll} radius='10' variant='danger'>Delete all</SButton>
        </SFilterListWrapp>
      </SFiltersWrapper>
      {result.length ? (
        <STodoList>
          {result.map((item) => (
            <TodoItem item={item} key={item.id}/>
          ))}
        </STodoList>
      ) : (
        <Typography
          align='center'
          variant='h4'
          sx={{paddingTop: 15}}
        >
          {result.length === items.length ? 'Add a new task to track it' : 'No results found'}
        </Typography>
      )}
    </section>
  )
}

export default TodoList;
