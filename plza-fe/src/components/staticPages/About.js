import React from 'react'
import { Grid } from "semantic-ui-react";

export default function About() {
    return (<div style={{textAlign:'center'}}>
        <h1>About Us</h1>
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <h2>Our Mission... for Pizza!</h2>
                    <h3>What has mankind created that could overshadow pizza?
                        Pretty much nothing, so we here at Plza decided to make spreading the love of pizza to your friends
                        our project at Lambda School.
                            Fresh faced and ready to take on the world, our team is pleased to bring the cheese!</h3>
                </Grid.Column>
                <Grid.Column>
                    <h2>Open Sauce Programming</h2>
                    <h3>Interested in how this was put together? You can view our Github <a href='www.github.com'>here!</a></h3>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <h2>Contact Us</h2>
                    <h3>Got something to say, hit us up!</h3>
                </Grid.Column>
                <Grid.Column>
                    <h2>Survey!</h2>
                    <h3>Got a free moment? We would love if you took the time to fill out our survey so we can continue
        being all about bringing you the sauce!</h3>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>)
}