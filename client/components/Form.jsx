import React, { Component } from 'react'

import { NavBtnLink } from './navbar/navbarEllements'
import songlist from '../../server/db/songlist'
import { Link } from 'react-router-dom'
import '../../server/public/custom.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy',
      genre: 'rock',
    }
  }

  handleMoodChange = (event) => {
    this.setState({
      mood: event.target.value,
    })
  }
  handleGenreChange = (event) => {
    this.setState({
      genre: event.target.value,
    })
  }
  render() {
    return (
      <form>
        <div>
          <label>Mood</label>
          <select value={this.state.mood} onChange={this.handleMoodChange}>
            <option value="Happy">Happy</option>
            <option value="Uplifting">Uplifting</option>
            <option value="Anthemic">Anthemic</option>
            <option value="Thoughtful">Thoughtful</option>
            <option value="Angst">Angst</option>
            <option value="Inspired">Inspired</option>
            <option value="Mystical">Mystical</option>
            <option value="Quirky">Quirky</option>
          </select>
        </div>

        <div>
          <label>Genre</label>
          <select value={this.state.genre} onChange={this.handleGenreChange}>
            <option value="Rock">Rock</option>
            <option value="Rock Pop">Rock-Pop</option>
            <option value="Indie Acoustic">Indie-Acoustic</option>
            <option value="Contemporary Orchestral">
              Contemporary-Orchestral
            </option>
            <option value="Acoustic Folk">Acoustic-Folk</option>
            <option value="Pop">Pop</option>
            <option value="Piano orchestral">Piano-Orchestral</option>
            <option value="Rock Indie">Rock-Indie</option>
            <option value="Acoustic Pop">Acoustic-Pop</option>
            <option value="Corporate">Corporate</option>
          </select>
        </div>
        <button type= "submit">Submit{Songlist2}</button>
          {/* <NavBtnLink to="/songlist2"> Search</NavBtnLink> */}
      </form>
    )
  }
}
function Songlist2() {
  return (
    <>
      <div className="background-image2">
        <ul className="font4">
          <h1 className="font2">All Songs</h1>
          {songlist.map((song) => {
            return (
              <Link to={`/songlist2/${song.id}`} key={song.id}>
                <li>{song.genre}</li>
                <li>{song.mood}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}
export default Form
Songlist2 
