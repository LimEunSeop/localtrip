import { render, screen } from '@testing-library/react'
import Trip from './Trip'

describe('Trip 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Trip />)

    expect(screen.getByText('Trip')).toBeInTheDocument()
  })
})
