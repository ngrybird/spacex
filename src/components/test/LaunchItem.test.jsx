import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { apiResponse } from "./testData";
import LaunchItem from "../LaunchItem";

describe("<LaunchItem/>", () => {
  it("render ListItem with mission stub", () => {
    const { container, getByText } = render(
      <LaunchItem launch={apiResponse[0]} />
    );
    expect(container).toMatchSnapshot();
    const yearValue = getByText("2020");
    expect(yearValue).toBeInTheDocument();

    const missionName = getByText("Starlink 2 #87");
    expect(missionName).toBeInTheDocument();
  });
});
