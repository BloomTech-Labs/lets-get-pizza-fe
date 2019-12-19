import React from "react";
import { Loader, Segment, Container, Header, Icon } from "semantic-ui-react";

export default function SimpleContainer(props) {
  const { loading, error, icon, title, description, children } = props;

  if (loading) {
    return <Loader active>Loading</Loader>;
  }

  return (
    <Container style={{ margin: "20px 0" }}>
      <Header size="huge" style={{ marginBottom: "10px" }}>
        {icon && <Icon name={icon} />}
        <Header.Content>{title}</Header.Content>
        {description && (
          <Header.Subheader style={{ marginTop: "10px" }}>
            {description}
          </Header.Subheader>
        )}
      </Header>

      {error ? <Segment>{error}</Segment> : children}
    </Container>
  );
}
