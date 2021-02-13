import React from "react";
import Routes from "../Routes";
import { renderRoutes } from "react-router-config";
import Navbar from "./Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      {renderRoutes(Routes[0].routes)}
    </div>
  );
};

export default App;
