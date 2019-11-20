import React from "react";
import {withRouter} from 'react-router-dom'
import API from "../../../utils/API";


function Card (props) {
  const {venue} = props

  const processVenue = async (e) => {
    let foursquare_id = e.target.getAttribute('fsid')
    let location_id = e.target.getAttribute('lid')
    console.log(foursquare_id, location_id)

    if(foursquare_id && !location_id){
      const createdLocation = await API.get(`/locations/live/${foursquare_id}`)
      location_id = createdLocation.data.id
    } 

    //redirect to location_id
    props.history.push(`/locations/${location_id}`);
  }

  return (
    <div className="card">
      <h3>{venue.name}</h3>
      <p>{venue.address}</p>
      {/* Creates a "button" which processes */}
      <p onClick={processVenue} 
        fsid={venue.foursquare_id ? `${venue.foursquare_id}` : null} 
        lid={venue.location_id ? `${venue.location_id}` : null}>
        See The Deets ->
     </p>
  
    </div>
  );
}

export default withRouter(Card)