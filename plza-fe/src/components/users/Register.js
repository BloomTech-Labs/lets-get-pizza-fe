import React from "react";
import { Input, Dropdown } from "formik-semantic-ui";
import { string } from "yup";

import SimpleContainer from "../main/SimpleContainer";
import AuthenticateForm from "../authentication/AuthenticateForm";
import AuthForm from "../authentication/AuthForm";

const Register = () => (
  <SimpleContainer
    icon="add user"
    title="Register account"
    description="Create an account for great features and fun!"
  >
    <AuthForm
      isRegistrationForm
    />
  </SimpleContainer>
);

export default Register;
