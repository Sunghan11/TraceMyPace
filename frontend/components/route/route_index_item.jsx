import React from 'react';
import { Link } from 'react-router-dom'

const RouteIndexItem = props => {
    if (!props.route) {
        return null;
    } else {           
        return (
            <tr>
                <td className="route-tag" id="route-tag-map">
                    <Link to={`/routes/view/${props.route.id}`}>
                        <img src={`https://maps.googleapis.com/maps/api/staticmap?size=75x75&path=color:0x0000FF80|weight:5|enc:${props.route.route_map}key=${window.googleAPIKey}`}/>
                    </Link>
                </td>
                <td className="route-tag" id="route-tag-created">
                    <span> 4/17/2020</span>
                </td>
                <td className="route-tag" id="route-tag-distance">
                    {(props.route.distance).toFixed(2)} miles
                </td>
                <td className="route-tag" id="route-tag-name">
                    {props.route.name}
                </td>
                <td className="route-tag" id="route-tag-city">
                    {props.route.city}
                </td>
                <td className="route-tag" id="route-tag-friends">
                    <i class="fas fa-user-friends"></i>
                </td>
                <td className="route-tag" id="route-tag-delete">
                    Delete
                </td>
            </tr>
        )
    }
}

export default RouteIndexItem;