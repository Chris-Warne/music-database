import React from 'react'
import { useParams } from 'react-router-dom'
import songlist from '../../Data/songlist'

function song() {
  const { id } = useParams()

  const song = songlist.find((song) => song.id === Number(id))

  return (
    <>
      <h1>Song Details</h1>
      <p>{song.songName}</p>
      <p>{song.composer}</p>
      <p>{song.mood}</p>
      <p>{song.genre}</p>
      <p>{song.url}</p>
      <img className="img-circle" src={song.image} />
    </>
  )
}

export default song
