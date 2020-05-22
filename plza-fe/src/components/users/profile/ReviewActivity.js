import React from "react";
import ReviewCard from "./ReviewCard";

export default function ReviewActivity(props) {
  return (
    <div style={{ borderBottom: "1px solid black", padding: "5%" }}>
      <div className="img-head-ch-ch">
        <img src={props.user.profile_image} className="img-ch-ch" />
        <h4 style={{ marginTop: "0" }}>
          {props.user.username} posted a Review!
        </h4>
      </div>
      <ReviewCard review={props.evt} />
    </div>
  );
}
