import React from 'react';

class SmallMap extends React.Component {
    constructor(props) {
        super(props);

        this.map = null;
        this.markers = [];
        this.dirServ = new google.maps.DirectionsService();
        this.dirRend = new google.maps.DirectionsRenderer({ preserveViewport: true });

    }
}


export default SmallMap;