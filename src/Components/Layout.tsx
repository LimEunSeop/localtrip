import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { pages } from '../App'

interface Props {
  title: string
  children?: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
  const location = useLocation()

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header
        style={{
          textAlign: 'right',
          padding: '20px',
          fontSize: '24px',
          fontWeight: 700,
        }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/">메인으로</Link>
            </li>
            {pages
              .filter((page) => page.path !== '/login')
              .map((page) => (
                <li key={page.path}>
                  <Link to={page.path}>{page.label}</Link>
                </li>
              ))}
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>

      <footer>Made By 코나아이 공채 12기 웹 개발그룹 임은섭.</footer>
    </>
  )
}

export default Layout
