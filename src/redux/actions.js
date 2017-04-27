import { createAction } from 'redux-actions'
import * as mutations from './mutationsTypes'
import { postResource } from '../libs/api'
import { getUser, setToken } from '../libs/user'

const updateUser = createAction(mutations.UPDATE_TOKEN)

//
// actions
//
// update the token
function updateToken (token) {
  return (dispatch, getState) => {
    setToken(token)
    let user = getUser()
    dispatch(updateUser(user))
  }
}

function doLogin (username, password){
  return (dispatch, getState) => {
    postResource('login_check', { _username: username.replace(/[\s.]/gi, ''), _password: password } )
            .then( response => {
                dispatch(updateToken(response.data.token))
            })
            .catch( dispatch(updateToken(null)) )
  }
}

export const userActions = { updateToken, doLogin }