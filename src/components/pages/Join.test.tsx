import { render, screen } from '@testing-library/react'
import Join from './Join'

describe('Join 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Join />)

    expect(screen.getByText('회원가입')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('이메일')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('비밀번호')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('이름')).toBeInTheDocument()
    expect(screen.getByLabelText('남')).toBeInTheDocument()
    expect(screen.getByLabelText('여')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('휴대폰번호')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('생년')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('월')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('일')).toBeInTheDocument()
    expect(screen.getByText('가입하기')).toBeInTheDocument()
  })
})
