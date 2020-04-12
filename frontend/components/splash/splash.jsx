import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import {Link} from 'react-router-dom';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

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
                <Nav />
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
                <div className="splash-main">
                    <div className="splash-background-mid-bottom">
                        <div className="third-splash">
                            <div id="third-splash-1"> 
                                <div id="third-splash-1-1">
                                    <ul>
                                        <li>
                                            <h4>TRACK EVERYTHING</h4>
                                            <p>Log any kind of workout using just your phone.</p>
                                        </li>
                                        <li>
                                            <h4>TAKE THE PLUNGE</h4>
                                            <p>Don't hesitate to explore new challenges with friends and family.</p>
                                        </li>
                                        <li>
                                            <h4>RUSHING TO APPOINTMENT?</h4>
                                            <p>Plan your routes on the go, while going to appointments or on afternoon walks</p>
                                        </li>
                                    </ul> 
                                </div>
                                <div id="third-splash-1-2">
                                    <div id="phones">
                                        <img id="phn1" src={window.phone1}/>
                                        <img id="phn2" src={window.phone2}/>
                                        <img id="phn3" src={window.phone3}/>
                                    </div>
                                </div>
                            </div>
                            
                            <div id="third-splash-2">
                                <div id="third-splash-2-1">
                                    <hr align="center"/>
                                    <h2 className="heading3" align="center">
                                        FIND YOUR PATH ANYWHERE
                                    </h2>
                                    <hr align="center"/>
                                    <p id="mid-bottom-description">Create and discover new routes wherever you are. 
                                        Save your favorites for the next time you're ready to run.</p>
                                </div>
                                <div id ="third-splash-2-2">
                                    <ul>
                                        <li>New York, NY</li>
                                        <li>Manhattan, NY</li>
                                        <li>San Francisco, CA</li>
                                        <li>Austin, TX</li>
                                        <li>Denver, CO</li>
                                        <li>Seattle, WA</li>
                                    </ul>
                                    <ul>
                                        <li>San Diego, CA</li>
                                        <li>Portland OR</li>
                                        <li>Chicago, IL</li>
                                        <li>Honolulu, HI</li>
                                        <li>Tallahassee, FL</li>
                                        <li>Boston, MA</li>
                                    </ul>
                                    <ul>
                                        <li>Dublin, Ireland</li>
                                        <li>Paris, France</li>
                                        <li>Toronto, Canada</li>
                                        <li>Hobbiton, New Zealand</li>
                                        <li>Geneva, Switzerland</li>
                                        <li>Anywhere in the World</li>
                                    </ul>

                                </div>
                                <div id="third-splash-2-3">
                                    <div id="third-splash-2-3-bg">

                                        <div>
                                            <img src={window.social}/>
                                        </div>
                                    </div>
                                </div>
                                <div id="third-splash-2-4">
                                    <div id="third-splash-2-4-bg">
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Splash;