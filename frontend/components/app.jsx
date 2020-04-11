import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MyHomeContainer from './home/my_home_container'
// import SignUpForm from './sessions/signup_form';;
import NavContainer from './nav/nav_container'
import Nav from './nav/nav';
import UserNav from './nav/user_nav';
import Splash from './splash/splash';
import Footer from './footer/footer';
import {AuthRoute, ProtectedRoute} from '../util/route_util';


const App = () => (
    <>
    
        {/* <header> */}
            {/* <Nav /> */}
            {/* <Route path='/' component={MyHomeContainer} /> */}
        {/* </header> */}
        {/* <div className="App">
            <Switch> */}
                <ProtectedRoute exact path ="/" component={Nav} />
                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                {/* <ProtectedRoute exact path="my_home" component={NavContainer} /> */}
                <ProtectedRoute exact path="/my_home" component={MyHomeContainer} />
            {/* </Switch>
        </div> */}
    
    </>
);

export default App;