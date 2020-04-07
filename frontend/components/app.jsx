import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
// import SessionForm from './sessions/session_form';;
import { AuthRoute } from '../util/route_util';
import Nav from './nav/nav';


const App = () => (
    <div>
        <header>
            <h1>Trace My Pace</h1>
            <Nav />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;