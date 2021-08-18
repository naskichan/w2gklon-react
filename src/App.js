import logo from './logo.svg'
import './App.css'
import { useState, React, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

function App() {


  let [playlists,setPlayList] = useState([]);
  
  useEffect( () => {
    async function fetchData() {
      console.log('fetching')
      return await axios('http://localhost:3001/api/playlists')
      
    }
    fetchData().then((res) => {
      console.log('recieved stuff', res.data)
      setPlayList(res.data)
    })
  }, [URL]) 

  return (
    <Header>
      {playlists.map((playlist) => {
        return (
          <div>{playlist.name}</div>
          )
      })}
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
`

export default App;
