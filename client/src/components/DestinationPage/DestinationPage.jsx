import React from 'react'
import FixedNavbar from './FixedNavbar'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {MdHotel} from 'react-icons/md'
import {TbArrowRightRhombus} from 'react-icons/tb'

import './DestinationPage.css'

import {data} from '../../testData'
console.log(data)

const starRating = (stars) => {
  let starsArray = []
  if (stars === 5) {
    for (let i = 0; i < stars; i++) {
      starsArray.push(<AiFillStar />)
    }
  } else {
      for (let i = 0; i < stars; i++) {
        starsArray.push(<AiFillStar />)
      }
      for (let i = 0; i < 5 - stars; i++) {
        starsArray.push(<AiOutlineStar />)
      }
  }
  return starsArray
}


const DestinationPage = () => {
  return (
    <div className=''>
      <div className='bg-slate-600'>
            <FixedNavbar />
      </div>
      <div className='h-96 w-screen flex flex-col justify-center items-center text-white' style={{
        backgroundImage: `url('src/assets/destination.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <h1 className='text-5xl'>{data.destination.name}</h1>
        <h2 className='text-3xl'>{`${data.destination.state}, ${data.destination.country}`}</h2>
      </div>
      <div className='flex w-full justify-center'>
        <img className='w-3/5 rounded-xl mainImage' src="src/assets/destination2.jpg" alt="" />
      </div>
      <div className='mx-40 mt-24'>
        <div className='flex w-full justify-center items-center'>
          <img src="https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png" className='w-1/5' alt="" />
          <TbArrowRightRhombus className='text-5xl' />
          <img src="https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png" className='w-1/5' height='100%' alt="" />
        </div>
        <div className='flex justify-around mx-40 mt-24'>
          <div className='text-center'>
            <p className='text-2xl font-bold'>Dates</p>
            <p className='text-lg'>{data.dates}</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl font-bold'>Budget</p>
            <div className='flex gap-x-2'>
              <p className='text-lg'>{data.budget.amount}</p>
              <p className='text-lg'>{data.budget.currency}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-40 mt-24'>
        <div className='flex'>
          <div className='w-4/6'>
            <h2 className='text-4xl'>What to know before visiting {data.destination.name}</h2>
            <h4 className='text-2xl'>{data.destination.state}, {data.destination.country}</h4>
            <p>{data.destination.description}</p>
          </div>
          <div className='w-2/6'>
            <p>INSERT GEOLOCATION HERE</p>
          </div>
        </div>
        <hr className='my-8'/>
        <div className=''>
          <div className='w-full flex justify-around text-center'>
            <div>
              <p className='text-lg font-bold'>Nearest Airport</p>
              <p>{data.destination.nearest_airport}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Local currency</p>
              <p>{data.destination.local_currency}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Time Zone</p>
              <p></p>
            </div>
          </div>
          <hr className='my-8' />
          <div>
            <p className='mb-2 text-lg font-bold'>Best months to travel in:</p>
            <div className='w-full flex justify-around'>
              {data.destination.best_months_to_travel_in.map((month, idx) => <p>{month}</p>)}
            </div>
          </div>

        </div>
        <hr className='my-8' />
      </div>
      <div className='mx-40 mt-24'>
        <div>
          <h2 className='text-4xl'>Recommended Hotels</h2>
        </div>
        <div className='flex items-center justify-around mt-5' >
          {data.accommodations.map((accomodation, idx) => (
            <div className='flex items-center'>
              <div className='mx-4'>
                <MdHotel className='text-5xl' />
              </div>
              <div className='flex flex-col'>
                <p>{accomodation.name}</p>
                <div className='flex'>
                  {starRating(accomodation.star_rating)}
                </div>
                <p>{accomodation.average_night_cost.amount} {accomodation.average_night_cost.currency}</p>
                <a href={accomodation.website} target='_blank'><button type='button'>VISIT WEBSITE</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-40 mt-24'>
        <div>
          <h2 className='text-4xl'>How to get there</h2>
        </div>
        <div className='flex items-center justify-around mt-5' >
          {data.transportation_to_destination.map((transport, idx) => (
            <div className='flex items-center'>
              <div className='mx-4'>
                <MdHotel className='text-5xl' />
              </div>
              <div className='flex flex-col'>
                <p>{transport.type}</p>
                <p>{transport.name}</p>
                <p>{transport.cost.amount} {transport.cost.currency}</p>
                <a href={transport.website} target='_blank'><button type='button'>VISIT WEBSITE</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-40 mt-24'>
        <div>
          <h2 className='text-4xl'>How to move around</h2>
        </div>
        <div className='flex items-center justify-around mt-5' >
          {data.local_transportation.map((transport, idx) => (
            <div className='flex items-center'>
              <div className='mx-4'>
                <MdHotel className='text-5xl' />
              </div>
              <div className='flex flex-col'>
                <p>{transport.type}</p>
                <a href={transport.website} target='_blank'><button type='button'>VISIT WEBSITE</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mx-40 mt-24'>
        <div>
          <h2 className='text-4xl'>What to do in there</h2>
        </div>
        <div className='grid gap-5 grid-cols-2 items-center justify-center mt-5' >
          {data.activities.map((activity, idx) => (
            <div className='flex flex-col text-center items-center'>
              <div className='mx-4'>
                <MdHotel className='text-5xl' />
              </div>
              <div className='flex flex-col'>
                <p>{activity.type}</p>
                <p>{activity.short_description}</p>
                <p>{activity.average_cost.amount} {activity.average_cost.currency}</p>
                <a href={activity.website} target='_blank'><button type='button'>VISIT WEBSITE</button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DestinationPage