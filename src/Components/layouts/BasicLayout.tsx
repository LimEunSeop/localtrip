import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { pages } from '../../App'
import logo from '../../assets/images/logo.svg'
import Color from '../../assets/colors'
import AuthLink from '../ui/buttons/AuthLink'
import StyledNavLink from '../ui/buttons/StyledNavLink'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../../states/ApplicationState'
import ProfileButton from '../ui/buttons/ProfileButton'

interface Props {
  title: string
  children?: React.ReactNode
}

const Layout = ({ title, children }: Props) => {
  const currentUser = useRecoilValue(currentUserState)

  const navigate = useNavigate()

  const handleLoginButtonClick = () => {
    navigate('/login', { state: { from: '/' } })
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <StyledHeader>
        <StyledNav>
          <LogoLink to="/">
            <img src={logo} alt="코나트립 로고" width="110" />
          </LogoLink>

          {pages
            .filter((page) => ['/login', '/join'].indexOf(page.path) === -1)
            .map((page) => (
              <StyledNavLink to={page.path} key={page.path}>
                {page.label}
              </StyledNavLink>
            ))}

          <AuthLinkWrapper>
            {currentUser ? (
              <ProfileButton />
            ) : (
              <>
                <AuthLink as="button" onClick={handleLoginButtonClick}>
                  로그인
                </AuthLink>
                <AuthLink to="/join">회원가입</AuthLink>
              </>
            )}
          </AuthLinkWrapper>
        </StyledNav>
      </StyledHeader>

      <StyledMain>{children}</StyledMain>

      <StyledFooter>
        Made By 코나아이 공채 12기 웹 개발그룹 임은섭.
      </StyledFooter>
    </>
  )
}

export const headerHeight = '78px'
export const footerHeight = '100px'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${headerHeight};
`

const StyledMain = styled.main`
  padding-top: ${headerHeight};
  min-height: calc(100vh - ${headerHeight} - ${footerHeight});
`

const StyledNav = styled.nav`
  position: relative;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 20px;
`

const AuthLinkWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  gap: 10px;
`

const StyledFooter = styled.footer`
  display: grid;
  place-items: center;
  width: 100%;
  height: ${footerHeight};
  text-align: center;
  background: ${Color.gray50};
  font-size: 14px;
  font-weight: 300;
`

export default Layout
