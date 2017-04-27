import {combineReducers} from 'redux'
import * as mutations from './mutationsTypes'
import {routerReducer} from 'react-router-redux'
import { getUser } from '../libs/user'

const defaultState = {
    user: getUser()
}

const tasks = ({
  [mutations.UPDATE_TOKEN] (state, value) {
    return {...state, user: value}
  },
})
const globalReducer = (state = defaultState, action) => tasks.hasOwnProperty(action.type) ? tasks[action.type](state, action.payload, action) : state

const rootReducer = combineReducers({
  global: globalReducer,
  routing: routerReducer
})

export default rootReducer