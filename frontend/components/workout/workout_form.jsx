import React from 'react';
import { Link } from 'react-router-dom';


class Workout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            gear_used: 'No Gear',
            description: '',
            user_id: this.props.state.user.id,
            route_id: '',


        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    componentDidMount() {
        this.props.fetchRoutes();
        // return this.props.removeErrors();
    };


    handleSubmit(e) {
        e.preventDefault();
        this.props.createWorkout({
            name: this.state.name,
            date: this.state.date,
            description: this.state.description,
            user_id: this.state.user_id,
            route_id: this.state.route_id,

        })
        this.props.history.push('./workouts');
    }

    renderErrors() {
        return (
            <ul className="display-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}> {error}</li>
                ))}
            </ul>
        );
    }


    render() {
        const routes = Object.values(this.props.routes);
        const GEARS = ["No Gear"]
        if (Object.values(this.props.routes).length < 1 ) {
            return null;
        }

        
        return (
            <>
                <div id="workout-form">
                    <div id="workout-form-container">
                        <div id="workout-title">
                            LOG A WORKOUT
                        </div>
                        <div id="workout-form-body">
                            <form onSubmit={this.handleSubmit}>
                                <label id="workout-form-name">
                                    Workout Name
                                    <input
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update('name')}
                                    />
                                </label>
                                <label id="workout-form-date">
                                    Date
                                    <input
                                        type="date"
                                        value={this.state.date}
                                        onChange={this.update('date')}
                                    />
                                </label>
                                <label id="workout-form-gear">
                                    Gear used
                                    <select className="workout-gear" onChange={this.update("gear_used")}>
                                        {GEARS.map(gear =>
                                            <option key={gear} value={gear}>{gear}</option>)}
                                    </select>
                                    <img src={window.downArrow} />
                                </label>
                                <label id="workout-form-description">
                                    How did it go?
                                    <input
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                    />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Workout;