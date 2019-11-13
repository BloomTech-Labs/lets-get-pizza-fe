import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import './home.css'

class App extends Component {
    state = {
        venues: [],
        userLocation: {}
    };

    componentDidMount() {
        this.getVenues();
    }

    renderMap = () => {
        loadScript(
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDxCO5FAyDXobzi3Enz8KCCgaDGHKCs7U4&callback=initMap"
        );
        window.initMap = this.initMap;
    };

    getVenues = () => {
        axios
            .get("https://plza.herokuapp.com/api/locations/map")
            .then(response => {
                console.log(response)
                this.setState(
                    {
                        venues: response.data.results,
                        userLocation: response.data.userLocation
                    },
                    this.renderMap()
                );
            })
            .catch(error => {
                console.log("ERROR!! " + error);
            });
    };

    initMap = () => {
        // Create A Map
        var map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: this.state.userLocation.userLatitude, lng: this.state.userLocation.userLongitude },
            zoom: 10
        });

        // Create An InfoWindow
        var infowindow = new window.google.maps.InfoWindow();

        // Display Dynamic Markers
        this.state.venues.map(myVenue => {
            var contentString = `${myVenue.name}`;

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
        return <div>
            <main>
                <div id="map" />
            </main>

            <div> 
                We have: <i>{ this.state.userLocation.friendlyTitle } </i><br />    
                <Link to="">Update Your Location</Link>
            </div>

            <hr />
            <h1>Plza</h1>
            <h3>Showin' You The Sauce</h3>
            <hr />

            <h2>Register as a Pizza Eater</h2>
            <ul>
                <li>Find pizza you love</li>
                <li>Search other cities</li>
                <li>Leave ratings & reviews**</li>
                <li>Create & Attend events**</li>
            </ul>
            <Link className="big-button" to="">Register Now!</Link>

            <hr />
            
            <h2>Register as a Pizza Business</h2>
            <ul>
                <li>Upload your contact info & images</li>
                <li>Engage locally with events & promotions**</li>
                <li>Reply to customer's questions & comments**</li>
            </ul>
            <Link className="big-button" to="">Register Now!</Link>

            <p>**- features coming soon</p>

        </div>;
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

export default App;
