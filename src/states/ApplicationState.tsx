import { atom } from 'recoil'

export const currentUserState = atom<AppUserInfo | null>({
  key: 'currentUserState',
  default: null,
})

const ApplicationState = {
  currentUserState,
}

export default ApplicationState
