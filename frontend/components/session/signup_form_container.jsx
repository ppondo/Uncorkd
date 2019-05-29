import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Create Account'
});

const mdp = dispatch => ({
    action: (user) => dispatch(signUp(user))
})

export default connect(msp, mdp)(SessionForm);