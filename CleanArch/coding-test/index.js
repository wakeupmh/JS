// const cheaperHotel = require('./use_case/cheaperHotel')

process.stdin.on('readable', () => {
  const userInput = process.stdin.read().toString()
  const splited = userInput.split(',')
  splited.map(x => {
    // process.stdout.write(`Your Input is weekend: ${weekDay.isWeekend(x)}\nIs Reward: ${reward.isReward(x)}\n`)
  })
})
