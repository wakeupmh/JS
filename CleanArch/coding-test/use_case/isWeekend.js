const dayOfWeek = require('./getDayOfWeek')

const isWeekend = string => {
  const isWeekend = {
    sat: () => true,
    sun: () => true,
    default: () => false
  }
  return (isWeekend[dayOfWeek.getDayOfWeek(string)] || isWeekend.default)()
}

exports.isWeekend = isWeekend
