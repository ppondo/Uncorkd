import React from 'react';
import { Link } from 'react-router-dom';
// import brewery_index_container from './brewery_index_container';

const BreweryIndexItem = (props) => (
    <div className='box'>
        <div className='brewery-box'>
            <Link to={`/breweries/${props.brewery.id}`}>
                <img className='brewery-img'src={props.brewery.imgUrl} alt={props.brewery.name} />
            </Link> 
            <div className='brewery-details'>
                <div className='brewery-name-box'>
                    <Link className='brewery-name' to={`/breweries/${props.brewery.id}`}>{props.brewery.name}</Link> 
                </div>
                <div className='brewery-location'>{props.brewery.location}</div>
            </div>
        </div>
        <div className='brewery-item'>
            <div className='brewery-stats'>
                <div className='stat-box'>
                    <div className='num-beers'>
                        <Link className='num-beers-link' to={`/breweries/${props.brewery.id}/beer`}>{props.brewery.beverages.length} Beers </Link>
                    </div> 
                    <div className='num-ratings'>
                        4 ratings{/* this will have brewery.checkins.length (thru assoc.) */}
                    </div> 
                </div>
                <div className='avg-rating'>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <i className="fas fa-circle"></i>
                    <div>(3.98)</div>
                </div> 
            </div>
        </div>
    </div>
);

export default BreweryIndexItem;