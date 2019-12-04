import React from "react";
import { Loader, Container, Header, Icon } from "semantic-ui-react";

export default function SimpleContainer({
  loading,
  icon,
  title,
  description,
  children
}) {
  if (loading) {
    return <Loader active>Loading</Loader>;
  }

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
