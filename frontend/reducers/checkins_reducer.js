import {
    RECEIVE_ALL_CHECKINS,
    RECEIVE_CHECKIN,
    DELETE_CHECKIN
}   from '../actions/checkin_actions';

import { merge } from 'lodash';

const CheckinsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_CHECKINS:
            // debugger
            return merge({}, action.checkins)
        case RECEIVE_CHECKIN:
            // debugger
            let checkinState = merge({}, oldState);
            // debugger
            delete checkinState[action.checkin.id]
            return merge(checkinState, { [action.checkin.id]: action.checkin })
        case DELETE_CHECKIN:
            let newState = merge({}, oldState);
            delete newState[action.checkinId];
            return newState;
        default: 
            return oldState;
    }
}

export default CheckinsReducer;