import React from 'react'
import { Grid, Header } from "semantic-ui-react";

export default function UserFeatures() {
    return (
      <div style={{ textAlign: "justify" }}>
        <Header textAlign="center" as="h1">User Features</Header>
        <Grid columns="equal" stackable padded>
          <Grid.Row columns={3}>
          <div class = "first">
            <Grid.Column >
              <div 
                style={{
                  height: "480px",
                  width: "320px",
                  overflow: "hidden",
                  textAlign: "center"
                }}
              >
                <img
                  class = "friends-img"
                  alt=""
                  height="100%"
                  style={{ marginLeft: "-80px" }}
                  src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              
              <div class="bottom">
              <Header as="h2">Find your Vibe!</Header>
              <p class = "user-features">
                Whether you want late night delivery, fresh, greasy, and local;
                or legitimate Italian.
              </p>
              </div>
             
            </Grid.Column>
          </div>

          <div class = "second">
            <Grid.Column>
              <div class = "second-part">
                <Header as="h2">Be Heard!</Header>
                <p class = "user-features">
                  Contact businessess with question and problems, and leave
                  ratings and reviews.
                </p>
              </div>
              <div
                style={{
                  height: "480px",
                  width: "320px",
                  overflow: "hidden",
                  textAlign: "center"
                }}
              >
                <img
                  class = "pizza-img"
                  alt=""
                  height="100%"
                  src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
          </div>
            </Grid.Column>
            </div>

          <div class = "third">
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
                  class = "celebrate-img"
                  alt=""
                  height="100%"
                  style={{ marginLeft: "-160px" }}
                  src="https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>

              <div class= "third-bottom">
              <Header as="h2">Come together!</Header>
              <p class = "user-features">
                Find both new and old friends! Create events where you can eat
                your heart out!
              </p>
              </div>
            </Grid.Column>
          </div>
          </Grid.Row>
        </Grid>
      </div>
    );
}