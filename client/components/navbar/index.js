import React from 'react'
// import { NavLink } from 'react-router-dom'
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
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
           Contact
          </NavLink>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/songlist"> Songlist</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}
export default Navbar
