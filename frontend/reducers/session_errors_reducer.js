import { RECEIVE_SESSION_ERRORS, 
         RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';

const _nullErrors = {errors: null}

export default (oldState = _nullErrors, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return merge({}, {errors: action.errors})
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return _nullErrors;
    }
}