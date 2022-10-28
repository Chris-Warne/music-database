import React from 'react'
import ReactPlayer from 'react-player'

import { useParams } from 'react-router-dom'
import songlist from '../../server/db/songlist'

function song() {
  const { id } = useParams()

  const song = songlist.find((song) => song.id === Number(id))

  return (
    <>
    <body>
    <div className="sth-background2">
      <h1 className="songz">Song Details</h1>
      <p className="songz">Song Name:</p>
      <p className="font6">{song.songName}</p>

      <p className="songz">Mood:</p>
      <p className='font6'>{song.mood}</p>
      <p className="songz">Genre:</p>
      <p className='font6'>{song.genre}</p>
       
       {/* put react player below and url will pick it up */}
      
      <div>
        <ReactPlayer url={song.url} />
       
      </div>

     
      </div>
      </body>
      
    </>
  )
}

export default song
