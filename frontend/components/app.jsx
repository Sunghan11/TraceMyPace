import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
// import SignUpForm from './sessions/signup_form';;

import Nav from './nav/nav';
import Splash from './splash/splash';
import {AuthRoute, ProtectedRouted} from '../util/route_util';


const App = () => (
    <>
    
        <header>
            <Nav />
            <Splash />
        </header>
        {/* <div className="App">
            <Switch> */}
                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* </Switch>
        </div> */}
    
    </>
);

export default App;