import React from 'react';
import {Link} from 'react-router-dom';
import UserNavContainer from '../nav/user_nav_container';
import Footer from '../footer/footer';

class RouteShow extends React.Component {
    constructor(props) {
        super(props);
        
        this.map = null;
        this.markers = [];
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({
            polylineOptions: {
                strokeColor: 'purple',
                strokeWeight: 4,
            },
            supressMarkers: true
        });
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        //         const mapEle = document.getElementById("show-map");
        // let options = {
        //     center: {lat:40.736436, lng: -73.994061},
        //     zoom: 15,
        //     // travelMode: "WALKING"
        // }
        // let map = new google.maps.Map(this.refs.map, options);
        // this.dirRend.setMap(map);
        // this.showRoute(this.dirServ, this.dirRend);
        // this.map = map;

        this.props.fetchRoute(this.props.match.params.routeId)
        this.initMap();
        debugger;
    }

    componentDidUpdate(prevProps) {
        debugger;
        if (this.props.route) {
            // this.decodeMarkers();
            this.initMap();
        }

        if (prevProps.match.params.routeId !== this.props.match.params.routeId) {
            this.props.fetchRoute(this.props.match.params.routeId);
        }
    }

    // initMap() {
    //     const mapEle = document.getElementById("show-map");
    //     let options = {
    //         center: {lat:40.736436, lng: -73.994061},
    //         zoom: 15,
    //         // travelMode: "WALKING"
    //     }
    //     this.map = new google.maps.Map(this.refs.map, options);
    //     this.dirRend.setMap(map);
    //     this.showRoute(dirServ, dirRend);
    // }

    initMap() {

        const options = {
            center: { lat: 40.736436, lng: -73.994061 },
            zoom: 15,
        }

        let map = new google.maps.Map(this.refs.map, options);
        this.dirRend.setMap(map);
        this.map = map;
        // this.showRoute(dirServ, dirRend)
    }

    addMarker(location) {
        // const marker = new google.maps.Marker({ position: location});

        // marker.setMap(this.map);
        // this.markers.push(marker);

        // if (this.markers.length > 1) {
        //     this.markers.forEach(marker => marker.setMap(null));
        //     this.displayRoute(
        //         this.markers[0].position,
        //         this.markersArray[this.markers.length - 1].position,
        //         this.markers.slice(1, this.markers.length - 1),
        //         this.dirServ,
        //         this.dirRend
        //     )
        // }
    }

    // decodeMarkers() {
    //     let coords = this.props.route.encodedMarkers.split(',').map(Number);

    //     for(let i = 0; i < coords.length; i += 2) {
    //         let coord = {lat: coords[i], lng: coords[i+1] };
    //         let marker = new google.maps.Marker({
    //             position: coord,
    //             map: this.map,
    //         });

    //         this.markers.push(marker);
    //     }
    // }

    showRoute(dirServ, dirRend) {
        let start = this.markers[0].position;
        let finish = this.markers[this.markers.length-1].position;
        let waypoints = []
        for (let i = 1; i < this.markers.length - 1; i++) {
            waypoints.push({
                location: this.markers[i].position,
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
        this.props.history.push('/routes/my_routes')
    }

    render () {
        debugger;
        const route = this.props.route;
        const user = this.props.currentUser;
        // const person = {first_name = "",
        return (
            <>
                <UserNavContainer/>
                <br/>
                <div className="route-show-main">

                    <div className="route-show-info">
                        <div id="route-show-top">
                            <div id="route-show-username">{user[route.userId].first_name} {user[route.userId].last_name}</div>
                            <div id="route-show-info-info">
                                <p>{route.activity}</p>
                                <p><i class="fas fa-map-marker-alt"></i>   {route.city}</p>
                                <p><i class="fas fa-route"></i>   {route.distance} MI</p>
                                <p></p>
                            </div>
                            <div id="route-show-name">{route.name}</div>
                        </div>
                    </div>
                    <div id="route-show-map">
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
