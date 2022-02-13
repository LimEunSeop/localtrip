import { atom } from 'recoil'

const applicationState = atom({
  key: 'applicationState',
  default: {
    title: '',
  },
})

export default applicationState
