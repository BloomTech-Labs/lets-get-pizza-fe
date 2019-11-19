import React, { Component } from "react";

class Map extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidUpdate = (oldProps) => {
        if(this.props.userLocation !== oldProps.userLocation) { this.renderMap(); } 
    }

    renderMap = () => { 
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_TOKEN}&callback=initMap`
        );
        window.initMap= this.initMap
    };

    initMap = () => {
        // Create A Map
        var map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: this.props.userLocation.userLatitude, lng: this.props.userLocation.userLongitude },
            zoom: 11
        });

        // Create An InfoWindow
        var infowindow = new window.google.maps.InfoWindow();

        // Display Dynamic Markers
        this.props.venues.map(myVenue => {
            var contentString = `<a href="http://localhost:3000/locations/">${myVenue.name}</a>`;

            // Create A Marker
            var marker = new window.google.maps.Marker({
                position: {
                    lat: myVenue.latitude,
                    lng: myVenue.longitude
                },
                map: map,
                title: myVenue.name
            });

            // Click on A Marker!
            marker.addListener("click", function () {
                // Change the content
                infowindow.setContent(contentString);

                // Open An InfoWindow
                infowindow.open(map, marker);
            });
        });
    };

    render() {
        return <main>
                <div id="map" />
            </main>
    }
}


function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}


export default Map;
