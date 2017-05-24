"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTitleValid = isTitleValid;
exports.isStartDateValid = isStartDateValid;
exports.isEndDateValid = isEndDateValid;
exports.isFormValid = isFormValid;
function isTitleValid(title) {
  return title.trim().length > 0;
}

function isStartDateValid(startDate, endDate) {
  return startDate.isBefore(endDate);
}

function isEndDateValid(startDate, endDate) {
  return endDate.isAfter(startDate);
}

function isFormValid(title, startDate, endDate) {
  return isTitleValid(title) && isStartDateValid(startDate, endDate) && isEndDateValid(startDate, endDate);
}