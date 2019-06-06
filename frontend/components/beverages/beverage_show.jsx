import React from 'react';
import { Link } from 'react-router-dom';
import CheckinFeedItem from '../checkins/checkin_feed_item';

class BeverageShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterObj: {
                beverage_id: this.props.match.params.beverageId,
                brewery_id: null,
                user_id: null
            }
        }
    }

    componentDidMount() {
        // debugger
        this.props.fetchBeverage(this.props.match.params.beverageId);
        this.props.fetchBreweries();
        this.props.fetchCheckins(this.state.filterObj);
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.match.params.beverageId !== this.props.match.params.beverageId) {
            this.props.fetchBeverage(this.props.match.params.beverageId);
        }
    }

    render() {

        if (this.props.beverage === undefined || this.props.breweries === undefined) {
            return null;
        }

        let avgRate;
        if (this.props.beverage.avgRating <= 0) {
            avgRate = 0;
        } else {
            avgRate = this.props.beverage.avgRating.toFixed(2);
        }

        const unique = (beer, index, self) => {
            return self.indexOf(beer) === index;
        }

        let currentUserCheckins = [];
        this.props.beverage.userCheckins.forEach(checkin => {
            if(this.props.currentUserId === checkin.user_id) {
                currentUserCheckins.push(checkin.user_id)
            }
        });
        const youCheckins = currentUserCheckins;

        const userCheckins = this.props.beverage.userCheckins.map(ch => {
            return (
                ch.user_id
            )
        })

        const brew = this.props.breweries[this.props.beverage.brewery_id];

        if (brew === undefined) {
            return null;
        }

        const CheckinFeedItems = this.props.checkins.map(checkin => {
            return (
                <CheckinFeedItem
                    key={checkin.id}
                    checkin={checkin}
                    checkinUser={this.props.users[checkin.user_id]}
                    checkinBeverage={this.props.beverage}
                    checkinBrewery={brew}
                />
            )
        })


        let dateObj = new Date(this.props.beverage.created_at);
        let month = dateObj.getUTCMonth() + 1;
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        const date = month + "/" + day + "/" + year;
        
        return (
            <div className='container'>
                <div className='bev-show-box'>
                    <div className='bev-show'>
                        <img className='bev-show-img' src={this.props.beverage.imgUrl} alt="" />
                        <div className='bev-show-text'>
                            <div className='bev-show-name'>
                                <div > {this.props.beverage.name}</div>
                                <Link className='name-link' to={`/breweries/${this.props.beverage.brewery_id}`}>{this.props.beverage.brewName}</Link>
                            </div>
                            <div className='bev-show-style'>
                                {this.props.beverage.style}
                            </div>
                        </div>
                        <div className='show-info-basic-right'>
                            <div className='flex-box1'>
                                <div className='show-stat1'>
                                    <span className='stat'>TOTAL</span>
                                    <span className='count'>
                                        {this.props.beverage.checkins.length}
                                    </span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>UNIQUE</span>
                                    <span className='count'>
                                        {userCheckins.filter(unique).length}  
                                    </span>
                                </div>
                            </div>
                            <div className='flex-box'>
                                <div className='show-stat1'>
                                    <span className='stat'>MONTHLY</span>
                                    <span className='count'>
                                        {this.props.beverage.checkins.length} 
                                    </span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>YOU</span>
                                    <Link to={`users/${this.props.currentUserId}`} className='user-count'>
                                        {youCheckins.length} 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bev-info-ratings'>
                        <div className='show-num-ratings'>{this.props.beverage.ABV}% ABV</div>
                        <div className='show-num-ratings'>{this.props.beverage.IBU} IBU</div>
                        <div className='show-avg-rating'>
                            <i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i>
                            <div>({avgRate})</div>
                        </div>
                        <div className='show-num-ratings'>{this.props.beverage.checkins.length} Ratings</div>
                        <div className='show-date'>{`Added ${date}`}</div>
                    </div>
                    <div className='show-info-description'>
                        <div className='desc'>{`${this.props.beverage.description}`}
                        </div>
                        <div className='checkin-boxes'>
                            <div className='checkin-dropdown'>
                                <Link className='checkin-box' to={`/beer/${this.props.beverage.id}/checkin`}><i className="fas fa-check"></i></Link>
                                <div className='checkin-dropdown-content'>
                                    <ul className='checkin-dropdown-list'>
                                        <p >Check-in this Beer</p>
                                    </ul>
                                </div>
                            </div>
                            <div className='checkin-dropdown'>
                                <Link className='checkin-box' to={`/beer/${this.props.beverage.id}/checkin`}><i className="fas fa-plus"></i></Link>
                                <div className='checkin-dropdown-content2'>
                                    <ul className='checkin-dropdown-list2'>
                                        <p >Add To List</p>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='checkin-index-container'>
                        <div className='checkin-index'>
                            <div className='checkin-index-title'>Recent Activity</div>
                            {CheckinFeedItems.reverse()}
                        </div>
                        {/* <div className='brewery-sidebar'>
                            <div className='sidebar-title'>Global Top Beers</div>
                        </div> */}
                    </div>
                </div>
                <div className='brew-sidebar'>
                    <div className='brew-sidebar-item'>
                        <p>Top Beers</p>
                    </div>
                    <div className='brew-sidebar-item'>
                        <p>Lists</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BeverageShow;