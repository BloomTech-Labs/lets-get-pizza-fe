import React from 'react'
import { Grid, Header } from "semantic-ui-react";


export default function BusinessFeatuers() {
  return (
    <div style={{ textAlign: "justify" }}>
      <Header textAlign="center" as="h1">
        How can your business benefit from Plza?
      </Header>
      <div style={{ textAlign: "center" }}></div>
      <Grid columns="equal" stackable padded>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Header as="h2">Quick Sign up</Header>
            <p  class = "biz-features">Use Foursquare to autofill your information, no wasted time.</p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Engage Locally</Header>
            <p class = "biz-features">
              <ul>
                <li>Respond to your customer's questions and feedback.</li>
                <li>Let your neighborhood in on what you have going on.</li>
                <li>
                  Create events to draw in customers to your location
                  effortlessly.
                </li>
                <li>
                  Create promotions and sales, a great way to fill your
                  customers in.
                </li>
              </ul>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Level the playing field</Header>
            <p  class = "biz-features">
              Whether your location is a family business or a chain, Plza can
              suit your needs.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h2">Connect</Header>
            <p class = "biz-features">
              Connect with your existing customers in fun ways to keep them
              coming back to your location.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}