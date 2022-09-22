import React from 'react'
import ReactPlayer from 'react-player'

import { useParams } from 'react-router-dom'
import songlist from '../../server/db/songlist'

function song() {
  const { id } = useParams()

  const song = songlist.find((song) => song.id === Number(id))

  return (
    <>
      <h1 className="songz">Song Details</h1>
      <p className="songz">Song Name:{song.songName}</p>
      <p className="songz">Writer:{song.composer}</p>
      <p className="songz">Mood:{song.mood}</p>
      <p className="songz">Genre:{song.genre}</p>
      
     {/* put react player below and url will pick it up */}
      <div>
     
        <ReactPlayer url={song.url} />
        <img className="imagez" src={song.image} />
        
      </div>
      
    </>
  )
}

export default song
