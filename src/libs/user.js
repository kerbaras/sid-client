import localStorage from 'localStorage'

const getToken = () => {return localStorage.getItem('sid_token')}

const getUser = () => {
    let token = getToken()
    if(token == null){
        return null
    }
    try {
        let decoded = JSON.parse(atob(token.split('.')[1]))
        return decoded
    } catch (error) {
        return null
    }
}

const setToken = (token) => {
    localStorage.setItem('sid_token', token);
}

export {getToken, getUser, setToken}
