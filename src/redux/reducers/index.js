import {combineReducers} from 'redux'

const initialState = {
  isLoading: false,
  isError: false,
  message: '',
  credentials : {
    token: null
  },
  userData: []
}

const reducer = combineReducers({
  auth: (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN_PENDING' : {
        return {
          ...state,
          isLoading: true,
          message: '',
          isError: false
        }
        break
      }
      case 'LOGIN_FULFILLED' : {
        if (action.payload.success){
          return {
            ...state,
            isLoading: false,
            credentials : {
              token: action.payload.token
            }
          }
        } else {
          return {
            ...state,
            isLoading: false,
            isError: true,
            message: action.payload.msg,
            credentials : {
              token: null
            }
          }
        }
        break
      }
      case 'LOGIN_REJECTED' : {
        return {
          ...state,
          isLoading: false,
          isError: true
        }
        break
      }
      case 'GET_USER_PENDING' : {
        return {
          ...state,
          isLoading: false,
          userData: []
        }
        break
      }
      case 'GET_USER_FULFILLED' : {
        return {
          ...state,
          userData: action.payload,
          isLoading: false
        }
        break
      }
      case 'GET_USER_REJECTED' : {
        return {
          ...state,
          isLoading: false,
          isError: true
        }
        break
      }
      default: {
        return {
          ...state
        }
      }
    }
  }
})

export default reducer
