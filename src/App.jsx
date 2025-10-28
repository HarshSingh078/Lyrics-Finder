import Axios from 'axios'
import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [artist , setArtist] = useState('')
  const [song , setSong] = useState('')
  const [lyrics , setLyrics] = useState('')

  function searchLyrics ()  {
    if(song==="" || artist === "" ) {
      return ;
    }
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
      console.log(res.data.lyrics) 
      setLyrics(res.data.lyrics)
    })
  }
  return (
    <div className='App'> 
        <h1>Lyrics Finder ????</h1>
        <input className='inp' type="text" placeholder='Artist Name' value={artist} onChange={(event)=>setArtist(event.target.value)} />
        <input className='inp' type="text" placeholder='Song Name' onChange={(event)=>setSong(event.target.value)}/>
        <button className='button' onClick={()=>searchLyrics()}>???? Search</button>
        <hr />
        <pre>{lyrics}</pre>
    </div>
  )
}

export default App
