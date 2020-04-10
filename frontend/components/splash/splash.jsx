import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import {Link} from 'react-router-dom';
import Nav from '../nav/nav';

class Splash extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.handleClick = this.handleClick.bind(this);
    // }


    // handleClick() {
    //     this.props.login(this.props.demoUser)
    // }


    render() {
        return (
            <>
                {/* <Nav /> */}
                <div className="splash-main">
                    <div id="splash-background-top">
                        <div className="splash-first">
                            <hr align="right"/>
                            <h2 className="heading1" align="right">
                                OWN EVERY MILE
                            </h2>
                            <hr align="right"/>
                            <div className="top-description">
                                <p className="p-top">
                                    The best mobile run tracking experience,
                                    backed by the world's largest digital
                                    health and fitness community.
                                </p>
                            </div>
                            <div className="splash-buttons-first">
                                <Link to="/signup"><button className="splash-signup-button" align="right">SIGN UP</button></Link>
                                <div>
                                    <br/>
                                    <br/>
                                    <span className="span-top">Already a member?    </span>
                                    <Link to="/login"><button className="splash-login-button">LOG IN</button> </Link>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <div id="splash-background-middle">
                        <div className="second-splash">
                            <div className="splash-second">
                                <hr align="left" />
                                <h2 className="heading2" align="left">
                                SYNCS WITH UNDER ARMOUR SMART SHOES
                                </h2>
                                <hr align="left" />
                                <div className="mid-description"></div>
                                    <p className="p-mid">
                                        Track everything from pace, stride length,
                                        and cadence, plus get personalzied
                                        coaching tips along the way.
                                    </p>
                                <a href="https://www.underarmour.com/en-us/hovr/g/33yb?cid=MMF%7CREF%7CMMFitness%7CSite%7Chome_page%7CHOVR"><button className="splash-smartshoes-button">LEARN MORE</button></a>
                            </div>
                            <div className="ua-picture-container">
                                <img src={window.UAHoverapp}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Splash;