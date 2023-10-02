import { useAppDispatch } from './useTypedSelector'
import {useMemo} from 'react'
import {bindActionCreators} from '@reduxjs/toolkit'
import { rootActions } from '../store/root-actions'

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}