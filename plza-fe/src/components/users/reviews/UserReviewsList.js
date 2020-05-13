import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "semantic-ui-react";

const UserReviewsList = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  
  return (
    <div>
      <h1>User Reviews List</h1>
    </div>
  );
};

export default UserReviewsList;
