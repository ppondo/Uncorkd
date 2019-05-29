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
        <div>
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
                    <h1 className='logo-message'>Discover and share your favorite beer.</h1>
                </div>
                <div className='splash-div'>
                    <img className= 'splash-picture' 
                        src="https://untappd.akamaized.net/assets/custom/homepage/images/masthead-img-main.png" 
                        alt="Phone-picture"/>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    );
};