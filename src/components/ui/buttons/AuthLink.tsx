import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Color from '../../../assets/colors'
import resetButton from '../../mixins/resetButton'

const AuthLink = styled(Link)`
  ${resetButton}
  display:block;
  width: 94px;
  height: 40px;
  border-radius: 9999px;
  border: 1px solid ${Color.info600};
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  font-weight: 100;
  color: ${Color.info600};
  transition: 0.3s;

  &:hover {
    background: ${Color.info600};
    color: #fff;
  }
`

export default AuthLink
