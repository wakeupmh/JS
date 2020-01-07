const weekDay = require('./isWeekend')
const reward = require('./isReward')
const minValue = require('./reduceToMinValue')
const hotels = require('../infra/hotels.json')

exports.findCheaper = string => {
  let min = Number.MAX_VALUE
  let aux
  let response
  const splited = string.split(',')
  for (const i in splited) {
    if (reward.isReward(string)) {
      if (weekDay.isWeekend(splited[i])) {
        aux = minValue.reduceToMinValue(hotels, 'reward', 'weekend')
      } else {
        aux = minValue.reduceToMinValue(hotels, 'reward', 'weekday')
      }
    } else {
      if (weekDay.isWeekend(splited[i])) {
        aux = minValue.reduceToMinValue(hotels, 'weekend')
      } else {
        aux = minValue.reduceToMinValue(hotels, 'weekday')
      }
    }
    if (aux < min) {
      min = aux
      response = i
    }
  }
  return hotels[response].name
}
