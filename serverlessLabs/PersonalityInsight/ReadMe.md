# IBM  Watson
## What's this?😅
![enter image description here](https://image.slidesharecdn.com/ibmwatsonprogressandroadmap-saxena-130223073801-phpapp01/95/ibm-watson-progress-and-2013-roadmap-2-638.jpg?cb=1361726097)
  Watson is an **IBM** [supercomputer](https://whatis.techtarget.com/definition/supercomputer) that combines artificial intelligence ([AI](https://searchenterpriseai.techtarget.com/definition/AI-Artificial-Intelligence)) and sophisticated analytical software for optimal performance as a "question answering" machine computer system capable of answering questions posed in natural language based on  **cognitive computing** 🤯

**Cognitive computing**  is a technique which is a set of several techniques:

-   **Machine learning**  is a technique where system tries to get better day by day by learning new things, just like we humans do.
-   **Natural language processing**  is a way of interaction with computers by means of a language that we speak daily (i.e. English).
-   **Artificial intelligence**  is the way by which computers perform some tasks which actually need human intelligence.
-   **Human interaction**  is the way in which computers can interact with humans, yes you can say natural language processing as a subset of human interaction.
You can read more on **Bradley Nice** [**post**](https://medium.com/level-up-web/what-is-ibm-watson-6bde12688504) or in **IBM's** [**site**](https://www.ibm.com/watson).
## Creating an account and setting the *Personality Insights Service* 
#### No credit card required 🤠🎊✨
I'ts foor free ~~with call limitations~~ to get started with their amazing tools, you can create an account clicking [**here**](https://cloud.ibm.com/registration?target=/developer/watson/launch-tool/conversation&hideTours=true&cm_sp=WatsonPlatform-WatsonPlatform-_-OnPageNavCTA-IBMWatson_Conversation-_-Watson_Developer_Website), This article isn't a Getting started with **IBM Watson**, for this I recommends this awesome [**article** ](https://medium.com/ibm-watson-tutorials/getting-started-with-ibm-watson-95b10ca145f6) writed by Editor's of IBM Watson Tutorials **Bayo Opesanya**.

##### After creating your account and loged in you'll see all the services that you can access, something like that:

![ibmcloudhome](https://miro.medium.com/max/2560/1*JBMUv23KNHTVjrZB5hC9og.png)
On the left sidebar, scroll your eyes to the **Watson** section, click on and then navigate to **Watson Services > Browse Services**.

![enter image description here](https://i.imgur.com/g3EyJZq.png)
 Therefore find **Personality Insights** option, than click on and let's get started with this incredible API.
 ![enter image description here](https://i.imgur.com/Ejhpddp.png)
### Step by step 📝
1) **Select a Region**;
2) **Select a pricing plan** (the free option 😁)
3) **Configure your resource**:
	1) **Service Name** (insert a heroic name);
	2) **Tag** (set a tag if you want);
After all these steps clck on **Create**
![enter image description here](https://i.imgur.com/RZZvM8K.png)
#### So finally our prize 🎆🎉 an **API KEY**  .
![enter image description here](https://i.imgur.com/gyEbCIU.png)

# Hands-on
![enter image description here](https://i.imgur.com/C4Kx8Q9.jpg)
  
I'll assume you already have a basic notion of **Node.js**, but if you don't have a look at this **Pramod Chandrayan** [article ](https://codeburst.io/getting-started-with-node-js-a-beginners-guide-b03e25bca71b).
  
This application is an API that has a **route** which you use from **PoetryDB**, which according to the [site](https://github.com/thundercomb/poetrydb/blob/master/README.md) "*is the first API for next generation internet poets*".
 
In this article I will cover only the most important parts of how I take a poem to send to **Watson** to analyze the author's personality while abstracting his art.you can see my **full code** [**here**](https://github.com/wakeupmh/JS/tree/master/serverlessLabs/PersonalityInsight/api).
### Installs 📚
```javascript
npm i --save axios 
npm i --save body-parser 
npm i --save express 
npm i --save nodemon 
npm i --save personality-text-summary 
npm i --save watson-developer-cloud
npm i --save dotenv

```
Or just:
```javascript
npm i --save axios body-parser express nodemon personality-text-summary watson-developer-cloud dotenv
```
### Retrieving the poem 📜
The **poetryModel.js** where I access to **PoetryDB**
```javascript
const axios =  require('axios');
async  function  getPoetry(author, title){
return axios.get(`http://poetrydb.org/author,title/${author};${title}`)
	.then(result  => {
		return result.data[0];
	})
	.catch(error  => {
		console.log(error);
		return  null;
	});
}
module.exports  = getPoetry;
```
I unifing my response with a delimiter passed as param on the **poetryBusiness.js** where I handle my information
```javascript
let getPoetry =  require('../models/poetryModel')
async  function  handlePoetry(author, title, delimiter){
	let unifiedLines =  "";
	let poetry =  await  getPoetry(author, title);
	
	for(let i in poetry.lines){
		unifiedLines +=  `${poetry.lines[i]}${delimiter}`
	}
	let result =  Object.assign({}, poetry, {delimitedLines:unifiedLines})
	return result;
}
module.exports  = handlePoetry;
```
The final result is something like that:
```javascript
{
	"title": "Dreams",
    "author": "Edgar Allan Poe",
    "lines": [
      "Oh! that my young life were a lasting dream!",
      "My spirit not awakening, till the beam",
      "Of an Eternity should bring the morrow.",
      "Yes! tho' that long dream were of hopeless sorrow,",
      "'Twere better than the cold reality",
      "Of waking life, to him whose heart must be,",
      "And hath been still, upon the lovely earth,",
      "A chaos of deep passion, from his birth.",
      "But should it be- that dream eternally",
      "Continuing- as dreams have been to me",
      "In my young boyhood- should it thus be given,",
      "'Twere folly still to hope for higher Heaven.",
      "For I have revell'd, when the sun was bright",
      "I' the summer sky, in dreams of living light",
      "And loveliness,- have left my very heart",
      "In climes of my imagining, apart",
      "From mine own home, with beings that have been",
      "Of mine own thought- what more could I have seen?",
      "'Twas once- and only once- and the wild hour",
      "From my remembrance shall not pass- some power",
      "Or spell had bound me- 'twas the chilly wind",
      "Came o'er me in the night, and left behind",
      "Its image on my spirit- or the moon",
      "Shone on my slumbers in her lofty noon",
      "Too coldly- or the stars- howe'er it was",
      "That dream was as that night-wind- let it pass.",
      "",
      "I have been happy, tho' in a dream.",
      "I have been happy- and I love the theme:",
      "Dreams! in their vivid coloring of life,",
      "As in that fleeting, shadowy, misty strife",
      "Of semblance with reality, which brings",
      "To the delirious eye, more lovely things",
      "Of Paradise and Love- and all our own!",
      "Than young Hope in his sunniest hour hath known."
    ],
    "linecount": "34",
    "delimetedLines":"same as lines but every position in array are unified by a delimited param"
}
```
And now the most important part:

### Analysing Personality 🧐
First of all we need to set our keys (in this case is username and password of your ibm's account) in **environment variables**, if you don't know **env** or why this is so important when you developing with **Node.js** look this [article](https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786)

Analysing the data is quite simple, we just need require our npm module previous installed, post into our previous created poetry route to retrieve the poem, finally fire the method **profile** inside **personality** module passing the params, and we have the analysed data like a magic pass 🎩🔮🎇
```javascript
require("dotenv").config();
const PersonalityInsightsV3 =require('watson-developer-cloud/personality-insights/v3');
const personality = new PersonalityInsightsV3({
	username: process.env.PERSONALITY_INSIGHTS_USERNAME,
	password: process.env.PERSONALITY_INSIGHTS_PASSWORD,
	version_date: process.env.PERSONALITY_INSIGHTS_VERSION_DATE
});
const v3EnglishTextSummaries =  new  PersonalityTextSummaries({
	locale:  'en',
	version:  'v3'
});

const  getTextSummary = personalityProfile  => {
	let textSummary =  v3EnglishTextSummaries.getSummary(personalityProfile);
	if (typeof(textSummary)!== 'string') {
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
			})
			.then(result  => {
				return result
			})
			.catch(error  => {
				return  null
			});

let params = {
	content: content.data.delimitedLines,
	content_type:  'text/plain',
	raw_scores:  true,
	consumption_preferences:  true
};

return personality.profile(params)
		.then(response  => {
			return  getTextSummary(response)
		})
		.catch(error  =>console.log(error))
}
```
### WTF is **PersonalityTextSummaries**?
Our result is a combination of four major parts:
-   **Personality**  results based on Big5 personality traits and facets
-   **Needs**, which describe at a high level those aspects of a product that are likely to resonate with the author of the input text
-   **Values**, which describe motivating factors that influence the author’s decision-making
-   **Consumption Preferences**, which indicate the author’s likelihood to prefer different products, services, and activities.

You can get a lot more detail from the  [official documentation](https://console.bluemix.net/docs/services/personality-insights/output.html#output)

Asides this, there’s an [npm module](https://www.npmjs.com/package/personality-text-summary) (that we installed earlier )that gives you a textual analysis of that whole JSON response from the Personality Insights API.   Turn it into human readable language in a *Freudian* style.

Running this in Dreams of Edgar Allan Poe, we have this result:
```javascript
{
	"personality": "You are inner-directed.\nYou are appreciative of art: you enjoy beauty and seek out creative experiences. You are philosophical: you are open to and intrigued by new ideas and love to explore them. And you are empathetic: you feel what others feel and are compassionate towards them.\nYour choices are driven by a desire for well-being.\nYou are relatively unconcerned with achieving success: you make decisions with little regard for how they show off your talents. You consider independence to guide a large part of what you do: you like to set your own goals to decide how to best achieve them."

}
```
Now you are able to writing 100 words text and analyse yourself,   
Or you can go around giving a postmodern **Lacanian** 😂

Thanks for your most valuable asset: **time** ⌚!
  
A little **nilism** to close with a golden key: *Beliefs are more dangerous enemies of truth than lies.* 🍻