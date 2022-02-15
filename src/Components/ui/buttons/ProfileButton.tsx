import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import resetButton from '../../mixins/resetButton'
import profile_img from '../../../assets/images/profile-img.png'
import { useRecoilState } from 'recoil'
import { currentUserState } from '../../../states/ApplicationState'
import Color from '../../../assets/colors'
import AuthLink from './AuthLink'
import AuthService from '../../../services/AuthService'
import { useNavigate } from 'react-router-dom'

const ProfileButton = () => {
  const [opened, setOpened] = useState(false)

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  const navigate = useNavigate()

  const handleProfileButtonClick = () => setOpened(!opened)

  const handleLogoutButtonClick = () => {
    AuthService.logout()
    setCurrentUser(null)
    navigate('/login')
  }

  return (
    <Wrapper>
      <Button onClick={handleProfileButtonClick}>
        <img src={profile_img} alt="프로필사진" width="35" />
        <FontAwesomeIcon icon={faAngleDown} />
      </Button>
      {opened && (
        <>
          <Triangle />
          <DropdownMenu>
            <Profile>
              <img src={profile_img} alt="프로필사진" width="50" />
              {currentUser?.member.username}
            </Profile>

            <DropFooter>
              <LogoutButton as="button" onClick={handleLogoutButtonClick}>
                로그아웃
              </LogoutButton>
            </DropFooter>
          </DropdownMenu>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Button = styled.button`
  ${resetButton}
  cursor:pointer;
  display: flex;
  align-items: center;
  gap: 12px;
`

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 30px);
  right: 0;
  z-index: 10;
  width: 200px;
  background: #fff;
  box-shadow: 0 0 17px 0 rgb(23 50 68 / 17%);
  border-radius: 6px;

  padding: 20px;
`
const Triangle = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  right: 15px;
  z-index: 11;

  width: 20px;
  height: 20px;
  background: #fff;
  transform: rotate(-135deg);
  box-shadow: 3px 3px 3px 0 rgb(23 50 68 / 8%);
`

const Profile = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  font-weight: 400;
  padding-bottom: 20px;

  border-bottom: 1px solid ${Color.gray200};
`

const DropFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

const LogoutButton = styled(AuthLink)`
  width: 90px;
  height: 30px;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;
`

export default ProfileButton
