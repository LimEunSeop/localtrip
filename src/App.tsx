import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layouts/BasicLayout'
import Main from './components/pages/Main'
import Login from './components/pages/Login'
import Trip from './components/pages/Trip'
import Manage from './components/pages/Manage'
import Board from './components/pages/Board'
import Join from './components/pages/Join'

export const pages: Array<{
  label: string
  path: string
  element: React.ReactNode
}> = [
  { label: '로그인', path: '/login', element: <Login /> },
  { label: '회원가입', path: '/join', element: <Join /> },

  // 사용자 전용
  { label: '탐방하기', path: '/trip', element: <Trip /> },

  // 관리자 전용
  { label: '대회관리', path: '/manage', element: <Manage /> },

  // 공통 메뉴
  { label: '정보공유', path: '/board', element: <Board /> },
]

const programName = 'KONA TRIP'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout title={programName}>
              <Main />
            </Layout>
          }
        />
        {pages.map((menu) => (
          <Route
            path={menu.path}
            element={React.createElement(
              Layout,
              { title: `${programName} - ${menu.label}` },
              menu.element
            )}
            key={menu.label}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
