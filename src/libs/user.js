import localStorage from 'localStorage'

const getToken = () => {console.log(localStorage.getItem('token')); return localStorage.getItem('token')}

const getUser = () => {
    let token = getToken()
    console.log(token);
    if(token == null){
        return null
    }

    let decoded = JSON.parse(atob(token.split('.')[1]))
    console.log(decoded)
    return decoded
}

const updateToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
}

export {getToken, getUser, updateToken}
