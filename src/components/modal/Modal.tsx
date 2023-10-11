import { FC } from 'react'
import styles from './Modal.module.scss'
import useOutside from '../../hooks/useOutside'
import { SButton } from '../button/ButtonUi'
import Form from '../form/Form'
import { ITodoItem } from '../../types/todo.interface'

interface IModal {
  item?: ITodoItem
  onClose: () => void
}

const Modal: FC<IModal> = ({item, onClose}) => {

  const {ref} = useOutside(onClose)

  return (
    <aside className={styles.modal}>
      <div ref={ref} className={styles.box}>
        <SButton margin='20' variant='fill' radius='5' onClick={onClose}>Close</SButton>
        <Form item={item}/>
      </div>
    </aside>
  )
}

export default Modal;
