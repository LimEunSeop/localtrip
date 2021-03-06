import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import App, { pages } from './App'

describe('App 컴포넌트', () => {
  it('메뉴 렌더링 테스트', () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )

    pages.forEach((menu) => {
      const element = screen.getByText(menu.label)
      expect(element).toBeInTheDocument()
    })
  })

  it('푸터 렌더링 테스트', () => {
    render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    )

    expect(
      screen.getByText('Made By 코나아이 공채 12기 웹 개발그룹 임은섭.')
    ).toBeInTheDocument()
  })
})
