import React, { Component } from "react";

class Table extends Component {
  componentDidMount() {
    this.props.getLogs();
  }

  render() {
    return this.props.logs.length === 0 ? (
      <div>loading...</div>
    ) : (
      <div>
        <div>Logs Recorded Today</div>
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
        <div>Logging Trend - Past Week</div>
        <div className="contain">
          <div id="first">
            <Sparklines
              data={timeIns}
              limit={5}
              width={70}
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

export default Table;
