export function isTitleValid(title) {
  return title.trim().length > 0;
}

export function isStartDateValid(startDate, endDate) {
  return startDate.isBefore(endDate);
}

export function isEndDateValid(startDate, endDate) {
  return endDate.isAfter(startDate);
}

export function isFormValid(title, startDate, endDate) {
  console.log(title)
  return isTitleValid(title) && isStartDateValid(startDate, endDate) && isEndDateValid(startDate, endDate)
}
