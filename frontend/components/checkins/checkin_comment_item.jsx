import React from 'react';
import { Link } from 'react-router-dom';

const CheckinCommentItem = ({
    comment,
    commentUser,
    currentUser,
    deleteComment
}) => {
    if (commentUser === undefined || currentUser === undefined) {
        return null
    }
    const handleDelete = () => {
        deleteComment(comment.id);
    }
    let deleteButton = <div></div>;

    if (commentUser !== undefined && currentUser !== undefined && commentUser.id === currentUser.id) {
        deleteButton = <div className='comment-delete'onClick={handleDelete}>Delete</div>
    }

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let dateObj = new Date(comment.created_at);
    let month = monthNames[dateObj.getUTCMonth()];
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    const date = month + " " + day + " " + year;

    return (
        <div className='comment-item'>
            <img className='comment-avatar' src={commentUser.imgUrl} alt="" />
            <div className='comment-right'>
                <div className='comment-body'>
                    <Link 
                        to={`/users/${commentUser.id}`} 
                        className='comment-user'>{commentUser.username}: </Link>
                     {comment.body}
                </div>
                <div className='comment-bottom'>
                    <div className='checkin-date date-comment'>{date}</div>
                    {deleteButton}
                </div>
            </div>
        </div>
    )
}


export default CheckinCommentItem