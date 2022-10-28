import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import Songlist from './Songlist'
import Nav from './Nav'
import Song from './Song'
import Navbar from '../components/navbar'
import History from './History'
import Form from '../components/Form'


// import ReactPlayer from 'react-player'




//  import 'bootstrap/dist/css/bootstrap.min.css'
//  import '../../server/public/custom.css'

// import { Container} from"react-bootstrap"





const App = () => { 
   const [] = useState(0)

  return (
    
    <>
    
   
    <Nav/>
 
   
   <Navbar/>
   
   
  
  
    <Form/>
     
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/history' element={<History/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/songlist' element={<Songlist/>} />
      <Route path='/songlist/:id' element={<Song/>} />
     
     
      </Routes>
    </>
  )
}


export default App  
