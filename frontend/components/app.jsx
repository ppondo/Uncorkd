import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => {
    return (
        <div>
            <header>
            </header>

            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </div>
    )
};

export default App;