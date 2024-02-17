import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Group of all test", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const Submit = screen.getByText("Submit");
    expect(Submit).toBeInTheDocument();
  });

  it("should check the input placeholder", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Email");

    expect(inputName).toBeInTheDocument();
  });

  it("should check the whether the button or not", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should check how many input boxes ", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox"); //input == textbox
    ///rthis is a react element and showing a array that's why length
    //console.log(inputBoxes)
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
