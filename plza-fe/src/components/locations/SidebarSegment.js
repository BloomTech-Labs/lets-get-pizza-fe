import React from "react";
import { Segment, Header, Icon } from "semantic-ui-react";

const SidebarSegment = ({ title, icon, children }) => (
  <Segment>
    <Header size="tiny">
      <Icon name={icon} />
      <Header.Content>{title}</Header.Content>
    </Header>

    {children}
  </Segment>
);

export default SidebarSegment;
