import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

import VenueList from "./search/CardList";

export default class LocationSearch extends Component {
  constructor() {
    super();

    this.state = {
      venues: [],
      userLocation: {},
      searchTerm: "",
      locationSearch: ""
    };
  }

  componentDidMount() {
    this.getVenues();
  }

  getVenues = () => {
    // If there is anything in the state under "search", append a the search query with the input.
    API.get("/locations/map", {
      params: {
        search: this.state.locationSearch,
        nameSearch: this.state.searchTerm
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          venues: response.data.results,
          userLocation: response.data.userLocation
        });
      })
      .catch(error => {
        console.log("ERROR!! " + error);
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getVenues();
  };

  render() {
    return (
      <div className="venues">
        <div>
          We have: <i>{this.state.userLocation.friendlyTitle} </i>
          <br />
          <form onSubmit={this.handleSubmit}>
            <h3>Update Your Location</h3>
            <input
              onChange={this.handleChange}
              type="text"
              name="locationSearch"
              value={this.state.locationSearch}
            />
            <i>Try: "City", "City,State", or "Zip"</i>
            <h3>Search by Name</h3>
            <input
              onChange={this.handleChange}
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
            />
            <button type="submit">Go!</button>
          </form>
        </div>

        <VenueList venues={this.state.venues} />

        <Link to="/locations/map">See the Map</Link>
      </div>
    );
  }
}
