import React from 'react';
import {Link} from 'react-router-dom';
import UserNav from '../nav/nav_container';

const MyHome = ({ currentUser, logout }) => (
            <>
 
                <button onClick={() => logout()}>
                    Log Out
                </button>
            </>
            // <>
            //     <nav className="home-page">
            //         <Link to="/">
            //             <div className="nav-logo">
            //                 <img src={window.logoBigURL} />
            //             </div>
            //         </Link>

            //         <ul className="home-nav-links">
            //             <li>Training</li>
            //             <li>Routes</li>
            //             <li>Challenges</li>
            //             <li>UA Shop</li>
            //         </ul>

            //         <div className="home-nav-profile">
            //             {profileDefaultImg}
            //             <ul className="profile-menu">
            //                 <li>Friends</li>
            //                 <li>Devices</li>
            //                 <li>Support</li>
            //                 <li>Settings</li>
            //                 <Link to="/logout">
            //                     {/* <li>Logout</li> */}
            //                 </Link>
            //                 <li onClick={logout}></li>
            //             </ul>

            //         </div>

            //         {/* <Link to="/logout"><button className="home-logout-button">Logout</button></Link> */}

            //     </nav>


            // </>
    );


export default MyHome;