import { FC, ReactNode } from 'react'
import styles from './Modal.module.scss'
import Button from '@mui/material/Button';
import useOutside from '../../hooks/useOutside'

interface IModal {
  children: ReactNode
  onClose: () => void
}

const Modal: FC<IModal> = ({children, onClose}) => {

  const {ref} = useOutside(onClose)

  return (
    <aside className={styles.modal}>
      <div ref={ref} className={styles.box}>
        <Button onClick={onClose} variant='outlined'>Close</Button>
        {children}
      </div>
    </aside>
  )
}

export default Modal;
