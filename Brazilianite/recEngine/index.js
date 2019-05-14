// food preference
const trainingData = [
    { input: { pasta: 1 }, output: [0] },
    { input: { meat: 1 }, output: [1] },
    { input: { pork: 1 }, output: [0] },
    { input: { sausage: 1 }, output: [0] },
    { input: { chicken: 1 }, output: [0] },
];

const net = new brain.NeuralNetwork();

net.train(trainingData,{
    iterations: 200,
    erroThresh: 0.011
});
console.log('before preference change');
console.log(Array.from(net.run({ meat: 1 })));
console.log(Array.from(net.run({ chicken: 1 })));

trainingData.pop();
trainingData.push(
    { input: { chicken: 1 }, output: [1] }
);

net.train(trainingData,{
    iterations: 200,
    erroThresh: 0.011
});
console.log('after preference change');
console.log(Array.from(net.run({ meat: 1 })));
console.log(Array.from(net.run({ chicken: 1 })));