import React from "react";
import { List, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { userSubmitSettings } from "../../../redux/actions/userActions";
import UserSettingsList from "./UserSettingsList";
import UserDisplayInfoContainer from "./UserDisplayInfoContainer";

export default function UserSettings() {
  const user = useSelector(({ user }) => user.pendingUserChanges);
  const dispatch = useDispatch();

  const listItems = [
    { id: 0, title: "Email", name: "email", icon: "mail", value: user.email },
    {
      id: 1,
      title: "Location",
      name: "display_location",
      icon: "location arrow",
      value: user.display_location,
    },
    {
      id: 2,
      title: "Favorite Toppings",
      name: "favorite_pizza_toppings",
      icon: "mail",
      value: user.favorite_pizza_toppings,
    },
    {
      id: 3,
      title: "Dietary Preferences",
      name: "dietary_preference",
      icon: "ban",
      value: user.dietary_preference,
    },
  ];

  const saveAllChanges = (event) => {
    dispatch(userSubmitSettings(event, user));
  };

  return (
    <>
      <List divided relaxed="very">
        {/* Top section with user avatar image & display name */}
        <UserDisplayInfoContainer />

        {/* Map through user settings array & render rows */}
        {listItems.map((item) => (
          <UserSettingsList key={item.id} item={item} />
        ))}
      </List>

      <Button.Group
        onClick={saveAllChanges}
        style={{ margin: "1.5rem auto auto 1rem" }}
      >
        <Button id="undo" color="black">UNDO</Button>
        <Button
          id="save"
          positive
          icon="checkmark"
          labelPosition="right"
          content="SUBMIT CHANGES"
        />
      </Button.Group>
    </>
  );
} //
