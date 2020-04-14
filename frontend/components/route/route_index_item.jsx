import React from 'react';
import { Link } from 'react-router-dom'

const RouteIndexItem = props => {
    if (!props.route) {
        return null;
    } else {           
        return (
            <>
                <ul>
                    <li>
                        <Link to={`/routes/${route.id}`}> {route.name} </Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default RouteIndexItem;