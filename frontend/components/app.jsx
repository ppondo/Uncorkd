import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import NavContainer from './greeting/nav_container';
import { Route, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import BreweryIndexContainer from './breweries/brewery_index_container';
import BreweryShowContainer from './breweries/brewery_show_container';
import BeerBreweryShowContainer from './breweries/beer_brewery_show_container';
import BeverageShowContainer from './beverages/beverage_show_container';


const App = (props) => {

    return (
        <>
            <Route path="/" component={NavContainer} />
            <Switch>
                <ProtectedRoute exact path='/breweries' component={BreweryIndexContainer}/>
                <ProtectedRoute exact path='/breweries/:breweryId' component={BreweryShowContainer}/>
                <ProtectedRoute exact path='/breweries/:breweryId/beer' component={BeerBreweryShowContainer}/>
                <ProtectedRoute exact path='/b/beverage/:beverageId' component={BeverageShowContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                <Route exact path="/splash" component={GreetingContainer} />
            </Switch>
        </>
    )
};


export default App;