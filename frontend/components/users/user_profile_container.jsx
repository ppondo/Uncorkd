import UserProfile from './user_profile';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import { fetchBeverages } from '../../actions/beverage_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import { 
    fetchCheckins,
    likeCheckin, 
    dislikeCheckin, 
    deleteComment, 
    createComment 
} from '../../actions/checkin_actions';

const msp = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    users: state.entities.users,
    checkins: Object.values(state.entities.checkins),
    beverages: state.entities.beverages,
    breweries: state.entities.breweries
});

const mdp = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchBeverages: () => dispatch(fetchBeverages()),
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchCheckins: (filterObj) => dispatch(fetchCheckins(filterObj)),
    likeCheckin: (id) => dispatch(likeCheckin(id)),
    dislikeCheckin: (id) => dispatch(dislikeCheckin(id)),
    deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (comment) => dispatch(createComment(comment))
});

export default connect(msp, mdp)(UserProfile);