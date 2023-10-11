import styled from '@emotion/styled'
import { IItemOnly } from './TodoItem.interface'

export const SItem = styled.li<IItemOnly>`
  display: grid;
  grid-template-columns: 50% repeat(5, minmax(0, 1fr));
  column-gap: 5px;
  align-items: center;
  padding: 10px;
  border: 1px solid #00174C;
  border-radius: 10px;
  background-color: ${props => (props.item.completed ? '#1FE07D' : 'transparent')};
  transition: box-shadow .3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 30px 2px #00000047;
  }
`