import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import BreweriesReducer from './breweries_reducer';
import BeveragesReducer from './beverages_reducer';
import CheckinsReducer from './checkins_reducer';

export default combineReducers({
    users: UsersReducer,
    breweries: BreweriesReducer,
    beverages: BeveragesReducer,
    checkins: CheckinsReducer
})