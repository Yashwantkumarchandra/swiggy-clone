// import { render, screen } from "@testing-library/react";
// import MOCK_DATA from "../mocks/mockResListData.json";
// import Body from "../components/Body";
// import { act } from "react-dom/test-utils";

// global.fetch = jest.fn(() => {
//   return Promise.resolve(() => {
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     };
//   });
// });

// // it("should render body component with search testid", async () => {
// //   await act(async () => {
// //     render(<Body />);
// //   });

// //   const searchBox = screen.getByPlaceholderText("searchInput");
// //   expect(searchBox).toBeInTheDocument();
// // });

// it("should search Top rated Restaurent on click", async () => {
//   await act(() => {
//     <Body />;
//   });

//   const cardBeforeClick = screen.getAllByTestId("restCard");
//   expect(cardBeforeClick).toBe(20);
// });
