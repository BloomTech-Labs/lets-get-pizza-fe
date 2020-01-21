import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "home", icon: "home", content: "Home" },
    render: () => <Tab.Pane>Home page</Tab.Pane>
  },
  {
    menuItem: { key: "reviews", icon: "comments", content: "Reviews" },
    render: () => <Tab.Pane>Reviews page</Tab.Pane>
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

const MainBar = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
);

export default MainBar;
