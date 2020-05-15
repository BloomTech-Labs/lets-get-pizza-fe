import React, { useState, useEffect } from "react";
import { curr_user } from "../../../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { List } from "semantic-ui-react";
import FriendOnList from "./FriendOnList";
import API from "../../../utils/API";
import Pagination from "react-js-pagination";
import "./FriendsList.css";
import { getUserFriends } from "../../../redux/actions/userActions";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemLength, setItemLength] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    //everything with 2 needs to be 10 on final render for 10 friends per page, 2 is for test
    let upperLimit = parseInt(pageNumber) * 5;
    let lowerLimit = upperLimit - 5;
    let data = [];
    if (upperLimit <= itemLength) {
      data = friends.slice(lowerLimit, upperLimit);
    } else {
      data = friends.slice(lowerLimit);
    }
    setCurrentData(data);
    setActivePage(pageNumber);
  };

  const removeFriend = (id) => {
    let friendToDelete = friends.filter(
      (deleteIT) => deleteIT.friends_id == id
    );
    let relationshipID = friendToDelete[0].id;
    console.log(relationshipID);

    API.delete(`/friends/${relationshipID}`)
      .then((res) => {
        console.log(res);
        window.location.reload(); //may need to be props.history push
      })
      .catch((err) => {
        console.log(err);
      });
    //  how to delete the relationship if its two sided, as it should be?
    // after deleting the first relationship, make get to friends with id of the friendToDelete, to get their friends
    // and test if that friends list has a friend with the id of user making original delete, if it does, delete that relationship
  };

  useEffect(() => {
    dispatch(getUserFriends(user.id));
    console.log(user.friends, "dispatch user friends");
    setItemLength(user.friends[0].length);
    user.friends[0].length > 5
      ? setCurrentData(user.friends[0].slice(0, 5))
      : setCurrentData(user.friends[0].slice(0, user.friends[0].length));
  }, []);

  return user.friends.length != 0 ? (
    <div className="plzaFriendsList">
      <h1>{user.username}'s Friends</h1>
      {/* {friends.length == 0 && <h1>You have no friends, loser!</h1>} */}
      <List className="actualList" floated="left" size="big">
        {console.log("friend length", user.friends[0].length)}
        {currentData.map((friend) => {
          return (
            <FriendOnList
              key={friend.friends_id}
              friends={friend}
              remove={removeFriend}
            />
          );
        })}
      </List>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={5}
        totalItemsCount={itemLength}
        pageRangeDisplayed={1}
        onChange={handlePageChange}
        className="pagination"
      />
    </div>
  ) : (
    <div>
      <h1>{user.username}'s Friends</h1>
      <div className="noFriends fade-in">You have no friends, loser</div>
    </div>
  );
}
