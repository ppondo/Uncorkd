// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckinForm from './checkin_form';
import { createCheckin } from '../../actions/checkin_actions';

const msp = (state, ownProps) => {
    const currentUserId = state.session.id
    const bevId = ownProps.match.params.beverageId;
    const checkin = {
        rating: 0, 
        body: '', 
        location: '',
        user_id: currentUserId,
        beverage_id: bevId,
        imgUrl: '',
        imgFile: null
    }

    return { checkin }
}

const mdp = dispatch => ({
    action: checkin => dispatch(createCheckin(checkin))
})

export default connect(msp, mdp)(CheckinForm)