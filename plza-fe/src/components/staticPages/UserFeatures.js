import React from 'react'
import { Grid } from "semantic-ui-react";

export default function UserFeatures() {
    return (
        <div>
            <h1>User Features</h1>

            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <div style={{height:'480px',width:'320px',overflow:'hidden',textAlign:'center'}}>
                            <img height="100%" style={{marginLeft:"-80px"}} src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                        <h2>Find your Vibe!</h2>
                        <h4>Whether you want late night delivery, fresh, greasy, and local; or legitimate Italian.</h4>
                    </Grid.Column>
                    <Grid.Column>            
                        <h2>Be Heard!</h2>
                        <h4>Contact businessess with question and problems, and leave ratings and reviews.</h4>
                        <div style={{height:'480px',width:'320px',overflow:'hidden',textAlign:'center'}}>
                            <img height="100%" src="https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div style={{height:'480px',width:'320px',overflow:'hidden',textAlign:'center'}}>
                            <img height="100%" style={{marginLeft:"-160px"}} src="https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </div>            
                        <h2>Come together!</h2>
                        <h4>Find both new and old friends! Create events where you can eat your heart out!</h4>
                    </Grid.Column>
                </Grid.Row>
            </Grid>       

        </div>
    )
}