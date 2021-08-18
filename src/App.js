import logo from './logo.svg'
import './App.css'
import { useState, React, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

function App() {


  let [playlists,setPlayList] = useState([]);
  
  useEffect( () => {
    async function fetchPlaylists() {
      console.log('fetching')
      return await axios('http://localhost:3001/api/playlists')
      
    }
    fetchPlaylists().then((res) => {
      console.log('recieved stuff', res.data)
      setPlayList(res.data)
    })
  }, [URL]) 

  return (
    <Main>
      {playlists.map((playlist) => {
        return (
          <div>{playlist.name}</div>
          )
      })}
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default App;
