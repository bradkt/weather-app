import Service from './service';

export const login = (creds) => {
    return (dispatch) => {
        Service.dispatchPost(dispatch, '/user/login', creds, {
            init: 'LOGIN',
            success: 'LOGGED_IN',
            error: 'LOGIN_FAILED'
        })
    }
}