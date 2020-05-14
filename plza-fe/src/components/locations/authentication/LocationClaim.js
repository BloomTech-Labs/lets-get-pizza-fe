import React from "react";
import { useParams } from "react-router-dom";

import SimpleContainer from "../../main/SimpleContainer";
import AuthForm from "../../authentication/AuthForm";
import { locationClaim } from "../../../redux/actions/locationsActions";

export default function LocationClaim() {
  const { id } = useParams();

  return (
    <SimpleContainer title="Claim this business">
      <AuthForm 
      isClaim 
      id={id}
      registerSubmit={locationClaim} 
      type='register' 
      diet={{name: '', label: ''}}/>
    </SimpleContainer>
  );
}
