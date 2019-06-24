import React from 'react';

class CheckinCommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            user_id: this.props.currentUserId,
            checkin_id: this.props.checkinId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        return (
            <form className='comment' onSubmit={this.handleSubmit}>
                <textarea className='comment-body' cols="30" rows="10" onChange={this.update('body')}></textarea>
                <input type="submit" name="Comment"/>
            </form>
        )
    }
}


export default CheckinCommentForm