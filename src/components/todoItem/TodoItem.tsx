import { FC } from 'react'
// import styles from './TodoItem.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Grid } from '@mui/material'
import { ITodoItem } from '../../types/todo.interface'
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { deleteTodo } from '../../store/reducers/todo.slice'

interface IItem {
  item: ITodoItem
}

const TodoItem: FC<IItem> = ({item}) => {

  const dispatch = useAppDispatch()

  const onDelete = () => {
    dispatch(deleteTodo(item.id))
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {item.task}
      </Grid>
      <Grid item xs={4}>
        {item.status}
      </Grid>
      <Grid item xs={2}>
        <Button variant='outlined'>
          <EditIcon/>
        </Button>
        <Button onClick={onDelete} variant='outlined' color='error'>
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default TodoItem;
