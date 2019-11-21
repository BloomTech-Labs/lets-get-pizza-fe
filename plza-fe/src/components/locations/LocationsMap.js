import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form } from "semantic-ui-react";

import API from "../../utils/API";
import Map from "../map/Map";


export default class LocationsMap extends Component {
  constructor() {
    super();

    this.state = {
      venues: [],
      userLocation: {},
      search: ""
    };
  }

  componentDidMount() {
    this.getVenues();
  }

  getVenues = () => {
    // If there is anything in the state under "search", append a the search query with the input.
    API.get("/locations/map", { params: { search: this.state.search } })
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
    this.setState({ search: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getVenues();
  };

  render() {
    return (
      <div>
        <div className="large-map">
          <Map
            userLocation={this.state.userLocation}
            venues={this.state.venues}
            height={"640px"}
          />
        </div>

        <div>
          We have your current location as:{" "}
          <i>{this.state.userLocation.friendlyTitle} </i>
          <br />
          <h3>Update Your Location</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                onChange={this.handleChange}
                placeholder="City or City,State or Zip"
                type="text"
                value={this.state.search}
              />
              <Form.Button type="submit">Go!</Form.Button>
            </Form.Group>
          </Form>
        </div>

        <Link to="/locations/search">Search by Location Name</Link>
      </div>
    );
  }
}
