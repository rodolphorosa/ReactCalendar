"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Event = require("./models/Event");

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get("/api/events", function (req, res) {
  _Event2.default.find(function (err, response) {
    res.json({ events: response });
  }).sort({ "start": 1 });
});

router.get("/api/events/:id", function (req, res) {
  _Event2.default.findById(req.params.id, function (err, response) {
    if (err) return res.sendStatus(500);
    res.json({ event: response });
  });
});

router.get("/api/events/date/:date", function (req, res) {
  var min = (0, _moment2.default)(req.params.date).utcOffset("+03:00");
  var max = (0, _moment2.default)(req.params.date).utcOffset("+03:00").add(1, "day");
  _Event2.default.find({
    "start": {
      $gte: min,
      $lt: max
    }
  }, function (err, response) {
    if (err) return res.sendStatus(500);
    res.json({ events: response });
  }).sort({
    "start": 1
  });
});

router.get("/api/events/week/:date", function (req, res) {
  var min = (0, _moment2.default)(req.params.date).utcOffset("+03:00").startOf("week");
  var max = (0, _moment2.default)(req.params.date).utcOffset("+03:00").endOf("week");
  _Event2.default.find({
    "start": {
      $gte: min,
      $lt: max
    }
  }, function (err, response) {
    if (err) return res.sendStatus(500);
    res.json({ events: response });
  }).sort({
    "start": 1
  });
});

router.get("/api/events/month/:date", function (req, res) {
  var min = (0, _moment2.default)(req.params.date).utcOffset("+03:00").startOf("month");
  var max = (0, _moment2.default)(req.params.date).utcOffset("+03:00").endOf("month");
  _Event2.default.find({
    "start": {
      $gte: min,
      $lt: max
    }
  }, function (err, response) {
    if (err) return res.sendStatus(500);
    res.json({ events: response });
  }).sort({
    "start": 1
  });
});

router.post("/api/event", function (req, res) {
  var newEvent = new _Event2.default(req.body);
  newEvent.save(function (err, event) {
    if (err) res.sendStatus(500);else res.sendStatus(200);
  });
});

router.put("/api/events/:id", function (req, res) {
  _Event2.default.findByIdAndUpdate(req.params.id, req.body, function (err, response) {
    if (err) res.sendStatus(500);else res.sendStatus(200);
  });
});

router.delete("/api/events/:id", function (req, res) {
  _Event2.default.findByIdAndRemove(req.params.id, function (err, response) {
    if (err) res.sendStatus(500);else res.sendStatus(201);
  });
});

router.get("*", function (req, res) {
  res.render("index");
});

exports.default = router;