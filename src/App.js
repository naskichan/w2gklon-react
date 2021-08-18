import { useState, React, useEffect } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'
import Playlist from './components/Playlist';


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
    // eslint-disable-next-line
  }, [URL]) 

  return (
    <Main>
      <Playlist playlists={playlists}/>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

export default App;
