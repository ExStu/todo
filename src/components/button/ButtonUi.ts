import styled from '@emotion/styled'

interface IButtonUi {
  radius: string
  variant: 'danger' | 'success' | 'fill' | 'outlined'
  margin?: string
}

export const SButton = styled.button<IButtonUi>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  margin-bottom: ${props => props.margin + 'px'};
  gap: 5px;
  border: 1px solid #00174C;
  border-radius: ${props => (props.radius + 'px')};
  background-color: ${props => props.variant === 'fill' ? '#00174C' : 'transparent'};
  color: ${props => props.variant === 'fill' ? 'white' : '#00174C'};
  font-size: 1.1rem;
  transition: background-color .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${props => (props.variant === 'danger' ? '#FF004C' : props.variant === 'success' ? '#FFCC00' : props.variant === 'fill' ? '#001733' : '#00174C')};
    border-color: ${props => (props.variant === 'danger' && '#FF004C')};
    color: white;
  } 
`