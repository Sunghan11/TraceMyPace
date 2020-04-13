import React from 'react';
import RouteIndexItem from './route_index_item';


class RouteIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRoutes()
    }

    render () {
        const userRoutes = [];
        if (route.user_id === this.props.user) {
            this.props.routes.map( (route) => (
                <RouteIndexItem route={route} key={`route-${route.id}`/>}
            ))
        }

        return (

        )
    }
}