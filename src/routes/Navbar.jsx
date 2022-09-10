import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <>
    <Link className='nav-button' to="/inicio">INICIO</Link>
    <Link className='nav-button' to="/html">HTML</Link>
     <Link className='nav-button' to="/css">CSS</Link>
     <Link className='nav-button' to="/js">JAVASCRIPT</Link>
    <Link className='nav-button' to="/react">REACT</Link>
    </>
  )
}

export { Navbar}