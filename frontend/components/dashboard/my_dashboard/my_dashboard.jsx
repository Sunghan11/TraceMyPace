import React from 'react';
import {Link} from 'react-router-dom';
import { logoutCurrentUser } from '../../../actions/session_actions';

class MyDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.totalDistance = 0;
        this.totalRoutes = 0;
    }

    milesToAvgTime(miles) {
        const min = miles * 12;
        const hr = Math.floor(min / 60);
        
        const newMin = Math.floor(min % 60);
        if (hr < 10) {
            return `0${hr}:${newMin}`
        } else {
            return `${hr}:${newMin}`
        }
    }



    render() {
        debugger;
        // if(this.props.currentUser.id === this.props.route.user_id)
        const routes = Object.values(this.props.routes);
        // const currentUser = Object.values(this.props.currentUser)[0];
        routes.map(route=> {
            if (route.userId === this.props.currentUser.id) {
                this.totalDistance += route.distance;
                this.totalRoutes += 1;
                debugger;
            }
        });


        return (
            <>
                <div id="mydashboard-top">
                    <div className="my-dashboard-headings">
                        <div id="my-dashboard-headings-distance">
                            <span>DISTANCE</span>
                            <div>{this.totalDistance.toFixed(2)}</div>
                            <span>miles</span>
                        </div>
                        <div id="my-dashboard-headings-distance">
                            <span>DURATION</span>
                            <div>{
                                this.milesToAvgTime(this.totalDistance)
                            }</div>
                            <span>hours</span>
                        </div>
                        <div id="my-dashboard-headings-distance">
                            <span>STEPS</span>
                            <div>{Math.floor(this.totalDistance * 2210)}</div>
                            <span>TAKEN</span>
                        </div>
                        <div id="my-dashboard-headings-distance">
                            <span>ROUTES</span>
                            <div>{this.totalRoutes}</div>
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