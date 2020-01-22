import React from "react";
import { Tab } from "semantic-ui-react";

export default function MainBar(props) {
  const TabPanes = [
    {
      menuItem: { key: "home", icon: "home", content: "Home" },
      render: () => <Tab.Pane>Home page</Tab.Pane>
    },
    {
      menuItem: { key: "reviews", icon: "comments", content: "Reviews" },
      render: () => (
        <Tab.Pane>
          {props.reviews.map(review => (
            <p>{review.review_text}</p>
          ))}
        </Tab.Pane>
      )
    },
    {
      menuItem: { key: "promotions", icon: "dollar", content: "Promotions" },
      render: () => <Tab.Pane>Promotions page</Tab.Pane>
    },
    {
      menuItem: { key: "events", icon: "calendar", content: "Events" },
      render: () => <Tab.Pane>Events page</Tab.Pane>
    }
  ];

  return <Tab menu={{ secondary: true, pointing: true }} panes={TabPanes} />;
}
