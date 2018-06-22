import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogs, getUsers, addUsers } from "../actions";
import moment from "moment";
import { capitalizeFirstLetter } from "../utils/app-utils";

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props.users);
    return this.props.users.length === 0 ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1 className="route-header">
          {capitalizeFirstLetter(this.props.location.pathname.slice(1))}
        </h1>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add User
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add User
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                    />
                  </div>
                  &nbsp;
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>
                  &nbsp;
                  <div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Login"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <table style={{ marginTop: 20 + "px" }} className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Fullname</th>
              <th scope="col">Last Login</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, i) => (
              <tr key={i}>
                <th scope="row">{user.fullName}</th>
                <td>{user.email}</td>
                <td>{moment(user.lastLogin).format("hh:mm a")}</td>
                <td>delete</td>
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
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  {
    getLogs,
    getUsers,
    addUsers
  }
)(Users);
