const natural = require('natural');

let tokenizer = new natural.WordTokenizer();

console.log(tokenizer.tokenize("The quick brown fox jumps over the lazy dog"));

natural.PorterStemmer.attach();
console.log("I can see that we are going to be friends".tokenizeAndStem());
