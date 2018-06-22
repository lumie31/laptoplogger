import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const sidebarLinks = [
  { title: "Dashboard", url: "/dashboard" },
  { title: "Today's Logs", url: "/logs" },
  { title: "Report", url: "/report" },
  { title: "Users", url: "/users" },
  { title: "Change Password", url: "/resetpassword" },
  { title: "Log out", url: "/" }
];

const Sidebar = () => {
  return (
    <aside className="Sidebar">
      {sidebarLinks.map(({ title, url }) => (
        <div>
          {" "}
          <NavLink to={url} activeClassName="NavLink--selected">
            {title}
          </NavLink>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
