import React from 'react';
import { Link } from 'react-router-dom';
import UserNavContainer from '../nav/nav_container';

// const avatar = <img src={avatar.jpg}/>

const UserNav = () => (
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
                <button className="dropdown-btn"><img src={window.avatarURL} /></button>
                <ul className="profile-menu">
                    <li>Friends</li>
                    <li>
                        <Link className="logout-btn" onClick={() => logout()} to="/">Logout</Link>
                    </li>
                </ul>
            </div>
    

        </nav>

        <div className="line"></div>


    </>
);


export default UserNav;