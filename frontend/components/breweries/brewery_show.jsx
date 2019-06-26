import React from 'react';
import { Link } from 'react-router-dom';
import CheckinFeedItem from '../checkins/checkin_feed_item';

class BreweryShow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filterObj: {
                beverage_id: null,
                brewery_id: this.props.match.params.breweryId,
                user_id: null
            }
        }
    }

    componentDidMount() {
        this.props.fetchBrewery(this.props.match.params.breweryId);
        this.props.fetchCheckins(this.state.filterObj);
        this.props.fetchBeverages(this.state.filterObj);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.breweryId !== this.props.match.params.breweryId) {
            this.props.fetchBrewery(this.props.match.params.breweryId);
        }
    }
    

    render() {
        // debugger
        const CheckinFeedItems = this.props.checkins.map(checkin => {
            return (
                <CheckinFeedItem
                    key={checkin.id}
                    checkin={checkin}
                    checkinUser={this.props.users[checkin.user_id]}
                    checkinBeverage={this.props.beverages[checkin.beverage_id]}
                    checkinBrewery={this.props.brewery}
                    likeCheckin={this.props.likeCheckin}
                    dislikeCheckin={this.props.dislikeCheckin}
                    createComment={this.props.createComment}
                    deleteComment={this.props.deleteComment}
                    users={this.props.users}
                />
            )
        })

        if (this.props.brewery === undefined) {
            return null
        }

        let avgRate;
        if (this.props.brewery.avgRating <= 0) {
            avgRate = 0;
        } else {
            avgRate = this.props.brewery.avgRating.toFixed(2);
        }


        const unique = (brewery, index, self) => {
            return self.indexOf(brewery) === index;
        }

        let youCheckins = [];
        this.props.brewery.userCheckins.forEach(checkin => {
            if (this.props.currentUserId === checkin.user_id) {
                youCheckins.push(checkin.user_id)
            }
        });

        const userCheckins = this.props.brewery.userCheckins.map(ch => {
            return (
                ch.user_id
            )
        })

        const circleWidth = (avgRate / 5) * 100

        let dateObj = new Date(this.props.brewery.created_at);
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        const date = month + "/" + day + "/" + year;

        // debugger
        return (
            <>
                <div className='brewery-show'>
                    <div className='show-content'>
                        <div className='show-info'>
                            <div className='show-info-basic'>
                                <div className='show-info-basic-left'>
                                    <img className='show-info-img'src={this.props.brewery.imgUrl} alt=""/>
                                    <div className='show-info-name'>
                                        <h1>{this.props.brewery.name}</h1>
                                        <p>{this.props.brewery.location}</p>
                                    </div>
                                </div>
                                <div className='show-info-basic-right'>
                                    <div className='flex-box1'>
                                        <div className='show-stat1'>
                                            <span className='stat'>TOTAL</span>
                                            <span className='count'>
                                                {this.props.brewery.checkins.length}
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
                                                {this.props.brewery.checkins.length}
                                            </span>
                                        </div>
                                        <div className='show-stat'>
                                            <span className='stat'>YOU</span>
                                            <Link to ={`/users/${this.props.currentUserId}`}className='user-count'>
                                                {youCheckins.length}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='show-info-ratings'>
                                <div className='rating-circles'>
                                    <span className='rating-circles-box'>
                                        <div style={{ width: `${circleWidth}%` }}></div>
                                        {/* <div><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i></div> */}
                                    </span>
                                    <div className='paren-rating'>({avgRate})</div>
                                </div>
                                <div className='show-num-ratings'>{this.props.brewery.checkins.length} Ratings</div>
                                <Link to={`/breweries/${this.props.brewery.id}/beer`} className='show-num-beers'>{this.props.brewery.beverages.length} Beers</Link>
                                <div className='show-num-ratings'>{`Added ${date}`}</div> 
                            </div>
                            <div className='show-info-description'>
                                <div className='desc'>{`${this.props.brewery.description}`}
                                </div>
                                <div className='desc-boxes'>
                                    <div className='box1'><i className="fas fa-beer"></i></div>
                                    <div className='box2'><i className="fas fa-users"></i></div>
                                    <div className='box3'><i className="fas fa-wine-bottle"></i></div>
                                    <div className='box4'><i id='thingy'className="fab fa-untappd"></i></div>
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

export default BreweryShow;