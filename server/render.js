import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../src/Routes";

import Home from "../src/components/Home";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  //   const content = renderToString(<Home />);
  return `
  <html>
    <head>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
