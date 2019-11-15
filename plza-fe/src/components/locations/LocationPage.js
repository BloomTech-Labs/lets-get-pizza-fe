import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import API from "../../utils/API";

// Location detail page
// Displays all information about a given location through the
// `id` param

export default function LocationPage() {
  const { id } = useParams();
  const [location, setLocation] = useState({});

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => setLocation(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <div className="location">
      <h1>{location.name}</h1>
    </div>
  );
}
