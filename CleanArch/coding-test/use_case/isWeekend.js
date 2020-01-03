const dayOfWeek = require('./getDayOfWeek')

exports.isWeekend =  string => {
  const isWeekend = {
    sat: () => true,
    sun: () => true,
    default: () => false
  }
  return (isWeekend[dayOfWeek.getDayOfWeek(string)] || isWeekend.default)()
}
