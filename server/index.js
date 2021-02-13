// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("../src/components/Home").default;
import "babel-polyfill";
import express from "express";
import render from "./render";
import createStore from "../src/store";
const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  res.send(render(req, store));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
