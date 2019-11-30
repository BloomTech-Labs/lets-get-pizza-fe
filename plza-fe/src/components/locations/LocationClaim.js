import React from "react";
import { useParams } from "react-router-dom";

import AuthenticateForm from "../authentication/AuthenticateForm";

export default function LocationClaim() {
  const { id } = useParams();

  return (
    <div className="claim">
      <h1>Claim Business</h1>
      <AuthenticateForm
        isRegistrationForm
        endpoint={`/auth/location/claim/${id}`}
      />
    </div>
  );
}
