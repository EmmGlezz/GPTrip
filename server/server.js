import {config} from 'dotenv'
config();

import { Configuration, OpenAIApi } from 'openai';

const openAi = new OpenAIApi(new Configuration({
    apiKey: process.env.OPENAI_API_KEY
}))

const userParameters = {
    destination: 'Somewhere with mountains',
    dates: 'Between august and september and my dates are flexible',
    budget: 'A maximum of $6000 dollars, this is not flexible',
    current_location: 'Mexico City',
    preferences: 'We want to stay in a hotel with bonfires, we want to rent a car and we would prefer a luxury hotel',
    group_size: 'We are 3 people, including a kid',
    travel_style: 'we want something relaxing'
  }

const travelParameters = `With this json object, plan my trip including names and links to external resources (like websites, and images or videos), and format it on json too
make sure that the json object contains the next (IMPORTANT, ONLY RETURN A JSON OBJECT):
- Name of the destination, state, country, country flag image, description, nearest airport, coordinates, best months to travel in, local currency, image and website.
- Current location, including name, nearest airport, country, country flag image.
- The dates.
- The budget, including currency.
- At least 3 different options for accomodations, and each accomodation includes the name, image, website, star rating and average night cost with currency.
- At least 3 different options to get from current location to destination, like plane tickets, ships, or any other type, and each option includes the name, type, company_logo, website, and cost with currency.
- At least 2 types of transportation locally, and each transportation includes, the type, and image, and a website.
- At least 5 different activities, and each activity includes the type, short description, average cost with currency, an image and a website.
- Group style.
- Travel style. 
: ${JSON.stringify(userParameters)}`

// openAi.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{role: 'user', content: travelParameters}]
// }).then( res => {
//     console.log(res.data.choices[0].message.content)
// })