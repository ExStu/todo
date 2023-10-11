import styled from '@emotion/styled'

export const SFiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

export const SInputWrapper = styled.div`
  position: relative;
  align-self: center;
  width: 35%;
`

export const SInput = styled.input`
  padding: 10px;
  width: 100%;
  height: 30px;
  outline: none;
  border: 2px solid #CCCCCC;
  border-radius: 10px;
  transition: border-color .3s ease-in-out;
  font-size: 1.1rem;
  color: #00174C;
  &:focus {
    border-color: #00174C;
  }
  &:hover:not(:focus) {
    border-color: #003773;
  }
`

export const SClearBtn = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  position: absolute;
  top: 25%;
  right: -2%;
  color: #00174C;
  cursor: pointer;
`

export const SFilterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  display: flex;
  gap: 10px;
`

export const SFilterListWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 10px;
`

export const STodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

// export const SHeadersList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: grid;
//   grid-template-columns: 50% repeat(5, minmax(0, 1fr));
//   column-gap: 5px;
//   align-items: center;
// `

// export const SHeadersItem = styled.li`

// `