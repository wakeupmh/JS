const natural = require('natural');

let tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

natural.PorterStemmer.attach();
console.log("I can see that we are going to be friends".tokenizeAndStem());

console.log(natural.HammingDistance("karolin", "kathrin", false));
console.log(natural.HammingDistance("inae", "iena", false));
console.log(natural.HammingDistance("short string", "longer string", false));