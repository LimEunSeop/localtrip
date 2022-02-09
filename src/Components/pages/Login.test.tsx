import { render, screen } from '@testing-library/react'
import Login from './Login'

describe('Login 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Login />)

    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
