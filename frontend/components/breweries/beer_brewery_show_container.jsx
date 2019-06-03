import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions'
import { fetchBeverages } from '../../actions/beverage_actions'
import BeerBreweryShow from './beer_brewery_show'

const msp = (state, ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    beverages: state.entities.beverages
});

const mdp = dispatch => ({
    fetchBrewery: (id) => dispatch(fetchBrewery(id)),
    fetchBeverages: () => dispatch(fetchBeverages())
})

export default connect(msp, mdp)(BeerBreweryShow);