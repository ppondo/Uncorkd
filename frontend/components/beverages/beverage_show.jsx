import React from 'react';
import { Link } from 'react-router-dom';

class BeverageShow extends React.Component {

    componentDidMount() {
        // debugger
        this.props.fetchBeverage(this.props.match.params.beverageId);
        this.props.fetchBreweries();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.match.params.beverageId !== this.props.match.params.beverageId) {
            this.props.fetchBeverage(this.props.match.params.beverageId);
        }
    }

    render() {
        // debugger
        if (this.props.beverage === undefined || this.props.breweries === undefined) {
            return null;
        }
        
        const brew = this.props.breweries[this.props.beverage.brewery_id];

        if (brew === undefined) {
            return null;
        }


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
                                <Link className='name-link' to={`/breweries/${this.props.beverage.brewery_id}`}>{brew.name}</Link>
                            </div>
                            <div className='bev-show-style'>
                                {this.props.beverage.style}
                            </div>
                        </div>
                        <div className='show-info-basic-right'>
                            <div className='flex-box1'>
                                <div className='show-stat1'>
                                    <span className='stat'>TOTAL</span>
                                    <span className='count'> 20
                                                {/* this.props.beverage.checkins.length */}
                                    </span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>UNIQUE</span>
                                    <span className='count'> 20
                                                {/* this.props.beverage.checkins.length */}
                                    </span>
                                </div>
                            </div>
                            <div className='flex-box'>
                                <div className='show-stat1'>
                                    <span className='stat'>MONTHLY</span>
                                    <span className='count'>20
                                                {/* this.props.beverage.checkins.length */}
                                    </span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>YOU</span>
                                    <Link to='users/:userId' className='user-count'>20
                                                {/* this.props.beverage.checkins.length */}
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
                            <div> (3.97)</div>
                        </div>
                        <div className='show-num-ratings'>30 Ratings</div>
                        <div className='show-date'>{`Added ${date}`}</div>
                    </div>
                    <div className='show-info-description'>
                        <div className='desc'>{`${this.props.beverage.description}`}
                        </div>
                        <div className='desc-boxes'>
                            <div className='box1'></div>
                            <div className='box2'></div>
                            <div className='box3'></div>
                            <div className='box4'></div>
                        </div>
                    </div>
                </div>
                <div className='show-sidebar'>
                </div>
            </div>
        )
    }
}

export default BeverageShow;