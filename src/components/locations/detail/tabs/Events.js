import React from 'react';
import { Item } from 'semantic-ui-react';
import Event from './Event'

const Events = ({ canEdit, content }) => {

  return (
    <Item.Group divided>
      {content.map((event) => (
        <Event
          key={event.id}
          event={event}
          canEdit={canEdit}
        />
      ))}
    </Item.Group>
  );
};

export default Events;
