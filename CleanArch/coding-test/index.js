process.stdin.on('readable', () => {
  const userInput = process.stdin.read()
  process.stdout.write(`Your Input was: ${userInput}`)
})
