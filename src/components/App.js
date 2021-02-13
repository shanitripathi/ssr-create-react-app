import React from "react";
import Routes from "../Routes";
import { renderRoutes } from "react-router-config";
const App = () => {
  return (
    <div>
      <h1>Header</h1>
      {renderRoutes(Routes[0].routes)}
    </div>
  );
};

export default App;
