import React from 'react';
import CheckinFeedItem from './checkin_feed_item.jsx';
import { Link } from 'react-router-dom';


class CheckinFeed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterObj: {
                beverage_id: null,
                brewery_id: null,
                user_id: null
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
        if (this.props.checkins === undefined || this.props.users === undefined) {
            return null
        };
        const CheckinFeedItems = this.props.checkins.map(checkin => {
            return (
                <CheckinFeedItem
                    key={checkin.id}
                    checkin={checkin}
                    checkinUser={this.props.users[checkin.user_id]}
                    checkinBeverage={this.props.beverages[checkin.beverage_id]}
                    checkinBrewery={this.props.breweries[checkin.breweryId.id]}
                    likeCheckin={this.props.likeCheckin}
                    dislikeCheckin={this.props.dislikeCheckin}
                    createComment={this.props.createComment}
                    deleteComment={this.props.deleteComment}
                    users={this.props.users}
                />
            )
        })

        return (
            <>
            <div className='brewery-index-container'>
                <div className='brewery-index'>
                    <div className='checkin-index-title'>Recent Activity</div>
                    {CheckinFeedItems.reverse()}
                </div>
                <div className='home-sidebar'>
                    <div className='home-sidebar-item'>
                        <div className='home-user-box'>
                            <div className='home-user-info'>
                                <div className='checkin-avatar'>
                                    <Link to={`/users/${this.props.currentUserId}`}>
                                        <img className='checkin-avatar-user' src={this.props.users[this.props.currentUserId].imgUrl} alt="" />
                                    </Link>
                                </div>
                                <div className='home-user-name'>
                                    <div className='home-name'>{this.props.users[this.props.currentUserId].first_name} {this.props.users[this.props.currentUserId].last_name}</div>
                                    <div className='home-little-name'>
                                        <i className="fas fa-user"></i>
                                        <p>{this.props.users[this.props.currentUserId].username}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className='home-user-stats'>
                                <div className='home-stat-box '>
                                    <div className='home-flex-box1'>
                                        <div className='home-show-stat1'>
                                        <span className='home-count'>
                                            {this.props.users[this.props.currentUserId].checkins.length}</span>
                                            <span className='home-stat'>TOTAL</span>
                                        </div>
                                        <div className='home-show-stat'>
                                            <span className='home-count'>
                                                {this.props.users[this.props.currentUserId].checkins.length}</span>
                                            <span className='home-stat'>UNIQUE</span>
                                        </div>
                                    </div>
                                    <div className='home-flex-box'>
                                        <div className='home-show-stat1'>
                                            <span className='home-count'>0</span>
                                            <span className='home-stat'>BADGES</span>
                                        </div>
                                        <div className='home-show-stat'>
                                            <span className='home-count'>0</span>
                                            <span className='home-stat'>FRIENDS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* <div className='home-title'>Global Top Beers</div> */}
                    </div>
                    <div className='profile-sidebar-item'>
                        <p>Top Beers</p>
                    </div>
                    <div className='profile-sidebar-item'>
                        <p>Lists</p>
                    </div>
                </div>
            </div>
            <div className='home-footer'>
                <div className='home-footer-nav'>
                    <a className='home-footer-link' href='https://github.com/ppondo/Uncorkd'>Github</a>
                    <a className='home-footer-link' href='https://www.linkedin.com/in/patrickpondo' >LinkedIn</a>
                    <a className='home-footer-link' href='https://ppondo.github.io' >Personal Site</a>
                    <Link className='home-footer-link' to='/breweries' >Breweries</Link>
                </div>
            </div>
            </>
        )
    }
}

export default CheckinFeed;