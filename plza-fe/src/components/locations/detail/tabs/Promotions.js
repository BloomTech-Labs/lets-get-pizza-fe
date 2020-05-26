import React, { useEffect } from "react";
import { Item, Label, Icon, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import API from "../../../../utils/API";
import { userAddPromo } from "../../../../redux/actions/userActions";

import Moment from "react-moment";

const Promotions = ({ content }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(({ user }) => user);

  useEffect(() => {
    API.get("/users/10")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  console.log(user);
  return (
    <Item.Group divided>
      {content.map((promotion) => (
        <Item key={promotion.id}>
          <Item.Content>
            <Item.Header>{promotion.title}</Item.Header>
            <Item.Description>{promotion.text}</Item.Description>
            <Item.Extra>
              <Label>
                <Icon name="calendar check" />
                <Moment format="MMM Do" date={promotion.start_date} /> to{" "}
                <Moment format="MMM Do" date={promotion.end_date} />
              </Label>
            </Item.Extra>
          </Item.Content>
          <Button
            style={{ width: "30%", height: "30%", marginTop: "6%" }}
            onClick={() => {
              dispatch(userAddPromo(promotion));
              console.log(user);
            }}
          >
            Save This Promotion
          </Button>
        </Item>
      ))}
    </Item.Group>
  );
};

export default Promotions;
