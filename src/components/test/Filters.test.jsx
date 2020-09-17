import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { apiResponse } from "./testData";
import Filters from "../Filters";

describe("<Filters/>", () => {
  const props = {
    filterOptions: {
      year: "",
      successLaunch: "",
      successLand: ""
    },
    updateFilters: jest.fn()
  };
  it("render filters component", () => {
    const { container } = render(<Filters {...props} />);
    expect(container).toMatchSnapshot();
  });
  it("simulate click on year button", () => {
    const { container, getByText } = render(<Filters {...props} />);
    fireEvent.click(getByText("2019"));
    expect(props.updateFilters).toHaveBeenCalled();
  });
  it("simulate click on True button for Successful launch", () => {
    const { container, getAllByText } = render(<Filters {...props} />);
    fireEvent.click(getAllByText("True")[0]);
    expect(props.updateFilters).toHaveBeenCalled();
  });
  it("simulate click on True button for Successful landing", () => {
    const { container, getAllByText } = render(<Filters {...props} />);
    fireEvent.click(getAllByText("True")[1]);
    expect(props.updateFilters).toHaveBeenCalled();
  });
});
