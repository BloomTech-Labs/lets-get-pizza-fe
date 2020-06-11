import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Loader, Container, Grid } from "semantic-ui-react";

import API from "../../../utils/API";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MainBar from "./MainBar";
import { useSelector, useDispatch } from "react-redux";
import { locationEvents } from "../../../redux/actions/locationsActions.js"

// Location detail page
// Displays all information about a given location through the
// `id` param
export default function LocationPage() {
  const { id, tab } = useParams();
  const history = useHistory();

  const [curr_location, user] = useSelector(({location, user}) => [location, user])

  const [isLoading, setIsLoading] = useState(true);

  const [selectedTab, setSelectedTab] = useState(0);

  const [location, setLocation] = useState({});
  const [reviews, setReviews] = useState({});
  const [promotions, setPromotions] = useState({});

  const dispatch = useDispatch();

  // If the currently logged in user is equal to the location ID, then
  // the user can edit the page
  const canEdit = curr_location.id === location.id;

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => {
        const currentDate = new Date().toISOString();
        setLocation(response.data.location);
        setReviews(response.data.reviews);
        setPromotions(
          response.data.promotions
            .sort((a, b) => new Date(a.end_date) - new Date(b.end_date))
            .filter((date) => date.end_date > currentDate)
        );
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [id]);

  useEffect(() => {
    dispatch(locationEvents(id))
  }, [dispatch, id])

  useEffect(() => {
    if (tab !== undefined) {
      switch (tab) {
        case "reviews":
          setSelectedTab(0);
          break;

        case "promotions":
          setSelectedTab(1);
          break;

        case "events":
          setSelectedTab(2);
          break;

        default:
          break;
      }
    }
  }, [tab]);

  if (isLoading) {
    return <Loader active>Loading...</Loader>;
  }

  return (
    <Container style={{ margin: "20px 0" }}>
      <Header location={location} />

      <Grid stackable>
        <Grid.Column width={4}>
          <Sidebar
            location={location}
            canEdit={canEdit}
            currLocation={curr_location}
          />
        </Grid.Column>

        <Grid.Column width={12}>
          <MainBar
            history={history}
            locationID={id}
            currUser={user}
            canEdit={canEdit}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            reviews={reviews}
            promotions={promotions}
            events={curr_location.events}
          />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
