import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Color from '../../assets/colors'
import Button from '../ui/buttons/Button'
import Input from '../ui/inputs/Input'
import Message from '../ui/messages/Message'

const Login = () => {
  return (
    <div>
      <FormWrapper>
        <Heading>LOGIN</Heading>
        <form action="">
          <Input type="text" name="email" placeholder="이메일" />
          <Input type="password" name="password" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
          <Message>
            회원가입을 하시려면 <Link to="/join">여기를 클릭해주세요.</Link>
          </Message>
        </form>
      </FormWrapper>
    </div>
  )
}

const FormWrapper = styled.div`
  box-sizing: border-box;
  max-width: 360px;
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

export default Login
