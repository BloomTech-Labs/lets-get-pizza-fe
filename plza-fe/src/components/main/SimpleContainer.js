import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";

export default function SimpleContainer({
  icon,
  title,
  description,
  children
}) {
  return (
    <Container>
      <Header size="huge" style={{ margin: "20px 0" }}>
        {icon && <Icon name={icon} />}
        <Header.Content>{title}</Header.Content>
        {description && (
          <Header.Subheader style={{ marginTop: "10px" }}>
            {description}
          </Header.Subheader>
        )}
      </Header>

      {children}
    </Container>
  );
}
