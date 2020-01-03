const weekDay = require('./use_case/isWeekend')
const reward = require('./use_case/isReward')

process.stdin.on('readable', () => {
  const userInput = process.stdin.read().toString()
  const splited = userInput.split(',')
  splited.map(x => {

    process.stdout.write(`Your Input is weekend: ${weekDay.isWeekend(x)}\nIs Reward: ${reward.isReward(x)}\n`)
  })
})
