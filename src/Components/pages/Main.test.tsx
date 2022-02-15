import { render, screen } from '@testing-library/react'
import Main from './Main'

describe('Main 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Main />)

    expect(screen.getByText('Main')).toBeInTheDocument()
  })
})
