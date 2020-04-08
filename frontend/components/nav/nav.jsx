import React from 'react';
import {Link} from 'react-router-dom';


// const Nav = () => {
function Nav() {
    return (
        <nav className="nav-bar">
            {/* <div> */}
                <Link to="/">
                    <div className="logo">
                        <img src={window.tmplogoURL} />
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
                
                <Link to="/login"><button className="splash-login-button">LOG IN</button></Link>
                <Link to="/signup"><button className="splash-signup-button">SIGN UP</button></Link>


        </nav>
    )
}

export default Nav;