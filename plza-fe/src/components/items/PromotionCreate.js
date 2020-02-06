import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Input, TextArea, Button } from "formik-semantic-ui";
import { InputError, ServerErrorMessage } from "../forms/Errors";

import { object, string, date } from "yup";

import SimpleContainer from "../main/SimpleContainer";
import API from "../../utils/API";
import { curr_user } from "../../utils/auth";

const promotionCreateSchema = object().shape({
  title: string().required("Title is required"),
  text: string(),
  start_date: date().required("Start date is required"),
  end_date: date().required("End date is required")
});

export default function EventCreate(props) {
  const { id } = useParams();
  const history = useHistory();

  const onSubmit = (values, actions) => {
    actions.setSubmitting(true);

    API.post("/promotions", values)
      .then(response => {
        actions.setSubmitting(false);
        history.push(`/locations/${id}/promotions`);
      })
      .catch(error => {
        actions.setFieldError("message", error.response.data.message);
        actions.setSubmitting(false);
      });
  };

  return (
    <SimpleContainer icon="dollar" title="Add new promotion">
      <Form
        enableReinitialize
        initialValues={{
          location_id: id,
          title: "",
          text: "",
          start_date: "",
          end_date: ""
        }}
        validationSchema={promotionCreateSchema}
        validateOnBlur={false}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => (
          <Form.Children>
            <Form.Group widths="equal">
              <Input
                label="Promotion title"
                name="title"
                errorComponent={InputError}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <TextArea
                label="Description of promotion"
                name="text"
                errorComponent={InputError}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Input
                inputProps={{ type: "date" }}
                label="Start date"
                name="start_date"
                errorComponent={InputError}
              />

              <Input
                inputProps={{ type: "date" }}
                label="Ends date"
                name="end_date"
                errorComponent={InputError}
              />
            </Form.Group>

            <Button.Submit primary>Add new promotion</Button.Submit>
          </Form.Children>
        )}
      </Form>
    </SimpleContainer>
  );
}
