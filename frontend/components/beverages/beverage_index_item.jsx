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
    let img;
    if(props.beer.imgUrl) {
    }
    
    return (
        <>
            <div className='bev-info'>
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
            <div className='bev-info-ratings'>
                <div className='show-num-ratings'>{props.beer.ABV}%</div>
                <div className='show-num-ratings'>{props.beer.IBU} IBU</div>
                <div className='show-avg-rating'>
                    <i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i>
                    <div> (3.97)</div>
                </div>
                <div className='show-num-ratings'>30 Ratings</div>
                <div className='show-num-ratings'>{`Added ${date}`}</div>
            </div>
        </>
    )
};

export default BeverageIndexItem;