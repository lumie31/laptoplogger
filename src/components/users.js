import React, { Component } from "react";
// import { connect } from "react-redux";
// import { getLogs, getUsers } from "../actions";

class Users extends Component {
  // componentDidMount() {
  //   this.props.getUsers();
  // }

  render() {
    // console.log(this.props.users);
    return (
      <div>
        <button type="submit">Add User</button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Fullname</th>
              <th scope="col">Last Login</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Jane</td>
              <td>the dog</td>
              <td>@dog</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
