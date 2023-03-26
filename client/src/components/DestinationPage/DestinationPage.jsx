import React, {useState, useEffect} from 'react'
import LoadingPage from './LoadingPage/LoadingPage'
import FixedNavbar from './FixedNavbar'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {MdHotel} from 'react-icons/md'
import {SiGoogleearth, SiGooglemaps} from 'react-icons/si'
import {FaPlaneArrival} from 'react-icons/fa'
import {BsCurrencyExchange} from 'react-icons/bs'
import {RiMapPinTimeFill} from 'react-icons/ri'
import {TbWorldWww} from 'react-icons/tb'
// import {TbArrowRightRhombus} from 'react-icons/tb'

import './DestinationPage.css'

// import {data} from '../../testData'
// console.log(data)

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



const DestinationPage = ({userParams}) => {
  const [data, setData] = useState()

  //Loading Functionality
  const [isLoading, setLoading] = useState(true);
  const [loadingPercentage, setLoadingPercentage] = useState(0)

  if(!data) {
    if (loadingPercentage < 60) {
      setTimeout(() => {
        setLoadingPercentage(loadingPercentage + 1)
      }, 1000)
    }
  } else {
    if (loadingPercentage < 100) {
      setTimeout(() => {
        setLoadingPercentage(loadingPercentage + 1)
      }, 5)
    }
    if (isLoading && loadingPercentage === 100) {
      setLoading(false)
    }
  }

  // Data fetching
  useEffect(() => {

    if (window.localStorage.getItem("DESTINATION_DATA") !== null) {
      const data = window.localStorage.getItem('DESTINATION_DATA')
      setData(JSON.parse(data))
    } else {
      const fetchData = async () => {
        const response = await fetch("http://localhost:5500/api/destination", {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userParams)
        });
        const dataReceived = await response.json();
        console.log(dataReceived);
        setData(dataReceived)
        window.localStorage.setItem('DESTINATION_DATA', JSON.stringify(dataReceived))
      }
      fetchData()
    }
  }, [])
  

  return(
  isLoading ? (<LoadingPage percentage={loadingPercentage}/>) : (
      <div className='bg-slate-200'>
        <div className='bg-slate-600'>
              <FixedNavbar />
        </div>
        <div className='h-96 w-screen flex flex-col justify-center items-center text-white' style={{
          backgroundImage: `url(${data.destination.images[0].urls.full})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className='text-center glass py-4 px-10'>
            <h1 className='text-5xl'>{data.destination.name}</h1>
            <h2 className='text-3xl'>{`${data.destination.country}`}</h2>
          </div>
        </div>
        <div className='flex w-full justify-center'>
          <img className='w-3/5 rounded-xl mainImage' src={data.destination.images[1].urls.regular} alt="" />
        </div>
  
        {/* COUNTRY FLAGS */}
        <div className='mx-40 mt-24'>
          {/* <div className='flex w-full justify-center items-center'>
            <img src={`https://www.countryflags.com/wp-content/uploads/${data.current_location.country.toLowerCase().split(' ').join('-')}-flag-png-large.png`} className='w-1/5' alt="" />
            <TbArrowRightRhombus className='text-5xl' />
            <img src={`https://www.countryflags.com/wp-content/uploads/${data.destination.country.toLowerCase().split(' ').join('-')}-flag-png-large.png`} className='w-1/5' height='100%' alt="" />
          </div> */}
  
          {/* DATES AND BUDGET */}
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
  
        {/* DESTINATION INFO */}
        <div className='py-24 mt-24 text-white' style={{
          backgroundImage: `url(${data.destination.images[0].urls.full})`,
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className='mx-40 glass-darker p-10'>
          <div className='flex'>
            <div className='w-4/6 flex flex-col gap-y-3'>
              <h2 className='text-4xl'>What to know before visiting {data.destination.name}</h2>
              <div className='inline-flex gap-x-5'>
                <h4 className='text-2xl'>{data.destination.state ? `${data.destination.state}, ` : ''}{data.destination.country}</h4>
                <img
                  src="https://flagcdn.com/32x24/es.png"
                  srcset="https://flagcdn.com/64x48/es.png 2x,
                    https://flagcdn.com/96x72/es.png 3x"
                  width="32"
                  height="24"
                  alt={data.destination.country} />
              </div>
              <p>{data.destination.description}</p>
              <div className='flex gap-x-4 items-center'>
                <TbWorldWww />
                <a href={data.destination.website}><p>{data.destination.website}</p></a>
              </div>
            </div>
            <div className='w-2/6 flex flex-col items-center justify-center gap-y-4'>
              <a className='flex items-center justify-center gap-x-2 bg-green-800 p-2 rounded-lg' href={`https://www.google.com/maps/search/${data.destination.coordinates.latitude},${data.destination.coordinates.longitude}/`} target='_blank'>
                <SiGooglemaps />
                <button>Google Maps</button>
              </a>
              <a className='flex items-center justify-center gap-x-2 bg-sky-700 p-2 rounded-lg' href={`https://earth.google.com/web/search/${data.destination.coordinates.latitude},${data.destination.coordinates.longitude}/`} target='_blank'>
                <SiGoogleearth />
                <button>Google Earth</button>
              </a>
              

            </div>
          </div>
          <hr className='my-8'/>
          <div className=''>
            <div className='w-full flex justify-around text-center'>
              <div className='flex flex-col items-center justify-center'>
                <FaPlaneArrival className='text-3xl' />
                <p className='text-lg font-bold'>Nearest Airport</p>
                <p>{data.destination.nearest_airport}</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <BsCurrencyExchange className='text-3xl' />
                <p className='text-lg font-bold'>Local currency</p>
                <p>{data.destination.local_currency}</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <RiMapPinTimeFill className='text-3xl' />
                <p className='text-lg font-bold'>Time Zone</p>
                <p>{data.destination.timezone}</p>
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
        </div>
  
        {/* IMAGES */}
        <div className='mx-40 mt-24 h-96 flex items-center justify-around'>
          <img src={data.destination.images[2].urls.regular} className='max-h-full' alt="" />
          <img src={data.destination.images[3].urls.regular} className='max-h-full' alt="" />
        </div>
  
        {/* HOTELS */}
        <div className='mx-40 mt-24'>
          <div>
            <h2 className='text-4xl'>Recommended Hotels</h2>
          </div>
          <div className='flex items-center justify-around mt-5' >
            {Object.hasOwn(data, 'accomodations') ? data.accomodations.map((accomodation, idx) => (
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
            )) : data.accommodations.map((accomodation, idx) => (
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
  
        {/* TRANSPORT TO GET THERE */}
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
  
        {/* LOCAL TRANSPORT */}
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
  
        {/* ACTIVITIES */}
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
                  <p>{activity.amount.amount} {activity.amount.currency}</p>
                  <a href={activity.website} target='_blank'><button type='button'>VISIT WEBSITE</button></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  )
  }
  


export default DestinationPage