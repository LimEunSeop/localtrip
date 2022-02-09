import { render, screen } from '@testing-library/react'
import Board from './Board'

describe('Board 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Board />)

    expect(screen.getByText('Board')).toBeInTheDocument()
  })
})
