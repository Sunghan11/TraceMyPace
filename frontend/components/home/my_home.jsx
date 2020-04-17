import React from 'react';
import {Link} from 'react-router-dom';
// import UserNav from '../nav/nav_container';
import Footer from '../footer/footer';
import DashboardContainer from '../dashboard/dashboard_container'

const MyHome = ({ currentUser, logout }) => {
    // debugger;
    return (
            <>
 
                     
                <nav className="nav-bar">
                    <Link to="/">
                        <div className="nav-logo">
                            <img src={window.logoBigURL} />
                        </div>
                    </Link>
                    {/* {currentUser.first_name} */}
                    <ul className="home-nav-links">
                        <li>Training</li>
                        <div className="home-nav-create">
                            Routes
                            <ul className="home-nav-create-opt">
                                <li><Link to="/routes/create">Create Route</Link></li>
                                <li><Link to="/routes/my_routes">My Routes</Link></li>
                            </ul>
                        </div>
                        <li>Challenges</li>
                        <li>UA Shop</li>
                    </ul>

                    <div className="home-nav-profile">
                        <button className="dropdown-btn"><img src={window.avatarURL} /></button>
                        <ul className="profile-menu">
                            <li>Friends</li>
                            <li>
                                <Link className="logout-btn" onClick={()=> logout()} to ="/">Logout</Link>
                            </li>
                        </ul>
                    </div>

                 {/* <Link to="/logout"><button className="home-logout-button">Logout</button></Link> */}

                </nav>

                <nav className="home-nav-bar-2">
                    <div className="shortcuts">
                        {/* <ul> */}
                            <div>
                                <Link className="shortcuts-1" to=".">Dashboard</Link>
                            </div>
                            <div>
                                <Link className="shortcuts-1" to="/routes/create">Create Route</Link>
                            </div>
                            <div>
                                <Link className="shortcuts-1" to=".">Log Workout</Link>
                            </div>
                            <div>
                                <Link className="shortcuts-1" to=".">Create a Goal</Link>
                            </div>
                        {/* </ul> */}
                    </div>

                    
                </nav>
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