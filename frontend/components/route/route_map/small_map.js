// import React from "react";
// import { withRouter } from "react-router-dom";

// class SmallMap extends React.Component {
//     constructor(props) {
//         super(props)
//         this.markersArr = [];
//         this.state = {
//             locations: []
//         }

//         this.addMarker = this.addMarker.bind(this);
//         this.showRoute = this.showRoute.bind(this);
//     }
//     componentDidMount() {

//         // let rmSplit = this.props.route.routeMap.split("S%7C")
//         // let splitAgain = rmSplit[1].split("&")
//         // let splitLatLng = splitAgain[0].split(",")

//         const mapElement = document.getElementById("smallmap");
//         const options = {
//             // center: { lat: splitLatLng[0].toFloat(), lng: splitLatLng[1].toFloat() },
//             center: {lat:40, lng: -75},
//             zoom: 15,
//         }

//         this.map = new google.maps.Map(mapElement, options)
//         this.directionsService = new google.maps.DirectionsService;
//         this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });

//         setTimeout(() => {
//             debugger;
//             const filtered = this.props.locations.filter(location => location.route_id === parseInt(this.props.match.params.routeId))
//             filtered.sort((x, y) => Math.sign(x.order > y.order))
//                 .forEach(marker => {
//                     this.addMarker({
//                         lat: marker.lat, lng: marker.lng
//                     })
//                 })
//         }, 1200);
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.markers !== this.props.markers) {
//             this.setState({ markers: this.props.markers })
//         }
//     }

//     addMarker(location) {
//         // const l = location;
//         // debugger
//         const marker = new google.maps.Marker({ position: location });

//         marker.setMap(this.map);

//         this.markersArr.push(marker);

//         if (this.markersArr.length > 1) {
//             this.markersArr.forEach(marker => marker.setMap(null));
//             const lastPosition = this.markersArr.length - 1;
//             this.showRoute(
//                 this.markersArr[0].position,
//                 this.markersArr[lastPosition].position,
//                 this.markersArr.slice(1, lastPosition),
//                 this.directionsService,
//                 this.directionsRenderer
//             )
//         }
//     }

//     showRoute(origin, destination, midMarkers, directionsService, directionsRender) {
//         // debugger
//         directionsService.route({
//             origin: origin,
//             destination: destination,
//             waypoints: midMarkers.map(marker => {
//                 return ({ location: marker.position })
//             }),
//             travelMode: "BICYCLING",
//             avoidTolls: true
//         },

//             (response, status) => {
//                 // debugger
//                 if (status === "OK") {
//                     directionsRender.setDirections(response)
//                 } else {
//                     alert(`Something went wrong due to ${status}`)
//                 }
//             })
//     }

//     render() {
//         return (
//             <div id="smallmap"></div>
//         )
//     }
// }

// export default withRouter(SmallMap);