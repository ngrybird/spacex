import React from "react";

class LaunchItem extends React.Component {
  render() {
    const { launch } = this.props;
    return (
      <div className="list-item">
        <div className="mission-patch">
          <img src={launch.links.mission_patch_small} alt={"mission picture"} />
        </div>
        <div className="mission-name">
          {launch.mission_name} #{launch.flight_number}
        </div>
        {launch.mission_id.length > 0 ? (
          <>
            <div className="mission-id">Mission Ids</div>
            <ul>
              {launch.mission_id.map(id => (
                <li className="data-values">{id}</li>
              ))}
            </ul>
          </>
        ) : (
          ""
        )}
        <div className="year-field">
          <span className="launch-year">Launch Year :</span>
          <span className="data-values">{launch.launch_year}</span>
        </div>
        <div className="launch-success-field">
          <span className="launch-success-label">Successful Launch :</span>
          <span className="launch-data-values">
            {launch.launch_success ? "True" : "False"}
          </span>
        </div>
        <div className="launch-success-field">
          <span className="launch-success-label">Successful Landing :</span>
          <span className="launch-data-values">{launch.launch_success}</span>
        </div>
      </div>
    );
  }
}

export default LaunchItem;
