const getDayOfWeek = string => {
  return string.match(/\(([^)]+)\)/)[1]
}
exports.getDayOfWeek = getDayOfWeek
