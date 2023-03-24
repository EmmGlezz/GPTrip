require("dotenv").config();

const {Configuration, OpenAIApi} = require('openai')



const getDestinationInfo = async (req, res) => {
    try {
        const openAi = new OpenAIApi(new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        }))
        const accessKey = 'Va1CF5RDR-Qen35qKs0_OyZFwCGPy2Ds5GYUAGiX4HA'
        
        
        const userParameters = {
            destination: 'Somewhere with beaches',
            dates: 'Between august and september and my dates are flexible',
            budget: 'A maximum of $6000 dollars, this is not flexible',
            current_location: 'Mexico City',
            preferences: 'We want to stay in a hotel with bonfires, we want to rent a car and we would prefer a luxury hotel',
            group_size: 'We are 3 people, including a kid',
            travel_style: 'we want something relaxing'
          }
        
        const travelParameters = `With this json object, plan my trip including names and links to external resources (like websites, and images or videos), and format it on json too
        make sure that the json object contains the next (IMPORTANT, ONLY RETURN A JSON OBJECT):
        - Name of the destination, state, country, description, nearest airport, coordinates, best months to travel in (json key has to be named best_months_to_travel_in, it has to be an array with string of the months), local currency, timezone, and website.
        - Current location, including name, nearest airport, country.
        - The dates.
        - The budget, including currency.
        - At least 3 different options for accomodations (IMPORTANT json key has to be named accomodations WITH JUST ONE M BETWEEN THE O'S), and each accomodation includes the name,  website, star rating and average night cost (json key has to be named average_night_cost) with currency.
        - At least 3 different options to get from current location to destination (json property has to be named transportation_to_destination), like plane tickets, ships, or any other type, and each option includes the name, type, website, and cost with currency.
        - At least 2 types of transportation locally (json property has to be named local_transportation), and each transportation includes, the type, and a website.
        - At least 5 different activities (json property has to be named activities), and each activity includes the type, short description, average cost (json property has to be named amount) with currency, and a website.
        - Group style.
        - Travel style. 
        : ${JSON.stringify(userParameters)}`
        
        const response = await openAi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: 'user', content: travelParameters}],
        })
        const data = await JSON.parse(response.data.choices[0].message.content)

        const images = await fetch(`https://api.unsplash.com/search/photos/?query=${data.destination.name.toLowerCase().split(' ').join('-')}&client_id=${accessKey}&page=1&per_page=4`, {
            method: 'GET'
        })

        const imagesResponse = await images.json()
        data.destination.images = imagesResponse.results
        
        res.send(data)
    } catch (error) {
        res.send(error)
    }
}


module.exports = { getDestinationInfo }