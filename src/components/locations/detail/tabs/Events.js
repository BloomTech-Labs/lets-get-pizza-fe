import React from 'react';
import { useSelector } from "react-redux";
import { Item } from 'semantic-ui-react';
import Event from './Event'

const Events = ({ canEdit, content }) => {
  const user_id = useSelector(({user}) => user.id)

  return (
    <Item.Group divided>
      {content.map((event) => (
        <Event
          key={event.id}
          event={event}
          canEdit={canEdit}
          user_id={user_id}
        />
      ))}
    </Item.Group>
  );
};

export default Events;
