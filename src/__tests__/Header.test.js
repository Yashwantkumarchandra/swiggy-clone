import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import { BrowserRouter, redirect } from "react-router-dom";
import "@testing-library/jest-dom";

describe("This is a Header for Test", () => {
  it("should check Header Component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getAllByRole("button");
    //   expect(loginBtn).toBeInTheDocument();
    //here toBeInTheDocument is not function so that import "@testing-library/jest-dom"
    expect(loginBtn.length).toBe(2);
  });

  it("should check Login of the header ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const btnLogin = screen.getByRole("button", { name: "Login" });
    expect(btnLogin).toBeInTheDocument();
  });

  //not working because in my code it it a bootstrap icon

  // it("should check cart ", () => {
  //   render(
  //     <BrowserRouter>
  //       <Provider store={appStore}>
  //         <Header />
  //       </Provider>
  //     </BrowserRouter>
  //   );

  //   const cart = screen.getByText(/cart/); //regular expression
  //   expect(cart).toBeInTheDocument();
  // });

  it("should change login or logout onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginChange = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginChange);
    const logoutChange = screen.getByRole("button", { name: "Logout" });
    expect(logoutChange).toBeInTheDocument();
  });
});
