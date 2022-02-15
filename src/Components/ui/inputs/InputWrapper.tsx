import styled from 'styled-components'

const InputWrapper = styled.div<{ gap?: number }>`
  display: flex;
  justify-content: space-between;
  margin: 0 0 15px;
  gap: ${({ gap }) => (gap ? `${gap}px` : '0px')};
`

export default InputWrapper
