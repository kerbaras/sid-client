import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    crossDomain: true
})

const getResource = (resource, config) => api.get(resource, config)
const postResource = (resource, config) => api.post(resource, config)

export {
    getResource,
    postResource
}