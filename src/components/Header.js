import React from "react";
import "./Header.css";
import { connect } from "react-redux";

const Header = ({ user }) => {
  console.log(user);
  const { username } = user;
  return (
    <header className="Header" style={{ paddingRight: 80 + "px" }}>
      <h1 className="Header__brand">Laptop Logger</h1>
      <h1 style={{ color: "white", fontSize: 18 }}>
        {username ? "@" + username : ""}
      </h1>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(Header);
