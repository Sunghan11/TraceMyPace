import React from 'react';
import {Link} from 'react-router-dom';
// import UserNav from '../nav/nav_container';

const MyHome = ({ currentUser, logout }) => (
            <>
 
                     
                <nav className="nav-bar">
                    <Link to="/">
                        <div className="nav-logo">
                            <img src={window.logoBigURL} />
                        </div>
                    </Link>

                    <ul className="home-nav-links">
                        <li>Training</li>
                        <li>Routes</li>
                        <li>Challenges</li>
                        <li>UA Shop</li>
                    </ul>

                    <div className="home-nav-profile">
                        {/* {profileDefaultImg} */}
                        <button></button>
                        <ul className="profile-menu">
                            <li>Friends</li>
                            <li>
                                <Link className="logout-btn" onClick={()=> logout()} to ="/">Log Out</Link>
                            </li>
                        </ul>
                    </div>

                 {/* <Link to="/logout"><button className="home-logout-button">Logout</button></Link> */}

                </nav>
                <div className="line"></div>


            </>
    );


export default MyHome;