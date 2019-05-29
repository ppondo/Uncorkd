import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { logIn, 
        signUp, 
        logOut } from './util/session_api_util';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root')
    ReactDOM.render(<Root store={ store }/>, root)

    window.getState = store.getState;
    window.dispatch = store.dispatch;
})

window.logIn = logIn;
window.logOut = logOut;
window.signUp = signUp;

