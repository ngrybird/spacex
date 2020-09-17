import React from "react";
import LaunchItem from "./LaunchItem";

class LaunchList extends React.Component {
  render() {
    return this.props.launchList.length !== 0 ? (
      <div className="list-container">
        {this.props.launchList.map(data => (
          <LaunchItem launch={data} />
        ))}
      </div>
    ) : (
      <div>No launch found</div>
    );
  }
}
export default LaunchList;
