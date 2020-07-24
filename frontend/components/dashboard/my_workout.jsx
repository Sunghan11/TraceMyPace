import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';
import WorkoutIndexContainer from '../workout/workout_index_container';

// const Challenge = () => {
class MyWorkout extends React.Component {

    render() {
        return (
            <>
                <UserNavContainer />
                <div id="home-page-sign">
                    <h4><i className="fas fa-running fa"></i> Changes are coming soon to this website!</h4>
                </div>
                <div id="dash-main">
                    <div id="dash-nav">
                        {/* <button>{this.props.logout}</button> */}
                        <NavLink to="/my_home/activity_feed" activeClassName="active">
                            <div className="dash-nav-container"
                                id="dash-nav-box">ACTIVITY FEED</div>
                        </NavLink>
                        <NavLink to="/my_home/user_dashboard" activeClassName="active">
                            <div className="dash-nav-container"
                                id="dash-nav-dashboard">MY DASHBOARD</div>
                        </NavLink>
                        <NavLink to="/my_home/my_workouts" activeClassName="active">
                            <div className="dash-nav-container"
                                id="dash-nav-dashfriends">MY WORKOUTS</div>
                        </NavLink>
                    </div>
                </div>
                <div id="coming-soon">
                    {/* <h2>Coming Soon</h2> */}
                    <WorkoutIndexContainer />
                </div>
                <Footer />
            </>
        );
    };
}

export default MyWorkout;