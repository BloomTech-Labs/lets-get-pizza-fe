import React from 'react'
import { Grid } from "semantic-ui-react";

export default function BusinessFeatuers() {
  return (
    <div style={{width:'80%',margin:'auto'}}>
      <h1>How can your business benefit from Plza?</h1>

      <div style={{textAlign:'right'}}>
        <h1>>Quick Sign up</h1>
        <h2>Use Foursquare to autofill your information, no wasted time.</h2>
      </div>

<hr />
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <h2>>Engage Locally</h2>
            <h3>
              <ul>
                <li>Respond to your customer's questions and feedback.</li>
                <li>Let your neighborhood in on what you have going on.</li>
                <li>Create events to draw in customers to your location effortlessly.</li>
                <li>Create promotions and sales, a great way to fill your customers in.</li>
              </ul>
            </h3>
          </Grid.Column>
          <Grid.Column>
            <h2>>Level the playing field</h2>
            <h3> Whether your location is a family business or a chain, Plza can suit your needs.</h3>
          </Grid.Column>
          <Grid.Column>
            <h2>>Connect</h2>
            <h3>Connect with your existing customers in fun ways to keep them coming back to your location.</h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  )
}