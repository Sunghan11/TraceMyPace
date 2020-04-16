import React from 'react';
import UserNav from '../../nav/user_nav';

class RouteMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            activity: "",
            distance: 0,
            location: "",
        }

        this.initMap = this.initMap.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.map = null;
        this.markers = [];
        this.addMarker= this.addMarker.bind(this);
        this.clearRoutes = this.clearRoutes.bind(this);
        this.undoMarker = this.undoMarker.bind(this);
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true});
        this.updateCenter = this.updateCenter.bind(this);
        this.autoComplete = null;
        this.searchAutoComplete = this.searchAutoComplete.bind(this);
        this.encodeMarkers = this.encodeMarkers.bind(this);
        this.searchUpdate = this.searchUpdate.bind(this);
        this.saveRoute = this.saveRoute.bind(this);
        this.geocoder = new google.maps.Geocoder();
        
    }
    componentDidMount() {
        this.initMap();
    }

    setCurrentPosition(map) {
        let pos;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos)
                }
            );
        }
    }

    initMap() {
        
        const options = {
            center: {lat:40.736436, lng: -73.994061},
            zoom: 15,
        }

        let map = new 
        google.maps.Map(this.refs.map, options);
        this.setCurrentPosition(map);
        this.dirRend.setMap(map);
        this.map = map;

        
        this.map.addListener('click',
        event => {
            this.addMarker({lat: event.latLng.lat(), lng: event.latLng.lng() });
            //creates route on click;
            this.showRoute(this.dirServ, this.dirRend);
        })
        this.searchAutoComplete();
    }
    addMarker(coords) {
        let marker = new google.maps.Marker({
            position: coords,
            map: this.map
        })
        // if(props.iconImage) {
        //     marker.setIcon(props.iconImage);
        // }

        // if(props.content) {
        //     var infoWindow = new google.maps.InfoWindow({
        //         content:props.content
        //     });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
        this.markers.push(marker);
        if (marker && marker.setMap) {
            marker.setMap(null)
        }

    }

    updateCenter(e) {
        e.preventDefault();
        //google Api to get center.
        const searchInput = document.getElementById('search-input');
        //formatted_Address is string containing the human-readable address location;
        //geometry is google library that provide util func for geometric data.
        //ex, spherical, encoding, poly
        this.geocoder.geocode({ 'address': this.state.location }, results => {
            this.map.setCenter(results[0].geometry.location);
            //google api to set map distance view
            this.map.setZoom(13);
        })
    };

    encodeMarkers() {
        let markerString = '';
        this.markers.forEach(marker => {
            let latitude = marker.getPosition().lat();
            let longitude = marker.getPosition().lng();
            markerString += `${latitude},${longitude},`;
        })

        return markerString.slice(0,-1);
    }

    newRouteParams() {
        return {
            user_id: this.state.user_id,
            distance: this.state.distance,
            name: this.state.name,
            encoded_markers: this.encodeMarkers(),
        };
    }

    

    clearRoutes() {
        for (let i = 0 ; i < this.markers.length; i++) {
            this.markers[i].setMap(null)
        }
        this.markers = [];
        this.dirRend.setMap(null);
        this.dirRend = null;
        
        this.setState({ distance: 0 })
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true});
        this.dirRend.setMap(this.map); 
    }


    undoMarker(e) {
        // debugger;
        e.preventDefault();
        this.markers.pop().setMap(null);
// debugger;
        if(this.markers.length > 0) {
            // this.showRoute({
            //     new google.maps.DirectionsService(), new google.maps.DirectionsRenderer({preserveViewport: true})
            // })
            this.showRoute(this.dirServ, this.dirRend);
        } else {
            this.clearRoutes();
        }
    }

    showRoute(dirServ, dirRend) {
        // debugger;
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
        };

        this.dirServ.route(request, (response, status) => {
            if (status === "OK") {
                this.dirRend.setDirections(response);

                //DirectionsLegs defins a single leg of journey
                //legs give access to object info of each leg.
                //ex. steps[] containers array of objects of each sep leg
                //distance indicates total distance of leg.
                let totalDistance = 0; //in METERS
                response.routes[0].legs.forEach((leg) => 
                //.value gives distance in meters
                    totalDistance += leg.distance.value);
                // let distanceInMiles = totalDistance * .000621371
                // this.setState({distance: (distanceInMiles.toFixed(2))})
                this.setState({ distance: (totalDistance * .000621371).toFixed(2)});
            }
        });
    }

    searchAutoComplete() {
        // this.marker.setVisible(false);
        let searchInput = document.getElementById('search-input');
        //built in google libraries function that has google api
        //auto complete user input addresses
        this.autoComplete = new google.maps.places.Autocomplete(searchInput);
        //developers.google.com/maps/documentation/javascript/examples/places-autocomplete
        this.autoComplete.addListener('place_changed', this.searchUpdate);
    }

    searchUpdate() {
        let place = this.autoComplete.getPlace();
        // if (!place.geometry) {
        //     //User entered the name of place that was not suggested and
        //     //pressed the Enter Key.
        //     window.alert("No details available for input: '" + place.name + "'");
        // } else {
        //     this.setState({ location: place.formatted_address });
        // }
        if (place.geometry) {
            this.setState({ location: place.formatted_address });
        } else {
            const searchInput = document.getElementById('search-input');
            searchInput.value = '';
            alert('Address Not Found')
        }
    }


        // let poly = new google.maps.PolyLine({
        //     strokeColor: '#6A5ACD',
        //     strokeOpactity: 0.7,
        //     strokeWeight: 4
        // });
        // poly.setMap(map);
        



    update(field) {
        return e => (
            this.setState({ [field]: e.target.value })
        )
    };

    saveRoute(e) {
        e.preventDefault();

        if (this.markers.length > 1) {
            this.props.createRoute(this.newRouteParams())
            .then(data => this.props.history.push(`/routes/view/${data.route.id}`))
        } else {
            alert('You must have at least two points on the map to save a route');
        }
    }


    render() {
        const ACTIVITIES = ["Choose an Actitivity",
            "Walk", "Winter Sport/Activity", "Bike Ride", "Swim",
            "Run", "Sport/ Other Activity", "Hike"
        ];

        // const routes = Object.values(this.props.routes);
        return (
            <>
                <UserNav />
                <div className="routes-map">
                    <div className="routes-main">
                        <div className="routes-title-1">
                            {/* <h2 className="routes-title-1-1">MY ROUTES</h2> */}
                            <form id="search-bar" onSubmit={this.updateCenter}>
                                <label id="search-label">Choose a map location
                                    <div>
                                        <input
                                            type="search"
                                            className="search-form-input"
                                            id="search-input"
                                            value={this.state.location}
                                            onChange={this.update('location')}
                                            placeholder="Address"
                                        />
                                    <button
                                        type="submit"
                                        className="location-search">SEARCH</button>
                                        </div>
                                </label>
                            </form>
                            <span id="route-header">Route Details</span>
                            <form className="route-details" on Submit={this.saveRoute}>
                                <div id="route-details-1">
                                    <input
                                        value={this.state.name}
                                        onChange={this.update("name")}
                                        type="text"
                                        placeholder="Name this map"
                                    />
                                    <span>*</span>
                                </div>
                                <div id="route-details-2">
                                    <select value={this.state.activity}
                                        className="optA"
                                        onChange={this.update("activity")}>
                                        {ACTIVITIES.map(activity =>
                                            <option key={activity} value={activity}>{activity}</option>)}
                                    </select>
                                    <span>*</span>
                                </div>
                                <div id="save-routes">
                                    <span id="save-routes-1">Save to Routes</span>
                                    <button 
                                        type="submit"
                                        className="create-route-btn"
                                        id="route-submit">SAVE ROUTE</button>
                                </div>
                            </form>
                            <span id="route-footer">No Advertisements</span>

                        </div>
                    </div>
                    <div id="map-main">
                        <div id="map-container" ref="map">
                                {/* style={{width:'100%', height:'100%'}}> */}
                        </div>
                        <div id="map-tools">
                            <div id="map-tools-distance">
                                <label>DISTANCE</label>
                                <h2>{this.state.distance} MI </h2>
                            </div>
                            <div id="map-tools-control">
                                <button onClick={this.undoMarker}><i id="first" className="fas fa-undo fa-2x"></i><br/> UNDO</button>
                                <button onClick={this.clearRoutes}><i id="second" className="fas fa-times fa-2x"></i><br/>CLEAR</button>
                                <button onClick={this.centerRoute}><i id="third" className="fas fa-compress-arrows-alt fa-2x"></i><br/>CENTER</button>
                            </div>
                            <div id ="map-tools-control2">
                                <div>
                                    <input type="radio" readOnly name="activity" value="WALK" checked/>
                                    <i className="fas fa-walking fa-2x"></i><br/>WALK
                                </div>
                                <div>
                                    <input type="radio" readOnly name="activity" value="HIKE"/>
                                    <i className="fas fa-hiking fa-2x"></i><br/>HIKE
                                </div>
                                <div>
                                    <input type="radio" name="activity" value="BIKE" />
                                    <i className="fas fa-biking fa-2x"></i><br/>BIKE
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* userRoutes */}
                </div>
            </> 
        )
    }
}

export default RouteMap;