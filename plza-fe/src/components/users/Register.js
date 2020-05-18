import React from "react";
import SimpleContainer from "../main/SimpleContainer";
import AuthForm from "../authentication/AuthForm";
import { userRegisterFields } from "../forms/FormInformation";
import { userRegister } from "../../redux/actions/userActions";
import { useSelector } from "react-redux";

const Register = () => {
  const [loading, error] = useSelector(({ user }) => [
    user.isLoading,
    user.error,
  ]);

  return (
    <SimpleContainer
      icon="add user"
      title="Register account"
      description="Create an account for great features and fun!"
    >
      <AuthForm
        isRegistrationForm
        registerFields={userRegisterFields}
        registerSubmit={userRegister}
        type="register"
        diet={{ name: "dietary_preference", label: "Dietary Preferences" }}
        loading={loading}
        error={error}
      />
    </SimpleContainer>
  );
};

export default Register;
