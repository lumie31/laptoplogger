import React, { Component } from "react";
import "./indexpage.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "../actions";

class Indexpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectUrl: null,
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    const { username, password } = this.state;
    this.setState({
      redirectUrl: "/dashboard"
    });
    // dispatch action
    this.props.logIn({ username, password });
  };
  render() {
    const { username, password, redirectUrl } = this.state;
    return this.state.redirectUrl ? (
      <Redirect
        push
        to={{
          pathname: redirectUrl
        }}
      />
    ) : (
      <div
        className="IndexPage"
        style={{ position: "fixed", top: "0", left: "0", right: "0" }}
      >
        <div className="content">
          <h2>Laptop Logger</h2>
          <p>A simple app to automate visitor's laptop logbooks</p>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="input">
              <input
                onChange={this.handleChange}
                value={username}
                name="username"
                className="form-control"
                type="text"
                required
                placeholder="Username"
              />
              <input
                onChange={this.handleChange}
                value={password}
                name="password"
                className="form-control"
                type="password"
                required
                placeholder="Password"
              />
              <input
                className="form-control btn btn-primary"
                type="submit"
                name="Login"
                value="Login"
                id=""
              />
            </div>
          </form>
          <div className="text">
            Or{" "}
            <span>
              <button className="button btn" type="submit">
                <i className="fab fa-google" /> &nbsp; Sign in with Google
              </button>
            </span>
          </div>
          <div className="footer">&copy; 2018</div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { logIn }
)(Indexpage);
