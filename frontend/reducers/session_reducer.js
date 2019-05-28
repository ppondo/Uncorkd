import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash';

export default (oldState = { id: null }, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { id: action.user.id }
            return merge({}, oldState, newState);
        case LOGOUT_CURRENT_USER:
            return { id: null } 
        default: 
            return oldState;
    }
}