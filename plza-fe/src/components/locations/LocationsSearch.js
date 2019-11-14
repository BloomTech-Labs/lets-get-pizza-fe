import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import Map from '../map/mapScreen';
import VenueList from './search/list'

class App extends Component {
    state = {
        venues: [],
        userLocation: {},
        searchTerm: "",
        locationSearch: ""
    };

    componentDidMount() {
        this.getVenues();
    }

    getVenues = () => {
        //If there is anything in the state under "search", append a the search query with the input.
        axios
            .get(`https://plza.herokuapp.com/api/locations/map${ 
                this.state.locationSearch !== "" ? "?search=" + this.state.locationSearch : ""
            }${
                this.state.searchTerm !== "" ? "?nameSearch=" + this.state.searchTerm : ""
            }`)
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

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getVenues();
    }
    

    render() {
        return <div>
 
            <div> 
                We have: <i>{ this.state.userLocation.friendlyTitle } </i><br />  
                <form onSubmit={this.handleSubmit}>
                    <h3>Update Your Location</h3>
                    <input onChange={this.handleChange} 
                    type="text" 
                    name="locationSearch"
                    value={this.state.locationSearch}
                    /><br />
                    <i>Try: "City", "City,State", or "Zip"</i><br />
                    <br />
                    <h3>Search by Name</h3>
                    <input onChange={this.handleChange} 
                    type="text" 
                    name="searchTerm"
                    value={this.state.searchTerm}
                    /><br />
                    <button type="submit">Go!</button>
                </form> 
            </div>

           <VenueList venues={this.state.venues} />

            <Link to="">See the Map</Link>

        </div>;
    }
}


export default App;
