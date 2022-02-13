import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Color from '../../assets/colors'
import Button from '../ui/buttons/Button'
import Input from '../ui/inputs/Input'
import Radio from '../ui/inputs/Radio'
import InputWrapper from '../ui/inputs/InputWrapper'
import Message from '../ui/messages/Message'
import Select from 'react-select'

const Join = () => {
  return (
    <div>
      <FormWrapper>
        <Heading>회원가입</Heading>
        <form action="">
          <Input
            type="text"
            name="email"
            placeholder="이메일"
            required={true}
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            required={true}
          />
          <Input
            type="text"
            name="username"
            placeholder="이름"
            required={true}
          />
          <InputWrapper>
            <Radio
              id="gender-MALE"
              name="gender"
              value="MALE"
              label="남"
              required={true}
            />
            <Radio
              id="gender-FEMALE"
              name="gender"
              value="FEMALE"
              label="여"
              required={true}
            />
          </InputWrapper>
          <Input
            type="tel"
            name="phone"
            placeholder="휴대폰번호"
            required={true}
          />
          <InputWrapper gap={5}>
            <Input type="text" name="birth-year" placeholder="생년" />
            <Input type="text" name="birth-month" placeholder="월" />
            <Input type="text" name="birth-day" placeholder="일" />
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
