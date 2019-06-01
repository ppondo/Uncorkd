import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';

const msp = (state) => {
//  debugger
    return (
       {errors: state.errors.session.errors, formType: 'Create Account'}
    )
};

const mdp = dispatch => ({
    action: (user) => dispatch(signUp(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(SessionForm);