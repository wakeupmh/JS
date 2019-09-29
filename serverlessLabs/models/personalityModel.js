const axios = require('axios');
const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
const PersonalityTextSummaries = require('personality-text-summary');
const personality = new PersonalityInsightsV3({
    version: '2017-10-13'
});
const v3EnglishTextSummaries = new PersonalityTextSummaries({
    locale: 'en',
    version: 'v3'
});
const getTextSummary = personalityProfile => {
    let textSummary = v3EnglishTextSummaries.getSummary(personalityProfile);
    if (typeof (textSummary) !== 'string') {
        console.log("Could not get summary.");
    } else {
        return textSummary;
    }
};

const getPersonalityInside = async (_author, _title, _delimiter) =>{
    let content = await axios.post('http://localhost:3000/api/poetry/get-poetry/', 
                        {
                            author:_author,
                            title: _title,
                            delimiter:_delimiter
                        }
                    )
                    .then(result => {
                        return result
                    })
                    .catch(error => {
                        return null
                    });
    let params = {
        content: content.data.delimitedLines,
        content_type: 'text/plain',
        raw_scores: true,
        consumption_preferences: true
    };
    return personality.profile(params)
    .then(response => {
        return getTextSummary(response)
    })
    .catch(error =>console.log(error))
    // return personality.profile(params, function(error, response) {
    //     return getTextSummary(response)
    // })
}

module.exports = getPersonalityInside;

