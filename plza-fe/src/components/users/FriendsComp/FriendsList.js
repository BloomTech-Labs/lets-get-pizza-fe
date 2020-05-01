import React, { useState, useEffect } from "react";
import { curr_user } from "../../../utils/auth";
import { List } from "semantic-ui-react";
import FriendOnList from "./FriendOnList";
import API from "../../../utils/API";
import Pagination from "react-paginating";

const dummyList = [
  {
    name: "Buddy2",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
  {
    name: "Buddy1",
    image: "https://ca.slack-edge.com/T4JUEB3ME-UHET379TP-a6cf2301dafe-512",
    bio: "Pineapple was made for pizza",
  },
];

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page, e) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    API.get(`/friends/${curr_user.id}`)
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setFriends]);

  const limit = 10;
  const pageCount =
    dummyList.length > 10 ? Math.ceil(dummyList.length / 10) : 1;
  const total = pageCount;
  console.log(pageCount);
  return (
    <>
      <div>
        <List floated="left" size="big">
          {console.log("here")}

          {dummyList.map((friend) => {
            return <FriendOnList key={friend.name} friends={friend} />;
          })}
        </List>

        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
          className="bg-red"
        >
          {({
            pages = { pageCount },
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps,
          }) => (
            <div>
              <button
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange,
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: handlePageChange,
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map((page) => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: handlePageChange,
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: handlePageChange,
                  })}
                >
                  {">"}
                </button>
              )}

              <button
                {...getPageItemProps({
                  pageValue: pageCount,
                  onPageChange: handlePageChange,
                })}
              >
                {console.log(totalPages, "total pages")}
                last
              </button>
            </div>
          )}
        </Pagination>
      </div>
    </>
  );
}
