import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import BreweryIndexContainer from './breweries/brewery_index_container'
import BreweryShowContainer from './breweries/brewery_show_container'


const App = () => {
    return (
        <>
            <Route path="/" component={GreetingContainer} />
            <Switch>
                <ProtectedRoute exact path='/breweries' component={BreweryIndexContainer}/>
                <ProtectedRoute exact path='/breweries/:breweryId' component={BreweryShowContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
            </Switch>
        </>
    )
};

export default App;