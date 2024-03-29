import React from 'react';
import { Link } from 'react-router-dom';
// import brewery_index_container from './brewery_index_container';

const BeverageIndexItem = (props) => {
    if (props.beer === undefined) {
        return null;
    }
    let dateObj = new Date(props.beer.created_at);
    let month = dateObj.getUTCMonth() + 1; 
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    const date = month + "/" + day + "/" + year;

    let avgRate;
    if (props.beer.avgRating <= 0) {
        avgRate = 0;
    } else {
        avgRate = props.beer.avgRating.toFixed(2);
    }

    const circleWidth = (avgRate / 5) * 100

    
    return (
        <>
            <div className='bev-info'>
                <div className='bev-info-box'>
                    <img className='bev-info-img' src={props.beer.imgUrl} alt="" />
                    <div className='bev-info-text'>
                        <div className='bev-info-name'>
                            <Link className='name-link' to={`/b/beverage/${props.beer.id}`}>{props.beer.name}</Link>
                            <p>{props.beer.style}</p>
                        </div>
                        <div className='bev-description'>
                            {props.beer.description}
                        </div>
                    </div>
                </div>
                <div className='checkin-dropdown'>
                    <Link className='checkin-box' to={`/beer/${props.beer.id}/checkin`}><i className="fas fa-check"></i></Link>
                    <div className='checkin-dropdown-content'>
                        <ul className='checkin-dropdown-list'>
                            <p >Check-in this Beer</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bev-info-ratings'>
                <div className='show-num-ratings'>{props.beer.ABV}% ABV</div>
                <div className='show-num-ratings'>{props.beer.IBU} IBU</div>
                <div className='rating-circles'>
                    <span className='rating-circles-box'>
                        <div style={{ width: `${circleWidth}%` }}></div>
                        {/* <div><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i></div> */}
                    </span>
                    <div className='paren-rating'>({avgRate})</div>
                </div>
                <div className='show-num-ratings'>{props.beer.checkins.length} Ratings</div>
                <div className='show-num-ratings'>{`Added ${date}`}</div>
            </div>
        </>
    )
};

export default BeverageIndexItem;