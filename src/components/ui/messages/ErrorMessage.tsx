import styled from 'styled-components'
import Color from '../../../assets/colors'

const ErrorMessage = styled.div`
  margin: 0 0 15px 0;
  padding: 15px;
  border: 1px solid ${Color.danger400};
  color: ${Color.danger400};
`

export default ErrorMessage
