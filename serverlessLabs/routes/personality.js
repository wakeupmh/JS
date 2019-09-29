require('dotenv').config({ silent: true });
const config = require('./config/variables');


const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
const personality = new PersonalityInsightsV3({
    version: '2017-10-13'
});
const PersonalityTextSummaries = require('personality-text-summary');

const getTextSummary = personalityProfile => {
    if (typeof (personalityProfile) !== 'string') {
      console.log("Could not get summary.");
    } else {
      return personalityProfile;
    }
};