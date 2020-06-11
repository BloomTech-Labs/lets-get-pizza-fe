import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "semantic-ui-react";
import FriendOnList from "./FriendOnList";
import Pagination from "react-js-pagination";
import "./FriendsList.css";
import {
  getUserFriends,
  deleteUserFriends,
} from "../../../redux/actions/userActions";

export default function FriendsList(props) {
  const [activePage, setActivePage] = useState(1);
  const [itemLength, setItemLength] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  let user = useSelector(({ user }) => user);
  user = props.user ? props.user : user
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    //everything with 2 needs to be 10 on final render for 10 friends per page, 2 is for test
    let upperLimit = parseInt(pageNumber) * 5;
    let lowerLimit = upperLimit - 5;
    let data = [];
    if (upperLimit <= itemLength) {
      data = user.friends.slice(lowerLimit, upperLimit);
    } else {
      data = user.friends.slice(lowerLimit);
    }
    setCurrentData(data);
    setActivePage(pageNumber);
  };

  const removeFriend = (id) => {
    let friendToDelete = user.friends.filter(
      (deleteIT) => deleteIT.friends_id == id
    );

    let relationshipID = friendToDelete[0].id;
    dispatch(deleteUserFriends(relationshipID, user));

    //  how to delete the relationship if its two sided, as it should be?
    // after deleting the first relationship, make get to friends with id of the friendToDelete, to get their friends
    // and test if that friends list has a friend with the id of user making original delete, if it does, delete that relationship
  };

  useEffect(() => {
    async function getFriends() {
      await dispatch(getUserFriends(user.id));
      setItemLength(user.friends.length);

      user.friends.length > 5
        ? setCurrentData(user.friends.slice(0, 5))
        : setCurrentData(user.friends.slice(0, user.friends.length));
    }

    getFriends();
  }, [user.friends.length]);

  return user.friends.length != 0 ? (
    <div className="plzaFriendsList">
      <h1 style={{width: '100%', textAlign: 'center'}}>{user.username}'s Friends</h1>
      <List className="actualList" floated="left" size="big">
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
      <div className="noFriends fade-in">
        You have no friends, try attending events with other pizza fanatics!
      </div>
    </div>
  );
}
