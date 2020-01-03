const testWeekDay = require('./use_case/isWeekend')
process.stdin.on('readable', () => {
  const userInput = process.stdin.read().toString()
  const splited = userInput.split(',')
  splited.map(x => {
    process.stdout.write(`Your Input is weekend: ${testWeekDay.isWeekend(x)}\n`)
  })
})
