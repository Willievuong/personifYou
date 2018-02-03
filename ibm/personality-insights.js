

var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: '9d5bb36f-1246-4ad4-a108-e192f264d507',
  password: 'mlpZzugX4AIx',
  version_date: '2017-10-13'
  headers:{
  	'X-Watson-Learning-Opt-Out': 'true'
  }
});

const getProfile = (params) =>
  new Promise((resolve, reject) => {
    if (params.language) {
      params.headers = {
        'Content-Language': params.language,
      };
    }
    return personalityInsights.profile(params, (err, profile) => {
      if (err) {
        reject(err);
      } else {
        resolve(profile);
      }
    });
  });