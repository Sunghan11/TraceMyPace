import React from 'react';
import { Link } from 'react-router-dom';
// import UserNav from '../nav/nav_container';

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

        </nav>


    </>
);


export default UserNav;