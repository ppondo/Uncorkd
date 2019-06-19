import { Link } from 'react-router-dom';
import React from 'react';
import { deleteCheckin } from '../../actions/checkin_actions';
import { connect } from 'react-redux';

const CheckinFeedItem = ({
    checkin, 
    checkinUser, 
    checkinBeverage, 
    checkinBrewery,
    currentUserId,
    deleteCheckin,
    likeCheckin,    
    dislikeCheckin,    

    }) => {

    if (checkin === undefined || 
        checkinUser === undefined || 
        checkinBeverage === undefined || 
        checkinBrewery === undefined) {
            return null;
    };

    const handleDelete = (e) => {
        // debugger
        e.preventDefault
        deleteCheckin(checkin.id)
    }

    let likeClass = 'checkin-toast';
    let handleLike = () => likeCheckin(checkin.id);
    if (checkin.liked) {
        likeClass = 'checkin-toast-clicked';
        handleLike = () => dislikeCheckin(checkin.id)
    }

    let checkinLikeCount = <div></div>;
    if (checkin.likes > 0) {
        checkinLikeCount = <div className='like-display'>
                             <p className='like-count'>{checkin.likes}</p>
                             <i className="fas fa-beer"></i>
                           </div>
    }
    
    let delCheckin;    
    if (checkinUser.id === currentUserId) {
        delCheckin = <div 
                        onClick={handleDelete}
                        className='date-detail-item'>Delete Check-In
                    </div>
    } else {
        <div></div>
    }

    let body;
    if (checkin.body.length > 0) {
        body = checkin.body
    } else {
        body = <br/>
    }

    let checkinImg;
    if (checkin.imgUrl === undefined) {
        checkinImg = <div></div>
    } else {
        checkinImg = <div className='checkin-img'>
                        <img src={checkin.imgUrl} alt="" />
                     </div>
    }

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May","Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let dateObj = new Date(checkin.created_at);
    let month = monthNames[dateObj.getUTCMonth()]; 
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    const date = month + " " + day + " " + year;

    const circleWidth = (checkin.rating / 5) * 100

    return (
        <div className='checkin-index-content'>
            <div className='checkin-avatar'>
                <Link to={`/users/${checkinUser.id}`}>
                    <img className='checkin-avatar-user' src={checkinUser.imgUrl} alt=""/>
                </Link>
            </div>
            <div className='checkin-content'>
                <div className='checkin-text'> 
                    <Link className='checkin-link' to={`/users/${checkinUser.id}`}>{checkinUser.username} </Link>
                    is drinking a 
                    <Link className='checkin-link' to={`/b/beverage/${checkinBeverage.id}`}> {checkinBeverage.name} </Link>
                    by
                    <Link className='checkin-link' to={`/breweries/${checkinBrewery.id}`}> {checkinBrewery.name} </Link>
                </div>
                <div className='rating-box'>
                    <div className='checkin-text-body'>
                        {body}
                        <div className='brew-rating-circles'>
                            <span className='rating-circles-box'>
                                <div style={{ width: `${circleWidth}%` }}></div>
                            </span>
                        </div>
                    </div>
                    {checkinImg}
                </div>
                <div className='checkin-interact'>
                    <button className='checkin-comment'>
                        <i className="fas fa-comment-alt"></i>
                        <p> Comment</p>
                    </button>
                    <button onClick={handleLike} className={likeClass}>
                        <i className="fas fa-beer"></i>
                        <p className='toast'> Toast</p>
                    </button>
                </div>
                <div className='date-detail'>
                    <div className='checkin-date'>{date}</div>
                    <Link className='date-detail-item' to='/home'>View Detailed Check-in</Link>
                    {delCheckin}
                </div>
                {checkinLikeCount}
            </div>
            <div className='checkin-beverage-img'>
                <img src={checkinBeverage.imgUrl} alt=""/>
            </div>
        </div>
    
    )
}

const msp = state => ({
    currentUserId: state.session.id
})

const mdp = dispatch => ({
    deleteCheckin: (id) => dispatch(deleteCheckin(id)),
})


export default connect(msp, mdp)(CheckinFeedItem)