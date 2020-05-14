import React from "react";
import RenderedButton from "./RenderedButton";
export default function ProfilePicture(props) {
  return (
    <div className="picture-btn-ch">
      <img className="profile-image-ch" src={props.user.profile_image} />
      <RenderedButton user={props.user} />
      <section className="user-bio-ch">
        <p className="bio-text-ch">{props.user.bio}</p>
      </section>
    </div>
  );
}
