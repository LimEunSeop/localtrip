import styled from 'styled-components'
import Color from '../../assets/colors'
import Button from '../ui/buttons/Button'
import Input from '../ui/inputs/Input'
import Radio from '../ui/inputs/Radio'
import InputWrapper from '../ui/inputs/InputWrapper'
import { useState } from 'react'
import AuthService from '../../services/AuthService'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../ui/messages/ErrorMessage'

interface FormInput {
  email: string
  password: string
  username: string
  gender: string
  phone: string
  birthYear: string
  birthMonth: string
  birthDay: string
}

const Join = () => {
  const [inputs, setInputs] = useState({} as FormInput)
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const handleInputChanged = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setInputs({ ...inputs, [name]: value })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const target: any = e.target

    // submit 데이터 가공 작업
    const username: string = target.username.value
    const password: string = target.password.value
    const gender: string = target.gender.value
    const phone: string = target.phone.value
    const birthdate: string = `${target['birth-year'].value}-${target['birth-month'].value}-${target['birth-day'].value}`
    console.log(username, password, gender, phone, birthdate)

    AuthService.join(username, password, gender, phone, birthdate).then(
      () => {
        navigate('/login', { replace: true })
      },
      (error) => {
        const resMessage =
          error.response?.data?.message || error.message || error.toString()
        setMessage(resMessage)
      }
    )
  }

  return (
    <div>
      <FormWrapper>
        <Heading>회원가입</Heading>
        {message && <ErrorMessage>{message}</ErrorMessage>}
        <form onSubmit={handleFormSubmit}>
          <Input
            type="text"
            name="username"
            value={inputs.username}
            placeholder="아이디"
            required={true}
            onChange={handleInputChanged}
          />
          <Input
            type="password"
            name="password"
            value={inputs.password}
            placeholder="비밀번호"
            required={true}
            onChange={handleInputChanged}
          />
          <InputWrapper>
            <Radio
              id="gender-MALE"
              name="gender"
              value="MALE"
              label="남"
              required={true}
              checked={inputs.gender === 'MALE'}
              onChange={handleInputChanged}
            />
            <Radio
              id="gender-FEMALE"
              name="gender"
              value="FEMALE"
              label="여"
              required={true}
              checked={inputs.gender === 'FEMALE'}
              onChange={handleInputChanged}
            />
          </InputWrapper>
          <Input
            type="tel"
            name="phone"
            value={inputs.phone}
            placeholder="휴대폰번호"
            required={true}
            onChange={handleInputChanged}
          />
          <InputWrapper gap={5}>
            <Input
              type="text"
              name="birth-year"
              value={inputs.birthYear}
              placeholder="생년"
              onChange={handleInputChanged}
            />
            <Input
              type="text"
              name="birth-month"
              value={inputs.birthMonth}
              placeholder="월"
              onChange={handleInputChanged}
            />
            <Input
              type="text"
              name="birth-day"
              value={inputs.birthDay}
              placeholder="일"
              onChange={handleInputChanged}
            />
          </InputWrapper>

          <Button type="submit">가입하기</Button>
        </form>
      </FormWrapper>
    </div>
  )
}

const FormWrapper = styled.div`
  box-sizing: border-box;
  max-width: 450px;
  margin: 100px auto 100px;
  background: #fff;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`

const Heading = styled.h2`
  margin: 0 0 40px 0;
  color: ${Color.primary500};
`

export default Join
