import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logOut}) => {
    const display = currentUser ? (
        <header className='nav'>
            <div className='nav-bar'>
                <div className='left-nav'>
                    <div className='nav-logo'>
                        <div className='nav-logo-title'>UNCORKD</div>
                        <span className='nav-logo-span'>DRINK SOCIALLY</span>
                    </div>
                    <div className='nav-link'>
                        <Link className='nav-link-item' to='/home'>The Pub</Link>
                    </div>
                    <div className='nav-link'>
                        <Link className='nav-link-item' to='/breweries'>Breweries</Link>
                    </div>
                    <div className='nav-link'>
                        <a className='nav-link-item' href='https://github.com/ppondo/Uncorkd'>Github</a>
                    </div>
                </div>
                <div className='right-nav'>
                    <button className='logout-button' onClick={logOut} >Logout</button>
                </div>
            </div>
        </header>
    ) : (
        <div></div>
    )
        return (
            display
        )
}

