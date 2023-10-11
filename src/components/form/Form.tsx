import { FormControl } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { ChangeEvent, FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import uuid from 'react-uuid'
import { useActions } from '../../hooks/useActions'
import { CategoryEnum, TodoStatusEnum } from '../../types/todo.interface'
import { IForm, IFormValues } from './Form.interface'
import { SErrorField, SForm, SInputWrapp, SSelectWrapp } from './FormUi'
import { SButton } from '../button/ButtonUi'
import { css } from '@emotion/css'
import Divider from '@mui/material/Divider';
import { Typography } from '@mui/material'

const Form: FC<IForm> = ({item}) => {

  const {addTodo, editTodo, closeModal} = useActions()

  const [status, setStatus] = useState(item ? item.status : '')
  const [category, setCategory] = useState(item ? item.category : '')
  const [task, setTask] = useState(item ? item.task : '')

  const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = data => {
    
    if(item) {
      const dataForEdit = {
        id: item.id,
        task: data.task,
        status: data.status,
        category: data.category,
        completed: item.completed
      }
      editTodo(dataForEdit)

    } else {
      const dataPlusId = {
        id: uuid(),
        task: data.task,
        status: data.status,
        category: data.category,
      }
      setStatus(TodoStatusEnum.Planned)
      setTask('')
      addTodo(dataPlusId)
    }
    closeModal()
  }

  const handleStatusChange = (e: SelectChangeEvent) => {
    setStatus(e.target.value)
  }

  const handleCategoryChange = (e: SelectChangeEvent) => {
    setCategory(e.target.value)
  }

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  return (
    <SForm onSubmit={handleSubmit(onSubmit)}>
      <SInputWrapp width={item ? '100%' : '33%'}>
        <TextField
          {...register('task', {
            required: 'Task is a required field',
            minLength: {
              value: 3,
              message: 'Task must be at least 3 characters long'
            }
          })}
          value={task}
          onChange={handleTaskChange}
          label='Task'
          variant='standard'
          type='text'
          sx={{alignSelf: 'center', width: '100%'}}
        />
        <SErrorField><Typography>{errors.task?.message}</Typography></SErrorField>
      </SInputWrapp>
      <SSelectWrapp>

        <FormControl sx={{alignSelf: 'center', minWidth: 220, position: 'relative'}}>
          <InputLabel>Status</InputLabel>
          <Select
            {...register('status', {
              required: 'Please choose status'
            })}
            value={status}
            label='Status'
            onChange={handleStatusChange}
            MenuProps={{
              disablePortal: true,
              onClick: e => (e.preventDefault())
            }}
          >
            <MenuItem value={TodoStatusEnum.Planned}>{TodoStatusEnum.Planned}</MenuItem>
            <MenuItem value={TodoStatusEnum.InProgress}>{TodoStatusEnum.InProgress}</MenuItem>
          </Select>
          <SErrorField><Typography>{errors.status?.message}</Typography></SErrorField>
        </FormControl>
        <FormControl sx={{alignSelf: 'center', minWidth: 220, position: 'relative'}}>
          <InputLabel>Category</InputLabel>
          <Select
            {...register('category', {
              required: 'Please choose category'
            })}
            value={category}
            label='Category'
            onChange={handleCategoryChange}
            MenuProps={{
              disablePortal: true,
              onClick: e => (e.preventDefault())
            }}
          >
            <MenuItem value={CategoryEnum.Work}>{CategoryEnum.Work}</MenuItem>
            <MenuItem value={CategoryEnum.Groceries}>{CategoryEnum.Groceries}</MenuItem>
            <MenuItem value={CategoryEnum.Other}>{CategoryEnum.Other}</MenuItem>
          </Select>
          <SErrorField><Typography>{errors.category?.message}</Typography></SErrorField>
        </FormControl>
      </SSelectWrapp>
      <Divider>
        <SButton className={css`
          align-self: center;
        `} radius='5' variant='fill' type='submit'>{item ? 'Edit' : 'Add new task'}</SButton>
      </Divider>
    </SForm>
  )
}

export default Form;
