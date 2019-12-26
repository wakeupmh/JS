const natural = require('natural');
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;

const tokenizeIt = string => {
    const tokenizer = new natural.WordTokenizer();
    return tokenizer.tokenize(string)
}

exports.sentimentAnalysis = async string => {
    const analyzer = new Analyzer('English', stemmer, 'afinn');
    return await analyzer.getSentiment(tokenizeIt(string));
}