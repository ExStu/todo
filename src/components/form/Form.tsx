import {ChangeEvent, FC, useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IForm } from './Form.interface'
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { TodoStatusEnum } from '../../types/todo.interface'
import Button from '@mui/material/Button';
import { useAppDispatch } from '../../hooks/useTypedSelector'
import { addTodo } from '../../store/reducers/todo.slice'
import uuid from 'react-uuid';

const Form: FC = () => {

  const dispatch = useAppDispatch()

  const [status, setStatus] = useState(TodoStatusEnum.Planned as string)
  const [task, setTask] = useState('')

  const {register, handleSubmit, formState: {errors}} = useForm<IForm>()

  const onSubmit: SubmitHandler<IForm> = data => {
    const addId = {
      id: uuid(),
      task: data.task,
      status: data.status
    }
    console.log(addId);
    setStatus(TodoStatusEnum.Planned as string)
    setTask('')
    dispatch(addTodo(addId))
  }

  const handleSelectChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as string)
  }

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('task', {
          required: true
        })}
        value={task}
        onChange={handleTaskChange}
        label='Task'
        variant='standard'
      />
      <p>{errors.task?.message}</p>
      <Select
        {...register('status')}
        value={status}
        label='Status'
        onChange={handleSelectChange}
      >
        <MenuItem value={TodoStatusEnum.Planned}>{TodoStatusEnum.Planned}</MenuItem>
        <MenuItem value={TodoStatusEnum.InProgress}>{TodoStatusEnum.InProgress}</MenuItem>
        <MenuItem value={TodoStatusEnum.Done}>{TodoStatusEnum.Done}</MenuItem>
      </Select>
      <Button variant='contained' type='submit'>Add new task</Button>
    </form>
  )
}

export default Form;
