import React, { useEffect, useState } from "react";
import { Grid, Image, Header, Segment, Input, Button } from "semantic-ui-react";
import RenderedButton from "./RenderedButton";
import { useDispatch } from "react-redux";
import { getAllFriends } from "../../../redux/actions/friendActions";
import { useHistory, useLocation } from "react-router-dom";
import { updateUserBio, getUserFriends } from "../../../redux/actions/userActions";

const ProfileAbout = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [bio, setBio] = useState(user.bio || "");
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const handleChange = (event) => {
    setBio(event.target.value);
  };
    useEffect(() => {
        !pathname.includes('dash') ? 
        dispatch(getAllFriends(user.id)) :
        dispatch(getUserFriends(user.id))
    }, [user.id, dispatch])
  
  let renderBio;
  if (editing) {
    renderBio = (
      <>
        <Input onChange={handleChange} value={bio} name={user.bio} />
        <Button
          onClick={() => {
            setEditing(!editing);
            dispatch(updateUserBio(bio));
          }}
        >
          Submit
        </Button>
      </>
    );
  } else {
    renderBio = user.bio;
  }
  return (
    <>
      <Grid.Row columns={2}>
        <Grid.Column textAlign="center" computer={8} mobile={16}>
          <Image src={user.profile_image} circular centered />
          <RenderedButton
            user={user}
            editing={editing}
            setEditing={setEditing}
          />
        </Grid.Column>
        <Grid.Column textAlign="center" computer={8} mobile={16}>
          <Header size="huge">{user.username}</Header>
          <Header>
            Favorite Pizza Shop |{" "}
            <a href={`/locations/${user.favShopDetails.id}`}>
              {user.favShopDetails.business_name}
            </a>
          </Header>
          {!pathname.includes("dash") && (
            <Header
              className="friends-link"
              onClick={() => {
                history.push(`/users/${user.username}/friends`);
              }}
            >
              {user.friends.length}{" "}
              {user.friends.length > 1 || user.friends.length === 0
                ? "Friends"
                : "Friend"}
            </Header>
          )}
          <Segment>{renderBio}</Segment>
        </Grid.Column>
      </Grid.Row>
    </>
  );
};

export default ProfileAbout;
