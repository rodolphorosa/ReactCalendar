"use strict";

import moment from "moment";
import express from "express";
var router = express.Router();

import Event from "./models/Event";

router.get("/api/events", (req, res) => {
  Event.find((err, response) => {
    res.json({ events: response });
  }).sort({ "start" : 1 });
});

router.get("/api/events/:id", (req, res) => {
  Event.findById(req.params.id, (err, response) => {
    if (err) return res.sendStatus(500);
    res.json({ event: response});
  });
});

router.get("/api/events/date/:date", (req, res) => {
  const min = moment(req.params.date).utcOffset("+03:00");
  const max = moment(req.params.date).utcOffset("+03:00").add(1, "day");
  Event.find({
    "start": {
      $gte: min,
      $lt: max
    }
  }, (err, response) => {
    if (err) return res.sendStatus(500);
    res.json({ events: response });
  }).sort({
    "start": 1
  })
});

router.get("/api/events/week/:date", (req, res) => {
  const min = moment(req.params.date).utcOffset("+03:00").startOf("week");
  const max = moment(req.params.date).utcOffset("+03:00").endOf("week");
  Event.find({
    "start": {
      $gte: min,
      $lt: max
    }
  }, (err, response) => {
    if (err) return res.sendStatus(500);
    res.json({ events: response });
  }).sort({
    "start": 1
  })
});

router.get("/api/events/month/:date", (req, res) => {
  const min = moment(req.params.date).utcOffset("+03:00").startOf("month");
  const max = moment(req.params.date).utcOffset("+03:00").endOf("month");
  Event.find({
    "start": {
      $gte: min,
      $lt: max
    }
  }, (err, response) => {
    if (err) return res.sendStatus(500);
    res.json({ events: response });
  }).sort({
    "start": 1
  })
});

router.post("/api/event", (req, res) => {
  var newEvent = new Event(req.body);
  newEvent.save((err, event) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(200);
  });
});

router.put("/api/events/:id", (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, (err, response) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(200);
  });
});

router.delete("/api/events/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id, (err, response) => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
});

router.get("*", (req, res) => {
  res.render("index");
});

export default router;
