import React from 'react';
import {Link} from 'react-router-dom';


// const Nav = () => {
function Nav() {
    return (
        <>
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
                <div className="navLogSign">
                    <div>
                        <Link to="/login"><button className="nav-login-button">LOG IN</button></Link>
                    </div>
                    <div>
                        <Link to="/signup"><button className="nav-signup-button">SIGN UP</button></Link>
                    </div>
                </div>

            </nav>
            <div className="line"></div>
        </>
    )
}

export default Nav;