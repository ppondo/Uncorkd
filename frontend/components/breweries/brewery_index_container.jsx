import { connect } from 'react-redux';
import BreweryIndex from './brewery_index';
import { fetchBreweries } from '../../actions/brewery_actions';

const mapStateToProps = state => ({
    breweries: Object.values(state.entities.breweries)
})

const mapDispatchToProps = dispatch => ({
    fetchBreweries: () => dispatch(fetchBreweries())
})

export default connect(mapStateToProps, mapDispatchToProps)(BreweryIndex);