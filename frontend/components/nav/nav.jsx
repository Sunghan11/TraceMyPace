import React from 'react';
import {Link} from 'react-router-dom';


// const Nav = () => {
function Nav() {
    return (
        <>
            <nav className="nav-bar">
                {/* <div> */}
                    <Link to=".">
                        <div className="nav-logo">
                            <img src={window.logoBigURL} />
                        </div>
                    </Link>
                {/* </div>
                <div> */}
                    <ul className="splash-nav-links">
                        {/* <li><Link to="/signup">Training</Link></li> */}
                        <li><Link to="/signup">Routes</Link></li>
                        <li><Link to="/signup">Challenges</Link></li>
                        <li><a href="https://www.underarmour.com/en-us/hovr/g/33yb?cid=MMF%7CREF%7CMMFitness%7CSite%7Chome_page%7CHOVR">UA Shop</a></li>
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