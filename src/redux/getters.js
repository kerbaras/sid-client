export const getUser = (state) => {
    let { user } = state.global
    
    if (user == null){

        return { user }
    }

    if(new Date() - (new Date(state.global.user.exp * 1000)) < 0){
        return { user }
    }
    
    return { user: null }
}