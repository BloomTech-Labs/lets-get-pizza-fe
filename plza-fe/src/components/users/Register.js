import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthForm from "../authentication/AuthForm";
import { userRegisterFields } from "../forms/FormInformation";
import { userRegister } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";

const Register = () => {
  const[loading, error] = useSelector(({user}) => [user.isLoading, user.error])

  return(
  <SimpleContainer
    icon="add user"
    title="Register account"
    description="Create an account for great features and fun!"
  >
    <AuthForm
      isRegistrationForm
      registerFields={userRegisterFields}
      registerSubmit={userRegister}
<<<<<<< HEAD
      type="register"
      diet={{ name: "dietary_preference", label: "Dietary Preferences" }}
=======
      type='register'
      diet={{name: 'dietary_preference', label: 'Dietary Preferences'}}
      loading={loading}
      error={error}
>>>>>>> 5cc1f1e21a3618573fa3edfe2ce1ab7bc9a36a9d
    />
  </SimpleContainer>
  )
};

export default Register;
