import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    entities: EntitiesReducer,
    session: SessionReducer,
    errors: ErrorsReducer
})