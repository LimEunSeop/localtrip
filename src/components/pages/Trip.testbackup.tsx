import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Trip from './Trip'

describe('Trip 컴포넌트', () => {
  it('기본 렌더링 테스트', () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <Trip />
        </MemoryRouter>
      </RecoilRoot>
    )

    expect(screen.getByText('Trip')).toBeInTheDocument()
  })
})
