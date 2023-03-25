import React from 'react'
import PercentageBar from './PercentageBar'

import './LoadingPage.css'

const LoadingPage = ({percentage}) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center bg-slate-200'>
        <div className='absolute mb-96 w-2/5 h-40 flex items-center justify-center rounded-md animate-bounce' >
            <div className='glass mx-4 p-4 '>
                <h1 className='text-2xl'>Interesting facts:</h1>
                <p className='text-center'>Did you know that the Great Wall of China is the longest wall in the world, stretching over 13,000 miles? It's also one of the Seven Wonders of the Medieval World.</p>
            </div>
        </div>
        <div className='flex flex-col items-center w-2/4 text-center'>
            <PercentageBar percentage={percentage}/>
            <h1 className='text-xl animate-pulse mt-2'>Loading...</h1>
            <p className='text-md'>Our AI system is searching our database to provide personalized recommendations based on your input. Please wait a few moments while we generate the best possible results for you.</p>
        </div>
    </div>
  )
}

export default LoadingPage