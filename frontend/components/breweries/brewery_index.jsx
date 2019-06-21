import React from 'react';
import BreweryIndexItem from './brewery_index_item';
import { Link } from 'react-router-dom';


class BreweryIndex extends React.Component {

    componentDidMount() {
        this.props.fetchBreweries();
    }

    render() {
        const BrewIndexItems = this.props.breweries.map( brewery => {
            return (
                <BreweryIndexItem
                    key={brewery.id}
                    brewery={brewery}
                />
            )
        })

        return (
            <>
                <div className='brewery-index-container'>
                    <div className='brewery-index'>
                        <div className='brewery-index-count'>{this.props.breweries.length} Breweries</div>
                        {BrewIndexItems}
                    </div>
                    <div className='brewery-sidebar'>
                        <div className='sidebar-title'>Global Top Beers</div>
                    </div>
                </div>
                <div className='home-footer'>
                    <div className='home-footer-nav'>
                        <a className='home-footer-link' href='https://github.com/ppondo/Uncorkd'>Github</a>
                        <a className='home-footer-link' href='www.linkedin.com/in/patrickpondo' >LinkedIn</a>
                        <a className='home-footer-link' href='' >Personal Site</a>
                        <Link className='home-footer-link' to='/breweries' >Breweries</Link>
                    </div>
                </div>
            </>
        )
    }
}

export default BreweryIndex;