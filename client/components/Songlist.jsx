import React from 'react'
// import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import songlist from '../../server/db/songlist'

function Songlist() {
  return (
    <>
      <div className="songlist-container">
        <h1 className="font3">All Songs</h1>
        <ul className="font3">
          {songlist.map((song) => {
            return (
              <Link to={`/songlist/${song.id}`} key={song.id}>
                <li>{song.songName}{song.url}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Songlist
