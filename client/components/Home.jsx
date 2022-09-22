import React from 'react'
import '../../server/public/custom.css'
//  import 'bootstrap/dist/css/bootstrap.min.css'
//  import '../../server/public/custom.css'

// import { Container} from"react-bootstrap"


function Home() {
  return (
    <>
      <div className="title">

        <h1 className="font2">Welcome To Chris Warne Music</h1>

        <img src="images/studio_pic.jpg" className="img" alt="" />
      
          <h3 className="font3">Equipment</h3>
          <ul>
     
         <li className= "font3">Focusrite clarett 8prex</li>
         <li className= "font3">Apogee quartet</li>
         <li className= "font3">DBX 266XS </li>
         <li className= "font3">KRK Rokit6</li>
         <li className= "font3">Rode K2 mic</li>
         <li className= "font3">Rode NT1 mic</li>
         <li className= "font3">Shure SM58 mic</li>
         <li className= "font3">Shure PG81 mic</li>
         <li className= "font3">Fender Telecaster</li>
         <li className= "font3">Fender Jazz Bass</li>
         <li className= "font3">Takamine EF25S</li>
         <li className= "font3">Focusrite ISA428 MK11</li>
        
         
        </ul>
      </div>
    </>
  )
}

export default Home
