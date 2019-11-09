import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Place from "./Place";

import API from "../../utils/API";

export default function PlaceDetail() {
  const { id } = useParams();
  const [location, setLocation] = useState({});

  useEffect(() => {
    API.get(`/api/locations/${id}`)
      .then(response => {
        setLocation(response.data);
      })
      .catch(error => {
        // TODO: Implement proper error handling
        console.log(error);
      });
  }, [id]);

  return <Place {...location} />;
}
