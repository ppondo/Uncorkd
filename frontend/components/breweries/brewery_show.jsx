import React from 'react';
import { Link } from 'react-router-dom';

class BreweryShow extends React.Component {

    componentDidMount() {
        this.props.fetchBrewery(this.props.match.params.breweryId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.brewery.id != this.props.match.params.breweryId) {
            this.props.fetchBrewery(this.props.match.params.breweryId);
        }
    }

    render() {
        debugger
        return (
            <div className='brewery-show'>
                <div className='show-content'>
                    <div className='show-info'>
                        <div className='show-info-basic'>
                            <div className='show-info-basic-left'>
                                {/* <img className='show-info-img'src={this.props.brewery.imgUrl} alt=""/> */}
                                <div className='show-info-name'>
                                    <h1>{this.props.brewery.name}</h1>
                                    <p>{this.props.brewery.location}</p>
                                </div>
                            </div>
                            <div className='show-info-basic-right'>
                                <div className='show-stat'>
                                    <span className='stat'>TOTAL</span>
                                    <span className='count'></span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>UNIQUE</span>
                                    <span className='count'></span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>MONTHLY</span>
                                    <span className='count'></span>
                                </div>
                                <div className='show-stat'>
                                    <span className='stat'>YOU</span>
                                    <span className='count'></span>
                                </div>
                            </div>
                        </div>
                        <div className='show-info-ratings'>
                        </div>
                        <div className='show-info-description'>
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