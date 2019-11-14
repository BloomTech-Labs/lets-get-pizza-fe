import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import './home.css'
import Map from '../../map/mapScreen'

class App extends Component {
    state = {
        venues: [],
        userLocation: {}
    };

    componentDidMount() {
        this.getVenues();
    }

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
                );
            })
            .catch(error => {
                console.log("ERROR!! " + error);
            });
    };

    

    render() {
        return <div>
            <div className="small-map">
                <Map venues={this.state.venues} userLocation={this.state.userLocation} />
            </div>

            <div> 
                We have: <i>{ this.state.userLocation.friendlyTitle } </i><br />    
                <Link to="/locations/map">Update Your Location</Link>
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

export default App;
