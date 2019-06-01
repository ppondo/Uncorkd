import React from 'react';
import BreweryIndexItem from './brewery_index_item';


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
            <div className='brewery-index-container'>
                {BrewIndexItems}
            </div>
        )
    }
}

export default BreweryIndex;