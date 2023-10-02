import { FC, PropsWithChildren } from 'react'
import styled from '@emotion/styled'

interface IButtonUi {
  radius: string
}

// const ButtonComp: FC<PropsWithChildren<IButtonUi>> = ({radius, children}) => {

  // const ButtonComp = styled.button<IButtonUi>`
  //   padding: 10px;
  //   border: 1px solid red;
  //   border-radius: ${props => (props.radius)};
  //   cursor: pointer;
  //   background-color: transparent;
  //   transition: background-color .3s ease-in-out;
  //   &:hover {
  //     background-color: blueviolet;
  //   } 
  // `

  // return (
  //   <Button radius={radius}>{children}</Button>
  // )
// }

// export default ButtonComp;
