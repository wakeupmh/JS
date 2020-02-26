const trainingData = [
    'Marcos saw Inaê.',
    'Inaê saw Marcos.',
    'Spot saw Inaê and Marcos looking at each other.',
    'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
  ];
  
  const net = new brain.recurrent.LSTM();
  net.train(trainingData, {
      iterations: 1500,
      errorThresh: 0.011
  });
  
  console.log(net.run('Marcos'));
  console.log(net.run('It was'));