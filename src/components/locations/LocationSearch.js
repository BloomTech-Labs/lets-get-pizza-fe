import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Loader, Header, Grid, Card, Form } from "semantic-ui-react";

import API from "../../utils/API";
import SimpleContainer from "../main/SimpleContainer";
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
      filteredVenues:
        event.target.value !== "" ? filteredVenues : this.state.venues
    });
  };

  render() {
    if (this.state.loading) {
      return <Loader active content="Loading..." />;
    }

    return (
      <SimpleContainer icon="search" title="Search for locations">
        <Grid stackable columns="equal">
          <Grid.Column floated="left">
            <Form onSubmit={this.handleSubmit}>
              <Header size="medium">Change location</Header>
              <Form.Group>
                <Form.Input
                  onChange={this.handleChange}
                  placeholder={this.state.userLocation.friendlyTitle}
                  icon="globe"
                  type="text"
                  name="locationSearch"
                  value={this.state.locationSearch}
                />
                <Form.Button type="submit">Go!</Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>

          <Grid.Column floated="right">
            <Header size="medium">Search by name</Header>
            <Form.Input
              type="text"
              name="searchTerm"
              icon="search"
              value={this.state.searchTerm}
              onChange={this.filterVenues}
            />
          </Grid.Column>
        </Grid>

        <Card.Group itemsPerRow={3} doubling stackable>
          {this.state.filteredVenues.map((venue, index) => (
            <LocationCard key={index} venue={venue} />
          ))}
        </Card.Group>

        <Link to="/locations/map">See the Map</Link>
      </SimpleContainer>
    );
  }
}

export default withRouter(LocationSearch);
