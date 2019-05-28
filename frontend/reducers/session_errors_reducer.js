import { RECEIVE_SESSION_ERRORS, 
         RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            newState = { session: action.errors }
            return merge({}, newState)
        case RECEIVE_CURRENT_USER:
            return {};
        default:
            return oldState;
    }
}