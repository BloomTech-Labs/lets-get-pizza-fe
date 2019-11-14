import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../../utils/API";

import Map from "../../map/Map";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      venues: [],
      userLocation: {}
    };
  }

  componentDidMount() {
    this.getVenues();
  }

  getVenues = () => {
    API.get("/locations/map")
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

  render() {
    return (
      <div className="homepage">
        <section className="map">
          <Map
            venues={this.state.venues}
            userLocation={this.state.userLocation}
            height={"320px"}
          />

          <footer className="geolocation">
            <p>{this.state.userLocation.friendlyTitle}</p>
            <Link to="/locations/map">Update Your Location</Link>
          </footer>
        </section>

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
        <Link className="big-button" to="/users/register">
          Register Now!
        </Link>

        <hr />

        <h2>Register as a Pizza Business</h2>
        <ul>
          <li>Upload your contact info & images</li>
          <li>Engage locally with events & promotions**</li>
          <li>Reply to customer's questions & comments**</li>
        </ul>
        <Link className="big-button" to="">
          Register Now!
        </Link>

        <p>**- features coming soon</p>
      </div>
    );
  }
}
