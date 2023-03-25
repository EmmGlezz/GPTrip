import React from 'react'
import PercentageBar from './PercentageBar'

const LoadingPage = ({percentage}) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
        <PercentageBar percentage={percentage}/>
    </div>
  )
}

export default LoadingPage