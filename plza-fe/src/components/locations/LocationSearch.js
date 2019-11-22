import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Loader,
  Dimmer,
  Header,
  Grid,
  Container,
  Segment,
  Card,
  Form,
  Search
} from "semantic-ui-react";

import API from "../../utils/API";
import LocationCard from "./search/LocationCard";

class LocationSearch extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      error: {},
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
    this.setState({ loading: true });
    // If there is anything in the state under "search", append a the search query with the input.
    API.get("/locations/map", {
      params: {
        search: this.state.locationSearch
      }
    })
      .then(response => {
        this.setState({
          loading: false,
          venues: response.data.results,
          filteredVenues: response.data.results,
          userLocation: response.data.userLocation
        });
      })
      .catch(error => {
        this.setState({ loading: false, error: error });
        console.log("ERROR!! " + error);
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getVenues();
    //Clear search term box on a new location search
    this.setState({ searchTerm: "" });
  };

  filterVenues = event => {
    event.preventDefault();
    //Setting state so that what the user types is still visible
    this.setState({ [event.target.name]: event.target.value });
    //Checking what is typed vs what is listed in venues and only displaying those that match. Both upper and lowercase
    let filteredVenues = this.state.venues.filter(venue => {
      return (
        venue.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !==
        -1
      );
    });
    //Setting result of filter to venues and displaying it
    this.setState({
      filteredVenues: event.target.value !== "" ? filteredVenues : this.state.venues
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <Dimmer active>
          <Loader content="Loading..." />
        </Dimmer>
      );
    }

    return (
      <Container>
        <Header as={"h1"}>Search</Header>
        We have your current location as:
        <i>{this.state.userLocation.friendlyTitle} </i>
        <Grid columns={2} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Input
                    onChange={this.handleChange}
                    placeholder="City or City,State or Zip"
                    type="text"
                    name="locationSearch"
                    value={this.state.locationSearch}
                  />
                  <Form.Button type="submit">Go!</Form.Button>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <h3>Search by Name</h3>
              <div class="ui icon input">
                <Form.Input
                  onChange={this.filterVenues}
                  type="text"
                  name="searchTerm"
                  value={this.state.searchTerm}
                />
                <i class="search icon"></i>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Segment>
          <Card.Group itemsPerRow={3} doubling stackable>
            {this.state.filteredVenues.map((venue, index) => (
              <LocationCard loading={this.state.loading} venue={venue} />
            ))}
          </Card.Group>
        </Segment>
        <Link to="/locations/map">See the Map</Link>
      </Container>
    );
  }
}

export default withRouter(LocationSearch);
