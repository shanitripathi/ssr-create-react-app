import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/users">Users</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
