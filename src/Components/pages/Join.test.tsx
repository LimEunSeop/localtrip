import { render, screen } from '@testing-library/react'
import Join from './Join'

describe('Join 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Join />)

    expect(screen.getByText('Join')).toBeInTheDocument()
  })
})
