import React from 'react';
import { Link } from 'react-router-dom';

const CheckinCommentItem = ({
    comment,
    commentUser,
    currentUser,
    deleteComment
}) => {
    const handleDelete = () => {
        deleteComment(comment.id);
    }
    let deleteButton = <div></div>;

    if (commentUser === currentUser) {
        deleteButton = <div className='commentDelete'onClick={handleDelete}>Delete</div>
    }
    debugger
    return (
        <div className='comment-item'>
            <img className='checkin-avatar-user' src={commentUser.imgUrl} alt="" />
            <div className='comment-right'>
                <div className='comment-body'>
                    <Link 
                        to={`/users/${commentUser.id}`} 
                        className='comment-user'>{commentUser.username}: </Link>
                     { comment.body}
                </div>
                {deleteButton}
            </div>
        </div>
    )
}


export default CheckinCommentItem