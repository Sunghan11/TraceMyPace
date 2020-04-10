import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MyHomeContainer from './home/my_home_container'
// import SignUpForm from './sessions/signup_form';;

import Nav from './nav/nav';
import Splash from './splash/splash';
import {AuthRoute, ProtectedRoute} from '../util/route_util';


const App = () => (
    <>
    
        <header>
            <Nav />
            {/* <Route path='/' component={MyHomeContainer} /> */}
        </header>
        {/* <div className="App">
            <Switch> */}
                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                {/* <ProtectedRoute exact path="/my_home" component={MyHomeContainer} /> */}
            {/* </Switch>
        </div> */}
    
    </>
);

export default App;