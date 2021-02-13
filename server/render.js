import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "../src/Routes";
import serialize from "serialize-javascript";

import { renderRoutes } from "react-router-config";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
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
        <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
        <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
