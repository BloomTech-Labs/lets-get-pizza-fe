import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Dropdown, TextArea, Button } from "formik-semantic-ui";

import API from "../../utils/API";
import SimpleContainer from "../main/SimpleContainer";

export default function LocationEdit(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState({});

  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
  };

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => {
        setLocation(response.data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <SimpleContainer loading={isLoading} icon="edit" title="Edit location">
      <Form
        enableReinitialize={true}
        initialValues={location}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => (
          <Form.Children>
            <Input label="Business name" name="business_name" />
            <Input label="Street address" name="address" />

            <Input
              label="Website URL"
              name="website_url"
              inputProps={{ type: "url", loading: isLoading }}
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
                { text: "Vegetarian", value: "vegetarian" },
                { text: "Vegan", value: "vegan" }
              ]}
            />

            <Input
              label="Order service"
              name="order_service"
              inputProps={{ placeholder: "Test" }}
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
