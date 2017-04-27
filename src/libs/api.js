import axios from 'axios'
import _ from 'lodash'
import { getToken } from './user'

const createConfigs = () => {
    let configs = {
        baseURL: 'http://localhost:8080/api',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded' 
        }
    }
    let token = getToken()
    if(token != null){
        configs.headers['Authorization'] = `Bearer ${token}`
    }
    return configs
}
const api = () => axios.create(createConfigs())

const getResource = (resource, config) => api().get(resource, config)
const postResource = (resource, body, config) => api().post(resource, _.map(body, (value, key)=>key+"="+value).join('&'), config)

export {
    getResource,
    postResource
}