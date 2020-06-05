import React from "react";
import { Link } from "react-router-dom";
import { Segment, Header, Icon, Button, Tab } from "semantic-ui-react";

import Reviews from "./tabs/Reviews";
import Promotions from "./tabs/Promotions";
import Events from "./tabs/Events";

const EmptyContent = ({ icon, type, id, showAddButton }) => (
  <Segment placeholder>
    <Header icon>
      <Icon name={icon} />
      There are currently no {type}s for this location
    </Header>
    {showAddButton && (
      <Button primary as={Link} to={`/${type}s/${id}/new`}>
        Add {type}
      </Button>
    )}
  </Segment>
);

export default function MainBar(props) {
  const {
    history,
    locationID,
    canEdit,
    currUser,
    selectedTab,
    setSelectedTab,
    reviews,
    promotions,
    events
  } = props;

  /**
   * Return either the component passed through or a placeholder block
   *
   * @param {string} tabType The singular
   * @param {boolean} showAddButton Whether the placeholder should display a CTA
   * button to create something.
   * @param {SemanticICONS} tabIcon The icon that corresponds with the tab. This
   * is used for the placeholder block if there is no content.
   * @param {array} content An array of items (e.g. reviews, promotions, or events)
   * @param {Component} Component The React Component that you would like to render.
   */
  const renderTab = (tabType, tabIcon, showAddButton, content, Component) => {
    if (content.length) {
      const pageTitle = tabType[0].toUpperCase() + tabType.slice(1) + "s";

      return (
        <React.Fragment>
          <Segment basic clearing style={{ marginBottom: "10px", padding: 0 }}>
            <Header
              floated="left"
              size="large"
              content={pageTitle}
              style={{ marginTop: 0 }}
            />

            {showAddButton && (
              <Button
                compact
                floated="right"
                style={{ margin: 0 }}
                as={Link}
                to={`/${tabType}s/${locationID}/new`}
              >
                <Icon name="plus" />
                Add {tabType}
              </Button>
            )}
          </Segment>

          <Tab.Pane>
            <Component content={content} canEdit={showAddButton} />
          </Tab.Pane>
        </React.Fragment>
      );
    } else {
      return (
        <EmptyContent
          icon={tabIcon}
          type={String(tabType)}
          id={locationID}
          showAddButton={showAddButton}
        />
      );
    }
  };

  const tabPanes = [
    {
      menuItem: { key: "reviews", icon: "comments" },
      render: () => renderTab("review", "comments", currUser.username, reviews, Reviews)
    },
    {
      menuItem: { key: "promotions", icon: "dollar" },
      render: () =>
        renderTab("promotion", "dollar", canEdit, promotions, Promotions)
    },
    {
      menuItem: { key: "events", icon: "calendar" },
      render: () =>
        renderTab("event", "calendar", currUser.username || canEdit, events, Events)
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
