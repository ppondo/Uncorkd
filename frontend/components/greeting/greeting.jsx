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
                <div className='session-link'>
                    <Link to='/login' >SIGN IN</Link>
                </div>
                <div className="divider" />
                <div className='session-link'>
                    <Link to='/signup' >CREATE AN ACCOUNT</Link>
                </div>
            </div>
            <div className='splash'>
                <i className='fab fa-untappd'></i>
                <h1 className='logo'>UNCORKD</h1>
                <span className='logo-span'>DRINK SOCIALLY</span>
                <h1 className='logo-message'>Discover and share your favorite beer.</h1>
            </div>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    );
};