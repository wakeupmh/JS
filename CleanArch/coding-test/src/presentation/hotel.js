const cheaperHotel = require('../use_case/cheaperHotel')

exports.cheaperHotel = string => cheaperHotel.findCheaper(string)
