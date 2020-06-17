import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Input, TextArea, Button } from "formik-semantic-ui";
import { DateTimeInput } from "semantic-ui-calendar-react";
import { InputError, ServerErrorMessage } from "../forms/Errors";

import { object, string, date } from "yup";

import SimpleContainer from "../main/SimpleContainer";
import API from "../../utils/API";

// import { curr_user } from "../../utils/auth";

const eventCreateSchema = object().shape({
  title: string().required("Title is required"),
  description: string().required("Description is required"),
  start_time: date().required("Start time is required"),
  end_time: date().required("End time is required")
});

export default function EventCreate(props) {
  const { id } = useParams();
  const history = useHistory();

  const user = useSelector(state => state.user)

  const onSubmit = (values, actions) => {
    actions.setSubmitting(true);

    API.post("/events", values)
      .then(response => {
        actions.setSubmitting(false);
        history.push(`/locations/${id}/events`);
      })
      .catch(error => {
        console.log(error);
        actions.setSubmitting(false);
      });
  };

  return (
    <SimpleContainer icon="calendar plus" title="Add new event">
      <Form
        validateOnBlur={false}
        initialValues={{
          user_id: user ? user.id : null,
          location_id: id,
          title: "",
          description: "",
          start_time: "",
          end_time: ""
        }}
        validationSchema={eventCreateSchema}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => {
          const DateTimePicker = ({ label, name, value }) => (
            <Form.Field>
              <label>{label}</label>
              <DateTimeInput
                name={name}
                value={value}
                onChange={(event, { name, value }) =>
                  formik.setFieldValue(`${name}`, value)
                }
                error={formik.errors[name]}
                popupPosition="bottom center"
                dateFormat="MM-DD-YYYY"
                timeFormat="ampm"
                iconPosition="right"
              />
            </Form.Field>
          );

          return (
            <Form.Children>
              <Form.Group widths="equal">
                <Input
                  label="Event title"
                  name="title"
                  errorComponent={InputError}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <TextArea
                  label="Description of event"
                  name="description"
                  errorComponent={InputError}
                />
              </Form.Group>

              <Form.Group widths="equal">
                <DateTimePicker
                  label="Starts at"
                  name="start_time"
                  value={formik.values.start_time}
                />

                <DateTimePicker
                  label="Ends at"
                  name="end_time"
                  value={formik.values.end_time}
                />
              </Form.Group>

              <Button.Submit
                primary
                disabled={!formik.isValid || formik.isSubmitting}
                loading={formik.isSubmitting}
              >
                Add new event
              </Button.Submit>
            </Form.Children>
          );
        }}
      </Form>
    </SimpleContainer>
  );
}
