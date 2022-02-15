import React from 'react'
import styled from 'styled-components'
import Color from '../../../assets/colors'
import a11yHidden from '../../mixins/a11yHidden'

interface Props {
  id: string
  name: string
  value: string
  label: string
  required?: boolean
  checked?: boolean
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Radio = ({
  id,
  name,
  value,
  label,
  required = false,
  checked = false,
  onChange,
}: Props) => {
  return (
    <>
      <StyledInput
        id={id}
        type="radio"
        name={name}
        value={value}
        required={required}
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </>
  )
}

const StyledLabel = styled.label`
  position: relative;
  flex: 1;
  padding: 15px;
  border: 1px solid ${Color.gray300};
  font-size: 14px;
  font-weight: 300;
  color: ${Color.gray500};

  & ~ & {
    margin-left: -1px;
  }
`

const StyledInput = styled.input`
  ${a11yHidden}

  &:checked + ${StyledLabel} {
    z-index: 10;
    border-color: ${Color.primary300};
    color: ${Color.primary500};
  }
`

export default Radio
