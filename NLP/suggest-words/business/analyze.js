const Analyzer = require('natural').SentimentAnalyzer;
const stemmer = require('natural').PorterStemmer;

const tokenizeIt = async string => {
    const tokenizer = new natural.WordTokenizer();
    return await tokenizer.tokenize(string)
}

exports.sentimentAnalysis = async string => {
    const analyzer = new Analyzer("English", stemmer, "afinn");
    return await analyzer.getSentiment(tokenizeIt(string));
}