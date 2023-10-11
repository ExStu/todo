import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Skeleton from '@mui/material/Skeleton'
import { FC, useEffect, useState, memo } from 'react'
import { useActions } from '../../hooks/useActions'
import { capitalize } from '../../utils/capitalize'
import { SButton } from '../button/ButtonUi'
import { IItem } from './TodoItem.interface'
import { SItem } from './TodoItemUi'
import { css } from '@emotion/css'
import { Typography } from '@mui/material'

const TodoItem: FC<IItem> = ({item}) => {
  
  const {deleteTodo, toggleTodo, openModal} = useActions()
  
  // loading immitation (totally unnecessary)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [isLoading])
  
  const onDelete = () => {
    deleteTodo(item.id)
  }

  const onToggle = () => {
    toggleTodo(item.id)
  }

  return (
    <>
      {isLoading ? (
        <Skeleton height={100} animation="wave" />
      ): (
        <SItem item={item}>
          <div><Typography variant='body1'>{capitalize(item.task)}</Typography></div>
          <div><Typography variant='body1'>{capitalize(item.category)}</Typography></div>
          <div 
            className={css`
              ${item.completed && ('text-decoration: line-through;')}
            `}
          >
            <Typography variant='body1'>{item.status}</Typography>
          </div>
          <SButton variant='outlined' onClick={() => openModal(item)} radius='10'>
            <EditIcon/>
          </SButton>
          <SButton variant='success' onClick={onToggle} radius='10'>
            <CheckIcon/>
          </SButton>
          <SButton variant='danger' onClick={onDelete} radius='10'>
            <DeleteIcon />
          </SButton>
        </SItem>
      )}
    </>
    
  )
}

export default TodoItem;
