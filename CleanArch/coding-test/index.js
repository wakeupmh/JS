const cheaperHotel = require('./use_case/cheaperHotel')

process.stdin.on('readable', () => {
  // process.stdout.write
  console.log(cheaperHotel.findCheaper(process.stdin.read().toString()))
})
