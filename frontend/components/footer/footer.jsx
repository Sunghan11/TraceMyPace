import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div id="footer-bar">
            <div id="footer-main-images">
                <div id="footer-iphone-img">
                    <img src={window.iphoneURL}/>
                </div>
                <br/>

            </div>
            <div className="footer-bar-div">
                <div id="footer-first-bar">
                        <span><img src={window.logoBigURL} /></span>
                    <ul>
                        <li>RUN</li>
                        <li>RIDE</li>
                        <li>WALK</li>
                        <li>HIKE</li>
                    </ul>
                </div>
                <div id="footer-second-bar">
                    <div id="footer-social">
                            <h4><a href="https://sunghan11.github.io/">Portfolio</a></h4>
                    </div>

                    <div id="footer-help">
                            <h4><a href="https://www.linkedin.com/in/elijah-nam-6a412b25/">LinkedIn</a></h4>
                    </div>

                    <div id="footer-about">
                            <h4><a href="https://angel.co/u/elijah-nam">AngelList</a></h4>
                    </div>
                    <div id="footer-about">
                            <h4><a href="https://github.com/Sunghan11">Github</a></h4>
                    </div>

                    <div id="footer-community">
                        <h4>UA FITNESS COMMUNITY</h4>
                        <ul>
                                <li><a href="https://itunes.apple.com/us/app/record-by-under-armour-connects/id895425891?mt=8"><button><img src={window.UArecordURL} /></button></a></li>
                                <li><a href="https://itunes.apple.com/us/app/running-walking-biking-endomondo/id333210180?mt=8"><button><img src={window.UAgreenURL} /></button></a></li>
                                <li><a href="https://itunes.apple.com/us/app/calorie-counter-diet-tracker/id341232718?mt=8"><button><img src={window.UAfitnessURL} /></button></a></li>
                            <li><a href="https://itunes.apple.com/us/app/map-my-fitness-gps-workout/id298903147?mt=8"><button><img src={window.UAmmfURL} /></button></a></li>
                        </ul>
                    </div>

                </div>
            </div>
            </div> 
            <div id="footer-third-bar">
                <div id="UA-logo-img">
                    <img src={window.UAfullLogoURL} />
                </div>
                    {/* <div> */}
                        {/* <ul> */}
                            {/* <div id="footnotes"> */}
                                {/* <ul> */}
                                    <p>
                                        Giving Credit for some edited photos and links to © 2020 Under Armour®, Inc. 
                                    </p>
                                    {/* <li><a href="https://account.underarmour.com/privacy">Privacy Policy</a></li>
                                    <li><a href="https://account.underarmour.com/terms-and-conditions">Terms of Use</a></li>
                                    <li><a href="https://account.underarmour.com/privacy#interest-based-advertising">Cookie Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="https://account.underarmour.com/data-management">Do Not Sell My Personal Information</a></li>
                                </ul>
                            </div>
                            <li>

                            </li>
                        </ul> */}
        
                {/* </div> */}
               
        </div>
        </>
    )
}

export default Footer;