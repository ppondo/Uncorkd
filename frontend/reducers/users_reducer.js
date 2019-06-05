import { 
    RECEIVE_CURRENT_USER, 
    RECEIVE_ALL_USERS, 
    RECEIVE_USER 
} from '../actions/session_actions';
import { merge } from 'lodash';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState = { [action.user.id]: action.user };
            return merge({}, oldState, newState);
        case RECEIVE_USER:
            newState = { [action.user.id]: action.user };
            return merge({}, oldState, { [action.user.id]: action.user })
        case RECEIVE_ALL_USERS:
            return merge({}, oldState, action.users);
        default:
            return oldState;
    }
}