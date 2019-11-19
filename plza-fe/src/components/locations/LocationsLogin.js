import React from "react";
import LoginForm from "../authentication/LoginForm";

export default function LocationsLogin() {
  return <LoginForm endpoint={"/auth/locations/login"} />;
}
