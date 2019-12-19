import React from 'react'
import { Grid, Header } from "semantic-ui-react";

export default function UserFeatures() {
    return (
      <div style={{ textAlign: "justify" }}>
        <Header textAlign="center" as="h1">User Features</Header>
        <Grid columns="equal" stackable padded>
          <Grid.Row columns={3}>
            <Grid.Column>
              <div
                style={{
                  height: "480px",
                  width: "320px",
                  overflow: "hidden",
                  textAlign: "center"
                }}
              >
                <img
                  alt=""
                  height="100%"
                  style={{ marginLeft: "-80px" }}
                  src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <Header as="h2">Find your Vibe!</Header>
              <p>
                Whether you want late night delivery, fresh, greasy, and local;
                or legitimate Italian.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Be Heard!</Header>
              <p>
                Contact businessess with question and problems, and leave
                ratings and reviews.
              </p>
              <div
                style={{
                  height: "480px",
                  width: "320px",
                  overflow: "hidden",
                  textAlign: "center"
                }}
              >
                <img
                  alt=""
                  height="100%"
                  src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                style={{
                  height: "480px",
                  width: "320px",
                  overflow: "hidden",
                  textAlign: "center"
                }}
              >
                <img
                  alt=""
                  height="100%"
                  style={{ marginLeft: "-160px" }}
                  src="https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <Header as="h2">Come together!</Header>
              <p>
                Find both new and old friends! Create events where you can eat
                your heart out!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}