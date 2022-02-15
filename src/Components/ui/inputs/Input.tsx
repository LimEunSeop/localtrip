import styled from 'styled-components'
import Color from '../../../assets/colors'

const Input = styled.input`
  outline: 0;
  /* background: #f2f2f2; */
  width: 100%;
  border: 1px solid ${Color.gray300};
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 300;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    color: ${Color.gray900};
  }
`

export default Input
