import React from 'react';
import { createComment } from '../../actions/checkin_actions';


class CheckinCommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.comment
    }

    handleSubmit() {

    }

    update() {

    }

    render() {
        
    }
}


const msp = (state, ownProps) => {
    const currentUserId = state.session.id
    const checkinId = ownProps.match.params.checkinId;
    const comment = {
        body: '',
        user_id: currentUserId,
        checkin_id: checkinId,
    }

    return { comment }
}

const mdp = dispatch => ({
    createComment: comment => dispatch(createComment(comment))
})

export default connect(msp, mdp)(CheckinCommentForm)