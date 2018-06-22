import React, { Component } from "react";
import { capitalizeFirstLetter } from "../utils/app-utils";

class ResetPassword extends Component {
  render() {
    return (
      <div>
        <h1 className="route-header">
          {capitalizeFirstLetter(this.props.location.pathname.slice(1))}
        </h1>
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Old Password:</label>
            <input
              className="col-sm-5 form-control"
              type="password"
              name="name"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">New Password:</label>
            <input
              className="col-sm-5 form-control"
              type="password"
              name="name"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Confirm Password:</label>
            <input
              className="col-sm-5 form-control"
              type="password"
              name="name"
            />&nbsp;
            <button className="btn btn-primary" type="submit">
              Change Password
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ResetPassword;
