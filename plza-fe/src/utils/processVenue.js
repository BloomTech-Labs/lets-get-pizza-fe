import API from "./API";

export default async function processVenue(event, history) {
  const foursquare_id = event.target.getAttribute("fsid");
  let location_id = event.target.getAttribute("lid");

  if (foursquare_id && !location_id) {
    try {
      const createdLocation = await API.get(`/locations/live/${foursquare_id}`);
      location_id = createdLocation.data.id;
    } catch (error) {
      console.log(error);
    }
  }

  // Redirect to location_id
  history.push(`/locations/${location_id}`);
}
