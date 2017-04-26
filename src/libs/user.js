import localStorage from 'localStorage'
import jwt from 'jsonwebtoken'

const getUser = () => {
    let token = localStorage.getItem('token')
    console.log(token);
    if(token == null){
        return null
    }

    let decoded = jwt.decode(token, {complete: true})
    console.log(decoded)
    return decoded.payload
}

const updateToken = (token) => {
    localStorage.setItem('token', JSON.stringify(token));
}

export {getUser, updateToken}
