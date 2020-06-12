import React from 'react';
import { Link } from 'react-router-dom';
import UserNavContainer from '../nav/user_nav_container';
import { Nav } from '../nav/nav_container';
import Footer from '../footer/footer';

// const Challenge = () => {
class Challenge extends React.Component {

    render() {
        return (
            <>
                <UserNavContainer />
                <div id="challenge-background">
                    {/* <Nav/> */}
                    {/* <UserNavContainer /> */}
                    <div id="challenge-main">
                        <h2>CHALLENGE YOURSELF</h2>
                        <div id="challenge-body">
                            Challenge yourself and others and cheer on your friends to complete
                            the challenge below!
                        </div>
                        <br/>
                        <div id="challenge-display">
                            <img src={window.challenge}/>
                            <span>YOU VS THE YEAR 2020</span>
                            <p>Cover 1,111 KM in 2020 and beat the year!</p>
                            <Link to='/routes/create'>
                                <button id="challenge-route">
                                    
                                        {/* <div id="challenge-route">
                                            CREATE A ROUTE NOW
                                        </div> */}
                                        CREATE A ROUTE NOW
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* <Footer/> */}
                </div>
            <Footer />
            </>
        );
    };
}

export default Challenge;