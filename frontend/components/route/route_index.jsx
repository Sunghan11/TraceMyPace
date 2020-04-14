import React from 'react';
import {Link} from 'react-router-dom';
import RouteIndexItem from './route_index_item';


class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            activity: '',
        }
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    update(field) {
        return e => (
            this.setState({ [field]: e.target.value})
        )
    };

    render () {
        const ACTIVITIES = ["Choose an Actitivity",
            "Walk", "Winter Sport/Activity", "Bike Ride", "Swim",
            "Run", "Sport/ Other Activity", "Hike"
        ]

        const routes = Object.values(this.props.routes);
        return (
            <>
                <div className="routes-main">
                    <div className="routes-title-1">
                        <h2 className="routes-title-1-1">MY ROUTES</h2>
                        <div className="route-details"> 
                        <h4>Route Details</h4>
                            <div>
                            <input
                                value={this.state.name}
                                onChange={this.update("name")}
                                type="text"
                                placeholder="Name this map"
                            />
                            </div>
                            <div>
                                <select value={this.state.activity}
                                className="optA"
                                    onChange={this.update("activity")}>
                                    {ACTIVITIES.map(activity=>
                                    <option key={activity} value={activity}>{activity}</option>)}
                                </select>
                            </div>
                            <button className="create-route-btn">SAVE ROUTE</button>
                        </div>

                    </div>


                </div>
                                   {/* userRoutes */}
            </>
        )
    }
}

export default RouteIndex