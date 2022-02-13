import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Color from '../../../assets/colors'

const StyledNavLink = styled(NavLink)`
  height: 73px;
  line-height: 73px;
  font-size: 16px;
  font-weight: 100;
  padding: 0 23px;
  border-top: 5px solid transparent;
  color: #20303c;
  text-decoration: none;
  transition: 0.3s;

  &.active {
    border-top-color: ${Color.info600};
  }

  &:hover {
    border-top-color: ${Color.info500};
  }
`

export default StyledNavLink
