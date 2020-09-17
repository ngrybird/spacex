import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { apiResponse } from "./testData";
import LaunchList from "../LaunchList";

describe("<LaunchList/>", () => {
  it("render LaunchList with mission stub", () => {
    const { container, getByText } = render(
      <LaunchList launchList={apiResponse} />
    );
    expect(container).toMatchSnapshot();
  });
});
