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
    if (err) return res(err);
    res.json({ event: response});
  });
});

module.exports = router;
