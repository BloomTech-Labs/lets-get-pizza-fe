import React from "react";
import { useParams } from "react-router-dom";
import { Form, Input, TextArea, Button } from "formik-semantic-ui";

import { object, string, date } from "yup";

import SimpleContainer from "../main/SimpleContainer";
import API from "../../utils/API";
import { curr_user } from "../../utils/auth";

const eventCreateSchema = object().shape({
  title: string().required("Title is required"),
  description: string(),
  start_time: date(),
  end_time: date()
});

export default function EventCreate(props) {
  const { id } = useParams();

  const onSubmit = (values, actions) => {
    actions.setSubmitting(true);

    API.post("/events", values)
      .then(response => actions.setSubmitting(false))
      .catch(error => {
        actions.setFieldError("message", error.response.data.message);
        actions.setSubmitting(false);
      });
  };

  return (
    <SimpleContainer icon="calendar plus" title="Add new event">
      <Form
        enableReinitialize
        initialValues={{
          user_id: curr_user.id,
          location_id: id,
          title: "",
          description: "",
          start_time: "",
          end_time: ""
        }}
        validationSchema={eventCreateSchema}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => (
          <Form.Children>
            <Form.Group widths="equal">
              <Input label="Event title" name="title" />
            </Form.Group>

            <Form.Group widths="equal">
              <TextArea label="Description of event" name="description" />
            </Form.Group>

            <Form.Group widths="equal">
              <Input label="Starts at" name="start_time" />
              <Input label="Ends at" name="end_time" />
            </Form.Group>

            <Button.Submit
              primary
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Add new event
            </Button.Submit>
          </Form.Children>
        )}
      </Form>
    </SimpleContainer>
  );
}
