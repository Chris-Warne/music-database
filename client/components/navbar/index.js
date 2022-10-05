import React from 'react'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../server/public/custom.css'
//  import { NavLink } from 'react-router-dom'
import {
  Nav,
 NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarEllements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="./images/chris_warne_logo" alt="" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/history" activestyle="true">
            History
          </NavLink>
          <NavLink to="/contact" activestyle="true">
           Contact
          </NavLink>
          <NavLink to="/" activestyle="true">
            Home
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/songlist"> List Of Songs</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
export default Navbar
