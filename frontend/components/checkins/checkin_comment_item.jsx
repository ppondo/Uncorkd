import React from 'react';

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

    return (
        <div className='comment-item'>
            <img className='checkin-avatar-user' src={commentUser.imgUrl} alt="" />
            <div className='comment-user'>{commentUser.username}:</div>
            <div className='comment-body'>{comment.body}</div>
            {deleteButton}
        </div>
    )
}


export default CheckinCommentItem