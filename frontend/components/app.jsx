import React from 'react';
// import GreetingContainer from './greetings/greeting_container';
// import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
// import LoginFormContainer from './sessions/login_form_container';
// import SignUpFormContainer from './sessions/signup_form_container';
// import SessionForm from './sessions/session_form';
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            <h1>Trace My Pace</h1>
            {/* <GreetingContainer /> */}
        </header>

        {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
        {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
    </div>
);

export default App;