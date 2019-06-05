import { connect } from 'react-redux';
import { fetchBeverage } from '../../actions/beverage_actions';
import { fetchBreweries } from '../../actions/brewery_actions';
import BeverageShow from './beverage_show';

const msp = (state, ownProps) => ({
    beverage: state.entities.beverages[ownProps.match.params.beverageId],
    breweries: state.entities.breweries,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    fetchBeverage: (id) => dispatch(fetchBeverage(id)),
    fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(msp, mdp)(BeverageShow);