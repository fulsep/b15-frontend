import axios from 'axios'
import config from './config'
import store from '../redux/store'

const post = async(data, url) => {
  const state = store.getState()
  const req = await axios({
    method: 'POST',
    url: `${config.APP_URL}${url}`,
    data,
    headers: {
      'Authorization': `Bearer ${state.auth.credentials.token}`
    }
  })
  return req.data
}

const get = async(url, params) => {
  const state = store.getState()
  const req = await axios({
    method: 'GET',
    url: `${config.APP_URL}${url}${params?params:''}`,
    headers: {
      'Authorization': `Bearer ${state.auth.credentials.token}`
    }
  })
  return req.data
}

const patch = async(data) => {
  const state = store.getState()
  const req = await axios({
    method: 'PATCH',
    url: `${config.APP_URL}${url}`,
    data,
    headers: {
      'Authorization': `Bearer ${state.auth.credentials.token}`
    }
  })
  return req.data
}

const del = async(data) => {
  const state = store.getState()
  const req = await axios({
    method: 'POST',
    url: `${config.APP_URL}${url}`,
    data,
    headers: {
      'Authorization': `Bearer ${state.auth.credentials.token}`
    }
  })
  return req.data
}

export {
  get, post, patch, del
}
