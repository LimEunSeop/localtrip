import axios from 'axios'

// 가장 기본적인 회원 관련 API 요청 모음
// 향후 다른 서비스 작성 시, 엑세스토큰 만료 에러가 나면 리프레쉬 요청 후 다시 API 요청하는 레퍼함수 개발해야함
// => 리프레쉬 했으면 다시 API 요청, 리프레쉬 했어도 리턴 안되면

const API_URL = '/api/auth'

const join = (
  email: string,
  password: string,
  username: string,
  gender: string,
  phone: string,
  birthDate: string
) => {
  return axios.post(API_URL + 'join', {
    email,
    password,
    username,
    gender,
    phone,
    birthDate,
  })
}

const login = (email: string, password: string) => {
  return axios
    .post(API_URL + 'signin', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        const user = response.data
        localStorage.setItem('user', JSON.stringify(user))

        return user
      }
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  const user: AppUser = JSON.parse(localStorage.getItem('user')!)
  return user
}

const AuthService = {
  join,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
