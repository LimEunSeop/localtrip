import { render, screen } from '@testing-library/react'
import Manage from './Manage'

describe('Manage 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(<Manage />)

    expect(screen.getByText('Manage')).toBeInTheDocument()
  })
})
