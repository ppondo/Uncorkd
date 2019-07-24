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
        const form = document.getElementById(`id-${this.state.checkin_id}`);
        form.classList.add('hidden')
        form.classList.remove('flex')
        this.setState({body: ''})
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        return (
            <form id={`id-${this.state.checkin_id}`} className='comment-form hidden'>
                <textarea 
                    id='comment-form-body'
                    className='comment-form-body' 
                    value={this.state.body}
                    cols="15" rows="5" 
                    onChange={this.update('body')}
                    placeholder='Leave a comment...'
                    maxLength="140">
                </textarea>
                <div className='comment-form-bottom'>
                    <div className='comment-body-count'>{this.state.body.length}/140</div>
                    <button onClick={this.handleSubmit} className='comment-form-submit'>Post</button>
                </div>
            </form>
        )
    }
}


export default CheckinCommentForm