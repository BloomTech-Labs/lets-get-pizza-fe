import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../../utils/API";

import VenueList from "./search/CardList";

class LocationSearch extends Component {
  constructor() {
    super();

    this.state = {
      venues: [],
      filteredVenues: [],
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
  }

  handleSubmit = event => {
    event.preventDefault();
    this.getVenues();
    //Clear search term box on a new location search
    this.setState({searchTerm: ""})
  };

  filterVenues = event => {
    event.preventDefault();
    //Setting state so that what the user types is still visible
    this.setState({ [event.target.name]: event.target.value });
    //Checking what is typed vs what is listed in venues and only displaying those that match. Both upper and lowercase
    let filteredVenues = this.state.venues.filter((venue) => {
    return venue.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    })
    //Setting result of filter to venues and displaying it
    this.setState({
      venues: filteredVenues
    })
  }

  

  render() {
    return (
      <div className="venues">
        <div>
          We have your current location as: <i>{this.state.userLocation.friendlyTitle} </i>
          <br />
          <form onSubmit={this.handleSubmit}>
            <h3>Update Your Location</h3>
            <input
              onChange={this.handleChange}
              placeholder="City, City,State, or Zip"
              type="text"
              name="locationSearch"
              value={this.state.locationSearch}
            />
            <button type="submit">Go!</button>
          <div>
            <h3>Search by Name</h3>
            <input
              onChange={this.filterVenues}
              placeholder="Search"
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
            />
          </div>
        </form>
        </div>

        <VenueList venues={this.state.venues} />

        <Link to="/locations/map">See the Map</Link>
      </div>
    );
  }
}

export default withRouter(LocationSearch)