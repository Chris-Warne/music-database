import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/songlist'><li>Song List</li></Link>
      </ul>
    </>
  )
}

export default Nav