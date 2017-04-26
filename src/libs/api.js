import axios from 'axios'
import { getToken } from './user'

const createConfigs = () => {
    let configs = {
        baseURL: 'http://localhost:8080/api',
        crossDomain: true,
        headers: {}
    }
    let token = getToken()
    if(token !== null){
        configs.headers['Authorization'] = `Bearer ${token}`
    }
    return configs
}
const api = axios.create(createConfigs())

const getResource = (resource, config) => api.get(resource, config)
const postResource = (resource, body, config) => api.post(resource, body, config)

export {
    getResource,
    postResource
}