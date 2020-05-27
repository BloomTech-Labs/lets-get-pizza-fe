import React from "react";
import ActivityCardList from "./ActivityCardList";

export default function ActivityContainer() {
  return (
    <div className="bio-activity-ch">
      <div>
        <h2 className="head-act-ch">Activity</h2>
        <section className="activity-container-ch">
          <ActivityCardList />
        </section>
      </div>
    </div>
  );
}
