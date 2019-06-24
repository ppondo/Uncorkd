import { connect } from 'react-redux';
import CheckinFeed from './checkin_feed';
import { 
    fetchCheckins, 
    likeCheckin, 
    dislikeCheckin,
    createComment,
} from '../../actions/checkin_actions';
import { fetchUsers } from '../../actions/session_actions';
import { fetchBeverages } from '../../actions/beverage_actions';
import { fetchBreweries } from '../../actions/brewery_actions';

const mapStateToProps = state => ({
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
    beverages: state.entities.beverages,
    breweries: state.entities.breweries,
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    fetchCheckins: (filterId) => dispatch(fetchCheckins(filterId)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchBeverages: () => dispatch(fetchBeverages()),
    fetchBreweries: () => dispatch(fetchBreweries()),
    likeCheckin: (id) => dispatch(likeCheckin(id)),
    dislikeCheckin: (id) => dispatch(dislikeCheckin(id)),
    // deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckinFeed);