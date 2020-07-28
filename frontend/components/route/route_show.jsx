import React from 'react';
import {Link} from 'react-router-dom';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';
import SmallMap from './route_map/small_map';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.map = null;
        this.markersArr = [];
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: 'magenta',
                strokeWeight: 4,
            },
            supressMarkers: true
        });
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        debugger;
        if (this.props.workout !== "create") {
            this.props.fetchRoute(this.props.match.params.routeId)
        }
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (this.props.route) {
            this.locationMarkersArr();
            this.initMap();
        }

        if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
            this.props.fetchRoute(this.props.match.params.routeId);
        }
    }

    initMap() {
        debugger;
        const mapEle = document.getElementById("show-map");
        let options = {
            mapTypeId: google.maps.MapTypeId.ROADMAP
            // center: {lat:40.736436, lng: -73.994061},
            // zoom: 15,
            // travelMode: "WALKING"
        }
        this.map = new google.maps.Map(mapEle, options);
        this.dirRend.setMap(this.map);
        this.showRoute(this.dirServ, this.dirRend);
        debugger;
    }

    locationMarkersArr() {
        debugger;
        let coords = this.props.route.locationMarkers.split(',').map(Number);

        for(let i = 0; i < coords.length; i += 2) {
            let coord = {lat: coords[i], lng: coords[i+1] };
            let marker = new google.maps.Marker({
                position: coord,
                map: this.map,
            });

            this.markersArr.push(marker);
        }
        debugger;
    }

    showRoute(dirServ, dirRend) {
        debugger;
        let start = this.markersArr[0].position;
        let finish = this.markersArr[this.markersArr.length-1].position;
        let waypoints = []
        for (let i = 1; i < this.markersArr.length - 1; i++) {
            waypoints.push({
                location: this.markersArr[i].position,
                stopover: false,
            });
        }

        const request = {
            origin: start,
            waypoints: waypoints,
            destination: finish,
            travelMode: google.maps.DirectionsTravelMode.WALKING,
        }
        this.dirServ.route(request, (response, status) => {
            if (status === "OK") {
                this.dirRend.setDirections(response);
            }
        });
    }

    handleClick() {
        // debugger;
        this.props.deleteRoute(this.props.route.id)
        .then(this.props.history.push('/routes/my_routes'));
    }

    render () {

        // const routeMapCopy = this.props.route.routeMap;
        // const rMSplit = routeMapCopy.split("75");
        // const rMJoin1 = `${rMSplit[0]}1320${rMSplit[1]}780${rMSplit[2]}`;
        // let newRouteMap = rMJoin1.slice(0,-1).concat("5");
        
        

        const route = this.props.route;
        debugger;
        const steps = Math.floor(route.distance * 2210)
        let activity;

        if (route.activity === "Walk") {
            activity = <p><i className="fas fa-walking"></i> {route.activity}</p>
        } else if (route.activity === "Winter Sport/Activity") {
            activity = <p><i className="fas fa-skiing"></i> {route.activity}</p>
        } else if (route.activity === "Bike Ride") {
            activity = <p><i className="fas fa-biking"></i> {route.activity}</p>
        } else if (route.activity === "Swim") {
            activity = <p><i className="fas fa-swimmer"></i> {route.activity}</p>
        } else if (route.activity === "Run") {
            activity = <p><i className="fas fa-running"></i> {route.activity}</p>
        } else if (route.activity === "Hike") {
            activity = <p><i className="fas fa-hiking"></i> {route.activity}</p>
        } else if (route.activity === "Sport/ Other Activity") {
            activity = <p><i className="fas fa-skating"></i> {route.activity}</p>
        }
        debugger;
        // if (!this.props.route) {
        //     return null;
        // }
        // const person = {first_name = "",
        return (
            <>
                <UserNavContainer/>
                <br/>
                <br/>
                <div className="route-show-main">

                    <div className="route-show-info">
                        <div id="route-show-top">
                            <div id="route-show-username">{this.props.user.first_name} {this.props.user.last_name}</div>
                            <div id="route-show-info-info">
                                {activity}
                                <p><i className="fas fa-map-marker-alt"></i>   {route.city}</p>
                                <p><i className="fas fa-route"></i>   {route.distance} MI</p>
                                <p><i className="fas fa-shoe-prints"></i> {steps} STEPS</p>
                            </div>
                            <div id="route-show-name">{route.name}</div>
                        </div>
                    </div>
                    <div id="route-show-map">
                        {/* <SmallMap 
                            route={this.props.route}
                            locations={Object.values(this.props.locations)}
                        /> */}
                        {/* <img className="route-show-map" src={newRouteMap} /> */}
                        <div id="show-map" ref="map"></div>
                    </div>
                    <div id="route-show-buttons">
                        <button className="route-show-button" id="route-show-delete" onClick={this.handleClick}>
                            Delete Route
                        </button>
                        <Link to='/routes/my_routes'>
                            <div id="routes-show-index">
                                My Routes
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default RouteShow;
