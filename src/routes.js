"use strict";

import express from "express";
var router = express.Router();

import Event from "./models/Event";

router.get("/api/events", (req, res) => {
  Event.find((err, response) => {
    res.json({ events: response });
  });
});

router.get("/api/events/:id", (req, res) => {
  Event.findById(req.params.id, (err, response) => {
    if (err) return res.sendStatus(500);
    res.json({ event: response});
  });
});

router.post("/api/event", (req, res) => {
  var newEvent = new Event(req.body);
  newEvent.save((err, event) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
});

router.get("*", (req, res) => {
  res.render("index");
});

export default router;
