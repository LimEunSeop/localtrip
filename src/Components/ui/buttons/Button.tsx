import styled from 'styled-components'
import Color from '../../../assets/colors'
import resetButton from '../../mixins/resetButton'

const Button = styled.button<{ width?: number }>`
  ${resetButton}
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding: 15px;
  background: ${Color.primary500};
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background: ${Color.primary400};
  }
`

export default Button
