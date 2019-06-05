import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions'
import { fetchBeverages } from '../../actions/beverage_actions'
import { fetchCheckins } from '../../actions/checkin_actions'
import BreweryShow from './brewery_show'

const msp = (state, ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beverages: state.entities.beverages,
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    fetchBrewery: (id) => dispatch(fetchBrewery(id)),
    fetchCheckins: (filterObj) => dispatch(fetchCheckins(filterObj)),
    fetchBeverages: (filterObj) => dispatch(fetchBeverages(filterObj)),
    fetchUsers: () => dispatch(fetchUsers())
})

export default connect(msp, mdp)(BreweryShow);