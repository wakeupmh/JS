exports.getDayOfWeek = string => {
  return string.match(/\(([^)]+)\)/)[1]
}
