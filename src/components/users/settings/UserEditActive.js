import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, Icon, Input, Grid } from "semantic-ui-react";
import { userEditSettings } from "../../../redux/actions/userActions";
import UserEditButton from "./UserEditButton";

export default function UserEditActive({ item }) {
  const dispatch = useDispatch();
  const field = useSelector(({ user }) => user.field);

  const handleChange = (event, { value }) => {
    dispatch(userEditSettings(event, value));
  };

  return (
    <Grid.Row style={{ borderBottom: "1px solid lightgrey" }}>
      <Grid.Column style={{ display: "flex", alignItems: "center" }}>
        <Icon name={item.icon} size="large" />
        {field === "dietary_preference" ? (
          <Dropdown
            id="dropdown"
            multiple
            selection
            name="dietary_preference"
            placeholder="Dietary preference"
            options={[
              { text: "Vegan", value: "vegan" },
              { text: "Gluten-Free", value: "gluten-free" },
              { text: "Lacto-vegetarian", value: "lacto-vegetarian" },
              { text: "Ovo-vegetarian", value: "ovo-vegetarian" },
              { text: "Pescetarian", value: "pescetarian" },
              { text: "Vegetarian", value: "vegetarian" },
              { text: "None", value: "" },
            ]}
            onChange={handleChange}
          />
        ) : (
            <Input onChange={handleChange} name={item.name} value={item.value} />
          )}
      </Grid.Column>
      <UserEditButton text={"Save"} item={item} />
    </Grid.Row>
  );
}
