import { ITodoItem } from '../types/todo.interface'

const searchByQuery = (item: ITodoItem, searchQuery: string): boolean => {
  const queryArr = item.task.split(' ')
  for(const query of queryArr) {
    if (query.toLowerCase().startsWith(searchQuery.toLowerCase())) return true
  }
  return false
}

const searchByQueryAny = (item: ITodoItem, searchQuery: string): boolean => {
  const queryArr = item.task.split(' ')
  for(const query of queryArr) {
    if (query.toLowerCase().includes(searchQuery.toLowerCase())) return true
  }
  return false
}

export const searchMain = (data: ITodoItem[], query: string): ITodoItem[] => {
  const mainArr = data.filter(item => searchByQuery(item, query)) // looking for tasks which START with query
  const extraArr = data.filter(item => searchByQueryAny(item, query)) // looking for tasks which INCLUDES query
  const sortArr = [...mainArr, ...extraArr] // sort 2 arrays so 1st is which STARTS with
  return sortArr.filter(function(item, pos) { // deleting duplicates
    return sortArr.indexOf(item) === pos
  })
}
