import styled from '@emotion/styled'

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const SSelectWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 20px;
  gap: 20px;
`

interface IInputWrapp {
  width: string
}

export const SInputWrapp = styled.div<IInputWrapp>`
  align-self: center;
  position: relative;
  margin-bottom: 20px;
  width: ${props => props.width};
`

export const SErrorField = styled.div`
display: inline;
  width: 100%;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  color: #FF004C;
`