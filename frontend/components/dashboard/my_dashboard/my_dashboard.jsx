import React from 'react';
import {Link} from 'react-router-dom';

class MyDashboard extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <>
                <div id="mydashboard-top">
                    <div className="my-dashboard-headings">
                        <div id="my-dashboard-headings-distance">
                            <span>DISTANCE</span>
                            <div>25.5</div>
                            <span>miles</span>
                        </div>
                        <div id="my-dashboard-headings-distance">
                            <span>DURATION</span>
                            <div>05:48</div>
                            <span>hours</span>
                        </div>
                        <div id="my-dashboard-headings-distance">
                            <span>CALORIES</span>
                            <div>3348.8</div>
                            <span>burned</span>
                        </div>
                        <div id="my-dashboard-headings-distance">
                            <span>WORKOUTS</span>
                            <div>5.0</div>
                            <span>completed</span>
                        </div>
                    </div>
                    <div id="my-dashboard-recent-routes">
                        <div>
                            <h2>RECENT ROUTES</h2>
                        </div>
                        <div>
                            <img src=""/>
                            <img src=""/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default MyDashboard;