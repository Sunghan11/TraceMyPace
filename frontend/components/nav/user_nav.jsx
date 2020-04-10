import React from 'react';
import { Link } from 'react-router-dom';


// const Nav = () => {
function UserNav() {
    return (
        <nav className="nav-bar">
            {/* <div> */}
            <Link to="/">
                <div className="nav-logo">
                    <img src={window.logoBigURL} />
                </div>
            </Link>
            {/* </div>
            <div> */}
            <ul className="nav-links">
                <li>Training</li>
                <li>Routes</li>
                <li>Challenges</li>
                <li>UA Shop</li>
            </ul>
            {/* </div>            */}

            <Link to="/logout"><button className="nav-logout-button">LOG OUT</button></Link>
            


        </nav>
    )
}

export default UserNav;