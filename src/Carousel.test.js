import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

test("Carousel renders without crashing", () => {
  render(<Carousel />);
})

test("Carousel matches snapshot", () => {
  const { asFragment } = render(<Carousel />); 

  expect(asFragment()).toMatchSnapshot(); 
})

test("Carousel left button", () => {
  const { getByText, queryByTestId, debug } = render(<Carousel />);
  const leftArrow = queryByTestId("left-arrow"); 
  const rightArrow = queryByTestId("right-arrow"); 

  fireEvent.click(rightArrow); 


  expect(getByText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  fireEvent.click(leftArrow); 

  expect(getByText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument(); 
})

test("Arrows are removed", () => {
  const { getByText, queryByTestId } = render(<Carousel />); 
  const leftArrow = queryByTestId("left-arrow"); 
  const rightArrow = queryByTestId("right-arrow"); 

  expect(leftArrow).toHaveClass("hidden"); 

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(rightArrow).toHaveClass("hidden"); 
})

it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});
