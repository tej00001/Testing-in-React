// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import React from "react";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("render Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert

    const helloWorldElement = screen.getByText("Hello World");

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if the button is not clicked', ()=>{
    render(<Greeting/>);
    const outputElement = screen.getByText("good to see you",{exact:false});

    expect(outputElement).toBeInTheDocument();
  });

  test('renders changed if the button is clicked', ()=>{
    // Arrange
    render(<Greeting/>);

    // Act

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert

    const outputElement = screen.getByText("Changed!!",{exact:false});

    expect(outputElement).toBeInTheDocument();

  });

  test('does not render good to see you if the button was clicked', ()=>{
     // Arrange
     render(<Greeting/>);

     // Act

     const buttonElement = screen.getByRole('button');
     userEvent.click(buttonElement);

     // Assert

     const outputElement = screen.queryByText("good to see you",{exact:false});

     expect(outputElement).toBeNull();
  })

});