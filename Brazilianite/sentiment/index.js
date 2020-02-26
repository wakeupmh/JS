const trainingData = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'I am felling happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet?', output: 'excited' },
    { input: 'I am injuried', output: 'sad' },
    { input: 'You are pretty ugly', output: 'sarcastic' },
    { input: 'I am angry', output: 'angry' },
    { input: 'Fuck the system', output: 'angry' }
];

const net = new brain.recurrent.LSTM();
net.train(trainingData, {
    iterations: 200,
    erroThresh: 0.011
});

console.log(net.run('Fuck system'));
console.log(net.run('I am happy!'));