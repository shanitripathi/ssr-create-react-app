import React from "react";
import App from "./components/App";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const Routes = [
  {
    component: App,
    routes: [
      { component: Home, path: "/", exact: true },
      { component: UserList, path: "/users", exact: false },
    ],
  },
];

export default Routes;
