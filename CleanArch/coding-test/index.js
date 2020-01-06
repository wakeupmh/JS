const hotel = require('./presentation/hotel')

process.stdin.on('readable', () => {
  process.stdout.write(hotel.cheaperHotel(process.stdin.read().toString()))
})
