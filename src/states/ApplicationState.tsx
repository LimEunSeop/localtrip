import { atom } from 'recoil'

export const currentUserState = atom<AppUser | null>({
  key: 'currentUserState',
  default: null,
})

const ApplicationState = {
  currentUserState,
}

export default ApplicationState
