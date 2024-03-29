import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions'
import { fetchBeverages } from '../../actions/beverage_actions'
import BeerBreweryShow from './beer_brewery_show'

const msp = (state, ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beverages: state.entities.beverages,
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    fetchBrewery: (id) => dispatch(fetchBrewery(id)),
    fetchBeverages: (filterObj) => dispatch(fetchBeverages(filterObj))
})

export default connect(msp, mdp)(BeerBreweryShow);