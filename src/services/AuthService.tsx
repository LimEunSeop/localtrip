import axios from 'axios'

// 가장 기본적인 회원 관련 API 요청 모음
// 향후 다른 서비스 작성 시, 엑세스토큰 만료 에러가 나면 리프레쉬 요청 후 다시 API 요청하는 레퍼함수 개발해야함
// => 리프레쉬 했으면 다시 API 요청, 리프레쉬 했어도 리턴 안되면

const API_URL = 'http://localhost:8080/api/auth/'

const join = (
  username: string,
  password: string,
  gender: string,
  phone: string,
  birthdate: string
) => {
  return axios.post(API_URL + 'join', {
    username,
    password,
    gender,
    phone,
    birthdate,
  })
}

const login = (username: string, password: string) => {
  return axios
    .post(API_URL + 'login', {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        const user: AppUserInfo = response.data
        localStorage.setItem('user', JSON.stringify(user))

        return user
      }
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  const user: AppUserInfo = JSON.parse(localStorage.getItem('user')!)
  return user
}

const AuthService = {
  join,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
