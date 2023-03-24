import React, {useEffect, useState, useRef} from 'react'
import { Link } from "react-router-dom";
import Home from '../Home/Home';

import './FixedNavbar.css'

const FixedNavbar = () => {
    const [navBackground, setNavBackground] = useState(false)
    const [navbar, setNavbar] = useState(false)
    const navRef = useRef()
    
    navRef.current = navBackground

    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return (
    <div className={`w-full h-24 flex justify-between px-20 text-white items-center fixed ${navBackground ? 'navbar-scrolled' : 'navbar-config'}`}>
        <div>
         <Link to='/'>
            <h1 className='text-4xl'>GPTrip</h1>
         </Link> 
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

export default FixedNavbar