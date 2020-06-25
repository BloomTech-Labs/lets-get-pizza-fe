import React from "react";
import { useSelector } from "react-redux";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { findFirstProp } from "../../../utils/reduxTestingFunctions";
import UserEvent from "./UserEvent";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("UserEvent", () => {
  const event = {
    title: "21st Birthday",
    description: "Come celebrate my 21st Birthday",
    start_time: "2020-01-20T08:00:00.000Z",
    end_time: "2020-01-22T08:00:00.000Z",
  };

  it("renders user with events", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        user: {
          username: "John",
          events: [
            {
              address:
                "500 Lakewood Center Mall, Lakewood (at Candlewood Ave), Lakewood, CA 90712, United States",
              business_name: "California Pizza Kitchen",
              description:
                "Come celebrate my 21st Birthday. Free pizzas and beers!",
              end_time: "2020-06-24T23:30:00.000Z",
              id: 4,
              location_id: 9,
              start_time: "2020-06-24T18:00:00.000Z",
              title: "Birthday Party!!!",
              user_id: 11,
            },
            {
              address: "69 Bompton Ave., Compton, CA 90221",
              business_name: "Kony Pizzerias",
              description: "test",
              end_time: "2020-06-26T23:40:00.000Z",
              id: 106,
              location_id: 30,
              start_time: "2020-06-26T18:00:00.000Z",
              title: "test user add event redux hooks",
              user_id: 11,
            },
          ],
        },
      })
    );
    const { container } = render(<UserEvent event={event}/>);
    expect(container).toMatchSnapshot();
  });


  it("renders user without events", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        user: {
          username: "John",
          events: [],
        },
      })
    );
    const { container } = render(<UserEvent event={event}/>);
    expect(container).toMatchSnapshot();
  });

  it("renders text and values from props", () => {
    const { getByText, getAllByText } = render(<UserEvent event={event}/>);

    const title = findFirstProp("21st Birthday", getByText, getAllByText);
    
  });
});
