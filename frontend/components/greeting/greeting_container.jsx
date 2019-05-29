import Greeting from './greeting';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions'

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logOut: () => dispatch(logOut())
});

export default connect(msp, mdp)(Greeting);