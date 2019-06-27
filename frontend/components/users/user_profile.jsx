import React from 'react';
import CheckinFeedItem from '../checkins/checkin_feed_item.jsx';
import { Link } from 'react-router-dom';


class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterObj: {
                beverage_id: null,
                brewery_id: null,
                user_id: this.props.match.params.userId
            }
        }
    }

    componentDidMount() {
        // debugger
        this.props.fetchCheckins(this.state.filterObj);
        this.props.fetchUser(this.props.match.params.userId);
        this.props.fetchBeverages();
        this.props.fetchBreweries();
    }

    render() {
        if (this.props.checkins === undefined || this.props.user === undefined) {
            return null
        };
        window.scrollTo(0, 0)

        const headerStyle = { background: `${window.profileHeader}`}
            

        const CheckinFeedItems = this.props.checkins.map(checkin => {
            return (
                <CheckinFeedItem
                    key={checkin.id}
                    checkin={checkin}
                    checkinUser={this.props.user}
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
            <div className='user-profile-container'>
                <div className='profile-header' style={headerStyle}>
                    {/* <img className='user-profile-header' src={window.profileHeader} alt=""/>  */}
                    <img className='user-profile-img' src={this.props.user.imgUrl} alt=""/>
                    <div className='user-profile-info'>
                        <p>{this.props.user.first_name} {this.props.user.last_name}</p>
                        <span>{this.props.user.username}</span>
                        <div className='user-profile-stats'>
                            <Link to={`/users/${this.props.user.id}`} className='user-profile-stat'>
                                <span className='profile-count'>
                                    {this.props.user.checkins.length}</span>
                                <span className='profile-stat'>TOTAL</span>
                            </Link>
                            <Link to={`/users/${this.props.user.id}`} className='user-profile-stat'>
                                <span className='profile-count'>
                                    {this.props.user.checkins.length}</span>
                                <span className='profile-stat'>UNIQUE</span>
                            </Link>
                            <Link to={`/users/${this.props.user.id}`} className='user-profile-stat'>
                                <span className='profile-count'>0</span>
                                <span className='profile-stat'>BADGES</span>
                            </Link>
                            <Link to={`/users/${this.props.user.id}`} className='user-profile-stat'>
                                <span className='profile-count'>0</span>
                                <span className='profile-stat'>FRIENDS</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='profile-checkins-container'>
                    <div className='profile-checkins'>
                        <div className='checkin-index-title'>Your Recent Activity</div>
                        {CheckinFeedItems.reverse()}
                    </div>
                    <div className='profile-sidebar'>
                        <div className='profile-sidebar-item'> 
                            <p>Lists</p>
                        </div>
                        <div className='profile-sidebar-item'>
                            <p>Top Beers</p>
                        </div>
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
        );

    }

}

export default UserProfile;