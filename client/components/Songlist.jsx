import React from 'react'
import { Link } from 'react-router-dom'

import songlist from '../../data/songlist'

function Songlist () {
  return (
    <>
      <div className='songlist-container'>
        <h3>All Songs</h3>
        <ul>
          {songlist.map(song => {
            return <Link to={`/songlist/${song.id}`} key={song.id}><li>{song.name}</li></Link>
          }
          )}
        </ul>
      </div>
    </>
  )
}

export default Songlist