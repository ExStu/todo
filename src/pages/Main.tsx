import { Container } from '@mui/material'
import {FC} from 'react'
import { useAppSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { getItems, getModalState } from '../store/selectors'
import Modal from '../components/modal/Modal'
import Form from '../components/form/Form'
import TodoList from '../components/todoList/TodoList'
import { Global } from '@emotion/react'
import { globals } from '../assets/styles/global'
import { SButton } from '../components/button/ButtonUi'

const MainPage: FC = () => {

  const items = useAppSelector(getItems)
  const modalState = useAppSelector(getModalState)
  const {closeModal} = useActions()
  
  return (
    <Container>
      {/* <Global styles={globals}/> */}
      <Form/>
      <TodoList items={items}/>
      {modalState.isOpen && (
        <Modal item={modalState.item} onClose={() => closeModal()}/>
      )}
    </Container>
  );
}

export default MainPage;
