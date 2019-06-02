import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions'
import BreweryShow from './brewery_show'
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId]
});

const mdp = dispatch => ({
    fetchBrewery: (id) => dispatch(fetchBrewery(id))
})

export default connect(msp, mdp)(BreweryShow);