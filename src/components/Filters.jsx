import React from "react";
import { FILTER_YEARS } from "../utils/constants";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props };
  }
  onYearClick = e => {
    this.setState(
      { ...this.state, year: e.target.value },
      this.updateFiltersData
    );
  };
  toggleLanding = e => {
    this.setState(
      { ...this.state, successLand: e.target.value },
      this.updateFiltersData
    );
  };
  toggleLaunch = e => {
    this.setState(
      { ...this.state, successLaunch: e.target.value },
      this.updateFiltersData
    );
  };
  updateFiltersData = () => {
    this.props.updateFilters(this.state);
  };
  render() {
    return (
      <div className="filters-container">
        <b>Filters :</b>

        <div className="filters-content">
          <div className="labels">
            <u>Launch Year</u>
          </div>
          {FILTER_YEARS.map(year => (
            <button
              className={this.props.year === year ? "is-selected" : ""}
              onClick={this.onYearClick}
              key={year}
              value={year}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="filters-content">
          <div className="labels">
            <u>Successful Launch</u>
          </div>
          <div>
            <button
              onClick={this.toggleLaunch}
              value={true}
              className={
                this.props.successLaunch === "true" ? "is-selected" : ""
              }
            >
              True
            </button>
            <button
              onClick={this.toggleLaunch}
              value={false}
              className={
                this.props.successLaunch === "false" ? "is-selected" : ""
              }
            >
              False
            </button>
          </div>
        </div>
        <div className="filters-content">
          <div className="labels">
            <u>Successful Landing</u>
          </div>
          <div>
            <button
              onClick={this.toggleLanding}
              value={true}
              className={this.props.successLand === "true" ? "is-selected" : ""}
            >
              True
            </button>
            <button
              onClick={this.toggleLanding}
              value={false}
              className={
                this.props.successLand === "false" ? "is-selected" : ""
              }
            >
              False
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Filters;
