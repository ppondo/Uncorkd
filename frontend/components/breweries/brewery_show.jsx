import React from 'react';
import { Link } from 'react-router-dom';

class BreweryShow extends React.Component {

    componentDidMount() {
        this.props.fetchBrewery(this.props.match.params.breweryId);
    }

    componentDidlUpdate(prevProps) {
        if (prevProps.match.params.breweryId !== this.props.match.params.breweryId) {
            this.props.fetchBrewery(this.props.match.params.breweryId);
        }
    }
    

    render() {
        if (this.props.brewery === undefined) {
            return null
        }

        let dateObj = new Date(this.props.brewery.created_at);
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        const date = month + "/" + day + "/" + year;

        // debugger
        return (
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
                                        <span className='count'> 20
                                            {/* this.props.brewery.checkins.length */}
                                        </span>
                                    </div>
                                    <div className='show-stat'>
                                        <span className='stat'>UNIQUE</span>
                                        <span className='count'> 20
                                            {/* this.props.brewery.checkins.length */}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex-box'>
                                    <div className='show-stat1'> 
                                        <span className='stat'>MONTHLY</span>
                                        <span className='count'>20
                                            {/* this.props.brewery.checkins.length */}
                                        </span>
                                    </div>
                                    <div className='show-stat'>
                                        <span className='stat'>YOU</span>
                                        <Link to ='users/:userId'className='user-count'>20
                                            {/* this.props.brewery.checkins.length */}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='show-info-ratings'>
                            <div className='show-avg-rating'>
                                <i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i>
                                <div> (3.97)</div>
                                {/* <div className='rate2'><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i><i className="fas fa-circle"></i></div> */}
                            </div>
                            <div className='show-num-ratings'>30 Ratings</div>
                            <Link to='/users/:userId' className='show-num-beers'>{this.props.brewery.beverages.length} Beers</Link>
                            <div className='show-num-ratings'>{`Added ${date}`}</div> 
                            {/* date added ^ */}
                        </div>
                        <div className='show-info-description'>
                            <div className='desc'>{`${this.props.brewery.description}`}
                            </div>
                            <div className='desc-boxes'>
                                <div className='box1'></div>
                                <div className='box2'></div>
                                <div className='box3'></div>
                                <div className='box4'></div>
                            </div>
                        </div>
                    </div>
                    <div className='brewery-checkins'>
                    {/* brewery.checkins go here */}
                    </div>
                </div>
                <div className='show-sidebar'>
                </div>
            </div>
        );
    }
}

export default BreweryShow;