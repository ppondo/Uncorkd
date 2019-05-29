import * as SessionApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const logIn = (user) => dispatch => (
    SessionApiUtil.logIn(user).then( user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const signUp = (user) => dispatch => (
    SessionApiUtil.signUp(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
)

export const logOut = () => dispatch => (
    SessionApiUtil.logOut().then(() => dispatch(logOutCurrentUser()))
)

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logOutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveSessionErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})
