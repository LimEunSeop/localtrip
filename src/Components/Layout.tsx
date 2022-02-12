import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'
import { pages } from '../App'
import logo from '../assets/images/logo.svg'
import Color from '../assets/colors'

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
      <header>
        <StyledNav>
          <LogoLink to="/">
            <img src={logo} alt="코나트립 로고" width="130" />
          </LogoLink>

          {pages
            .filter((page) => page.path !== '/login')
            .map((page) => (
              <StyledNavLink to={page.path}>{page.label}</StyledNavLink>
            ))}

          <LoginLinkWrapper>
            <LoginLink to="/login">로그인</LoginLink>
          </LoginLinkWrapper>
        </StyledNav>
      </header>

      <main
        style={{ height: '300px', textAlign: 'center', lineHeight: '300px' }}
      >
        {children}
      </main>

      <StyledFooter>
        Made By 코나아이 공채 12기 웹 개발그룹 임은섭.
      </StyledFooter>
    </>
  )
}

const StyledNav = styled.nav`
  position: relative;
  display: flex;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 15px;
  margin-right: 30px;
`

const LoginLinkWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`

const StyledNavLink = styled(NavLink)`
  height: 73px;
  line-height: 73px;
  font-size: 16px;
  font-weight: 100;
  padding: 0 23px;
  border-top: 5px solid transparent;
  color: #20303c;
  text-decoration: none;
  transition: 0.3s;

  &.active {
    border-top-color: ${Color.info600};
  }

  &:hover {
    border-top-color: ${Color.info500};
  }
`
const resetButton = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;

  background: transparent;

  /* inherit font & color from ancestor */
  color: inherit;
  font: inherit;

  /* Normalize 'line-height'. Cannot be changed from 'normal' in Firefox 4+. */
  line-height: normal;

  /* Corrects font smoothing for webkit */
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;

  /* Corrects inability to style clickable 'input' types in iOS */
  -webkit-appearance: none;
`

const Button = styled.button`
  ${resetButton}
  border-radius: 9999px;
`
const LoginLink = styled(Link)`
  ${resetButton}
  display:block;
  width: 94px;
  height: 40px;
  border-radius: 9999px;
  border: 1px solid ${Color.info600};
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  font-weight: 100;
  color: ${Color.info600};
  transition: 0.3s;

  &:hover {
    background: ${Color.info600};
    color: #fff;
  }
`

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`

export default Layout
