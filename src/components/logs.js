import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogs, getUsers } from "../actions";
import moment from "moment";

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
    console.log(
      this.state.name,
      this.state.laptopMake,
      this.state.model,
      this.state.serialNumber
    );
  }

  render() {
    return this.props.logs.length === 0 ? (
      <div>loading...</div>
    ) : (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Laptop Make:
              <select
                name="laptopMake"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">
                  Coconut
                </option>
                <option value="mango">Mango</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              Model:
              <input
                type="text"
                name="model"
                value={this.state.model}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Serial Number:
              <input
                name="serialNumber"
                type="text"
                value={this.state.serialNumber}
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" onClick={this.handleChange}>
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
    getUsers
  }
)(Logs);
