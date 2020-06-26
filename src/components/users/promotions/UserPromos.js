import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item, Label, Icon, Button, Confirm } from "semantic-ui-react";
import Moment from "react-moment";
import "../FriendsComp/FriendsList.css";
import {
  getUserPromos,
  deleteUserPromo,
  locationByUser,
} from "../../../redux/actions/userActions";

export default function UserPromos() {
  const user = useSelector(({ user }) => user);
  const savedPromos = useSelector(({ user }) => user.savedPromos);
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const [modalVisibility, setModalVisibility] = useState(false);

  const removeSavedPromo = (id) => {
    dispatch(deleteUserPromo(user, id));
  };

  useEffect(() => {
    dispatch(getUserPromos(user.id));
  }, [savedPromos.length]);

  return (
    <div>
      <h1>{user.username}'s Saved Promotions</h1>
      <Item.Group divided style={{ overflow: "scroll", maxHeight: "1000px" }}>
        {savedPromos.map((promotion) => {
          console.log(promotion);
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
              <Button
                className="myCircle"
                background=""
                size="mini"
                circular
                icon
                floated="right"
                style={{
                  maxHeight: "20px",
                  background: "white",
                }}
                onClick={() => {
                  setModalVisibility(true);
                }}
              >
                <Icon name="window close" />
              </Button>
              <Confirm
                open={modalVisibility}
                content={`Are you sure you want to delete the promotion?`}
                onCancel={() => setModalVisibility(false)}
                onConfirm={() => {
                  removeSavedPromo(promotion.id);
                  setModalVisibility(false);
                }}
              />
            </Item>
          );
        })}
      </Item.Group>
    </div>
  );
}
