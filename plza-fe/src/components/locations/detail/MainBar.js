import React from "react";
import { Tab } from "semantic-ui-react";

import Reviews from "./tabs/Reviews";
import Promotions from "./tabs/Promotions";
import Events from "./tabs/Events";

export default function MainBar({ reviews, promotions, events }) {
  const TabPanes = [
    {
      menuItem: { key: "reviews", icon: "comments", content: "Reviews" },
      render: () => <Reviews reviews={reviews} />
    },
    {
      menuItem: { key: "promotions", icon: "dollar", content: "Promotions" },
      render: () => <Promotions promotions={promotions} />
    },
    {
      menuItem: { key: "events", icon: "calendar", content: "Events" },
      render: () => <Events events={events} />
    }
  ];

  return <Tab menu={{ secondary: true, pointing: true }} panes={TabPanes} />;
}
