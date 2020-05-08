import React, { useState, useEffect } from "react";
import { curr_user } from "../../../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { List } from "semantic-ui-react";
import FriendOnList from "./FriendOnList";
import API from "../../../utils/API";
import Pagination from "react-js-pagination";
import "./FriendsList.css";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [itemLength, setItemLength] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const user = useSelector(({ user }) => user);

  const handlePageChange = (pageNumber) => {
    //everything with 2 needs to be 10 on final render for 10 friends per page, 2 is for test
    let upperLimit = parseInt(pageNumber) * 2;
    let lowerLimit = upperLimit - 2;
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
    let newList = friends.filter((keepfriend) => keepfriend.friends_id != id);
    setFriends(newList); //add to component
    API.delete(`/friends/${id}`)
      .then((res) => {
        console.log(res);
        //window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    API.get(`/friends/${user.id}`)
      .then((res) => {
        console.log(res, "database call");
        console.log(user, "user info logged");
        setFriends(res.data);
        setItemLength(res.data.length);
        res.data.length > 2
          ? setCurrentData(res.data.slice(0, 2))
          : setCurrentData(res.data.slice(0, res.data.length));
        //if less than 10 make res.data.length
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setFriends]);

  return (
    <div className="plzaFriendsList">
      <h1>{user.username}'s Friends</h1>
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
        itemsCountPerPage={2}
        totalItemsCount={itemLength}
        pageRangeDisplayed={1}
        onChange={handlePageChange}
        className="pagination"
      />
    </div>
  );
}
