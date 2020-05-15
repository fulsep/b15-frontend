import { post, get } from '../../utils/http'

const login = (username, password) => {
  return {
    type: 'LOGIN',
    payload: post({username, password}, 'user/login')
  }
}

const getData = () => {
  return {
    type: 'GET_USER',
    payload:  get( 'admin/users')
  }
}

export {
  login,
  getData
}