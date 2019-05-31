import {
    RECEIVE_ALL_BREWERIES,
    RECEIVE_BREWERY
} from '../actions/brewery_actions';
import { merge } from lodash;

const BreweriesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState;

    switch (action.type) {
        case RECEIVE_ALL_BREWERIES:
            return merge({}, oldState, action.breweries)
        case RECEIVE_BREWERY:
            newState = { [action.brewery.id]: action.brewery };
            return merge({}, oldState, newState);
        default:
            return oldState;
    }
};

export default BreweriesReducer;

// think about how to filter beverages based on the current brewery being shown? 
// nest beverage creation below brewery routes to obtian the correct brewery_id?