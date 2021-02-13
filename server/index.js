// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("../src/components/Home").default;
import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "../src/Routes";
import render from "./render";
import createStore from "../src/store";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.component.loadData ? route.component.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(render(req, store));
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
