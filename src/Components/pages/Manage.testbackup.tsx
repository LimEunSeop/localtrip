import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Manage from './Manage'

describe('Manage 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <Manage />
        </MemoryRouter>
      </RecoilRoot>
    )

    expect(screen.getByText('Manage')).toBeInTheDocument()
  })
})
