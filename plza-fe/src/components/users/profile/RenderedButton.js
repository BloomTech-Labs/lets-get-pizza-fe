import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function RenderedButton(props) {
  const loc = useLocation();

  let button;
  if (props.user && loc.pathname.includes("dash")) {
    button = (
      <Button>
        <a href="/users/dash/settings">Edit Profile</a>
      </Button>
    );
  } else {
    button = (
      <Button>
       Add Friend
      </Button>
    );
  }
  return <>{button}</>;
}
