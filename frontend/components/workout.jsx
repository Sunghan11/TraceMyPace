import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserNavContainer from './nav/user_nav_container';
import Footer from './footer/footer';

// const Challenge = () => {
class Workout extends React.Component {

    render() {
        return (
            <>
                <UserNavContainer />
                <div id="home-page-sign">
                    <h4><i className="fas fa-running fa"></i> Changes are coming soon to this website!</h4>
                </div>
                <div id="coming-soon">
                    <h2>Coming Soon</h2>
                </div>
                <Footer />
            </>
        );
    };
}

export default Workout;