import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import {
  getUserPromos,
  locationByUser,
} from "../../../redux/actions/userActions";

export default function UserPromos() {
  const user = useSelector(({ user }) => user);
  const savedPromos = useSelector(({ user }) => user.savedPromos);
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPromos(user.id));
  }, []);

  return (
    <div>
      <h1>{user.username}'s Saved Promotions</h1>
      <Item.Group divided style={{ overflow: "scroll", maxHeight: "1000px" }}>
        {savedPromos.map((promotion) => {
          return (
            <Item key={promotion.id}>
              <Item.Content>
                <Item.Header>{promotion.title}</Item.Header>
                <Item.Description>{promotion.text}</Item.Description>
                <Item.Description>
                  at {promotion.business_name}
                </Item.Description>
                <Item.Description>{promotion.address}</Item.Description>
                <Item.Extra>
                  <Label>
                    <Icon name="calendar check" />
                    <Moment
                      format="MMM Do"
                      date={promotion.start_date}
                    /> to <Moment format="MMM Do" date={promotion.end_date} />
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          );
        })}
      </Item.Group>
    </div>
  );
}
