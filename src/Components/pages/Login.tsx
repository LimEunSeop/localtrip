import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import Color from '../../assets/colors'
import AuthService from '../../services/AuthService'
import { currentUserState } from '../../states/ApplicationState'
import Button from '../ui/buttons/Button'
import Input from '../ui/inputs/Input'
import SmallMessage from '../ui/messages/SmallMessage'

interface LocationState {
  from: string
}

const Login = () => {
  const [message, setMessage] = useState('')

  const setCurrentUser = useSetRecoilState(currentUserState)

  const location = useLocation()
  const navigate = useNavigate()

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    AuthService.login('test', 'test').then(
      (user) => {
        // setCurrentUser(user)
      },
      (error) => {
        // API 적용 시 주석 해제해야함
        // const resMessage =
        //   error.response?.data?.message || error.message || error.toString()
        // setMessage(resMessage)
      }
    )

    // 테스트 목업 소스
    const user: AppUser = {
      email: 'test',
      username: 'test',
      gender: 'MALE',
      phone: '010-1234-1234',
      birthDate: '1990-01-01',
      accessToken: 'accessTokenTest',
      refreshToken: 'refreshTokenTest',
    }
    localStorage.setItem('user', JSON.stringify(user))
    setCurrentUser(user)
    navigate((location.state as LocationState).from)
  }

  return (
    <div>
      <FormWrapper>
        <Heading>LOGIN</Heading>
        {message && <SmallMessage>{message}</SmallMessage>}
        <form onSubmit={handleFormSubmit}>
          <Input type="text" name="email" placeholder="이메일" />
          <Input type="password" name="password" placeholder="비밀번호" />
          <Button type="submit">로그인</Button>
          <SmallMessage>
            회원가입을 하시려면 <Link to="/join">여기를 클릭해주세요.</Link>
          </SmallMessage>
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
