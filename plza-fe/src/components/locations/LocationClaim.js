import React from "react";
import { useParams } from "react-router-dom";

import RegisterForm from "../authentication/RegisterForm";

export default function LocationClaim() {
  const { id } = useParams();

  return (
    <div className="claim">
      <h1>Claim Business</h1>
      <RegisterForm endpoint={`/locations/claim/${id}`} redirect_url={"/"} />
    </div>
  );
}
