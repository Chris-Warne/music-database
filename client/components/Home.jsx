import React from 'react'
import song from './Song'

function Home () {
  return (
    <>
      <div className='title'>
        <h1>Welcome to Chris Warne Music</h1>
        <img className='img-circle2' src={song.image}/>
      </div>
    </>
  )
}

export default Home