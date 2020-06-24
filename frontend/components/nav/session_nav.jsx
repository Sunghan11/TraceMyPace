import React from 'react';
import { Link } from 'react-router-dom';

function SessionNav() {
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

            </nav>
            <div className="line"></div>
        </>
    )
}

export default SessionNav;