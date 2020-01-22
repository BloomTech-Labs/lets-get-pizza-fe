import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader, Container, Grid } from "semantic-ui-react";

import API from "../../utils/API";
import { curr_location } from "../../utils/auth";

import Header from "./detail/Header";
import Sidebar from "./detail/Sidebar";
import MainBar from "./detail/MainBar";

// Location detail page
// Displays all information about a given location through the
// `id` param
export default function LocationPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState({});
  const [reviews, setReviews] = useState({});
  const [promotions, setPromotions] = useState({});
  const [events, setEvents] = useState({});

  // If the currently logged in user is equal to the location ID, then
  // the user can edit the page
  const canEdit = curr_location.id === location.id;

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => {
        setLocation(response.data.location);
        setReviews(response.data.reviews);
        setPromotions(response.data.promotions);
        setEvents(response.data.reviews);

        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [id]);

  if (isLoading) {
    return <Loader active>Loading...</Loader>;
  }

  return (
    <Container style={{ margin: "20px 0" }}>
      <Header location={location} />

      <Grid stackable>
        <Grid.Column width={4}>
          <Sidebar location={location} canEdit={canEdit} />
        </Grid.Column>

        <Grid.Column width={10}>
          <MainBar reviews={reviews} promotions={promotions} events={events} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
