import React from "react";
import { useParams } from "react-router-dom";

import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";

export default function LocationClaim() {
  const { id } = useParams();

  return (
    <SimpleContainer icon="" title="Claim this business">
      <AuthenticateForm
        isRegistrationForm
        endpoint={`/auth/location/claim/${id}`}
      />
    </SimpleContainer>
  );
}
