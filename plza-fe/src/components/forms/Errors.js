import React from "react";
import { Label, Message } from "semantic-ui-react";

export const InputError = ({ message }) => (
  <Label color="red" pointing="above" prompt>
    {message}
  </Label>
);

export const ServerErrorMessage = ({ message }) => (
  <Message
    negative
    icon="exclamation triangle"
    header="Sorry, we encountered an error!"
    content={message}
  />
);
