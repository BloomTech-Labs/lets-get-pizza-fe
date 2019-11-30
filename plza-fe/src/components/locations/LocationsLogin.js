import React from "react";
import AuthenticateForm from "../authentication/AuthenticateForm";

export default function LocationsLogin() {
  return <AuthenticateForm endpoint={"/auth/location/login"} />;
}
