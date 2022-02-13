import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { currentUserState } from '../../states/ApplicationState'

const Trip = () => {
  const currentUser = useRecoilValue(currentUserState)

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: '/trip' }} replace={true} />
  }

  return <div>Trip</div>
}

export default Trip
