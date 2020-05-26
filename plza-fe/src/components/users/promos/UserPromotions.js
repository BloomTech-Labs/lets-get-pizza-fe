import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item, Label, Icon, Button } from "semantic-ui-react";

import Moment from "react-moment";
import { userDeletePromo } from "../../../redux/actions/userActions";

export default function UserPromotions() {
  const savedPromotions = useSelector((state) => state.user.savedPromotions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(savedPromotions);
  });
  return (
    <div>
      <Item.Group divided>
        {savedPromotions.map((promotion) => (
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
          </Item>
        ))}
      </Item.Group>
    </div>
  );
}
