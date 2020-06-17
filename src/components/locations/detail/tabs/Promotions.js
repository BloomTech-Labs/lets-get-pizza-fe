import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item, Label, Icon } from "semantic-ui-react";
import Moment from "react-moment";
import { addUserPromo } from "../../../../redux/actions/userActions";

const Promotions = ({ content }) => {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  return (
    <Item.Group divided>
      {content.map((promotion) => {
        console.log(promotion, "promo");

        return (
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
                <button
                  onClick={() => {
                    dispatch(addUserPromo(user.id, promotion.id));
                  }}
                >
                  Save Promotion
                </button>
              </Item.Extra>
            </Item.Content>
          </Item>
        );
      })}
    </Item.Group>
  );
};

export default Promotions;
