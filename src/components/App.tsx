import { Button, Container, Typography } from '@mui/material'
import Form from './form/Form'
import TodoList from './todoList/TodoList'
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector'
import { deleteAllTodos } from '../store/reducers/todo.slice'

function App() {

  const items = useAppSelector((state) => state.todos.items)
  const dispatch = useAppDispatch()

  const onDeleteAll = () => {
    dispatch(deleteAllTodos())
  }
  
  return (
    <Container>
      <Typography>
        Hello there mui
      </Typography>
      <Form/>
      <Button onClick={onDeleteAll} variant='contained'>Delete all</Button>
      <TodoList items={items}/>
    </Container>
  );
}

export default App;
