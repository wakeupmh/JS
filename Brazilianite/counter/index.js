// Count to 10
// 5-10, 10-5

const trainingData = [
    [10,9,8,7,6,5],
    [5,6,7,8,9,10]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([10,9,8,7,6]));
console.log(net.run([5,6,7,8,9]));