import React from 'react';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import {Link} from 'react-router-dom';

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
                <section className="splash-main">
                    <div id="splash-background-top">
                        <h2 className="heading1">
                            OWN EVERY MILE
                        </h2>
                        {/* <hr align="right"/> */}
                        <p className="p-top">
                            The best mobile run tracking experience,
                            backed by the world's largest digital
                            health and fitness community.
                        </p>
                        <Link to="/signup"><button className="spash-signup-button">SIGN UP</button></Link>
                        <div>
                            <span>Already a member?</span>
                            <Link to="/login"><button className="splash-login-button">LOG IN</button> </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="heading2">
                        SYNCS WITH UNDER ARMOUR SMART SHOES
                        </h2>
                        <p className="p-mid">
                            Track everything from pace, stride length,
                            and cadence, plus get personalzied
                            coaching tips along the way.
                        </p>
                        <a href="https://www.underarmour.com/en-us/hovr/g/33yb?cid=MMF%7CREF%7CMMFitness%7CSite%7Chome_page%7CHOVR"><button className="spash-smartshoes-button">LEARN MORE</button></a>
                    </div>

                </section>
            </>
        )
    }
}

export default Splash;