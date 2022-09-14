import React from 'react'
import { useParams } from 'react-router-dom'
import songlist from '../../Data/songlist'

function song() {
  const { id } = useParams()

  const song = songlist.find((song) => song.id === Number(id))

  return (
    <>
      <h1 className="song-list">Song Details</h1>
      <p className="song-list">{song.songName}</p>
      <p className="song-list">{song.composer}</p>
      <p className="song-list">{song.mood}</p>
      <p className="song-list">{song.genre}</p>
      <p className="song-list">{song.url}</p>
      <img className="song-list" src={song.image} />
    </>
  )
}

export default song
