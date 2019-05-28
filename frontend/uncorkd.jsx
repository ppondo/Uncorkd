import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { logIn, 
        signUp, 
        logOut } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    const root = document.getElementById('root')
    ReactDOM.render(<h1>UNCORKD</h1>, root)
})

window.logIn = logIn;
window.logOut = logOut;
window.signUp = signUp;

