import React from 'react'
// import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import songlist from '../../server/db/songlist'
import '../../server/public/custom.css'

function Songlist() {
  return (
    <>
      <div className="background-image2">
        <ul className="font4">
          <h1 className="font2">All Songs</h1>
          {songlist.map((song) => {
            
            return (
              <Link to={`/songlist/${song.id}`} key={song.id}>
                <li>{song.songName}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default Songlist
