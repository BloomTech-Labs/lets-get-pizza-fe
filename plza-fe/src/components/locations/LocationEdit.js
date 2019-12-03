import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Input, Button } from "formik-semantic-ui";

import API from "../../utils/API";
import SimpleContainer from "../main/SimpleContainer";

export default function LocationEdit(props) {
  const { id } = useParams();
  const [location, setLocation] = useState({});

  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
  };

  useEffect(() => {
    API.get(`/locations/${id}`)
      .then(response => setLocation(response.data))
      .catch(error => console.log(error));
  }, [id]);

  return (
    <SimpleContainer title="Edit location">
      <Form
        enableReinitialize={true}
        initialValues={location}
        onSubmit={(values, actions) => onSubmit(values, actions)}
      >
        {formik => (
          <Form.Children>
            <Input label="Business name" name="business_name" />
            <Button.Submit>Save changes</Button.Submit>
          </Form.Children>
        )}
      </Form>
    </SimpleContainer>
  );
}
