import React from "react";
import { Formik, Field } from "formik";
import { Form, Message } from "semantic-ui-react";

import { string } from "yup";

import composeSchema from "../../utils/composeSchema";

const initialSchema = {
  username: string().required("Username is required"),
  password: string()
    .min(4, "Password is too short")
    .required("Password is required")
};

export default function AuthenticateForm(props) {
  const { extraValues, extraSchema } = props;

  return (
    <Formik
      initialValues={{ username: "", password: "", ...extraValues }}
      validationSchema={composeSchema(initialSchema, extraSchema)}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 500);
      }}
    >
      {props => (
        <Form error={!props.isValid} onSubmit={props.handleSubmit}>
          <Form.Group widths="equal">
            <Field
              as={Form.Input}
              type="text"
              label="Username"
              name="username"
              error={props.errors.username}
            />

            <Field
              as={Form.Input}
              type="password"
              label="Password"
              name="password"
              error={props.errors.password}
            />
          </Form.Group>

          {props.children}

          <Form.Button
            type="submit"
            content="Log in"
            disabled={!props.isValid}
          />
        </Form>
      )}
    </Formik>
  );
}
