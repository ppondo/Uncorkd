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
                    <div className='dropdown'>
                        <img className='nav-avatar'src={currentUser.imgUrl} alt=""/>
                        <div className='dropdown-content'>
                            <ul className='dropdown-list'>
                                <Link className='dropdown-link' to='/home'>Recent Activity</Link>
                                <Link className='dropdown-link' to='/users/:userId'>My Profile</Link>
                                <div onClick={logOut}>Logout</div>
                            </ul>
                        </div>
                    </div>
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

