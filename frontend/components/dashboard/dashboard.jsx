import React from'react';
import {Link, NavLink} from 'react-router-dom';

// class DashNav extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    
//     render () {

const DashNav = ({ currentUser }) => {
    // debugger;
        return (
            <div id="dash-wrapper">
                <div id="dash-main">
                    <div id="dash-nav">
                        <NavLink to="/my_home/activity_feed" activeClassName="active">
                            <div className="dash-nav-container"
                                id="dash-nav-box">ACTIVITY FEED</div>
                        </NavLink>
                        <NavLink to="my_home/user_dashboard" activeClassName="active">
                            <div className="dash-nav-container"
                                id="dash-nav-dashboard">MY DASHBOARD</div>
                        </NavLink>
                        <NavLink to="my_home/24" activeClassName="active">
                            <div className="dash-nav-container"
                                id="dash-nav-dashfriends">MY FRIENDS</div>
                        </NavLink>
                    </div>
                </div>
                <div id="dash-bottom-half">
                    <div id="left-main-dash">

                    </div>
                    <div id="right-main-dash">
                        <div id="dash-right-section">
                            <div id="dash-profile-image">
                                <div id="dash-profile-pic">
                                    <img src={window.avatarURL} />
                                    <div id="dash-profile-info">
                                        <div id="dash-profile-greeting">
                                            <span>Name</span>
                                            <span>Location</span>
                                        </div>
                                        <br/>
                                        <div id="total-distance">
                                            <div>0</div>
                                            <div id="total-miles">
                                                <span>TOTAL</span>
                                                <span>MILES</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="profile-edit">
                                    <span>Edit Profile</span>
                                    <span>Find Friends</span>
                                </div>
                            </div>
                        </div>
                        <div id="dash-ua">
                            <div id="dash-ua-shop">
                                <span id="dash-ua-shop-top">GET THE LATEST GEAR</span>
                                <a href="https://www.underarmour.com/en-us/?cid=MMF|REF|MMRun|Site">
                                    <i className="fas fa-shopping-cart fa-4x"></i>
                                </a>
                                <a href="https://www.underarmour.com/en-us/?cid=MMF|REF|MMRun|Site">Shop UnderArmour.com</a>
                            </div>
                            <div id="dash-me">
                                <span id="dash-me-github">FOLLOW ME ON GITHUB</span>
                                <div>
                                    <a href="https://github.com/Sunghan11">
                                        <i className="fab fa-github-square fa-5x"></i>
                                    </a>
                                    <a href="https://github.com/Sunghan11">GitHub</a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
// }

export default DashNav;