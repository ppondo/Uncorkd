import { 
    RECEIVE_ALL_BEVERAGES, 
    RECEIVE_BEVERAGE 
} from '../actions/beverage_actions';
import { merge } from 'lodash';

const BeveragesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_BEVERAGES:
            return merge({}, oldState, action.beverages)
        case RECEIVE_BEVERAGE:
            return merge({}, oldState, { [action.beverage.id]: action.beverage });
        default:
            return oldState;
    }
};

export default BeveragesReducer;

// think about how to filter beverages based on the current brewery being shown? 
// nest beverage creation below brewery routes to obtian the correct brewery_id?