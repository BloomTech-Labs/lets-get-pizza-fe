import React from "react";
import { ErrorMessage, Field } from "formik";
import { Form, Button, Input } from "formik-semantic-ui";
import { string } from "yup";

import API from "../../utils/API";
import setAuth from "../../utils/auth";
import composeSchema from "../../utils/composeSchema";

const loginSchema = {
  username: string().required("Username is required"),
  password: string()
    .min(4, "Password is too short")
    .required("Password is required")
};

export default function LoginForm(props) {
  const { extraValues, extraSchema, endpoint, children } = props;

  return (
    <Form
      initialValues={{ username: "", password: "", ...extraValues }}
      validationSchema={composeSchema(loginSchema, extraSchema)}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);

        API.post(endpoint, values)
          .then(response => {
            setAuth(response.data);
            setSubmitting(false);
          })
          .catch(error => {
            setFieldError("message", error.response.data.message);
            setSubmitting(false);
          });
      }}
    >
      {props => (
        <Form.Children {...props.children}>
          <div style={{ color: "red" }}>{props.errors.message}</div>

          <Form.Group widths={2}>
            <Input
              type="text"
              name="username"
              inputProps={{ placeholder: "Username" }}
            />

            <Input
              type="password"
              name="password"
              inputProps={{ type: "password", placeholder: "Password" }}
            />
          </Form.Group>

          {children}

          <Button.Submit
            primary
            disabled={props.isSubmitting || !props.isValid}
          >
            Log in
          </Button.Submit>
        </Form.Children>
      )}
    </Form>
  );
}

LoginForm.defaultProps = {
  endpoint: "/auth/user/login",
  redirect_url: "/locations/map"
};
