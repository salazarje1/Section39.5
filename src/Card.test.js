import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

test("Card renders without crashing", () => {
    render(<Card />)
}); 

test('Card matches snapshot', () => {
    const { asFragment } = render(<Card />);

    expect(asFragment()).toMatchSnapshot(); 
})