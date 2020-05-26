import API from "./API";

/**
 * When a user clicks a location detail link, check to see if it already exists
 * in our database. If not, send an API request to populate it, then modify
 * `location_id` to be the newly created entry and finally redirect to the
 * new location or the already existing one.
 *
 * @param {SyntheticEvent} event A React SyntheticEvent attached to something
 * like an `onClick` handler.
 * @param {object} history Pass in the variable that initializes `useHistory`
 * so we can properly redirect the user.
 */
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
