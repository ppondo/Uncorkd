import React from 'react';
import CheckinFeedItem from './checkin_feed_item.jsx';


class CheckinFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterObj: {
                beverage_id: null,
                brewery_id: null
            }
        }
    }

    componentDidMount() {
        // debugger
        this.props.fetchCheckins(this.state.filterObj);
        this.props.fetchUsers();
        this.props.fetchBeverages();
        this.props.fetchBreweries();
    }

    render() {
        if (this.props.checkins === undefined) return null;

        const CheckinFeedItems = this.props.checkins.map(checkin => {
            // debugger
            return (
                <CheckinFeedItem
                    key={checkin.id}
                    checkin={checkin}
                    checkinUser={this.props.users[checkin.user_id]}
                    checkinBeverage={this.props.beverages[checkin.beverage_id]}
                    checkinBrewery={this.props.breweries[checkin.breweryId.id]}
                />
            )
        })

        return (
            <div className='brewery-index-container'>
                <div className='brewery-index'>
                    <div className='checkin-index-title'>Recent Activity</div>
                    {CheckinFeedItems.reverse()}
                </div>
                <div className='brewery-sidebar'>
                    <div className='sidebar-title'>Global Top Beers</div>
                </div>
            </div>
        )
    }
}

export default CheckinFeed;