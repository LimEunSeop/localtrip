import styled from 'styled-components'
import Color from '../../../assets/colors'

const Message = styled.p`
  margin: 15px 0 0;
  color: ${Color.gray300};
  font-size: 12px;
  font-weight: 300;

  a {
    color: ${Color.primary400};
    text-decoration: none;
  }
`

export default Message
