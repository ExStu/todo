import { FC } from 'react'
// import styles from './TodoItem.module.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Grid } from '@mui/material'
import { ITodoItem } from '../../types/todo.interface'
// import { useAppDispatch } from '../../hooks/useTypedSelector'
// import { deleteTodo } from '../../store/reducers/todo.slice'
import { useActions } from '../../hooks/useActions'
import CheckIcon from '@mui/icons-material/Check';
import styled from '@emotion/styled'

interface IItem {
  item: ITodoItem
}

// const StyledCard = styled.div`
//   padding: 10px;

// `

const TodoItem: FC<IItem> = ({item}) => {

  const {deleteTodo, toggleTodo} = useActions()

  const onDelete = () => {
    deleteTodo(item.id)
  }

  const onToggle = () => {
    toggleTodo(item.id)
  }

  return (
    // <Grid container spacing={2} sx={{backgroundColor: item.completed ? 'green' : 'transparent'}}>
    //   <Grid item xs={6}>
    //     {item.task}
    //   </Grid>
    //   <Grid item xs={2}>
    //     {item.status}
    //   </Grid>
    //   <Grid item xs={2}>
    //     {item.category}
    //   </Grid>
    //   <Grid item xs={2}>
    //     <Button variant='outlined'>
    //       <EditIcon/>
    //     </Button>
    //     <Button variant='outlined' onClick={onToggle}>
    //       <CheckIcon/>
    //     </Button>
    //     <Button onClick={onDelete} variant='outlined' color='error'>
    //       <DeleteIcon />
    //     </Button>
    //   </Grid>
    // </Grid>
    // <StyledCard>
    //   {item.task}
    //   {item.status}
    //   {item.category}
    // </StyledCard>
    <div></div>
  )
}

export default TodoItem;
