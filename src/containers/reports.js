import React, { Component } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { connect } from "react-redux";
import { getLogs, getUsers } from "../actions";
import moment from "moment";
import { capitalizeFirstLetter } from "../utils/app-utils";

class Reports extends Component {
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
        <Sparklines data={timeIns} limit={5} width={200} height={20} margin={5}>
          <SparklinesLine color="blue" />
        </Sparklines>
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
  { getLogs, getUsers }
)(Reports);
