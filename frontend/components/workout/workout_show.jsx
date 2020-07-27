import React from 'react';
import { Link } from 'react-router-dom';
import WorkoutIndexItem from './workout_index_item';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';

class WorkoutShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // visible: false
        }
        debugger;
    
        this.route = "";
        this.creationDate = "";
        this.workoutDate = "";
        this.deleteWorkout = this.deleteWorkout.bind(this);
    }

    componentDidMount() {
        this.props.fetchWorkout();
        this.props.fetchRoutes();
    }

    componentWillMount() {
        this.props.fetchRoutes();
    }

    deleteWorkout() {
        debugger;
        this.props.deleteWorkout(this.props.workout.id)
    }
    
    createdDate() {
        const MONTHS = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
        ]
        const createdDate = this.props.workout.createdAt.split('-');
        const cDate = `${MONTHS[Number(createdDate[1])]} ${createdDate[2].slice(0, 2)}, ${createdDate[0]}`;
        this.creationsDate = cDate;
    }

    updateDate() {
        const MONTHS = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
        ]
        const logDate = this.props.workout.date.split("-");
        const lDate = `${MONTHS[Number(logDate[1])]} ${logDate[2]} ${logDate[0]}`
        this.workoutDate = lDate;
    }

    deleteWorkout() {
        debugger;
        this.props.deleteWorkout(this.props.workout.id)
    }
    
    render() {
        let currentUser = this.props.currentUser;
        debugger;
        if (!this.props.workout) return null;
        let deleteButton;
        if (this.props.currentUser.id === this.props.workout.userId) {
            deleteButton = <button
                onClick={this.deleteWorkout}><i className="fas fa-times"></i>
            </button>
        } else {
            deleteButton = ""
        }

        this.props.routes.map(route => {
            if (route.id == this.props.workout.routeId) {
                this.route = route;
            }
        });
        const steps = Math.floor(this.route.distance * 2210)
        this.updateDate();
        let activity;

        if (this.route.activity === "Walk") {
            activity = <p><i className="fas fa-walking"></i> {this.route.activity}</p>
        } else if (this.route.activity === "Winter Sport/Activity") {
            activity = <p><i className="fas fa-skiing"></i> {this.route.activity}</p>
        } else if (this.route.activity === "Bike Ride") {
            activity = <p><i className="fas fa-biking"></i> {this.route.activity}</p>
        } else if (this.route.activity === "Swim") {
            activity = <p><i className="fas fa-swimmer"></i> {this.route.activity}</p>
        } else if (this.route.activity === "Run") {
            activity = <p><i className="fas fa-running"></i> {this.route.activity}</p>
        } else if (this.route.activity === "Hike") {
            activity = <p><i className="fas fa-hiking"></i> {this.route.activity}</p>
        } else if (this.route.activity === "Sport/ Other Activity") {
            activity = <p><i className="fas fa-skating"></i> {this.route.activity}</p>
        }
        debugger;


        return (
            <>  
                <UserNavContainer />
                <div id="home-page-sign">
                    <h4><i className="fas fa-running fa"></i> Changes are coming soon to this website!</h4>
                </div>
                <div id="workout-show-container">
                    <div id="workout-show-header">
                        <Link to="/my_home/user_dashboard">
                            <span>Home</span>
                        </Link>
                        <i class="fas fa-caret-right"></i>
                        <Link to="/workouts">
                            <span>My Workouts</span>
                        </Link>
                        <i class="fas fa-caret-right"></i>
                        <span id="workout-show-header-d">Details</span>

                    </div>
                    <div id="workout-show-container-top">
                        <div id="workout-show-name">
                            {this.props.workout.name}
                        </div>
                        <div id="workout-show-info">
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">DISTANCE</span>
                                <span id="workout-show-info-description">{this.route.distance} MI</span>
                            </div>
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">DURATION</span>
                                <span id="workout-show-info-description">--</span>
                            </div>
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">AVG PACE</span>
                                <span id="workout-show-info-description">--</span>
                            </div>
                            <div id="workout-show-info-tab">
                                <span id="workout-show-info-title">KCAL</span>
                                <span id="workout-show-info-description">{(this.route.distance * 112.8).toFixed(0)}</span>
                            </div>
                        </div>
                        <div className="line-workout"></div>
                        <div id="workout-show-activity">
                            {activity}

                        </div>
                        <div className="line"></div>
                        <div id="workout-show-info-user">
                            <span>{this.workoutDate}</span>
                            <span>by {currentUser.first_name.toUpperCase()} {currentUser.last_name.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default WorkoutShow;