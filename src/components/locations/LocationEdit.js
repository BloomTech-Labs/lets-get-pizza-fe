import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Message } from "semantic-ui-react";
import { Form, Input, Dropdown, TextArea, Button } from "formik-semantic-ui";

import API from "../../utils/API";
import SimpleContainer from "../main/SimpleContainer";

export default function LocationEdit() {
  const location = useSelector((state) => state.location)
  const { id } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [locationVal, setLocation] = useState({});

  const onSubmit = (values, actions) => {
    API.put("/locations", values)
      .then(response => history.push(`/locations/${id}`))
      .catch(error =>
        actions.setFieldError("message", error.response.data.message)
      );
  };

  useEffect(() => {
    // Check to see if the currently logged in user matches the
    // ID set in the match param
    if (location && location.id === Number(id)) {
      // If it does, then retrieve location information
      API.get(`/locations/${id}`)
        .then(response => {
          // Copy the response and if dietary offerings is null, make it
          // an empty array
          const payload = Object.assign({}, response.data.location);

          delete payload.average_rating;

          if (payload.dietary_offerings === null) {
            payload.dietary_offerings = [];
          }

          setLocation(payload);
          setIsLoading(false);
        })
        .catch(error => console.log(error));
    } else {
      setError("Not authorized to edit this location");
      setIsLoading(false);
    }
  }, [id, location]);

  return (
    <SimpleContainer
      loading={isLoading}
      error={error}
      icon="edit"
      title="Edit location"
    >
      <Form
        enableReinitialize={true}
        initialValues={locationVal}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => (
          <Form.Children>
            {formik.errors.message && (
              <Message
                negative
                icon="exclamation triangle"
                header="Sorry, we encountered an error!"
                content={formik.errors.message}
              />
            )}

            <Input label="Business name" name="business_name" />
            <Input label="Street address" name="address" />

            <Input
              label="Website URL"
              name="website_url"
              inputProps={{ type: "url", icon: "link" }}
            />

            <Dropdown
              name="dietary_offerings"
              label="Dietary offerings"
              inputProps={{
                multiple: true,
                placeholder: "Select dietary offerings that you offer"
              }}
              options={[
                { text: "Gluten-free", value: "gluten-free" },
                { text: "Lacto-vegetarian", value: "lacto-vegetarian" },
                { text: "Ovo-vegetarian", value: "ovo-vegetarian" },
                { text: "Pescetarian", value: "pescetarian" },
                { text: "Vegan", value: "vegan" },
                { text: "Vegetarian", value: "vegetarian" },
                { text: "None", value: "none" }
              ]}
            />

            <Input
              label="Order service"
              name="order_service"
              inputProps={{
                placeholder: "Any order delivery services that you use"
              }}
            />

            <TextArea
              label="Official store description"
              name="official_description"
            />

            <TextArea label="Store bio" name="store_bio" />

            <Button.Submit>Save changes</Button.Submit>
          </Form.Children>
        )}
      </Form>
    </SimpleContainer>
  );
}
