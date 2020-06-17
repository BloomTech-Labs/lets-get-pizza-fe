import React from 'react'
import { Grid, Header } from "semantic-ui-react";
// import "./AboutPlzaMobile.css";

export default function AboutPlza() {
    return (
      <div style={{ textAlign: "justify" }}>
        <Header textAlign="center" as="h1">
          About Plza
        </Header>
        <Grid columns="equal" stackable padded>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h2">Our Mission... for Pizza!</Header>
              <p class = "about-para">
                What has mankind created that could overshadow pizza? Pretty
                much nothing, so we here at Plza decided to make spreading the
                love of pizza to your friends our project at Lambda School.
                Fresh faced and ready to take on the world, our team is pleased
                to bring the cheese!
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Open Sauce Programming</Header>
              <p class = "about-para" >
                Interested in how this was put together? You can view our Github.
                <br></br>
                <a href="https://github.com/Lambda-School-Labs/lets-get-pizza-fe">
                  Front end
                </a>
                <br></br>
                <a href="https://github.com/Lambda-School-Labs/lets-get-pizza-be">
                  Back end
                </a>
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h2">Contact Us</Header>
              <p class = "about-para">Got something to say, hit us up!</p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Survey!</Header>
              <p class = "about-para">
                Got a free moment? We would love if you took the time to fill
                out our survey so we can continue being all about bringing you
                the sauce!
                <br></br>
                <a href="https://s.surveyplanet.com/_BYyEjkf">
                  Click to take survey
                </a>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}