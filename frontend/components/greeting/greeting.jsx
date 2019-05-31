import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logOut }) => {
    const display = currentUser ? (
        <div className= 'greeting'>
            <h1 className='logo'>UNCORKD</h1>
            <span>DRINK SOCIALLY</span>
            <button className='logout-button'onClick={logOut} >Logout</button>
        </div>
    ) : (
        <>
            <div className='splash-background'>
                <div className='session-links'>
                    <Link className='session-link' to='/login' >SIGN IN</Link>
                    <div className="divider" />
                    <Link className='session-link' to='/signup' >CREATE AN ACCOUNT</Link>
                </div>
                <div className='splash'>
                    <div className='splash-div'>
                        <i className='fab fa-untappd'></i>
                        <h1 className='logo'>UNCORKD</h1>
                        <span className='logo-span'>DRINK SOCIALLY</span>
                        <div className='short-bar'></div>
                        <h2 className='logo-message'>Discover and share your favorite beer.</h2>
                    </div>
                    <div className='splash-div'>
                        <img className= 'splash-picture' 
                            src={window.phoneImg}
                            alt="Phone-picture"/>
                    </div>
                </div>
                <div className='filler'></div>
            </div>
            <div className='feature-bar' ></div>
            <section className='feature'>
                <div className='feature-box'>
                    <div className='feature-content'>

                        <div className='img-div'><img src={window.featureImg1} alt="check-in" /></div>
                        <h4 className='feature-title'>check in and rate beer</h4>
                        <div className='feature-body'>Keep track of what you've tried and what you thought of it by checking in a beer and rating it.</div>
                    </div>
                    <div className='feature-content'>
                        <div className='img-div'><img src={window.featureImg2} alt="badges" /></div>
                        <h4 className='feature-title'>drink new beers, unlock badges</h4>
                        <div className='feature-body'>Expand your palate by trying new & different beer styles and unlock achievements along the way.</div>
                    </div>
                </div>
            </section>
            <section className='map-feature'>
                <div className='map-feature-img'>
                    <img src={window.featureImg5} alt=""/>
                </div>
                <div className='map-feature-text'>
                    <h1 className='map-feature-heading'>Explore nearby popular bars, breweries, and beers</h1>
                    <div className='map-short-bar'></div>
                    <p className='map-feature-body'>Not sure where to grab a pint? Untappd shows you popular bars and venues nearby and what’s on tap.</p>
                </div>
            </section>
            <section className='other-features'>
                <h1 className='other-title'>Other Great Features</h1>
                <div className='short-bar'></div>
                <div className='other-features-box'>
                    <div className='other-features-items'>
                        <img src={window.featureImg3} alt="" />
                        <h2 className='other-item-title'>Updated Menus</h2>
                        <div className='other-item-body'>Follow Verified Venues to get live tap list updates.</div>
                    </div>
                    <div className='other-features-items'>
                        <img src={window.featureImg4} alt="" />
                        <h2 className='other-item-title'>Recommendations</h2>
                        <div className='other-item-body'>Discover new beers locally we think you'll like.</div>
                    </div>
                </div>
            </section>
            <div className='footer'>
                {/* <div className='footer-nav'>
                    <Link className='footer-link' to='/' >Home</Link>
                    <Link className='footer-link' to='/signup' >The Pub</Link>
                    <Link className='footer-link' to='/signup' >Store</Link>
                    <Link className='footer-link' to='/signup' >Breweries</Link>
                    <Link className='footer-link' to='/signup' >Blog</Link>
                    <Link className='footer-link' to='/signup' >Support</Link>
                    <Link className='footer-link' to='/signup' >Careers</Link>
                    <Link className='footer-link' to='/signup' >API</Link>
                    <Link className='footer-link' to='/signup' >Terms</Link>
                    <Link className='footer-link' to='/signup' >Privacy</Link>
                </div> */}
                <div>
                    <p className='footer-tag'>Uncorkd 2019</p>
                </div>
            </div>
            <div className='footer-icons'>
            </div>
        </>
    );

    return (
        <div>
            {display}
        </div>
    );
};