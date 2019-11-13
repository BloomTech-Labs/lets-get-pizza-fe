import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import Map from '../map/mapScreen'

class App extends Component {
    state = {
        venues: [],
        userLocation: {},
        search: ""
    };

    componentDidMount() {
        this.getVenues();
    }

    getVenues = () => {
        //If there is anything in the state under "search", append a the search query with the input.
        axios
            .get(`https://plza.herokuapp.com/api/locations/map${ 
                this.state.search !== "" ? "?search=" + this.state.search : ""
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
        this.setState({search: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getVenues();
    }
    

    render() {
        return <div>
            <div className="large-map">
                <Map venues={this.state.venues} userLocation={this.state.userLocation} />
            </div>
 
            <div> 
                We have: <i>{ this.state.userLocation.friendlyTitle } </i><br />    
                <h3>Update Your Location</h3>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} 
                    type="text" 
                    value={this.state.search}
                    />
                    <button type="submit">Go!</button>
                </form> 
                <i>Try: "City", "City,State", or "Zip"</i>
            </div>

            <Link to="/locations/search">Search by Location Name</Link>

        </div>;
    }
}


export default App;
