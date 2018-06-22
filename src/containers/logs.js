import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogs, getUsers, addLogs } from "../actions";
import moment from "moment";
import { capitalizeFirstLetter } from "../utils/app-utils";

class Logs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      laptopMake: "",
      model: "",
      serialNumber: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getLogs();
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name, model, laptopMake, serialNumber } = this.state;
    console.log(
      this.state.name,
      this.state.laptopMake,
      this.state.model,
      this.state.serialNumber
    );
    this.props.addLogs({
      visitorName: name,
      model,
      laptopMake,
      serialNo: serialNumber
    });
  }

  render() {
    return this.props.logs.length === 0 ? (
      <div>loading...</div>
    ) : (
      <div>
        <h1 className="route-header">
          {capitalizeFirstLetter(this.props.location.pathname.slice(1))}
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-1 col-form-label">Name:</label>
            <input
              className="col-sm-5 form-control"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-1 col-form-label">Laptop Make:</label>
            <select
              className="col-sm-5 form-control"
              name="laptopMake"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <option value="grapefruit">Dell</option>
              <option value="lime">HP</option>
              <option selected value="coconut">
                Mac
              </option>
              <option value="mango">Asus</option>
            </select>
          </div>
          <div className="form-group row">
            <label className="col-sm-1 col-form-label">Model:</label>
            <input
              className="col-sm-5 form-control"
              type="text"
              name="model"
              value={this.state.model}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-1 col-form-label">S / No:</label>
            <input
              className="col-sm-5 form-control"
              name="serialNumber"
              type="text"
              value={this.state.serialNumber}
              onChange={this.handleChange}
            />{" "}
            &nbsp;
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.handleChange}
            >
              Log
            </button>
          </div>
        </form>
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
    getUsers,
    addLogs
  }
)(Logs);
