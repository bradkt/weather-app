const initialState = {
    username: 'bob123'
}


export default (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                loginFailed: false,
                loggingIn: true
            }
        case 'LOGGED_IN':
            return {
                ...state,
                loggingIn: false,
                loginFailed: false,
                loggedIn: true
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                loginFailed: true
            }
        default:
            return state;
    }
}