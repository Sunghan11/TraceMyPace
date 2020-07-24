import React from 'react';
import { Link } from 'react-router-dom';

class WorkoutIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // visible: false
        }

        this.creationDate = "";
        this.deleteWorkout = this.deleteWorkout.bind(this);
    }

    createdDate() {
        const MONTHS = [
            JAN, FEB, MAR, APR, MAY, JUNE, JULY, AUGUST, SEPT, OCT, NOV, DEC
        ]
        const createdDate = this.props.workout.createdAt.split('-');
        const cDate = `${MONTHS[Number(createdDate[1])]} ${createdDate[2].slice(0,2)}, ${createdDate[0]}`;
        this.creationsDate = cDate;
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

        return (
            <>
                <div className="workout-index-item-container">
                    <div id="workout-index-title">
                        {this.props.workout.name}
                    </div>
                    <div id="workout-index-info">
                        <div id="workout-index-info-distance">
                            <span>DISTANCE</span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default WorkoutIndexItem;