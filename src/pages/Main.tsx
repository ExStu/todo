import { Button, Container, Typography } from '@mui/material'
import {FC} from 'react'
// import Form from './form/Form'
// import TodoList from './todoList/TodoList'
import { useAppSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { getItems, getModalState } from '../store/selectors'
import Modal from '../components/modal/Modal'
import Form from '../components/form/Form'
import TodoList from '../components/todoList/TodoList'
// import Modal from './modal/Modal'
// import ButtonComp from '../components/button/Button'
import { Global } from '@emotion/react'
import { globals } from '../assets/styles/global'

const MainPage: FC = () => {

  const items = useAppSelector(getItems)
  const modalState = useAppSelector(getModalState)
  const {deleteAllTodos, openModal, closeModal} = useActions()

  const onDeleteAll = () => {
    deleteAllTodos()
  }

  const onOpenModal = () => {
    openModal()
  }
  
  return (
    <Container>
      {/* <Global styles={globals}/> */}
      <Button onClick={onOpenModal} variant='contained'>Modal</Button>
      {/* <Typography>
        Hello there mui
      </Typography> */}
      {modalState && (
        <Modal onClose={closeModal}>
          hello
        </Modal>
      )}
      {/* <ButtonComp radius='10px'>Hello there emotion</ButtonComp> */}
      <Form/>
      <Button onClick={onDeleteAll} variant='contained'>Delete all</Button>
      <TodoList items={items}/>
    </Container>
  );
}

export default MainPage;
