import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-24 flex justify-between px-20 text-white items-center'>
        <div>
            <h1 className='text-4xl'>GPTrip</h1>
        </div>
        <div>
            <ul className='flex gap-x-4 text-xl'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar