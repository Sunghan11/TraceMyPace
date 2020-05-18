import React from 'react';
import {Link} from 'react-router-dom';
// import UserNav from '../nav/nav_container';
import Footer from '../footer/footer';
import DashboardContainer from '../dashboard/dashboard_container';
import UserNavContainer from '../nav/user_nav_container'

const MyHome = ({ currentUser, logout }) => {
    // debugger;
    return (
            <>
                <UserNavContainer />
                     


                <div className="line"></div>
                <div id="home-page-sign">
                <h4><i className="fas fa-running fa"></i> Changes are coming soon to this website!</h4>
                </div>

                <DashboardContainer />
                <br/>
                <br />
                <br />
                <br />
                <br />
                <Footer/>


            </>
    )
}


export default MyHome;