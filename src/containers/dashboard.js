import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { connect } from "react-redux";
import { getLogs, getUsers } from "../actions";
import { capitalizeFirstLetter } from "../utils/app-utils";

import moment from "moment";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getLogs();
  }

  render() {
    const timeIns = this.props.logs.map((log, i) => {
      return +moment(log.timeIn).format("X");
    });

    return this.props.logs.length === 0 ? (
      <div>loading...</div>
    ) : (
      <div>
        <h1 className="route-header">
          {capitalizeFirstLetter(this.props.location.pathname.slice(1))}
        </h1>
        <div className="h2">Logs Recorded Today</div>
        <div className="dash-table">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Visitor's Name</th>
                <th scope="col">Model</th>
                <th scope="col">Serial Number</th>
                <th scope="col">Time In</th>
                <th scope="col">Time Out</th>
              </tr>
            </thead>
            <tbody>
              {this.props.logs.map((each, i) => (
                <tr key={i}>
                  <th scope="row">{each.visitorName}</th>
                  <td>{each.model}</td>
                  <td>{each.serialNo}</td>
                  <td>{moment(each.timeIn).format("hh:mm a")}</td>
                  <td>{moment(each.timeOut).format("hh:mm a")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h2">Logging Trend - Past Week</div>
        <div className="contain">
          <div id="first">
            <Sparklines
              data={timeIns}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
              <SparklinesLine color="blue" />
            </Sparklines>
          </div>
          <div id="second">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Visitor's Name</th>
                  <th scope="col">Time In</th>
                  <th scope="col">Time Out</th>
                </tr>
              </thead>
              <tbody>
                {this.props.logs.map((each, i) => (
                  <tr key={i}>
                    <th scope="row">{each.visitorName}</th>
                    <td>{moment(each.timeIn).format("hh:mm a")}</td>
                    <td>{moment(each.timeOut).format("hh:mm a")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div id="clear" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logs: state.logs
  };
};

export default connect(
  mapStateToProps,
  {
    getLogs,
    getUsers
  }
)(Dashboard);
