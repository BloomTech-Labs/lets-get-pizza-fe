import React from "react";
import { Tab } from "semantic-ui-react";

import Reviews from "./tabs/Reviews";
import Promotions from "./tabs/Promotions";
import Events from "./tabs/Events";

export default function MainBar(props) {
  const {
    history,
    locationID,
    selectedTab,
    setSelectedTab,
    reviews,
    promotions,
    events
  } = props;

  const tabPanes = [
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

  // Whenever a tab changes, update the browser address bar
  const handleTabChange = (event, data) => {
    const newTab = data.panes[data.activeIndex].menuItem.key;
    history.push(`/locations/${locationID}/${newTab}`);

    setSelectedTab(data.activeIndex);
  };

  return (
    <Tab
      activeIndex={selectedTab}
      onTabChange={handleTabChange}
      menu={{ secondary: true, pointing: true }}
      panes={tabPanes}
    />
  );
}
