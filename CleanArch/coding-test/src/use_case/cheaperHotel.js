const weekDay = require('./isWeekend')
const reward = require('./isReward')
const hotels = require('../infra/hotels.json')

const reduceToMinValue = (keyPath, nestedKeyPath) => {
  if (nestedKeyPath !== undefined) {
    return hotels.reduce((min, j) => {
      if (j[keyPath][nestedKeyPath] < min) {
        return j[keyPath][nestedKeyPath]
      }
      return min
    }, hotels[0][keyPath][nestedKeyPath])
  } else {
    return hotels.reduce((min, j) => {
      if (j[keyPath] < min) {
        return j[keyPath]
      }
      return min
    }, hotels[0][keyPath])
  }
}
exports.findCheaper = string => {
  let min = Number.MAX_VALUE
  let aux
  let response
  const splited = string.split(',')
  for (const i in splited) {
    if (reward.isReward(string)) {
      if (weekDay.isWeekend(splited[i])) {
        aux = reduceToMinValue('reward', 'weekend')
      } else {
        aux = reduceToMinValue('reward', 'weekday')
      }
    } else {
      if (weekDay.isWeekend(splited[i])) {
        aux = reduceToMinValue('weekend')
      } else {
        aux = reduceToMinValue('weekday')
      }
    }
    if (aux < min) {
      min = aux
      response = i
    }
  }
  return hotels[response].name
}
