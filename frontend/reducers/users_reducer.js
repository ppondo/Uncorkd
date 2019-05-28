import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { [action.user.id]: action.user }
            return merge({}, oldState, newState);
        default:
            return oldState;
    }
}