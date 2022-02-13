import React from 'react'
import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../../states/ApplicationState'

const Manage = () => {
  const currentUser = useRecoilValue(currentUserState)

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: '/manage' }} replace={true} />
  }

  return <div>Manage</div>
}

export default Manage
