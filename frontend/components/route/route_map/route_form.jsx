import React from 'react';
import { Link } from 'react-router-dom';
import RouteFormContainer from './route_index_item';

const mapOptions = {
    location: {lat: 40.736436, lng: -73.994061},
    zoom: 8,
    mapTypeId: mapTypeId,
    draggableCursor: 'default'
};

class RouteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            activity: '',
            user_id: this.props.currentUser.id,
            route_map: '',
            distance: 0
        }
        //communicates with google maps api to find most efficient path
        this.dirService = new google.maps.DirectionsService();
        //creates renderer with given options on map as visual overlays
        this.dirRenderer = new google.maps.DirectionsRenderer

    }

    getLocation() {
        if(navigator.geolocation) {
            // timeout at 60 seconds
            var options = {timeout:60000}; //milliseconds
            navigator.geolocation.getCurrentPosition
            (showLocation, errorHandler, options);
        } else {
            alert("Sorry, browser does not support geolocation!");
        }
    }

    // genMap() {
    //     //generates google map with default location
    //     let map = new google.maps.Map(this.refs.map, mapOptions);
    // }
    componentDidMount() {
        this.props.fetchRoutes()
    }



    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    render() {
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
                                    {ACTIVITIES.map(activity =>
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

export default RouteForm;