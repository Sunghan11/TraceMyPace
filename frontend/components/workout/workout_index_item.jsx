import React from 'react';
import { Link } from 'react-router-dom';

class WorkoutIndexItem extends React.Component {
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
        this.duration = "-";
        this.pace = "-";
    }

    createdDate() {
        const MONTHS = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"
        ]
        const createdDate = this.props.workout.createdAt.split('-');
        const cDate = `${MONTHS[Number(createdDate[1])]} ${createdDate[2].slice(0,2)}, ${createdDate[0]}`;
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
        debugger;
        if(!this.props.workout) return null;
        let deleteButton;
        if (this.props.user.id === this.props.workout.userId) {
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
        debugger;
        

        return (
            <>
                {/* <div className="workout-index-item-container">
                    <div id="workout-index-title">
                        {this.props.workout.name}
                    </div>
                    <div id="workout-index-info">
                        <div id="workout-index-info-distance">
                            <span id="workout-dist-title">DISTANCE</span>
                            <span id="workout-dist">{this.route.distance} MI</span>
                        </div>
                        <div id="workout-index-info-steps">
                            <span id="workout-steps-title">STEPS</span>
                            <span id="workout-steps">{steps}</span>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div id="workout-index-info-user">
                        <span>{this.workoutDate}</span>
                        <span>by {this.props.user.first_name.toUpperCase()} {this.props.user.last_name.toUpperCase()}</span>
                    </div>
                </div> */}
                <div id="workout-index-item-table">
                    <span id="workout-i-it-1">{this.workoutDate}</span>
                    <Link id="workout-index-activity-link" to={`/workouts/view/${this.props.workout.id}`}>
                        <span id="workout-i-it-2">{this.route.activity}</span>
                    </Link>
                    <span id="workout-i-it-3">{this.route.distance}</span>
                    <span id="workout-i-it-4">{this.duration}</span>
                    <span id="workout-i-it-5">{deleteButton}</span>
                </div>
                <div className="line-workout"></div>
            </>
        )
    }
}

export default WorkoutIndexItem;