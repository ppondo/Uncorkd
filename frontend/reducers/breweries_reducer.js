import {
    RECEIVE_ALL_BREWERIES,
    RECEIVE_BREWERY
} from '../actions/brewery_actions';
import { merge } from 'lodash';

const BreweriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_BREWERIES:
            return merge({}, oldState, action.breweries)
        case RECEIVE_BREWERY:
            return merge({}, oldState, {[action.brewery.id]: action.brewery });
        default:
            return oldState;
    }
};

export default BreweriesReducer;

// think about how to filter beverages based on the current brewery being shown? 
// nest beverage creation below brewery routes to obtian the correct brewery_id?