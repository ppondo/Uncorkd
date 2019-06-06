import { connect } from 'react-redux';
import { fetchBeverage } from '../../actions/beverage_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import { fetchCheckins } from '../../actions/checkin_actions';
import BeverageShow from './beverage_show';

const msp = (state, ownProps) => ({
    beverage: state.entities.beverages[ownProps.match.params.beverageId],
    breweries: state.entities.breweries,
    currentUserId: state.session.id,
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
});

const mdp = dispatch => ({
    fetchBeverage: (id) => dispatch(fetchBeverage(id)),
    fetchBreweries: () => dispatch(fetchBreweries()),
    fetchCheckins: (filterObj) => dispatch(fetchCheckins(filterObj))
})

export default connect(msp, mdp)(BeverageShow);