import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Form, Input, TextArea, Button } from "formik-semantic-ui";
import { Rating } from "semantic-ui-react";
import { InputError, ServerErrorMessage } from "../forms/Errors";

import SimpleContainer from "../main/SimpleContainer";
import API from "../../utils/API";

export default function EventCreate(props) {
  const { id } = useParams();
  const history = useHistory();

  const user = useSelector(state => state.user)

  const onSubmit = (values, actions) => {
    actions.setSubmitting(true);

    API.post("/reviews", values)
      .then(response => {
        actions.setSubmitting(false);
        history.push(`/locations/${id}/reviews`);
      })
      .catch(error => {
        actions.setFieldError("message", error.response.data.message);
        actions.setSubmitting(false);
      });
  };

  return (
    <SimpleContainer icon="comments add" title="Add new review">
      <Form
        enableReinitialize
        initialValues={{
          user_id: user ? user.id : null,
          location_id: id,
          rating: 0,
          review_title: "",
          review_text: ""
        }}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => (
          <Form.Children>
            <Form.Group widths="equal">
              <Input
                label="Review title"
                name="review_title"
                errorComponent={InputError}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <TextArea
                label="Review text"
                name="review_text"
                errorComponent={InputError}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Rating</label>
                <Rating
                  maxRating={5}
                  rating={formik.values.rating}
                  onRate={(event, { rating }) =>
                    formik.setFieldValue("rating", rating)
                  }
                />
              </Form.Field>
            </Form.Group>

            <Button.Submit primary>Add new review</Button.Submit>
          </Form.Children>
        )}
      </Form>
    </SimpleContainer>
  );
}
