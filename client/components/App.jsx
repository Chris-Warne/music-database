import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Songlist from './Songlist'
import Nav from './Nav'
import Song from './Song'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/songlist' element={<Songlist/>} />
      <Route path='/songlist/:id' element={<Song/>} />
      </Routes>
    </>
  )
}

export default App
