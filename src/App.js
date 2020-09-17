import React from "react";
import "./App.css";
import Filters from "./components/Filters";
import { getLaunchInfo } from "./utils/api";
import LaunchList from "./components/LaunchList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      launchList: [],
      filterOptions: {
        year: "",
        successLaunch: "",
        successLand: ""
      }
    };
  }
  updateFilters = filterOptions => {
    console.log(filterOptions);
    this.setState({ ...this.state, filterOptions }, this.triggerApiCall);
  };
  componentDidMount() {
    this.setState({ ...this.state, loading: true }, this.triggerApiCall);
  }
  triggerApiCall = () => {
    getLaunchInfo(this.state.filterOptions).then(data => {
      console.log(data);
      this.setState({ ...this.state, loading: false, launchList: data });
    });
  };

  render() {
    return (
      <>
        <div className="page-header">SpaceX Launch Programs</div>
        <div className="app-container">
          <Filters
            {...this.state.filterOptions}
            updateFilters={this.updateFilters}
          />
          {this.state.loading ? (
            <div className="loading-message">Loading...</div>
          ) : (
            <div>
              <LaunchList launchList={this.state.launchList} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
