import React from 'react';
import { Link } from 'react-router-dom';


// const avatar = <img src={avatar.jpg}/>

const RouteNav = ({ logout }) => (
    <>


        <nav className="nav-bar">
            <Link to="/">
                <div className="nav-logo">
                    <img src={window.logoBigURL} />
                </div>
            </Link>
            {/* {currentUser.first_name} */}
            <ul className="home-nav-links">
                {/* <li>Training</li> */}
                <div className="home-nav-create">
                    Routes
                            <ul className="home-nav-create-opt">
                        <li><Link to="/routes/create">Create Route</Link></li>
                        <li><Link to="/routes/my_routes">My Routes</Link></li>
                    </ul>
                </div>
                <div>Challenges</div>
                {/* <div><a href="https://www.underarmour.com/en-us/hovr/g/33yb?cid=MMF%7CREF%7CMMFitness%7CSite%7Chome_page%7CHOVR">UA Shop</a></div> */}
            </ul>

            <div className="home-nav-profile">
                <button className="dropdown-btn"><img src={window.avatarURL} /></button>
                <ul className="profile-menu">
                    <li>Friends</li>
                    <li>
                        <Link className="logout-btn" onClick={() => logout()} to="/">Logout</Link>
                    </li>
                </ul>
            </div>

            {/* <Link to="/logout"><button className="home-logout-button">Logout</button></Link> */}

        </nav>

        <div className="line"></div>


    </>
);


export default RouteNav;