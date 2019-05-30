import SessionForm from './session_form';
import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: state.errors.session.errors,
    formType: 'Sign In'
});

const mdp = dispatch => ({
    action: (user) => dispatch(logIn(user))
})

export default connect(msp, mdp)(SessionForm);