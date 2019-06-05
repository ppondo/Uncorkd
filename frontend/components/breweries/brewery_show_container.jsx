import { connect } from 'react-redux';
import { fetchBrewery } from '../../actions/brewery_actions'
import BreweryShow from './brewery_show'

const msp = (state, ownProps) => ({
    brewery: state.entities.breweries[ownProps.match.params.breweryId],
    currentUserId: state.session.id
});

const mdp = dispatch => ({
    fetchBrewery: (id) => dispatch(fetchBrewery(id))
})

export default connect(msp, mdp)(BreweryShow);