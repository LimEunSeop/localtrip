import { render, screen } from '@testing-library/react'
import Login from './Login'
import { MemoryRouter } from 'react-router-dom'

describe('Login 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText('이메일')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('비밀번호')).toBeInTheDocument()
    expect(screen.getByText('로그인')).toBeInTheDocument()
    expect(screen.getByText('회원가입을 하시려면')).toBeInTheDocument()
    expect(screen.getByText('여기를 클릭해주세요.')).toBeInTheDocument()
  })
})
