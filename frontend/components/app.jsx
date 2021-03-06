import React from 'react';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MyHomeContainer from './home/my_home_container'
import Nav from './nav/nav';
import RouteMapContainer from './route/route_map/route_map_container';
import RouteIndexContainer from './route/route_index_container';
import RouteShowContainer from './route/route_show_container';
import Splash from './splash/splash';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import ActivityFeedContainer from './dashboard/activity_feed/activity_feed_container';
import Challenge from './dashboard/challenges';
import UserNavContainer from './nav/user_nav_container';
import Footer from './footer/footer';
import MyWorkout from './dashboard/my_workout';
import WorkoutShowContainer from './workout/workout_show_container';
import Workout from './workout';
import Goal from './goal';


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
                <ProtectedRoute path="/routes/create" component={RouteMapContainer}/>                {/* <ProtectedRoute exact path="my_home" component={NavContainer} /> */}
                {/* <ProtectedRoute exact path="/my_home" component={MyHomeContainer} /> */}
                <ProtectedRoute exact path="/my_home/activity_feed" component={ActivityFeedContainer} />
                <ProtectedRoute exact path="/my_home/user_dashboard" component={MyHomeContainer} />                
                {/* <ProtectedRoute exact path="/my_home/my_home/user_dashboard" component={MyHomeContainer} />                 */}
                <ProtectedRoute exact path="/routes/my_routes" component={RouteIndexContainer} />
                <ProtectedRoute exact path="/routes/view/:routeId" component={RouteShowContainer} />
                <ProtectedRoute exact path="/challenges" component={Challenge} />
                <ProtectedRoute exact path="/workouts" component={MyWorkout} />
                <ProtectedRoute exact path="/workouts/create" component={Workout} />
                <ProtectedRoute exact path="/goals" component={Goal} />
                <ProtectedRoute exact path="/workouts/view/:workoutId/" component={WorkoutShowContainer} />

            {/* </Switch>
        </div> */}
    
    </>
);

export default App;