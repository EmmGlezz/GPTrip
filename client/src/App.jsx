import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './App.css'
import background from './assets/background.jpg'

function App() {
  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen" style={{
      backgroundImage: `url(${background})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Navbar />
      <div className='flex flex-col items-center'>
        <div>
          <p className='text-5xl'>CATCHY PHRASE THAT WRITES ITSELF HERE.</p>
        </div>
        <div className='glass w-72 h-48'>
        
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App


const travelParams = {
  destination: 'Somewhere with mountains',
  dates: 'Between august and september and my dates are flexible',
  budget: 'A maximum of $6000 dollars, this is not flexible',
  preferences: 'We want to stay in a hotel with bonfires, we want to rent a car and we would prefer a luxury hotel',
  grup_size: 'We are 3 people, including a kid',
  travel_style: 'we want something relaxing'
}


// {
//   "destination": {
//     "name": "Aspen, Colorado",
//     "description": "A beautiful mountain town known for skiing, hiking, and outdoor activities.",
//     "image": "https://www.colorado.com/sites/default/files/styles/16_9_660x370/public/Aspen.jpg?itok=1wv0x5cE",
//     "website": "https://www.aspenchamber.org/"
//   },
//   "dates": {
//     "start_date": "August 20th",
//     "end_date": "September 3rd",
//     "flexibility": true
//   },
//   "budget": {
//     "max_budget": 6000,
//     "flexibility": false
//   },
//   "preferences": {
//     "accommodation": {
//       "type": "luxury hotel",
//       "amenities": ["bonfires"],
//       "website": "https://www.thelittlenell.com/"
//     },
//     "transportation": {
//       "type": "rental car",
//       "website": "https://www.enterprise.com/en/car-rental/locations/us/co/aspen-airport-7323.html"
//     },
//     "activities": {
//       "type": "relaxing",
//       "website": "https://www.aspenchamber.org/things-to-do/spas-wellness"
//     }
//   },
//   "group_size": 3,
//   "travel_style": "relaxing"
// }