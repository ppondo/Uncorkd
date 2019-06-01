import React from 'react';
import { Link } from 'react-router-dom';
import brewery_index_container from './brewery_index_container';

const BreweryIndexItem = props => (
    <>
        <Link to='brewery/:breweryId'>
            <img src="" alt=""/>
        </Link> 
                {/* img will be a link to the brewery */ }
        <div className='brewery-item'>
            <div className='brewery-details'>
                <div className='brewery-name'>
                    <Link to='/breweries/:breweryId'>{props.brewery.name}</Link>
                </div>
                <div className='brewery-location'>{props.brewery.location}</div>
            </div>
            <div className='brewery-stats'>
                <div className='num-beers'>
                    <Link to='brewery/:breweryId/beverages'> # Beers </Link>
                </div> 
                <div className='num-ratings'>
                    {/* this will have brewery.checkins.length (thru assoc.) */}
                </div> 
                <div className='avg-rating'>
                    {/* this will have the sum of all ratings divided by length of checkin assoc.*/}
                </div> 
            </div>
        </div>
    </>
);

export default BreweryIndexItem;