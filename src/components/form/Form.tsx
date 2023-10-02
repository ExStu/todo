import {ChangeEvent, FC, useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IForm } from './Form.interface'
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CategoryEnum, TodoStatusEnum } from '../../types/todo.interface'
import Button from '@mui/material/Button';
import uuid from 'react-uuid';
import { useActions } from '../../hooks/useActions'
import { FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'

const Form: FC = () => {

  const {addTodo} = useActions()

  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [task, setTask] = useState('')

  const {register, handleSubmit, formState: {errors}} = useForm<IForm>()

  const onSubmit: SubmitHandler<IForm> = data => {
    const dataPlusId = {
      id: uuid(),
      task: data.task,
      status: data.status,
      category: data.category
    }
    console.log(dataPlusId);
    setStatus(TodoStatusEnum.Planned as string)
    setTask('')
    addTodo(dataPlusId)
  }

  const handleStatusChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value as string)
  }

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value as string)
  }

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('task', {
          required: 'Empty not allowed'
        })}
        value={task}
        onChange={handleTaskChange}
        label='Task'
        variant='standard'
      />
      <div>{errors.task?.message}</div>
      <FormControl sx={{minWidth: 120}}>
        <InputLabel>Status</InputLabel>
        <Select
          {...register('status')}
          value={status}
          label='Status'
          onChange={handleStatusChange}
        >
          <MenuItem value={TodoStatusEnum.Planned}>{TodoStatusEnum.Planned}</MenuItem>
          <MenuItem value={TodoStatusEnum.InProgress}>{TodoStatusEnum.InProgress}</MenuItem>
          <MenuItem value={TodoStatusEnum.Done}>{TodoStatusEnum.Done}</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{minWidth: 120}}>
        <InputLabel>Category</InputLabel>
        <Select
          {...register('category')}
          value={category}
          label='Category'
          onChange={handleCategoryChange}
        >
          <MenuItem value={CategoryEnum.Work}>{CategoryEnum.Work}</MenuItem>
          <MenuItem value={CategoryEnum.Groceries}>{CategoryEnum.Groceries}</MenuItem>
          <MenuItem value={CategoryEnum.Other}>{CategoryEnum.Other}</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' type='submit'>Add new task</Button>
    </form>
  )
}

export default Form;
